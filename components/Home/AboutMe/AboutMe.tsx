import React, { useEffect, useRef } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import { portfolioContent } from "../../../configuration/content";

export default function AboutMe() {
  const { bioParagraphs, principles, productionValues } = portfolioContent.about;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | null = null;

    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Bio paragraphs slide in from left
        const paras = sectionRef.current?.querySelectorAll(".about-bio p");
        if (paras?.length) {
          gsap.from(paras, {
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
            x: -24, opacity: 0, duration: 0.55, stagger: 0.1, ease: "power2.out", clearProps: "all",
          });
        }

        // Profile image fades in from right
        const img = sectionRef.current?.querySelector(".about-photo");
        if (img) {
          gsap.from(img, {
            scrollTrigger: { trigger: img, start: "top 80%", once: true },
            x: 24, opacity: 0, duration: 0.6, ease: "power2.out", clearProps: "all",
          });
        }

        // Principle cards stagger up
        const cards = sectionRef.current?.querySelectorAll(".principle-card");
        if (cards?.length) {
          gsap.from(cards, {
            scrollTrigger: { trigger: cards[0], start: "top 85%", once: true },
            y: 28, opacity: 0, duration: 0.5, stagger: 0.12, ease: "power2.out", clearProps: "all",
          });
        }

        // Values row fades in
        const vals = sectionRef.current?.querySelectorAll(".value-card");
        if (vals?.length) {
          gsap.from(vals, {
            scrollTrigger: { trigger: vals[0], start: "top 90%", once: true },
            y: 16, opacity: 0, duration: 0.45, stagger: 0.08, ease: "power2.out", clearProps: "all",
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
      id="about"
      aria-label="About Aeiyan Khan"
      className="flex flex-col bg-canvas w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72 py-24 border-t border-hairline"
    >
      {/* Section Header */}
      <div className="flex flex-row items-center mb-4">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-accent" />
        <div className="flex items-center space-x-2 pr-4">
          <span className="text-accent font-mono text-sm sm:text-base">05.</span>
          <h2 className="font-bold text-ink text-xl sm:text-2xl tracking-wide">
            About Me
          </h2>
        </div>
        <div className="bg-hairline h-[1px] flex-1 max-w-xs" />
      </div>

      {/* Bio + Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        <div className="about-bio lg:col-span-7 space-y-4 font-body text-sm sm:text-base text-muted leading-relaxed">
          {bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Quick tags */}
          <div className="pt-4 mt-6 border-t border-hairline">
            <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-2">
              How I work with teams:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-muted">
              {["Product → Engineering bridge", "UI/UX collaboration", "Mentoring juniors", "Code reviews"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-surface-card border border-hairline">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="about-photo lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-accent/50 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300"
              aria-hidden="true"
            />
            <div className="relative rounded-xl overflow-hidden border border-hairline bg-surface-card aspect-square">
              <Img
                src="/img/mypic.png"
                alt="Aeiyan Khan | Full-Stack Engineer & Project Manager"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="mb-16">
        <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-4">
          How I think about the work
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <div
              key={p.title}
              className="principle-card p-5 rounded-xl bg-surface-card border border-hairline hover:border-accent/40 transition-colors"
            >
              <span className="font-mono text-xs text-accent block mb-2">0{idx + 1}.</span>
              <h3 className="text-base font-semibold text-ink mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-muted font-body leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="p-6 rounded-xl bg-surface-card border border-hairline">
        <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-3">
          What I care about
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productionValues.map((v) => (
            <div key={v.label} className="value-card p-3 rounded-lg bg-canvas border border-hairline">
              <span className="font-mono text-xs text-ink font-semibold block mb-1">{v.label}</span>
              <span className="text-xs text-muted font-body leading-relaxed block">{v.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
