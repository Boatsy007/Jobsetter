"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const settling = useRef(true);

  useEffect(() => {
    let settleTimer;

    const readY = () => Math.max(
      0,
      window.scrollY ||
      document.documentElement.scrollTop ||
      0
    );

    const resetHeader = () => {
      setVisible(true);
      lastY.current = readY();
      ticking.current = false;

      clearTimeout(settleTimer);
      settling.current = true;
      settleTimer = window.setTimeout(() => {
        lastY.current = readY();
        settling.current = false;
      }, 450);
    };

    const updateHeader = () => {
      ticking.current = false;

      const y = readY();
      const delta = y - lastY.current;

      // iOS/Chrome can report a small synthetic page scroll while its URL bar
      // settles on load. Never let that initial browser-chrome movement hide
      // the header. This mirrors the reset-first behaviour used on Monsta.
      if (settling.current || y <= 96) {
        setVisible(true);
      } else if (delta > 3) {
        // Scroll down: dismiss quickly.
        setVisible(false);
      } else if (delta < -1) {
        // Any genuine upward scroll: reveal immediately.
        setVisible(true);
      }

      lastY.current = y;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(updateHeader);
    };

    const onViewportChange = () => {
      // Expanding/collapsing browser chrome must not leave the header hidden
      // while the page is effectively still at the top.
      if (readY() <= 96) {
        setVisible(true);
        lastY.current = readY();
      }
    };

    resetHeader();
    const firstFrame = window.requestAnimationFrame(resetHeader);
    const secondFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resetHeader);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pageshow", resetHeader);
    window.visualViewport?.addEventListener("resize", onViewportChange);
    window.visualViewport?.addEventListener("scroll", onViewportChange);

    return () => {
      clearTimeout(settleTimer);
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pageshow", resetHeader);
      window.visualViewport?.removeEventListener("resize", onViewportChange);
      window.visualViewport?.removeEventListener("scroll", onViewportChange);
    };
  }, []);

  const trackNav = (label) => {
    try { track("Nav Click", { label }); } catch {}
  };

  return (
    <>
      <header className={`siteHeader ${visible ? "headerVisible" : "headerHidden"}`}>
        <div className="shell nav">
          <a className="brand brandImageLink" href="/" aria-label="JobSetter home" onClick={() => trackNav("Logo")}>
            <img className="brandLogo" src="/jobsetterlogo.png" alt="JobSetter" />
          </a>
          <nav className="desktopNav">
            <a href="/how-it-works" onClick={() => trackNav("How It Works")}>How it works</a>
            <a href="/who-its-for" onClick={() => trackNav("Who It's For")}>Who it's for</a>
            <a href="/pricing" onClick={() => trackNav("Pricing")}>Pricing</a>
            <a href="/pilot" onClick={() => trackNav("30-Day Pilot")}>30-day pilot</a>
            <a href="/about" onClick={() => trackNav("About")}>About</a>
          </nav>
          <a className="button small" href="/contact" onClick={() => trackNav("Book Call")}>Book a call</a>
        </div>
      </header>
      <div className="mobileHeaderSpacer" aria-hidden="true" />
    </>
  );
}
