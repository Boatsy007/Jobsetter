"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function Header() {
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const main = document.querySelector(".site-main");
    const header = document.querySelector(".siteHeader");

    if (!mobile || !main || !header) return;

    const headerHeight = () => {
      const h = header.getBoundingClientRect().height;
      return Number.isFinite(h) && h > 0 ? h : 64;
    };

    const resetTop = () => {
      main.scrollTo({ top: 0, left: 0, behavior: "auto" });
      header.style.setProperty("--header-offset", "0px");
    };

    resetTop();
    const initialFrame = window.requestAnimationFrame(resetTop);
    window.addEventListener("pageshow", resetTop);

    let lastY = Math.max(0, main.scrollTop);
    let offset = 0;
    let ticking = false;

    const render = () => {
      header.style.setProperty("--header-offset", `${offset}px`);
    };

    const updateHeader = () => {
      ticking = false;

      const y = Math.max(0, main.scrollTop);
      const delta = y - lastY;
      const maxOffset = headerHeight();

      if (y <= 0) {
        offset = 0;
      } else if (delta > 0) {
        // Match Monsta: dismiss quickly as the user scrolls down.
        offset = Math.min(maxOffset, offset + delta * 2.6);
      } else if (delta < 0) {
        // Any upward movement reveals immediately.
        offset = 0;
      }

      render();
      lastY = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeader);
    };

    main.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("pageshow", resetTop);
      main.removeEventListener("scroll", onScroll);
      header.style.removeProperty("--header-offset");
    };
  }, []);

  const trackNav = (label) => {
    try { track("Nav Click", { label }); } catch {}
  };

  return (
    <header className="siteHeader">
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
  );
}
