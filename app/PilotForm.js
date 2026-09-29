"use client";

import { useEffect, useMemo, useState } from "react";

export default function PilotForm() {
  const [form, setForm] = useState({ name: "", business: "", trade: "Plumbing", email: "", phone: "", window: "Morning" });
  const [audit, setAudit] = useState(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("jobsetterAudit");
      if (raw) setAudit(JSON.parse(raw));
    } catch {}
  }, []);

  const bookingHref = useMemo(() => {
    const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
    if (bookingUrl) return bookingUrl;

    const body = [
      "Hi JobSetter,",
      "",
      "I'd like to discuss a 14-Day Revenue Recovery Pilot.",
      "",
      `Name: ${form.name || "-"}`,
      `Business: ${form.business || "-"}`,
      `Trade: ${form.trade}`,
      `Email: ${form.email || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Preferred call window: ${form.window}`,
      audit ? `Revenue Conversion Score: ${audit.score}/100` : "",
      audit ? `Monthly enquiries: ${audit.monthlyLeads}` : "",
      audit ? `Average job value: $${audit.averageJob}` : "",
      "",
      "Please send me the next available pilot call times.",
    ].filter(Boolean).join("\n");

    return `mailto:hello@jobsetter.com.au?subject=${encodeURIComponent("JobSetter 14-Day Pilot")}&body=${encodeURIComponent(body)}`;
  }, [form, audit]);

  const update = (key, value) => setForm((old) => ({ ...old, [key]: value }));

  return (
    <div className="pilotForm">
      <div className="pilotFormTop">
        <div><small>REQUEST YOUR PILOT CALL</small><h3>Bring us your real pipeline.</h3></div>
        {audit && <span className="auditChip">Audit score {audit.score}/100</span>}
      </div>

      <div className="formGrid">
        <label><span>Your name</span><input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Rohan" /></label>
        <label><span>Business name</span><input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Your business" /></label>
        <label><span>Trade</span><select value={form.trade} onChange={(e) => update("trade", e.target.value)}><option>Plumbing</option><option>Electrical</option><option>HVAC</option><option>Roofing</option><option>Building</option><option>Landscaping</option><option>Other service business</option></select></label>
        <label><span>Email</span><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@business.com.au" /></label>
        <label><span>Phone</span><input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="04xx xxx xxx" /></label>
        <label><span>Best call window</span><select value={form.window} onChange={(e) => update("window", e.target.value)}><option>Morning</option><option>Lunch time</option><option>Afternoon</option></select></label>
      </div>

      <a className="button pilotSubmit" href={bookingHref} target={bookingHref.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        Request my pilot call <b>→</b>
      </a>
      <p className="formFinePrint">If a booking calendar is connected, this opens live availability. Otherwise it prepares your pilot request with the details above.</p>
    </div>
  );
}
