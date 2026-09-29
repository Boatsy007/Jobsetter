import { NextResponse } from "next/server";
import { track } from "@vercel/analytics/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max = 500) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots often fill fields humans never see.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name: clean(body.name, 120),
    business: clean(body.business, 160),
    trade: clean(body.trade, 80),
    email: clean(body.email, 180).toLowerCase(),
    phone: clean(body.phone, 60),
    monthlyLeads: clean(body.monthlyLeads, 30),
    monthlyRevenue: clean(body.monthlyRevenue, 60),
    currentSystem: clean(body.currentSystem, 120),
    preferredWindow: clean(body.preferredWindow, 80),
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

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  let persisted = false;
  const persistenceErrors = [];

  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ event: "jobsetter_lead", lead }),
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
            `Monthly enquiries: ${lead.audit.monthlyLeads ?? "-"}`,
            `Average job value: $${lead.audit.averageJob ?? "-"}`,
            `Current close rate: ${lead.audit.closeRate ?? "-"}%`,
            `Biggest leak: ${lead.audit.biggestLeak ?? "-"}`,
          ]
        : [];

      const textBody = [
        "New JobSetter pilot lead",
        "",
        `Lead ID: ${lead.id}`,
        `Name: ${lead.name}`,
        `Business: ${lead.business}`,
        `Trade: ${lead.trade}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        `Monthly leads: ${lead.monthlyLeads || "-"}`,
        `Monthly revenue: ${lead.monthlyRevenue || "-"}`,
        `Current CRM/job system: ${lead.currentSystem || "-"}`,
        `Preferred call window: ${lead.preferredWindow || "-"}`,
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
          subject: `JobSetter pilot lead — ${lead.business}`,
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
    });
  } catch {}

  return NextResponse.json({
    ok: true,
    leadId: lead.id,
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  });
}
