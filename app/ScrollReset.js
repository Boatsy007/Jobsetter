"use client";

import { useLayoutEffect } from "react";

export default function ScrollReset() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const reset = () => {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // Browsers can restore scroll after hydration, so reset across the first
    // few paint cycles as well as when a page is restored from back/forward cache.
    reset();
    const frame = requestAnimationFrame(reset);
    const t1 = window.setTimeout(reset, 60);
    const t2 = window.setTimeout(reset, 220);
    window.addEventListener("pageshow", reset);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("pageshow", reset);
    };
  }, []);

  return null;
}
