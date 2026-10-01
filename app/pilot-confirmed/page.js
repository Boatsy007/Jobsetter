"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function PilotConfirmedPage() {
  useEffect(() => {
    try { track("Pilot Call Booked", { source: "Calendly Confirmation" }); } catch {}
  }, []);

  return (
    <main className="confirmationPage">
      <div className="confirmationCard">
        <a className="brand brandImageLink" href="/"><img className="legalLogo" src="/jobsetter-logo.webp" alt="JobSetter" /></a>
        <div className="confirmationIcon">✓</div>
        <small>PILOT CALL BOOKED</small>
        <h1>You're booked.</h1>
        <p>Bring your last 30 days of enquiries, open quotes and the basic numbers from your current follow-up process. We'll use the call to map the agreed pilot scope and confirm whether JobSetter is a strong fit.</p>
        <div className="confirmationPrep">
          <span>Recent enquiry volume</span>
          <span>Open quotes</span>
          <span>Average job value</span>
          <span>Current CRM / calendar</span>
        </div>
        <a className="button" href="/">Back to JobSetter</a>
      </div>
    </main>
  );
}
