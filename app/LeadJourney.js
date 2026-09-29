"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

const journeys = {
  lead: {
    label: "New lead",
    value: "$4,900 example",
    steps: [
      ["10:42:08", "Lead received", "Hot water unit leaking"],
      ["10:42:31", "Customer contacted", "Human setter starts the conversation"],
      ["10:44:12", "Qualified", "Job type, location and urgency confirmed"],
      ["10:45:03", "Booked", "Tomorrow — 8:30am"],
      ["Next step", "Quote follow-up", "JobSetter keeps the opportunity moving"],
    ],
  },
  missed: {
    label: "Missed call",
    value: "Recovery workflow",
    steps: [
      ["2:17pm", "Call missed", "Owner is on the tools"],
      ["2:18pm", "Recovery starts", "Lead enters the JobSetter queue"],
      ["2:21pm", "Connected", "Customer need is qualified"],
      ["2:24pm", "Booked", "Site visit added to calendar"],
      ["Outcome", "Opportunity recovered", "No voicemail sitting untouched"],
    ],
  },
  quote: {
    label: "Open quote",
    value: "$8,200 example",
    steps: [
      ["Day 0", "Quote sent", "Customer has the estimate"],
      ["Day 2", "Follow-up #1", "Questions and objections surfaced"],
      ["Day 5", "Follow-up #2", "Decision timeline confirmed"],
      ["Day 9", "Final check-in", "Clear next step agreed"],
      ["Outcome", "Won or closed", "The quote no longer sits unresolved"],
    ],
  },
};

export default function LeadJourney() {
  const [selected, setSelected] = useState("lead");
  const journey = journeys[selected];

  const choose = (key) => {
    setSelected(key);
    try { track("Journey Viewed", { journey: key }); } catch {}
  };

  return (
    <div className="journeyShell">
      <div className="journeyTabs">
        {Object.entries(journeys).map(([key, item]) => (
          <button key={key} className={selected === key ? "active" : ""} onClick={() => choose(key)}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="journeyHeader">
        <div><small>ILLUSTRATIVE WORKFLOW</small><h3>{journey.label}</h3></div>
        <span>{journey.value}</span>
      </div>
      <div className="journeySteps">
        {journey.steps.map(([time, title, text], index) => (
          <div className="journeyStep" key={title}>
            <div className="journeyRail"><span>{index + 1}</span>{index < journey.steps.length - 1 && <i />}</div>
            <div><small>{time}</small><h4>{title}</h4><p>{text}</p></div>
          </div>
        ))}
      </div>
      <div className="journeyFooter"><b>This is what JobSetter is built to do all day:</b> keep worthwhile opportunities moving until there is a clear outcome.</div>
    </div>
  );
}
