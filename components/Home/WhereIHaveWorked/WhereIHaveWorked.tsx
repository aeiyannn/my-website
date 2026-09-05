import React, { useEffect, useRef } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { portfolioContent, ExperienceRole } from "../../../configuration/content";

export default function WhereIHaveWorked() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const roles = portfolioContent.experience;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | null = null;
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const items = gsap.utils.toArray<HTMLElement>(".timeline-entry");
        items.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              once: true,
            },
            y: 24,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "all",
          });
        });

        cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    });

    return () => cleanup?.();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-label="Experience and Leadership Timeline"
      className="flex flex-col bg-background w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72 py-24 border-t border-surface-border"
    >
      {/* Section Header */}
      <div className="flex flex-row items-center mb-4">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-accent" />
        <div className="flex items-center space-x-2 pr-4">
          <span className="text-accent font-mono text-sm sm:text-base">03.</span>
          <h2 className="font-bold text-text-primary text-xl sm:text-2xl tracking-wide">
            Experience &amp; Leadership
          </h2>
        </div>
        <div className="bg-surface-border h-[1px] flex-1 max-w-xs" />
      </div>

      <p className="font-body text-text-secondary text-sm sm:text-base max-w-2xl mb-12">
        My engineering leadership journey. Every role is structured across scope, ownership,
        cross-functional collaboration, and verified production outcomes.
      </p>

      {/* Accessible Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-surface-border space-y-12 ml-2 sm:ml-4">
        {roles.map((item, idx) => (
          <article
            key={item.company}
            className="timeline-entry relative group"
            aria-labelledby={`role-title-${idx}`}
          >
            {/* Timeline Node Dot */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                idx === 0
                  ? "bg-accent border-background shadow-md shadow-accent/20"
                  : "bg-surface border-surface-border"
              }`}
              aria-hidden="true"
            />

            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
              <div>
                <h3 id={`role-title-${idx}`} className="text-lg sm:text-xl font-bold text-text-primary">
                  <span>{item.role}</span>{" "}
                  <span className="text-accent">
                    @{" "}
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline focus:outline-none focus:ring-1 focus:ring-accent rounded"
                    >
                      {item.company}
                    </a>
                  </span>
                </h3>
              </div>
              <span className="font-mono text-xs text-text-secondary whitespace-nowrap">
                {item.period}
              </span>
            </div>

            {/* 4-Part Structure Card: Scope -> Ownership -> Collaboration -> Outcome */}
            <div className="p-5 sm:p-6 rounded-xl bg-surface border border-surface-border hover:border-accent/40 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body mb-4">
                <div>
                  <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-1">
                    Scope of Work
                  </span>
                  <p className="text-text-secondary leading-relaxed">{item.scope}</p>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-accent-alt uppercase tracking-wider block mb-1">
                    Technical Ownership
                  </span>
                  <p className="text-text-secondary leading-relaxed">{item.ownership}</p>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-text-secondary uppercase tracking-wider block mb-1">
                    Collaboration &amp; Mentorship
                  </span>
                  <p className="text-text-secondary leading-relaxed">{item.collaboration}</p>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-warning uppercase tracking-wider block mb-1">
                    Verified Outcome
                  </span>
                  <p className="text-text-primary font-medium leading-relaxed">{item.outcome}</p>
                </div>
              </div>

              {/* Specific Technical Deliverables */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="pt-3 border-t border-surface-border">
                  <span className="font-mono text-[11px] text-text-secondary uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-text-secondary font-body">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-mono">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
