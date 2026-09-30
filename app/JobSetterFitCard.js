"use client";

import { useEffect, useRef, useState } from "react";

const actions = [
  "Call new enquiries",
  "Keep following up",
  "Work old leads",
  "Book the next step",
  "Hand it back to your team",
];

export default function JobSetterFitCard() {
  const cardRef = useRef(null);
  const [drawnCount, setDrawnCount] = useState(0);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const timers = [];
    let hasPlayed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed) return;
        hasPlayed = true;

        actions.forEach((_, index) => {
          timers.push(
            window.setTimeout(() => {
              setDrawnCount(index + 1);
            }, index * 240)
          );
        });

        observer.disconnect();
      },
      {
        threshold: 0.3,
        root: null,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div ref={cardRef} className="shell jobSetterLayer">
      <div className="jobSetterLayerIntro">
        <small>WHERE JOBSETTER FITS</small>
        <h3>We close the follow-up gaps around your existing sales process.</h3>
        <p>You still quote the work and run the job. We make sure the opportunity keeps moving.</p>
      </div>

      <div className="jobSetterActions">
        {actions.map((label, index) => (
          <span key={label} className={drawnCount > index ? "isDrawn" : ""}>
            <svg className="jobSetterTick" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10.5l4 4L16 5.5" pathLength="1" />
            </svg>
            <b>{label}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
