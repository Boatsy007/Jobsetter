"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = [...document.querySelectorAll(".storySection, .storyBridge, .founderSection, .caseStudySection, .callDemoSection")];
    const pipelines = [...document.querySelectorAll(".pipelineMotif")];
    const timelineCards = [...document.querySelectorAll("#pilot-offer .pilotTimeline article")];

    if (reduceMotion) {
      sections.forEach((el) => el.classList.add("is-revealed"));
      pipelines.forEach((el) => el.classList.add("is-visible"));
      timelineCards.forEach((el) => el.classList.add("is-active"));
      return;
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          sectionObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${Math.min(index * 14, 70)}ms`);
      sectionObserver.observe(el);
    });

    const pipelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          pipelineObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.28, rootMargin: "0px 0px -10% 0px" }
    );

    pipelines.forEach((el) => pipelineObserver.observe(el));

    let raf = 0;
    const update = () => {
      raf = 0;
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const focusY = viewportH * 0.52;

      // Tiny progress-driven movement gives the page life without scroll-jacking.
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const total = viewportH + rect.height;
        const progress = Math.max(0, Math.min(1, (viewportH - rect.top) / total));
        section.style.setProperty("--section-progress", progress.toFixed(3));
      });

      const pilot = document.getElementById("pilot-offer");
      if (!pilot || !timelineCards.length) return;
      const pilotRect = pilot.getBoundingClientRect();

      if (pilotRect.bottom < 0 || pilotRect.top > viewportH) {
        timelineCards.forEach((card) => card.classList.remove("is-active"));
        return;
      }

      let closest = null;
      let distance = Infinity;

      timelineCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const current = Math.abs(cardCenter - focusY);
        if (current < distance) {
          distance = current;
          closest = card;
        }
      });

      timelineCards.forEach((card) => card.classList.toggle("is-active", card === closest));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      sectionObserver.disconnect();
      pipelineObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
