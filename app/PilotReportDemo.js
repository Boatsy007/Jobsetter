"use client";

import { useState } from "react";

const views = {
  overview: {
    label: "Overview",
    headline: "One screen. Every next action.",
    metrics: [
      ["New leads", "20", "18 contacted"],
      ["Booked", "8", "qualified jobs"],
      ["Quotes chased", "15", "4 decisions"],
      ["Reactivated", "25", "6 conversations"],
    ],
    activity: [
      ["10:42", "New plumbing lead", "Contacted"],
      ["10:58", "$6,400 open quote", "Follow-up sent"],
      ["11:16", "Past customer", "Reactivated"],
      ["11:31", "Site visit", "Booked"],
    ],
  },
  leads: {
    label: "New leads",
    headline: "No good lead sits untouched.",
    metrics: [
      ["Received", "20", "pilot example"],
      ["Contacted", "18", "within coverage"],
      ["Qualified", "11", "fit confirmed"],
      ["Booked", "8", "next step"],
    ],
    activity: [
      ["10:42", "Hot water enquiry", "Calling now"],
      ["10:51", "Switchboard enquiry", "Qualified"],
      ["11:03", "Roof leak enquiry", "Booked"],
      ["11:22", "Out-of-area lead", "Closed"],
    ],
  },
  quotes: {
    label: "Open quotes",
    headline: "Every quote gets a next action.",
    metrics: [
      ["Selected", "15", "for the pilot"],
      ["Reached", "12", "real conversations"],
      ["Decisions", "4", "won / lost / deferred"],
      ["Still active", "8", "next action set"],
    ],
    activity: [
      ["09:15", "$3,800 quote", "Customer called"],
      ["09:47", "$9,200 quote", "Decision Friday"],
      ["10:18", "$2,100 quote", "Won"],
      ["10:44", "$5,600 quote", "Follow-up due"],
    ],
  },
};

export default function PilotReportDemo() {
  const [view, setView] = useState("overview");
  const data = views[view];

  return (
    <div className="reportDemo">
      <div className="reportDemoTop">
        <div>
          <small>ILLUSTRATIVE PILOT REPORT</small>
          <h3>{data.headline}</h3>
        </div>
        <div className="reportTabs">
          {Object.entries(views).map(([key, item]) => (
            <button key={key} className={view === key ? "active" : ""} onClick={() => setView(key)}>{item.label}</button>
          ))}
        </div>
      </div>

      <div className="reportMetricGrid">
        {data.metrics.map(([label,value,note]) => (
          <article key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>
        ))}
      </div>

      <div className="reportActivity">
        <div className="reportActivityHead"><span>Recent activity</span><b>Status</b></div>
        {data.activity.map(([time,item,status]) => (
          <div className="reportActivityRow" key={time+item}>
            <time>{time}</time><span>{item}</span><b>{status}</b>
          </div>
        ))}
      </div>
      <p className="reportDisclaimer">Example interface only — not client results.</p>
    </div>
  );
}
