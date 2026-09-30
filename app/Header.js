"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const delta = y - lastY.current;
        if (y <= 8) setVisible(true);
        else if (delta > 2) setVisible(false);
        else if (delta < -1) setVisible(true);
        lastY.current = y;
        ticking.current = false;
      });
    };
    lastY.current = window.scrollY || 0;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const trackNav = (label) => {
    try { track("Nav Click", { label }); } catch {}
  };

  return (
    <>
      <header className={`siteHeader ${visible ? "headerVisible" : "headerHidden"}`}>
        <div className="shell nav">
          <a className="brand brandImageLink" href="#top" aria-label="JobSetter home" onClick={() => trackNav("Logo")}>
            <img className="brandLogo" src="/jobsetter-logo.webp" alt="JobSetter" width="360" height="93" />
          </a>
          <nav className="desktopNav">
            <a href="#audit" onClick={() => trackNav("Revenue Audit")}>Revenue audit</a>
            <a href="#journey" onClick={() => trackNav("How It Works")}>How it works</a>
            <a href="#pilot-offer" onClick={() => trackNav("14-Day Pilot")}>14-day pilot</a>
            <a href="#pricing" onClick={() => trackNav("Pricing")}>Pricing</a>
            <a href="#why" onClick={() => trackNav("Why JobSetter")}>Why JobSetter</a>
          </nav>
          <a className="button small" href="#pilot" onClick={() => trackNav("Start Pilot")}>Start a pilot</a>
        </div>
      </header>
      <div className="mobileHeaderSpacer" aria-hidden="true" />
    </>
  );
}
