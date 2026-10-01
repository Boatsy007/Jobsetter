"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      if (header.classList.contains("menuOpen")) {
        offset = 0;
      } else if (y <= 0) {
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const trackNav = (label) => {
    try { track("Nav Click", { label }); } catch {}
  };

  const closeMenu = (label) => {
    setMenuOpen(false);
    trackNav(label);
  };

  return (
    <header className={`siteHeader${menuOpen ? " menuOpen" : ""}`}>
      <div className="shell nav">
        <a className="brand brandImageLink" href="/" aria-label="JobSetter home" onClick={() => trackNav("Logo")}>
          <img className="brandLogo" src="/jobsetterlogo.png" alt="JobSetter" />
        </a>
        <nav className="desktopNav">
          <a href="/how-it-works" onClick={() => trackNav("How It Works")}>How it works</a>
          <a href="/who-its-for" onClick={() => trackNav("Who It's For")}>Who it's for</a>
          <a href="/pricing" onClick={() => trackNav("Pricing")}>Pricing</a>
          <a href="/playbook" onClick={() => trackNav("Playbook")}>Playbook</a>
          <a href="/about" onClick={() => trackNav("About")}>About</a>
        </nav>
        <div className="mobileHeaderActions">
          <button
            className={`mobileMenuButton${menuOpen ? " isOpen" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span><span></span><span></span>
          </button>
          <a className="button small" href="/contact" onClick={() => closeMenu("Book Call")}>Book a call</a>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobileNavPanel${menuOpen ? " isOpen" : ""}`} aria-hidden={!menuOpen}>
        <div className="shell mobileNavInner">
          <a href="/how-it-works" onClick={() => closeMenu("How It Works")}>How it works <b>→</b></a>
          <a href="/who-its-for" onClick={() => closeMenu("Who It's For")}>Who it's for <b>→</b></a>
          <a href="/pricing" onClick={() => closeMenu("Pricing")}>Pricing <b>→</b></a>
          <a href="/playbook" onClick={() => closeMenu("Playbook")}>Playbook <b>→</b></a>
          <a href="/about" onClick={() => closeMenu("About")}>About <b>→</b></a>
          <a href="/faq" onClick={() => closeMenu("FAQ")}>FAQ <b>→</b></a>
        </div>
      </nav>
    </header>
  );
}
