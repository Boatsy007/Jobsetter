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
  const stage = clean(body.stage, 30) || "qualified";
  const existingId = clean(body.leadId, 80);
  const lead = {
    id: existingId || crypto.randomUUID(),
    createdAt: now,
    stage,
    name: clean(body.name, 120),
    business: clean(body.business, 160),
    trade: clean(body.trade, 80),
    location: clean(body.location, 120),
    staffCount: clean(body.staffCount, 40),
    biggestProblem: clean(body.biggestProblem, 120),
    email: clean(body.email, 180).toLowerCase(),
    phone: clean(body.phone, 60),
    monthlyLeads: clean(body.monthlyLeads, 30),
    averageJobValue: clean(body.averageJobValue, 40),
    openQuoteValue: clean(body.openQuoteValue, 40),
    currentSystem: clean(body.currentSystem, 120),
    preferredWindow: clean(body.preferredWindow, 80),
    capacityWithin30Days: Boolean(body.capacityWithin30Days),
    requestMode: clean(body.requestMode, 20) || "pilot",
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
  if (!lead.pilotContactConsent) errors.pilotContactConsent = "Please agree so we can contact you about your request.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const monthlyLeads = toNumber(lead.monthlyLeads);
  const averageJob = toNumber(lead.averageJobValue || lead.audit?.averageJob);
  const staffMatch = /^(3-5|6-10|11-20|20\+)$/.test(lead.staffCount);
  const strongDemand = monthlyLeads >= 20;
  const strongJobValue = averageJob >= 3000;
  const starterDemand = monthlyLeads >= 10;
  const starterJobValue = averageJob >= 2000;
  const publicContact = lead.requestMode === "contact";
  const scoredFit = strongDemand && strongJobValue && staffMatch
    ? "strong"
    : (publicContact && starterDemand && starterJobValue ? "starter" : "review");
  const fit = stage === "contact" ? "unscored" : scoredFit;

  let persisted = false;
  const persistenceErrors = [];

  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ event: stage === "contact" ? "jobsetter_contact_captured" : "jobsetter_lead_qualified", fit, lead }),
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

      const textBody = [
        stage === "contact" ? "JobSetter contact captured" : "JobSetter qualified pilot lead",
        "",
        `Lead ID: ${lead.id}`,
        `Stage: ${stage}`,
        `Fit: ${fit}`,
        `Name: ${lead.name}`,
        `Business: ${lead.business}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        `Trade: ${lead.trade || "-"}`,
        `Location: ${lead.location || "-"}`,
        `Staff: ${lead.staffCount || "-"}`,
        `Monthly leads: ${lead.monthlyLeads || "-"}`,
        `Average job value: ${lead.averageJobValue || "-"}`,
        `Biggest problem: ${lead.biggestProblem || "-"}`,
        `Diagnostic score: ${lead.audit?.score ?? "-"}`,
        `Biggest leak: ${lead.audit?.biggestLeak ?? "-"}`,
        `Marketing consent: ${lead.marketingConsent ? "Yes" : "No"}`,
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
          subject: stage === "contact"
            ? `JobSetter contact — ${lead.business}`
            : `JobSetter ${lead.requestMode === "pilot" ? "pilot " : ""}[${fit.toUpperCase()}] — ${lead.business}`,
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
    await track(stage === "contact" ? "Pilot Contact Captured" : "Pilot Lead Qualified", {
      trade: lead.trade || "Unknown",
      hasAudit: lead.audit ? "yes" : "no",
      fit,
    });
  } catch {}

  return NextResponse.json({
    ok: true,
    leadId: lead.id,
    fit,
    bookingUrl: stage === "qualified" && (fit === "strong" || fit === "starter") ? (process.env.NEXT_PUBLIC_BOOKING_URL || "") : "",
  });
}
