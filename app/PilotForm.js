"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

const initialForm = {
  name: "",
  business: "",
  email: "",
  phone: "",
  trade: "Building / renovation",
  location: "",
  staffCount: "3-5",
  averageJobValue: "",
  monthlyLeads: "",
  biggestProblem: "Slow response",
  pilotContactConsent: false,
  marketingConsent: false,
  website: "",
};

export default function PilotForm({ mode = "pilot" }) {
  const isPilot = mode === "pilot";
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [leadId, setLeadId] = useState("");
  const [fit, setFit] = useState("");

  const update = (key, value) => {
    setForm((old) => ({ ...old, [key]: value }));
    setErrors((old) => ({ ...old, [key]: "" }));
  };

  const validateStepOne = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Enter your name.";
    if (form.business.trim().length < 2) next.business = "Enter your business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email.";
    if (form.phone.replace(/\D/g, "").length < 8) next.phone = "Enter a valid phone number.";
    if (!form.pilotContactConsent) next.pilotContactConsent = "Please agree so we can contact you about this request.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const context = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      page: window.location.href,
      referrer: document.referrer,
      utm: {
        source: params.get("utm_source") || "",
        medium: params.get("utm_medium") || "",
        campaign: params.get("utm_campaign") || "",
        content: params.get("utm_content") || "",
      },
    };
  };

  const persist = async (stage) => {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...form, ...context(), stage, leadId, requestMode: mode }),
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      if (data.errors) setErrors(data.errors);
      throw new Error(data.error || "We couldn't save your details.");
    }
    if (data.leadId) setLeadId(data.leadId);
    return data;
  };

  const continueToFit = async (event) => {
    event.preventDefault();
    if (!validateStepOne()) return;
    setStatus("saving");
    setMessage("");
    try {
      await persist("contact");
      setStatus("idle");
      setStep(2);
      try { track(isPilot ? "Pilot Contact Captured" : "Contact Captured", { source: isPilot ? "Pilot Form" : "Contact Form" }); } catch {}
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  const buildBookingUrl = (base) => {
    try {
      const url = new URL(base);
      url.searchParams.set("name", form.name);
      url.searchParams.set("email", form.email);
      url.searchParams.set("utm_source", "jobsetter");
      url.searchParams.set("utm_medium", "website");
      url.searchParams.set("utm_campaign", isPilot ? "30_day_pilot" : "website_contact");
      return url.toString();
    } catch {
      return base;
    }
  };

  const finish = async (event) => {
    event.preventDefault();
    setStatus("saving");
    setMessage("");
    try {
      const data = await persist("qualified");
      setFit(data.fit || "review");
      setStatus("saved");
      try { track(isPilot ? "Pilot Lead Qualified" : "Contact Lead Qualified", { trade: form.trade, fit: data.fit || "review" }); } catch {}

      if (data.bookingUrl) {
        try { track("Booking Opened", { source: "Saved Lead", fit: data.fit || "strong" }); } catch {}
        window.location.assign(buildBookingUrl(data.bookingUrl));
        return;
      }

      setMessage(
        data.fit === "review"
          ? "We’ve got your details. We’ll review whether JobSetter is the right fit and come back to you."
          : (isPilot ? "You’re saved. We’ll contact you to arrange the pilot call." : "You’re saved. We’ll contact you to arrange your JobSetter call.")
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
        <small>CALL REQUEST SAVED</small>
        <h3>{fit === "review" ? "We’ll check the fit." : "Let’s talk."}</h3>
        <p>{message}</p>
        {leadId && <span>Reference: {leadId.slice(0, 8).toUpperCase()}</span>}
      </div>
    );
  }

  return (
    <form className="pilotForm" onSubmit={step === 1 ? continueToFit : finish} noValidate>
      <div className="pilotFormTop">
        <div>
          <small>STEP {step} OF 2</small>
          <h3>{step === 1 ? "First, your details." : "Now, tell us about the business."}</h3>
        </div>
      </div>

      <div className="formStepProgress"><span style={{width: step === 1 ? "50%" : "100%"}} /></div>

      <div className="honeypot" aria-hidden="true">
        <label>Website<input value={form.website} onChange={(e) => update("website", e.target.value)} tabIndex="-1" autoComplete="off" /></label>
      </div>

      {step === 1 ? (
        <>
          <div className="formGrid">
            <label><span>Your name *</span><input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" autoComplete="name" />{errors.name && <em>{errors.name}</em>}</label>
            <label><span>Business name *</span><input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Your business" autoComplete="organization" />{errors.business && <em>{errors.business}</em>}</label>
            <label><span>Email *</span><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@business.com.au" autoComplete="email" />{errors.email && <em>{errors.email}</em>}</label>
            <label><span>Phone *</span><input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="04xx xxx xxx" autoComplete="tel" />{errors.phone && <em>{errors.phone}</em>}</label>
          </div>

          <label className="checkRow">
            <input type="checkbox" checked={form.pilotContactConsent} onChange={(e) => update("pilotContactConsent", e.target.checked)} />
            <span>I agree JobSetter can contact me by phone, email or SMS about this request. *</span>
          </label>
          {errors.pilotContactConsent && <em className="consentError">{errors.pilotContactConsent}</em>}

          <button className="button pilotSubmit" type="submit" disabled={status === "saving"}>
            {status === "saving" ? "Saving…" : "Continue"} <b>→</b>
          </button>
        </>
      ) : (
        <>
          <div className="formGrid">
            <label><span>Trade</span><select value={form.trade} onChange={(e) => update("trade", e.target.value)}><option>Building / renovation</option><option>Roofing</option><option>Solar</option><option>Pools</option><option>Landscaping</option><option>HVAC installs</option><option>Kitchens / bathrooms</option><option>Other high-ticket trade</option></select></label>
            <label><span>Location</span><input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="e.g. Gold Coast" /></label>
            <label><span>Number of staff</span><select value={form.staffCount} onChange={(e) => update("staffCount", e.target.value)}><option>1-2</option><option>3-5</option><option>6-10</option><option>11-20</option><option>20+</option></select></label>
            <label><span>Average job value</span><input type="number" min="0" value={form.averageJobValue} onChange={(e) => update("averageJobValue", e.target.value)} placeholder="e.g. 5000" /></label>
            <label><span>Enquiries per month</span><input type="number" min="0" value={form.monthlyLeads} onChange={(e) => update("monthlyLeads", e.target.value)} placeholder="e.g. 30" /></label>
            <label><span>Biggest problem</span><select value={form.biggestProblem} onChange={(e) => update("biggestProblem", e.target.value)}><option>Slow response</option><option>No quote follow-up</option><option>Old leads never contacted</option><option>A mix of all three</option></select></label>
          </div>

          <label className="checkRow optional">
            <input type="checkbox" checked={form.marketingConsent} onChange={(e) => update("marketingConsent", e.target.checked)} />
            <span>Optional: send me occasional JobSetter updates. I can opt out anytime.</span>
          </label>

          <div className="formStepActions">
            <button className="textButton" type="button" onClick={() => setStep(1)}>← Back</button>
            <button className="button pilotSubmit" type="submit" disabled={status === "saving"}>
              {status === "saving" ? "Checking fit…" : "Book my JobSetter call"} <b>→</b>
            </button>
          </div>
        </>
      )}

      {status === "error" && <p className="formError">{message}</p>}
      <p className="privacyLine">Submitting this form does not lock you into {isPilot ? "the pilot or an ongoing plan" : "any plan"}. See our <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="/terms" target="_blank" rel="noreferrer">Terms</a>.</p>
    </form>
  );
}
