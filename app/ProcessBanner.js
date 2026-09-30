"use client";

import { useEffect, useState } from "react";

const steps = ["LEAD", "CONTACT", "BOOK", "QUOTE", "WIN"];

export default function ProcessBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let index = 0;
    const timer = window.setInterval(() => {
      index = (index + 1) % steps.length;
      setActive(index);
    }, 1100);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="processBanner" aria-label="JobSetter process">
      <div className="processBannerTrack">
        {steps.map((step, index) => (
          <div className="processBannerStep" key={step}>
            <span className={active === index ? "isActive" : ""}>{step}</span>
            {index < steps.length - 1 && (
              <i className={active === index + 1 ? "isActive" : ""}>→</i>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
