"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

const initialForm = {
  name: "",
  business: "",
  trade: "Plumbing",
  email: "",
  phone: "",
  monthlyLeads: "",
  averageJobValue: "",
  openQuoteValue: "",
  monthlyRevenue: "",
  currentSystem: "",
  preferredWindow: "Morning",
  capacityWithin30Days: false,
  pilotContactConsent: false,
  marketingConsent: false,
  website: "",
};

export default function PilotForm() {
  const [form, setForm] = useState(initialForm);
  const [audit, setAudit] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [leadId, setLeadId] = useState("");
  const [fit, setFit] = useState("");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("jobsetterAudit");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setAudit(parsed);
      setForm((old) => ({
        ...old,
        monthlyLeads: parsed.monthlyLeads ? String(parsed.monthlyLeads) : old.monthlyLeads,
        averageJobValue: parsed.averageJob ? String(parsed.averageJob) : old.averageJobValue,
      }));
    } catch {}
  }, []);

  const update = (key, value) => {
    setForm((old) => ({ ...old, [key]: value }));
    setErrors((old) => ({ ...old, [key]: "" }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Enter your name.";
    if (form.business.trim().length < 2) next.business = "Enter your business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email.";
    if (form.phone.replace(/\D/g, "").length < 8) next.phone = "Enter a valid phone number.";
    if (!form.pilotContactConsent) next.pilotContactConsent = "Please agree so we can contact you about this pilot request.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildBookingUrl = (base) => {
    try {
      const url = new URL(base);
      url.searchParams.set("name", form.name);
      url.searchParams.set("email", form.email);
      url.searchParams.set("utm_source", "jobsetter");
      url.searchParams.set("utm_medium", "website");
      url.searchParams.set("utm_campaign", "14_day_pilot");
      return url.toString();
    } catch {
      return base;
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      try { track("Pilot Form Validation Error", { source: "Pilot Form" }); } catch {}
      return;
    }

    setStatus("saving");
    setMessage("");

    const params = new URLSearchParams(window.location.search);
    const utm = {
      source: params.get("utm_source") || "",
      medium: params.get("utm_medium") || "",
      campaign: params.get("utm_campaign") || "",
      content: params.get("utm_content") || "",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          audit,
          page: window.location.href,
          referrer: document.referrer,
          utm,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.error || "We couldn't save your request.");
      }

      setLeadId(data.leadId || "");
      setFit(data.fit || "review");
      setStatus("saved");

      try {
        track("Pilot Lead Saved", {
          trade: form.trade,
          hasAudit: audit ? "yes" : "no",
          fit: data.fit || "review",
        });
      } catch {}

      if (data.bookingUrl) {
        const nextUrl = buildBookingUrl(data.bookingUrl);
        try { track("Booking Opened", { source: "Saved Lead", fit: data.fit || "strong" }); } catch {}
        window.location.assign(nextUrl);
        return;
      }

      setMessage(
        data.fit === "review"
          ? "Your details are saved. We'll review the fit and contact you about the best next step."
          : "Your details are saved. We'll contact you to arrange the pilot call."
      );
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  if (status === "saved" && message) {
    return (
      <div className="pilotForm successState">
        <div className="successIcon">✓</div>
        <small>PILOT REQUEST SAVED</small>
        <h3>{fit === "review" ? "We'll review the fit." : "You're in the pipeline."}</h3>
        <p>{message}</p>
        {leadId && <span>Reference: {leadId.slice(0, 8).toUpperCase()}</span>}
      </div>
    );
  }

  return (
    <form className="pilotForm" onSubmit={submit} noValidate>
      <div className="pilotFormTop">
        <div><small>REQUEST YOUR PILOT CALL</small><h3>Bring us your real pipeline.</h3></div>
        {audit && <span className="auditChip">Audit score {audit.score}/100</span>}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label>Website<input value={form.website} onChange={(e) => update("website", e.target.value)} tabIndex="-1" autoComplete="off" /></label>
      </div>

      <div className="formGrid">
        <label><span>Your name *</span><input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" autoComplete="name" />{errors.name && <em>{errors.name}</em>}</label>
        <label><span>Business name *</span><input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Your business" autoComplete="organization" />{errors.business && <em>{errors.business}</em>}</label>
        <label><span>Trade</span><select value={form.trade} onChange={(e) => update("trade", e.target.value)}><option>Plumbing</option><option>Electrical</option><option>HVAC</option><option>Roofing</option><option>Building</option><option>Landscaping</option><option>Other service business</option></select></label>
        <label><span>Email *</span><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@business.com.au" autoComplete="email" />{errors.email && <em>{errors.email}</em>}</label>
        <label><span>Phone *</span><input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="04xx xxx xxx" autoComplete="tel" />{errors.phone && <em>{errors.phone}</em>}</label>
        <label><span>Monthly enquiries</span><input type="number" min="0" value={form.monthlyLeads} onChange={(e) => update("monthlyLeads", e.target.value)} placeholder="e.g. 60" /></label>
        <label><span>Average job value</span><input type="number" min="0" value={form.averageJobValue} onChange={(e) => update("averageJobValue", e.target.value)} placeholder="e.g. 2500" /></label>
        <label><span>Approx open quote value</span><input type="number" min="0" value={form.openQuoteValue} onChange={(e) => update("openQuoteValue", e.target.value)} placeholder="e.g. 40000" /></label>
        <label><span>Approx monthly revenue</span><select value={form.monthlyRevenue} onChange={(e) => update("monthlyRevenue", e.target.value)}><option value="">Select range</option><option>Under $50k</option><option>$50k–$100k</option><option>$100k–$250k</option><option>$250k–$500k</option><option>$500k+</option></select></label>
        <label><span>CRM / job system</span><input value={form.currentSystem} onChange={(e) => update("currentSystem", e.target.value)} placeholder="ServiceM8, Tradify, HubSpot…" /></label>
        <label><span>Best call window</span><select value={form.preferredWindow} onChange={(e) => update("preferredWindow", e.target.value)}><option>Morning</option><option>Lunch time</option><option>Afternoon</option></select></label>
      </div>

      <label className="checkRow">
        <input type="checkbox" checked={form.capacityWithin30Days} onChange={(e) => update("capacityWithin30Days", e.target.checked)} />
        <span>We have capacity to take on additional work in the next 30 days.</span>
      </label>

      <label className="checkRow">
        <input type="checkbox" checked={form.pilotContactConsent} onChange={(e) => update("pilotContactConsent", e.target.checked)} />
        <span>I agree JobSetter can contact me by phone, email or SMS about this pilot request. *</span>
      </label>
      {errors.pilotContactConsent && <em className="consentError">{errors.pilotContactConsent}</em>}

      <label className="checkRow optional">
        <input type="checkbox" checked={form.marketingConsent} onChange={(e) => update("marketingConsent", e.target.checked)} />
        <span>Optional: send me occasional JobSetter updates and useful conversion ideas. I can opt out anytime.</span>
      </label>

      <p className="privacyLine">By submitting, you acknowledge our <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="/terms" target="_blank" rel="noreferrer">Terms</a>.</p>

      <button className="button pilotSubmit" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving your lead…" : "Save my details & choose a time"} <b>→</b>
      </button>
      {status === "error" && <p className="formError">{message}</p>}
      <p className="formFinePrint">Strong-fit enquiries are sent to live booking after the lead is saved. Other enquiries are saved for review first, so the calendar stays focused on businesses the pilot can genuinely help.</p>
    </form>
  );
}
