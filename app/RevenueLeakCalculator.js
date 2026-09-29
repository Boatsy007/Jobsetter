"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

const recommendations = {
  "Speed to lead": {
    title: "Give every new enquiry an owner and a response deadline.",
    text: "Your first move is to make sure each eligible lead is assigned immediately and contacted fast enough that the customer is still actively choosing who to use."
  },
  "Qualification": {
    title: "Define the five questions that decide whether a lead belongs on the calendar.",
    text: "Your first move is to standardise job type, location, urgency, budget/fit and decision readiness so weak enquiries stop consuming the same attention as good ones."
  },
  "Quote recovery": {
    title: "No quote should sit in limbo.",
    text: "Your first move is to keep every open quote assigned to a named owner until it becomes Won, Lost or Deferred — with a documented next follow-up date."
  },
  "Reactivation": {
    title: "Turn your old database into an active pipeline.",
    text: "Your first move is to segment past customers and dormant opportunities by service need and recency, then give each segment a clear reason to re-engage."
  }
};

const questions = [
  { key: "monthlyLeads", eyebrow: "QUESTION 1 OF 7", title: "How many enquiries do you get in a typical month?", type: "number", suffix: "enquiries", min: 0 },
  { key: "averageJob", eyebrow: "QUESTION 2 OF 7", title: "Roughly what is an average won job worth?", type: "money", min: 0 },
  { key: "closeRate", eyebrow: "QUESTION 3 OF 7", title: "What percentage of enquiries become paying jobs today?", type: "percent", min: 0, max: 100 },
  {
    key: "responseSpeed", eyebrow: "QUESTION 4 OF 7", title: "How quickly are new leads usually contacted?", type: "choice",
    options: [["fast", "Within 5 minutes"], ["hour", "Within an hour"], ["same-day", "Same day"], ["irregular", "Whenever someone gets time"]]
  },
  {
    key: "qualification", eyebrow: "QUESTION 5 OF 7", title: "Do you consistently qualify leads before booking?", type: "choice",
    options: [["always", "Yes, every time"], ["sometimes", "Sometimes"], ["no", "Not really"]]
  },
  {
    key: "quoteFollowup", eyebrow: "QUESTION 6 OF 7", title: "What happens after you send a quote?", type: "choice",
    options: [["always", "Every quote is followed up"], ["sometimes", "Some get followed up"], ["rarely", "No consistent system"]]
  },
  {
    key: "reactivation", eyebrow: "QUESTION 7 OF 7", title: "Do you systematically reactivate old leads or past customers?", type: "choice",
    options: [["yes", "Yes, consistently"], ["sometimes", "Occasionally"], ["no", "No"]]
  },
];

export default function RevenueLeakCalculator() {
  const [answers, setAnswers] = useState({
    monthlyLeads: 60,
    averageJob: 2500,
    closeRate: 20,
    responseSpeed: "same-day",
    qualification: "sometimes",
    quoteFollowup: "sometimes",
    reactivation: "no",
  });
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [scenarioLift, setScenarioLift] = useState(5);

  const scores = useMemo(() => {
    const response = { fast: 95, hour: 78, "same-day": 55, irregular: 28 }[answers.responseSpeed];
    const qualify = { always: 90, sometimes: 58, no: 30 }[answers.qualification];
    const quotes = { always: 92, sometimes: 56, rarely: 24 }[answers.quoteFollowup];
    const reactivate = { yes: 88, sometimes: 50, no: 16 }[answers.reactivation];
    const total = Math.round((response + qualify + quotes + reactivate) / 4);
    const ranked = [
      ["Speed to lead", response],
      ["Qualification", qualify],
      ["Quote recovery", quotes],
      ["Reactivation", reactivate],
    ].sort((a, b) => a[1] - b[1]);
    return { response, qualify, quotes, reactivate, total, biggestLeak: ranked[0][0], strongest: ranked[ranked.length - 1][0] };
  }, [answers]);

  const model = useMemo(() => {
    const leads = clamp(Number(answers.monthlyLeads) || 0, 0, 100000);
    const job = clamp(Number(answers.averageJob) || 0, 0, 1000000);
    const rate = clamp(Number(answers.closeRate) || 0, 0, 100);
    const current = leads * job * (rate / 100);
    const scenarioRate = clamp(rate + scenarioLift, 0, 100);
    const scenario = leads * job * (scenarioRate / 100);
    const weeklyLeads = Math.round(leads / 4.33);
    return { current, scenario, lift: scenario - current, scenarioRate, weeklyLeads };
  }, [answers, scenarioLift]);

  const q = questions[step];
  const recommendation = recommendations[scores.biggestLeak];
  const setAnswer = (key, value) => setAnswers((old) => ({ ...old, [key]: value }));

  const next = () => {
    if (step === 0) {
      try { track("Diagnostic Started", { source: "Revenue Audit" }); } catch {}
    }
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    setComplete(true);
    const summary = {
      ...answers,
      score: scores.total,
      biggestLeak: scores.biggestLeak,
      strongest: scores.strongest,
    };
    try {
      sessionStorage.setItem("jobsetterAudit", JSON.stringify(summary));
      track("Diagnostic Completed", { scoreBand: scores.total >= 75 ? "75+" : scores.total >= 50 ? "50-74" : "under50" });
    } catch {}
  };

  const previous = () => {
    if (complete) {
      setComplete(false);
      return;
    }
    if (step > 0) setStep((s) => s - 1);
  };

  const goToPilot = () => {
    const summary = {
      ...answers,
      score: scores.total,
      biggestLeak: scores.biggestLeak,
      strongest: scores.strongest,
    };
    try {
      sessionStorage.setItem("jobsetterAudit", JSON.stringify(summary));
      track("Pilot CTA", { source: "Diagnostic Result" });
    } catch {}
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

  const renderQuestion = () => {
    if (q.type === "number") {
      return (
        <div className="diagnosticBigInput">
          <input type="number" min={q.min} value={answers[q.key]} onChange={(e) => setAnswer(q.key, e.target.value)} autoFocus />
          <span>{q.suffix}</span>
        </div>
      );
    }
    if (q.type === "money") {
      return (
        <div className="diagnosticBigInput money">
          <span>$</span>
          <input type="number" min={q.min} value={answers[q.key]} onChange={(e) => setAnswer(q.key, e.target.value)} autoFocus />
        </div>
      );
    }
    if (q.type === "percent") {
      return (
        <div className="diagnosticBigInput">
          <input type="number" min={q.min} max={q.max} value={answers[q.key]} onChange={(e) => setAnswer(q.key, e.target.value)} autoFocus />
          <span>%</span>
        </div>
      );
    }
    return (
      <div className="choiceGrid">
        {q.options.map(([value, label]) => (
          <button key={value} className={answers[q.key] === value ? "choice active" : "choice"} onClick={() => setAnswer(q.key, value)}>
            <span>{label}</span><i>{answers[q.key] === value ? "✓" : "→"}</i>
          </button>
        ))}
      </div>
    );
  };

  if (!complete) {
    return (
      <div className="diagnosticShell">
        <div className="diagnosticProgress">
          <span style={{ width: ((step + 1) / questions.length) * 100 + "%" }} />
        </div>
        <div className="diagnosticContent">
          <div className="calcBadge">60-SECOND REVENUE LEAK AUDIT</div>
          <small className="questionCount">{q.eyebrow}</small>
          <h3>{q.title}</h3>
          <p>Your answers stay in this browser until you choose to request a pilot call.</p>
          {renderQuestion()}
          <div className="diagnosticActions">
            <button className="textButton" onClick={previous} disabled={step === 0}>← Back</button>
            <button className="button" onClick={next}>{step === questions.length - 1 ? "Show my score" : "Continue"} <b>→</b></button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="diagnosticResultShell">
      <div className="resultHeadline">
        <div>
          <div className="calcBadge">YOUR JOBSETTER CONVERSION DIAGNOSTIC</div>
          <h3>{scores.total}<em>/100</em></h3>
          <p>This is a JobSetter diagnostic based on the follow-up practices you selected — not an industry benchmark.</p>
        </div>
        <div className="prescriptionCard">
          <small>BIGGEST LEAK</small>
          <strong>{scores.biggestLeak}</strong>
          <span>Strongest area: {scores.strongest}</span>
        </div>
      </div>

      <div className="resultGrid">
        <div>
          <ScoreRow label="Speed to lead" value={scores.response} />
          <ScoreRow label="Qualification" value={scores.qualify} />
          <ScoreRow label="Quote recovery" value={scores.quotes} />
          <ScoreRow label="Reactivation" value={scores.reactivate} />

          <div className="recommendationBox">
            <small>YOUR FIRST MOVE</small>
            <h4>{recommendation.title}</h4>
            <p>{recommendation.text}</p>
          </div>

          <div className="personalUrgency">
            <small>YOUR PIPELINE DOESN'T PAUSE</small>
            <p>You told us you receive about <b>{answers.monthlyLeads} enquiries a month</b>. That's roughly <b>{model.weeklyLeads} new opportunities every week</b> entering your current follow-up process.</p>
          </div>
        </div>

        <div className="scenarioCard">
          <small>CHOOSE AN ILLUSTRATIVE CLOSE-RATE SCENARIO</small>
          <div className="scenarioButtons">
            {[1,3,5,10].map((n) => <button key={n} className={scenarioLift === n ? "active" : ""} onClick={() => setScenarioLift(n)}>+{n} pts</button>)}
          </div>
          <div className="scenarioNumbers">
            <div><span>Current model</span><b>{money(model.current)}</b></div>
            <div className="scenarioArrow">→</div>
            <div><span>At {model.scenarioRate}% close rate</span><b>{money(model.scenario)}</b></div>
          </div>
          <div className="scenarioLift">Difference: <b>+{money(model.lift)}/month</b></div>
          <p>You chose the improvement scenario. This is simple maths using your inputs, not a forecast or promise of JobSetter results.</p>
        </div>
      </div>

      <div className="diagnosticResultActions">
        <button className="textButton" onClick={previous}>← Change my answers</button>
        <button className="button" onClick={goToPilot}>Build my 14-day pilot <b>→</b></button>
      </div>
    </div>
  );
}
