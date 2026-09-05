import React, { useEffect, useRef } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

const recommendations = [
  {
    name: "Saeed",
    role: "Team Lead · Zetsol Technologies",
    avatar: "S",
    text: "Aeiyan consistently delivered clean, well-structured code and took ownership of his work end to end. He was always ready to help the team, pick up difficult tasks, and push quality without being asked. A genuinely dependable engineer.",
  },
  {
    name: "Aftab Saraz",
    role: "CEO · Zetsol Technologies",
    avatar: "A",
    text: "Aeiyan stood out from the start — technically strong, fast to learn, and professional in how he handled client-facing work. We recognised him as Employee of the Month for a reason. He'd be an asset to any team.",
  },
  {
    name: "Abdul Rahman",
    role: "CEO · Syncrobite Solutions",
    avatar: "A",
    text: "Working with Aeiyan was straightforward in the best way — he understood requirements quickly, asked the right questions, and delivered on time. Reliable, skilled, and easy to communicate with.",
  },
  {
    name: "Junaid Rajput",
    role: "CEO · Samarix",
    avatar: "J",
    text: "Aeiyan grew from a solid developer into a Project Manager who keeps multiple teams and clients moving in sync. He brings both technical depth and the kind of calm, clear communication that makes delivery feel effortless.",
  },
];

export default function Recommendations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | null = null;
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const cards = sectionRef.current?.querySelectorAll(".rec-card");
        if (cards?.length) {
          gsap.from(cards, {
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
            y: 24, opacity: 0, duration: 0.55, stagger: 0.14, ease: "power2.out", clearProps: "all",
          });
        }
        cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    });
    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="recommendations"
      aria-label="Recommendations"
      className="flex flex-col bg-surface-soft w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72 py-24 border-t border-hairline"
    >
      {/* Header */}
      <div className="flex flex-row items-center mb-4">
        <ArrowIcon className="flex-none h-5 w-5 translate-y-[2px] text-accent" />
        <div className="flex items-center space-x-2 pr-4">
          <span className="text-accent font-mono text-sm sm:text-base">06.</span>
          <h2 className="font-bold text-ink text-xl sm:text-2xl tracking-wide">
            Recommendations
          </h2>
        </div>
        <div className="bg-hairline h-[1px] flex-1 max-w-xs" />
      </div>

      <p className="font-body text-muted text-sm sm:text-base max-w-xl mb-10">
        What teammates, clients, and students say.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec.name}
            className="rec-card flex flex-col justify-between p-6 rounded-xl bg-canvas border border-hairline hover:border-accent/40 transition-colors"
          >
            {/* Quote mark */}
            <span className="font-Header text-5xl text-accent/30 leading-none select-none mb-2" aria-hidden="true">
              "
            </span>

            <p className="font-body text-sm text-muted leading-relaxed flex-1">
              {rec.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-hairline">
              <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-xs font-bold text-accent">{rec.avatar}</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-ink block">{rec.name}</span>
                <span className="text-xs text-muted font-mono">{rec.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
