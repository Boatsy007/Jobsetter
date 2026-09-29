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
  monthlyRevenue: "",
  currentSystem: "",
  preferredWindow: "Morning",
  website: "",
};

export default function PilotForm() {
  const [form, setForm] = useState(initialForm);
  const [audit, setAudit] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [leadId, setLeadId] = useState("");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("jobsetterAudit");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setAudit(parsed);
      if (parsed.monthlyLeads) setForm((old) => ({ ...old, monthlyLeads: String(parsed.monthlyLeads) }));
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
    setErrors(next);
    return Object.keys(next).length === 0;
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
      setStatus("saved");
      try { track("Pilot Lead Saved", { trade: form.trade, hasAudit: audit ? "yes" : "no" }); } catch {}

      if (data.bookingUrl) {
        try { track("Booking Opened", { source: "Saved Lead" }); } catch {}
        window.location.assign(data.bookingUrl);
        return;
      }

      setMessage("Your details are saved. We'll contact you to arrange the pilot call.");
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
        <h3>You're in the pipeline.</h3>
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
        <label><span>Monthly leads</span><input type="number" min="0" value={form.monthlyLeads} onChange={(e) => update("monthlyLeads", e.target.value)} placeholder="e.g. 60" /></label>
        <label><span>Approx monthly revenue</span><select value={form.monthlyRevenue} onChange={(e) => update("monthlyRevenue", e.target.value)}><option value="">Select range</option><option>Under $50k</option><option>$50k–$100k</option><option>$100k–$250k</option><option>$250k–$500k</option><option>$500k+</option></select></label>
        <label><span>CRM / job system</span><input value={form.currentSystem} onChange={(e) => update("currentSystem", e.target.value)} placeholder="ServiceM8, Tradify, HubSpot…" /></label>
        <label><span>Best call window</span><select value={form.preferredWindow} onChange={(e) => update("preferredWindow", e.target.value)}><option>Morning</option><option>Lunch time</option><option>Afternoon</option></select></label>
      </div>

      <button className="button pilotSubmit" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving your lead…" : "Save my details & choose a time"} <b>→</b>
      </button>
      {status === "error" && <p className="formError">{message}</p>}
      <p className="formFinePrint">Your lead is saved first. If live booking is connected, you'll then choose an available time. No mail app, no lost enquiry.</p>
    </form>
  );
}
