"use client";

import { useEffect, useRef, useState } from "react";

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

  return (
    <>
      <header className={`siteHeader ${visible ? "headerVisible" : "headerHidden"}`}>
        <div className="shell nav">
          <a className="brand" href="#top" aria-label="JobSetter home">
            <span className="brandJob">Job</span><span className="brandSetter">Setter</span>
          </a>
          <nav className="desktopNav">
            <a href="#platform">Platform</a>
            <a href="#loop">Revenue loop</a>
            <a href="#who">Who it's for</a>
            <a href="#why">Why JobSetter</a>
          </nav>
          <a className="button small" href="#pilot">Start a pilot</a>
        </div>
      </header>
      <div className="mobileHeaderSpacer" aria-hidden="true" />
    </>
  );
}
