"use client";

import { useEffect, useRef, useState } from "react";

const doItems = [
  "Contact new-work enquiries",
  "Qualify jobs against your criteria",
  "Book the next step",
  "Follow up open quotes",
  "Reactivate old leads and past customers",
  "Record outcomes and report back",
];

const dontItems = [
  "Answer every phone call live",
  "Handle emergency jobs",
  "Run your marketing",
  "Write your quotes",
  "Send invoices",
  "Replace your estimator or salesperson",
];

export default function DoDontSection() {
  const wrapRef = useRef(null);
  const [activeDo, setActiveDo] = useState(-1);
  const [activeDont, setActiveDont] = useState(-1);
  const [enteredDo, setEnteredDo] = useState(false);
  const [enteredDont, setEnteredDont] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const scroller = document.querySelector(".site-main");
    if (!wrap || !scroller) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollerRect = scroller.getBoundingClientRect();
      const targetY = scrollerRect.top + scrollerRect.height * 0.48;

      const updateCard = (selector, setActive, setEntered) => {
        const card = wrap.querySelector(selector);
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < scrollerRect.bottom * 0.82 && cardRect.bottom > scrollerRect.top) {
          setEntered(true);
        }

        const items = [...card.querySelectorAll("li")];
        let best = -1;
        let distance = Infinity;

        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const centre = rect.top + rect.height / 2;
          const d = Math.abs(centre - targetY);
          if (d < distance && rect.bottom > scrollerRect.top && rect.top < scrollerRect.bottom) {
            distance = d;
            best = index;
          }
        });

        setActive(best);
      };

      updateCard(".doCard", setActiveDo, setEnteredDo);
      updateCard(".dontCard", setActiveDont, setEnteredDont);
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
    <div ref={wrapRef} className="shell doDontGrid doDontInteractive">
      <article className={`doCard ${enteredDo ? "hasEntered" : ""}`}>
        <small>WE DO</small>
        <h3>Own the follow-up.</h3>
        <ul>
          {doItems.map((item, index) => (
            <li className={activeDo === index ? "isActive" : ""} key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className={`dontCard ${enteredDont ? "hasEntered" : ""}`}>
        <small>WE DON’T</small>
        <h3>Run your whole office.</h3>
        <ul>
          {dontItems.map((item, index) => (
            <li className={activeDont === index ? "isActive" : ""} key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
