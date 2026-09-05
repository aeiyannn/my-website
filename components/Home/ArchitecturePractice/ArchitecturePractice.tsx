import React, { useState, useEffect, useRef } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { portfolioContent } from "../../../configuration/content";

export default function ArchitecturePractice() {
  const [activeArea, setActiveArea] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const { headline, subline, pillars } = portfolioContent.architecture;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | null = null;
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        if (sectionRef.current) {
          gsap.from(".arch-elem", {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
          });
        }

        cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    });

    return () => cleanup?.();
  }, []);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      aria-label="Architecture Practice"
      className="flex flex-col bg-background w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72 py-24 border-t border-surface-border"
    >
      {/* Section Header */}
      <div className="flex flex-row items-center mb-4">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-accent" />
        <div className="flex items-center space-x-2 pr-4">
          <span className="text-accent font-mono text-sm sm:text-base">02.</span>
          <h2 className="font-bold text-text-primary text-xl sm:text-2xl tracking-wide">
            {headline}
          </h2>
        </div>
        <div className="bg-surface-border h-[1px] flex-1 max-w-xs" />
      </div>

      <p className="font-body text-text-secondary text-sm sm:text-base max-w-2xl mb-12">
        {subline}
      </p>

      {/* Main Architecture Diagram Container */}
      <div className="arch-elem grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 p-6 sm:p-8 rounded-xl bg-surface border border-surface-border">
        {/* Left: Interactive Diagram Canvas */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-6">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">
                Production System Topology
              </span>
            </div>
            {/* Legend */}
            <div className="flex items-center space-x-4 text-[11px] font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-0.5 bg-accent" />
                <span className="text-text-secondary">Sync (HTTP/WSS)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-0.5 border-t border-dashed border-accent-alt" />
                <span className="text-text-secondary">Async (Queues)</span>
              </div>
            </div>
          </div>

          {/* SVG & Node Diagram */}
          <div className="space-y-4 font-mono text-xs">
            {/* Node 1: Presentation Layer */}
            <div className="p-4 rounded-lg bg-background border border-surface-border">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-accent uppercase">Tier 01 · Presentation</span>
                <span className="text-[10px] text-text-secondary bg-surface px-2 py-0.5 rounded border border-surface-border">Vercel Edge</span>
              </div>
              <h4 className="font-bold text-text-primary text-sm font-sans">
                Next.js (SSR / SSG) · React Web · React Native
              </h4>
              <p className="text-[11px] text-text-secondary font-sans mt-1">
                Edge-cached assets, server-side paginated tables, and typed API clients.
              </p>
            </div>

            {/* Sync Pipe */}
            <div className="flex items-center justify-center text-accent py-0.5 text-[11px]">
              <span>↓ Synchronous REST / JSON Envelopes (HTTPS)</span>
            </div>

            {/* Node 2: Gateway & Core Services */}
            <div className="p-4 rounded-lg bg-background border border-accent/40 shadow-sm shadow-accent/5">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-accent uppercase">Tier 02 · Gateway &amp; Business Core</span>
                <span className="text-[10px] text-accent bg-surface px-2 py-0.5 rounded border border-accent/30">Node.js / Express</span>
              </div>
              <h4 className="font-bold text-text-primary text-sm font-sans">
                API Gateway · Route Guards · DTO Validation · RBAC
              </h4>
              <p className="text-[11px] text-text-secondary font-sans mt-1">
                Stateless authorization, rate limiting, and domain-driven controllers.
              </p>
            </div>

            {/* Branching Grid: Auth & Async */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded bg-background border border-surface-border">
                <span className="text-[10px] text-accent uppercase block">Security Plane</span>
                <span className="font-bold text-text-primary text-xs font-sans block mt-0.5">JWT &amp; RBAC Lifecycle</span>
                <span className="text-[11px] text-text-secondary font-sans block mt-1">
                  Stateless verification, rotation guards, multi-tenant isolation.
                </span>
              </div>

              <div className="p-3 rounded bg-background border border-surface-border">
                <span className="text-[10px] text-accent-alt uppercase block">Async Pipeline (Queues)</span>
                <span className="font-bold text-text-primary text-xs font-sans block mt-0.5">Webhook &amp; Event Handlers</span>
                <span className="text-[11px] text-text-secondary font-sans block mt-1">
                  E-pharmacy callbacks, payment intents, email dispatch.
                </span>
              </div>
            </div>

            {/* Downstream Pipe */}
            <div className="flex items-center justify-center text-accent py-0.5 text-[11px]">
              <span>↓ Indexed Lookups &amp; Projections (TCP)</span>
            </div>

            {/* Node 3: Persistence & Telemetry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded bg-background border border-surface-border">
                <span className="text-[10px] text-warning uppercase block">Tier 03 · Persistence</span>
                <span className="font-bold text-text-primary text-xs font-sans block mt-0.5">MongoDB &amp; PostgreSQL</span>
                <span className="text-[11px] text-text-secondary font-sans block mt-1">
                  Compound indexes, cursor pagination, audit ledgers.
                </span>
              </div>

              <div className="p-3 rounded bg-background border border-surface-border">
                <span className="text-[10px] text-accent-alt uppercase block">Tier 04 · Observability</span>
                <span className="font-bold text-text-primary text-xs font-sans block mt-0.5">Structured Telemetry</span>
                <span className="text-[11px] text-text-secondary font-sans block mt-1">
                  Request correlation IDs, error categorization, health probes.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Adjacent Text Equivalent & Practice Area Deep Dive */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-surface-border pt-6 lg:pt-0 lg:pl-8">
          <div>
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-1">
              Adjacent Text Equivalent
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3">
              {pillars[activeArea].name}
            </h3>

            <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
              {pillars[activeArea].description}
            </p>

            <div className="p-4 rounded-lg bg-background border border-surface-border mb-6">
              <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-2">
                Architectural Trade-off
              </span>
              <p className="text-xs text-text-secondary font-body leading-relaxed">
                Prioritizing modular boundaries and strict DTO contracts requires slightly higher upfront schema definition, but guarantees that frontend consumer changes never cascade into unexpected breaking regressions.
              </p>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs text-text-secondary block mb-2">
              Select practice area to inspect:
            </span>
            <div className="flex flex-wrap gap-2">
              {pillars.map((pillar, idx) => (
                <button
                  key={pillar.tag}
                  onClick={() => setActiveArea(idx)}
                  className={`font-mono text-xs px-2.5 py-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-accent ${
                    activeArea === idx
                      ? "bg-accent text-background font-bold"
                      : "bg-background text-text-secondary hover:text-text-primary border border-surface-border"
                  }`}
                >
                  {pillar.tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
