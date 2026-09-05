import React, { useEffect, useRef } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { portfolioContent, CaseStudyData } from "../../configuration/content";
import gsap from "gsap";

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(portfolioContent.caseStudies);
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const study = portfolioContent.caseStudies[slug];

  if (!study) {
    return { notFound: true };
  }

  return {
    props: {
      study,
    },
  };
};

export default function CaseStudyPage({ study }: { study: CaseStudyData }) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cleanup: (() => void) | null = null;
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        if (progressBarRef.current) {
          const st = ScrollTrigger.create({
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.transform = `scaleX(${self.progress})`;
              }
            },
          });
          cleanup = () => st.kill();
        }
      });
    });

    return () => cleanup?.();
  }, []);

  return (
    <>
      <Head>
        <title>{`${study.title} — Case Study | Aeiyan Khan`}</title>
        <meta name="description" content={study.outcome} />
        <link rel="canonical" href={`https://aeiyankhan.me/work/${study.slug}`} />
      </Head>

      {/* Top Scroll Progress Indicator */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50 pointer-events-none"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="min-h-screen bg-background text-text-primary">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-surface-border px-6 sm:px-12 py-4 flex items-center justify-between">
          <Link href="/#work">
            <span className="font-mono text-xs text-accent hover:underline flex items-center gap-1.5 cursor-pointer">
              ← Back to Selected Work
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-text-primary hover:text-accent border border-surface-border px-3 py-1 rounded"
              >
                Live Deployment ↗
              </a>
            )}
            <a
              href="mailto:aeiyankhan2@gmail.com"
              className="font-mono text-xs text-background bg-accent px-3 py-1 rounded font-medium"
            >
              Discuss Project
            </a>
          </div>
        </header>

        <main id="main-content" className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
          {/* Header & Subtitle */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent uppercase tracking-wider">
                Case Study
              </span>
              {study.isProprietary && (
                <span className="font-mono text-[11px] text-warning bg-warning/10 border border-warning/30 px-2 py-0.5 rounded">
                  Proprietary details are hidden
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              {study.title}
            </h1>
            <p className="font-mono text-sm sm:text-base text-text-secondary mt-2">
              {study.subtitle}
            </p>
          </div>

          {/* 1. At-a-Glance Proof Bar */}
          <section aria-label="At a Glance Proof" className="p-6 rounded-xl bg-surface border border-surface-border mb-16">
            <h2 className="sr-only">At a Glance Proof</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono pb-6 border-b border-surface-border">
              <div>
                <span className="text-text-secondary block">Role:</span>
                <span className="text-text-primary font-bold">{study.role}</span>
              </div>
              <div>
                <span className="text-text-secondary block">Timeline:</span>
                <span className="text-text-primary font-bold">{study.timeline}</span>
              </div>
              <div>
                <span className="text-text-secondary block">Team Context:</span>
                <span className="text-text-primary font-bold">{study.teamContext}</span>
              </div>
              <div>
                <span className="text-text-secondary block">Current Status:</span>
                <span className="text-accent font-bold">{study.status}</span>
              </div>
            </div>

            <div className="mt-4 pt-2 space-y-3 font-body text-xs sm:text-sm">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider block">Outcome:</span>
                <p className="text-text-primary font-medium mt-0.5">{study.outcome}</p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent-alt uppercase tracking-wider block">What I Owned:</span>
                <p className="text-text-secondary mt-0.5">{study.ownership}</p>
              </div>
              <div>
                <span className="font-mono text-xs text-text-secondary uppercase tracking-wider block">Tech Stack:</span>
                <p className="font-mono text-xs text-text-primary mt-0.5">{study.stackSummary}</p>
              </div>
            </div>
          </section>

          {/* 2. Problem, Users, Constraints */}
          <section className="space-y-6 mb-16">
            <div className="border-b border-surface-border pb-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block">Section 01</span>
              <h2 className="text-2xl font-bold text-text-primary">Project Overview</h2>
            </div>

            <div className="space-y-4 font-body text-sm sm:text-base text-text-secondary leading-relaxed">
              <p>{study.problem.overview}</p>
              <p><strong className="text-text-primary">Target Users:</strong> {study.problem.users}</p>

              <div>
                <strong className="text-text-primary block mb-2">Key Constraints:</strong>
                <ul className="space-y-2 text-sm pl-4 border-l border-surface-border">
                  {study.problem.constraints.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-mono">▹</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded bg-surface border border-surface-border text-xs">
                <span className="text-warning font-mono font-bold block mb-0.5">Explicitly Out of Scope:</span>
                <span className="text-text-secondary">{study.problem.outOfScope}</span>
              </div>
            </div>
          </section>

          {/* 3. System Context View */}
          <section className="space-y-6 mb-16">
            <div className="border-b border-surface-border pb-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block">Section 02</span>
              <h2 className="text-2xl font-bold text-text-primary">Product Flow</h2>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border">
              <p className="font-body text-sm text-text-secondary mb-4">{study.systemContext.summary}</p>

              {/* Text Equivalent / ASCII representation */}
              <div className="p-4 rounded-lg bg-background border border-surface-border font-mono text-xs text-accent leading-relaxed">
                {study.systemContext.diagramText}
              </div>

              <span className="font-mono text-[11px] text-text-secondary block mt-3">
                {study.systemContext.caption}
              </span>
            </div>
          </section>

          {/* 4. Container & Runtime View */}
          <section className="space-y-6 mb-16">
            <div className="border-b border-surface-border pb-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block">Section 03</span>
              <h2 className="text-2xl font-bold text-text-primary">Tech Stack and Why It Was Used</h2>
            </div>

            <div className="space-y-3">
              {study.containerView.layers.map((layer) => (
                <div
                  key={layer.name}
                  className="p-4 rounded-lg bg-surface border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <h3 className="text-sm font-bold text-text-primary">{layer.name}</h3>
                    <p className="text-xs text-text-secondary font-body mt-0.5">{layer.role}</p>
                  </div>
                  <span className="font-mono text-xs text-accent-alt bg-background px-3 py-1 rounded border border-surface-border whitespace-nowrap self-start sm:self-center">
                    {layer.tech}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. One Critical Flow */}
          <section className="space-y-6 mb-16">
            <div className="border-b border-surface-border pb-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block">Section 04</span>
              <h2 className="text-2xl font-bold text-text-primary">User Journey</h2>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border space-y-4">
              <div>
                <h3 className="text-lg font-bold text-text-primary">{study.criticalFlow.title}</h3>
                <p className="text-xs sm:text-sm text-text-secondary font-body mt-1">
                  {study.criticalFlow.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-surface-border">
                {study.criticalFlow.steps.map((step) => (
                  <div key={step.step} className="flex items-start gap-4 p-3 rounded bg-background border border-surface-border">
                    <span className="font-mono text-xs text-accent font-bold px-2 py-1 rounded bg-surface border border-surface-border">
                      0{step.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary">{step.title}</h4>
                      <p className="text-xs text-text-secondary font-body mt-0.5 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. Decisions & Trade-Offs Table */}
          <section className="space-y-6 mb-16">
            <div className="border-b border-surface-border pb-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block">Section 05</span>
              <h2 className="text-2xl font-bold text-text-primary">Key Decisions</h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-surface-border bg-surface">
              <table className="w-full text-left text-xs font-body">
                <thead className="font-mono uppercase text-[11px] text-text-secondary bg-background border-b border-surface-border">
                  <tr>
                    <th className="p-3.5">Decision</th>
                    <th className="p-3.5">Alternatives Considered</th>
                    <th className="p-3.5">Why Chosen</th>
                    <th className="p-3.5">Cost / Risk Accepted</th>
                    <th className="p-3.5">Quality Attribute</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {study.decisions.map((d, i) => (
                    <tr key={i} className="hover:bg-background/40 transition-colors">
                      <td className="p-3.5 font-bold text-text-primary">{d.decision}</td>
                      <td className="p-3.5 text-text-secondary">{d.alternatives}</td>
                      <td className="p-3.5 text-accent">{d.whyChosen}</td>
                      <td className="p-3.5 text-warning">{d.costOrRisk}</td>
                      <td className="p-3.5 font-mono text-accent-alt">{d.qualityAttribute}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. Validation, What Shipped & Next Improvements */}
          <section className="space-y-6 mb-16">
            <div className="border-b border-surface-border pb-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block">Section 06</span>
              <h2 className="text-2xl font-bold text-text-primary">What We Delivered</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-surface border border-surface-border">
                <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-2">
                  What Shipped
                </span>
                <ul className="space-y-2 text-xs font-body text-text-secondary">
                  {study.validation.whatShipped.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent font-mono">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-surface-border">
                <span className="font-mono text-xs text-accent-alt uppercase tracking-wider block mb-2">
                  What I Would Improve Next
                </span>
                <ul className="space-y-2 text-xs font-body text-text-secondary">
                  {study.validation.whatToImproveNext.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-alt font-mono">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 8. End-of-Study Contact CTA */}
          <section className="p-8 rounded-xl bg-surface border border-accent/40 text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
              Interested in how this project approach can help your product?
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary font-body max-w-lg mx-auto">
              I can walk you through the stack choices, delivery process, and results.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:aeiyankhan2@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(study.title)}`}
                className="font-mono text-xs text-background bg-accent px-6 py-2.5 rounded font-bold hover:bg-accent/90 transition-colors"
              >
                Discuss this case study
              </a>
              <Link href="/#work">
                <span className="font-mono text-xs text-text-secondary hover:text-text-primary border border-surface-border px-4 py-2.5 rounded cursor-pointer">
                  Explore other projects
                </span>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
