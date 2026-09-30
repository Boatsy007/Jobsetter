"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  ["01", "Contact", "New enquiries get an instant text, then a call from our Australian-based team."],
  ["02", "Qualify", "We check location, job type, budget, timing and your fit rules."],
  ["03", "Book", "Good-fit opportunities go into your calendar for the agreed next step."],
  ["04", "Follow up", "Open quotes keep moving until they are won, lost or clearly closed."],
  ["05", "Report", "You can see what happened, what converted and why opportunities were lost."],
];

export default function ProcessTimeline() {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const scroller = document.querySelector(".site-main");
    if (!wrap || !scroller) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const cards = [...wrap.querySelectorAll(".processTimelineStep")];
      if (!cards.length) return;

      const scrollRect = scroller.getBoundingClientRect();
      const targetY = scrollRect.top + scrollRect.height * 0.46;

      let bestIndex = 0;
      let bestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const centre = rect.top + rect.height / 2;
        const distance = Math.abs(centre - targetY);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setActive(bestIndex);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapRef} className="shell processTimeline">
      <div className="processTimelineRail" aria-hidden="true" />
      {steps.map(([number, title, text], index) => (
        <article className={`processTimelineStep ${active === index ? "isActive" : ""}`} key={title}>
          <div className="processTimelineDot" aria-hidden="true" />
          <div className="processTimelineHeading">
            <span>{number}</span>
            <h3>{title}</h3>
          </div>
          <p>{text}</p>
        </article>
      ))}
      <div className="processPayoff">
        <small>THE RESULT</small>
        <strong>No lead left sitting. No quote forgotten.</strong>
        <p>Someone owns the follow-up until there is a clear next step or a clear outcome.</p>
      </div>
    </div>
  );
}
