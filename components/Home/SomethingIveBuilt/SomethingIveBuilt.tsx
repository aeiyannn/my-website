import React, { useState, useEffect, useRef } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { portfolioContent, ProjectEvidence } from "../../../configuration/content";
import ProjectItem from "./ProjectItem";
import ExternalLink from "../../Icons/ExternalLink";
import { useRouter } from "next/router";

const categories = ["All", "Full stack", "Backend/API", "Architecture", "Next.js"];

export default function SomethingIveBuilt() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const flagshipProjects = portfolioContent.projects.filter((p) => p.isFlagship);
  const additionalProjects = portfolioContent.projects.filter((p) => !p.isFlagship);

  const filteredFlagships = activeCategory === "All"
    ? flagshipProjects
    : flagshipProjects.filter((p) => p.categories.includes(activeCategory));

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | null = null;
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray<HTMLElement>(".project-card");
        if (cards.length > 0) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "all",
          });
        }

        cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    });

    return () => cleanup?.();
  }, [activeCategory]);

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-label="Selected Engineering Work"
      className="flex flex-col bg-background w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72 py-24"
    >
      {/* Section Header */}
      <div className="flex flex-row items-center mb-4">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-accent" />
        <div className="flex items-center space-x-2 pr-4">
          <span className="text-accent font-mono text-sm sm:text-base">01.</span>
          <h2 className="font-bold text-text-primary text-xl sm:text-2xl tracking-wide">
            Selected Engineering Work
          </h2>
        </div>
        <div className="bg-surface-border h-[1px] flex-1 max-w-xs" />
      </div>

      <p className="font-body text-text-secondary text-sm sm:text-base max-w-2xl mb-8">
        Production systems I helped design, ship, and lead. Every card outlines real ownership,
        architectural constraints, and verifiable outcomes.
      </p>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        <span className="font-mono text-xs text-text-secondary mr-2">Filter by focus:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono text-xs px-3 py-1.5 rounded transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent ${
              activeCategory === cat
                ? "bg-accent text-background font-bold"
                : "bg-surface text-text-secondary hover:text-text-primary border border-surface-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Flagship Projects Grid */}
      <div className="flex flex-col space-y-12">
        {filteredFlagships.map((project, index) => (
          <ProjectItem key={project.slug} project={project} index={index} />
        ))}
      </div>

      {/* Additional Work Index */}
      {additionalProjects.length > 0 && (
        <div id="work-index" className="mt-24 pt-12 border-t border-surface-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1">
                Secondary Engagements
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                Additional Work Index
              </h3>
            </div>
            <span className="font-mono text-xs text-text-secondary mt-2 sm:mt-0">
              Contract &amp; Freelance Deliveries
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalProjects.map((proj) => (
              <div
                key={proj.slug}
                className="p-5 rounded-lg bg-surface border border-surface-border hover:border-accent/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-accent uppercase">
                      {proj.context}
                    </span>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${proj.title} deployment`}
                        className="text-text-secondary hover:text-accent"
                      >
                        <ExternalLink url={proj.liveUrl} router={router} />
                      </a>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-text-primary mt-1">{proj.title}</h4>
                  <p className="text-xs text-text-secondary font-mono mt-0.5">{proj.subtitle}</p>
                  <p className="text-xs text-text-secondary mt-3 leading-relaxed">{proj.outcome}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between text-xs font-mono text-text-secondary">
                  <span>{proj.stackGroups.frontend || "Next.js"}</span>
                  <span className="text-text-primary font-medium">{proj.architectureSignal.split("·")[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}