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
        const previous = lastY.current;
        const delta = y - previous;

        if (y <= 8) {
          setVisible(true);
        } else if (delta > 2) {
          setVisible(false);
        } else if (delta < -1) {
          setVisible(true);
        }

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
          <a className="brand" href="#top">
            <span className="brandJob">Job</span><span className="brandSetter">Setter</span>
          </a>
          <nav className="desktopNav">
            <a href="#how">How it works</a>
            <a href="#features">What we do</a>
            <a href="#why">Why JobSetter</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button small" href="#demo">Book a demo</a>
        </div>
      </header>
      <div className="mobileHeaderSpacer" aria-hidden="true" />
    </>
  );
}
