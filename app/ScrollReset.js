"use client";

import { useLayoutEffect } from "react";

export default function ScrollReset() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Do not let a previously clicked section/hash become the next visit's
    // starting position. JobSetter should always open on the hero.
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    reset();
    const frame = requestAnimationFrame(reset);
    const t1 = window.setTimeout(reset, 60);
    const t2 = window.setTimeout(reset, 220);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
