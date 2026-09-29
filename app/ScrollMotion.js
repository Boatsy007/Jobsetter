"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealTargets = [
      ...document.querySelectorAll(".storySection, .storyBridge, .founderSection, .caseStudySection, .callDemoSection")
    ];

    const pipelineTargets = [...document.querySelectorAll(".pipelineMotif")];
    const timelineCards = [...document.querySelectorAll("#pilot-offer .pilotTimeline article")];

    if (reduced) {
      revealTargets.forEach((el) => el.classList.add("is-revealed"));
      pipelineTargets.forEach((el) => el.classList.add("is-visible"));
      timelineCards.forEach((el) => el.classList.add("is-active"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );

    revealTargets.forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${Math.min(index * 18, 90)}ms`);
      revealObserver.observe(el);
    });

    const pipelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            pipelineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    pipelineTargets.forEach((el) => pipelineObserver.observe(el));

    let raf = 0;
    const updateTimeline = () => {
      raf = 0;
      const section = document.getElementById("pilot-offer");
      if (!section || !timelineCards.length) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;

      if (sectionRect.bottom < 0 || sectionRect.top > viewportH) {
        timelineCards.forEach((card) => card.classList.remove("is-active"));
        return;
      }

      const focusY = viewportH * 0.5;
      let closest = null;
      let closestDistance = Infinity;

      timelineCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - focusY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = card;
        }
      });

      timelineCards.forEach((card) => card.classList.toggle("is-active", card === closest));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateTimeline);
    };

    updateTimeline();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver.disconnect();
      pipelineObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
