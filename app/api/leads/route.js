import { NextResponse } from "next/server";
import { track } from "@vercel/analytics/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max = 500) {
  return String(value ?? "").trim().slice(0, max);
}

function toNumber(value) {
  const n = Number(String(value ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const now = new Date().toISOString();
  const lead = {
    id: crypto.randomUUID(),
    createdAt: now,
    name: clean(body.name, 120),
    business: clean(body.business, 160),
    trade: clean(body.trade, 80),
    email: clean(body.email, 180).toLowerCase(),
    phone: clean(body.phone, 60),
    monthlyLeads: clean(body.monthlyLeads, 30),
    averageJobValue: clean(body.averageJobValue, 40),
    openQuoteValue: clean(body.openQuoteValue, 40),
    monthlyRevenue: clean(body.monthlyRevenue, 60),
    currentSystem: clean(body.currentSystem, 120),
    preferredWindow: clean(body.preferredWindow, 80),
    capacityWithin30Days: Boolean(body.capacityWithin30Days),
    pilotContactConsent: Boolean(body.pilotContactConsent),
    pilotContactConsentAt: body.pilotContactConsent ? now : "",
    marketingConsent: Boolean(body.marketingConsent),
    marketingConsentAt: body.marketingConsent ? now : "",
    audit: body.audit && typeof body.audit === "object" ? body.audit : null,
    page: clean(body.page, 250),
    referrer: clean(body.referrer, 250),
    utm: body.utm && typeof body.utm === "object" ? body.utm : null,
  };

  const errors = {};
  if (lead.name.length < 2) errors.name = "Enter your name.";
  if (lead.business.length < 2) errors.business = "Enter your business name.";
  if (!emailPattern.test(lead.email)) errors.email = "Enter a valid email.";
  if (lead.phone.replace(/\D/g, "").length < 8) errors.phone = "Enter a valid phone number.";
  if (!lead.pilotContactConsent) errors.pilotContactConsent = "Please agree so we can contact you about your pilot request.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const monthlyLeads = toNumber(lead.monthlyLeads);
  const averageJob = toNumber(lead.averageJobValue || lead.audit?.averageJob);
  const openQuoteValue = toNumber(lead.openQuoteValue);
  const strongDemand = monthlyLeads >= 30 || openQuoteValue >= 25000;
  const strongJobValue = averageJob >= 750;
  const fit = strongDemand && strongJobValue && lead.capacityWithin30Days ? "strong" : "review";

  let persisted = false;
  const persistenceErrors = [];

  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ event: "jobsetter_lead", fit, lead }),
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
      persisted = true;
    } catch (error) {
      persistenceErrors.push(`webhook: ${error.message}`);
    }
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const recipient = process.env.LEAD_NOTIFICATION_EMAIL || "hello@jobsetter.com.au";
      const from = process.env.RESEND_FROM_EMAIL || "JobSetter Leads <leads@jobsetter.com.au>";
      const auditLines = lead.audit
        ? [
            `Diagnostic score: ${lead.audit.score ?? "-"}`,
            `Audit monthly enquiries: ${lead.audit.monthlyLeads ?? "-"}`,
            `Audit average job value: $${lead.audit.averageJob ?? "-"}`,
            `Current close rate: ${lead.audit.closeRate ?? "-"}%`,
            `Biggest leak: ${lead.audit.biggestLeak ?? "-"}`,
          ]
        : [];

      const textBody = [
        "New JobSetter pilot lead",
        "",
        `Lead ID: ${lead.id}`,
        `Pilot fit: ${fit}`,
        `Name: ${lead.name}`,
        `Business: ${lead.business}`,
        `Trade: ${lead.trade}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        `Monthly leads: ${lead.monthlyLeads || "-"}`,
        `Average job value: $${lead.averageJobValue || "-"}`,
        `Open quote value: $${lead.openQuoteValue || "-"}`,
        `Monthly revenue: ${lead.monthlyRevenue || "-"}`,
        `CRM/job system: ${lead.currentSystem || "-"}`,
        `Capacity for more work: ${lead.capacityWithin30Days ? "Yes" : "No / unsure"}`,
        `Preferred call window: ${lead.preferredWindow || "-"}`,
        `Pilot contact consent: ${lead.pilotContactConsent ? "Yes" : "No"}`,
        `Marketing consent: ${lead.marketingConsent ? "Yes" : "No"}`,
        ...auditLines,
        "",
        `Page: ${lead.page || "-"}`,
        `Referrer: ${lead.referrer || "-"}`,
      ].join("\n");

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [recipient],
          subject: `JobSetter pilot lead [${fit.toUpperCase()}] — ${lead.business}`,
          text: textBody,
          reply_to: lead.email,
        }),
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`Resend returned ${response.status}`);
      persisted = true;
    } catch (error) {
      persistenceErrors.push(`email: ${error.message}`);
    }
  }

  if (!persisted) {
    console.error("JobSetter lead persistence is not configured or failed.", {
      leadId: lead.id,
      errors: persistenceErrors,
    });
    return NextResponse.json(
      {
        ok: false,
        error: "Pilot booking is temporarily unavailable. Please try again shortly.",
        code: "LEAD_PERSISTENCE_UNAVAILABLE",
      },
      { status: 503 }
    );
  }

  try {
    await track("Pilot Lead Saved", {
      trade: lead.trade || "Unknown",
      hasAudit: lead.audit ? "yes" : "no",
      fit,
    });
  } catch {}

  return NextResponse.json({
    ok: true,
    leadId: lead.id,
    fit,
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  });
}
