"use client";

import { useMemo, useState } from "react";

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

export default function RevenueLeakCalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(60);
  const [averageJob, setAverageJob] = useState(2500);
  const [closeRate, setCloseRate] = useState(20);
  const [responseSpeed, setResponseSpeed] = useState("same-day");
  const [qualification, setQualification] = useState("sometimes");
  const [quoteFollowup, setQuoteFollowup] = useState("sometimes");
  const [reactivation, setReactivation] = useState("no");

  const scores = useMemo(() => {
    const response = { fast: 95, hour: 78, "same-day": 55, irregular: 28 }[responseSpeed];
    const qualify = { always: 90, sometimes: 58, no: 30 }[qualification];
    const quotes = { always: 92, sometimes: 56, rarely: 24 }[quoteFollowup];
    const reactivate = { yes: 88, sometimes: 50, no: 16 }[reactivation];
    const total = Math.round((response + qualify + quotes + reactivate) / 4);
    return { response, qualify, quotes, reactivate, total };
  }, [responseSpeed, qualification, quoteFollowup, reactivation]);

  const model = useMemo(() => {
    const leads = clamp(Number(monthlyLeads) || 0, 0, 100000);
    const job = clamp(Number(averageJob) || 0, 0, 1000000);
    const rate = clamp(Number(closeRate) || 0, 0, 100);
    const current = leads * job * (rate / 100);
    const scenarioRate = clamp(rate + 5, 0, 100);
    const scenario = leads * job * (scenarioRate / 100);
    return { current, scenario, lift: scenario - current, scenarioRate };
  }, [monthlyLeads, averageJob, closeRate]);

  const goToPilot = () => {
    const summary = {
      monthlyLeads,
      averageJob,
      closeRate,
      score: scores.total,
      responseSpeed,
      qualification,
      quoteFollowup,
      reactivation,
    };
    try { sessionStorage.setItem("jobsetterAudit", JSON.stringify(summary)); } catch {}
    document.getElementById("pilot")?.scrollIntoView({ behavior: "smooth" });
  };

  const money = (value) =>
    new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(value);

  const ScoreRow = ({ label, value }) => (
    <div className="scoreRow">
      <div className="scoreLabel"><span>{label}</span><b>{value}/100</b></div>
      <div className="scoreTrack"><i style={{ width: value + "%" }} /></div>
    </div>
  );

  return (
    <div className="calculatorShell">
      <div className="calculatorInputs">
        <div className="calcBadge">FREE REVENUE LEAK AUDIT</div>
        <h3>Use your numbers.</h3>
        <p>See where follow-up may be costing you opportunity before you ever speak to JobSetter.</p>

        <label>
          <span>Monthly enquiries</span>
          <input type="number" min="0" value={monthlyLeads} onChange={(e) => setMonthlyLeads(e.target.value)} />
        </label>
        <label>
          <span>Average job value</span>
          <div className="moneyInput"><b>$</b><input type="number" min="0" value={averageJob} onChange={(e) => setAverageJob(e.target.value)} /></div>
        </label>
        <label>
          <span>Current close rate</span>
          <div className="percentInput"><input type="number" min="0" max="100" value={closeRate} onChange={(e) => setCloseRate(e.target.value)} /><b>%</b></div>
        </label>

        <label>
          <span>How quickly are new leads contacted?</span>
          <select value={responseSpeed} onChange={(e) => setResponseSpeed(e.target.value)}>
            <option value="fast">Usually within 5 minutes</option>
            <option value="hour">Usually within an hour</option>
            <option value="same-day">Usually the same day</option>
            <option value="irregular">Whenever someone gets time</option>
          </select>
        </label>

        <label>
          <span>Do you consistently qualify leads before booking?</span>
          <select value={qualification} onChange={(e) => setQualification(e.target.value)}>
            <option value="always">Yes, consistently</option>
            <option value="sometimes">Sometimes</option>
            <option value="no">Not really</option>
          </select>
        </label>

        <label>
          <span>Are open quotes systematically followed up?</span>
          <select value={quoteFollowup} onChange={(e) => setQuoteFollowup(e.target.value)}>
            <option value="always">Yes, every quote</option>
            <option value="sometimes">Some of them</option>
            <option value="rarely">Rarely / no system</option>
          </select>
        </label>

        <label>
          <span>Do you reactivate old leads or past customers?</span>
          <select value={reactivation} onChange={(e) => setReactivation(e.target.value)}>
            <option value="yes">Yes, consistently</option>
            <option value="sometimes">Occasionally</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <div className="calculatorResult">
        <div className="scoreTop">
          <div>
            <small>YOUR REVENUE CONVERSION SCORE</small>
            <strong>{scores.total}<em>/100</em></strong>
          </div>
          <span className={scores.total >= 75 ? "scorePill good" : scores.total >= 50 ? "scorePill mid" : "scorePill low"}>
            {scores.total >= 75 ? "Strong foundation" : scores.total >= 50 ? "Opportunity leaking" : "Major leakage"}
          </span>
        </div>

        <div className="scoreRows">
          <ScoreRow label="Speed to lead" value={scores.response} />
          <ScoreRow label="Qualification" value={scores.qualify} />
          <ScoreRow label="Quote recovery" value={scores.quotes} />
          <ScoreRow label="Reactivation" value={scores.reactivate} />
        </div>

        <div className="scenarioCard">
          <small>ILLUSTRATIVE 5-POINT CLOSE-RATE SCENARIO</small>
          <div className="scenarioNumbers">
            <div><span>Current model</span><b>{money(model.current)}</b></div>
            <div className="scenarioArrow">→</div>
            <div><span>At {model.scenarioRate}% close rate</span><b>{money(model.scenario)}</b></div>
          </div>
          <div className="scenarioLift">Difference: <b>+{money(model.lift)}/month</b></div>
          <p>This is simple scenario modelling using the numbers you entered, not a promise or forecast of JobSetter results.</p>
        </div>

        <button className="button calcButton" onClick={goToPilot}>Build my 14-day pilot <b>→</b></button>
      </div>
    </div>
  );
}
