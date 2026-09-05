import React, { useEffect, useRef } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import gsap from "gsap";
import { portfolioContent } from "../../../configuration/content";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import HeroCanvas from "./HeroCanvas";

export default function MyName({ finishedLoading = true }: { finishedLoading?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const { roleTitle, headline, supportingLine, verifiedStats } = portfolioContent.positioning;

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-label="Introduction"
      className="relative min-h-[92vh] flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72 pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* Three.js node network background */}
      <HeroCanvas />

      <div className="relative z-10 max-w-3xl">
        {/* Role Subheading */}
        <div className="hero-anim flex items-center space-x-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-mono text-xs sm:text-sm text-accent tracking-wider uppercase">
            {roleTitle}
          </span>
        </div>

        {/* Primary H1: Cormorant Garamond display serif */}
        <h1 className="hero-anim font-Header font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink tracking-tight leading-[1.05]"
            style={{ letterSpacing: "-1.5px" }}>
          {headline}
        </h1>

        {/* Supporting Copy */}
        <p className="hero-anim mt-6 text-base sm:text-lg text-muted leading-relaxed font-body max-w-2xl">
          {supportingLine}
        </p>

        {/* Primary & Secondary Actions */}
        <div className="hero-anim flex flex-wrap items-center gap-4 mt-8">
          <ReactScrollLink
            to="work"
            spy={true}
            smooth={true}
            offset={-80}
            duration={300}
            href="#work"
          >
            <button className="font-mono text-xs sm:text-sm text-white bg-accent hover:bg-coral-active px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas">
              See My Work
            </button>
          </ReactScrollLink>

          <a
            href="mailto:aeiyankhan2@gmail.com"
            className="font-mono text-xs sm:text-sm text-ink hover:text-accent border border-hairline hover:border-accent/60 bg-surface-card px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Get in Touch
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors py-2"
          >
            Download résumé ↓
          </a>

          {/* Social Links */}
          <div className="flex items-center space-x-3 pl-2 border-l border-hairline">
            <a
              href="https://github.com/aeiyannn"
              target="_blank"
              rel="noreferrer"
              aria-label="Aeiyan Khan on GitHub"
              className="text-muted hover:text-accent transition-colors p-1"
            >
              <GithubIcon className="w-5 h-5 fill-current" />
            </a>
            <a
              href="https://www.linkedin.com/in/aeiyan-khan/"
              target="_blank"
              rel="noreferrer"
              aria-label="Aeiyan Khan on LinkedIn"
              className="text-muted hover:text-accent transition-colors p-1"
            >
              <LinkedinIcon className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>

        {/* Proof Strip */}
        {verifiedStats && verifiedStats.length > 0 && (
          <div className="hero-anim grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 pt-8 border-t border-hairline">
            {verifiedStats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg bg-surface-card border border-hairline"
              >
                <span className="font-mono text-[11px] text-accent uppercase tracking-wider block">
                  {stat.label}
                </span>
                <span className="font-Header text-2xl sm:text-3xl font-normal text-ink block mt-1" style={{ letterSpacing: "-0.5px" }}>
                  {stat.value}
                </span>
                <span className="text-xs text-muted mt-0.5 block">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
