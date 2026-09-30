"use client";

import { useEffect, useState } from "react";

const steps = ["CONTACT", "QUALIFY", "BOOK", "FOLLOW UP", "REPORT"];

export default function ProcessBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
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
