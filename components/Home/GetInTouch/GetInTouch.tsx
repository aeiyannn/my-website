import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";

export default function GetInTouch() {
  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="flex flex-col bg-canvas w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72 py-24 border-t border-hairline"
    >
      {/* Section Header */}
      <div className="flex flex-row items-center mb-4">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-accent" />
        <div className="flex items-center space-x-2 pr-4">
          <span className="text-accent font-mono text-sm sm:text-base">06.</span>
          <h2 className="font-bold text-ink text-xl sm:text-2xl tracking-wide">
            Let&apos;s Talk
          </h2>
        </div>
        <div className="bg-hairline h-[1px] flex-1 max-w-xs" />
      </div>

      <div className="max-w-2xl mt-4">
        {/* Headline */}
        <h3 className="font-Header font-normal text-3xl sm:text-4xl text-ink tracking-tight leading-tight" style={{ letterSpacing: "-0.5px" }}>
          Open to new opportunities — full-time roles, freelance projects, or just a good conversation.
        </h3>
        <p className="font-body text-muted text-sm sm:text-base mt-4 leading-relaxed">
          The quickest way to reach me is email. I typically respond within a day.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:aeiyankhan2@gmail.com"
          className="inline-block mt-8 font-mono text-sm text-white bg-accent hover:bg-coral-active px-8 py-4 rounded-lg transition-colors font-medium"
        >
          aeiyankhan2@gmail.com →
        </a>

        {/* Two-card options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <a
            href="mailto:aeiyankhan2@gmail.com?subject=Job%20Opportunity%20%E2%80%94%20Aeiyan%20Khan"
            className="p-6 rounded-xl bg-surface-card border border-hairline hover:border-accent/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-2">
                For Teams & Recruiters
              </span>
              <h4 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                Hiring or building a team? →
              </h4>
              <p className="text-xs text-muted font-body mt-2 leading-relaxed">
                I'm open to full-time roles — engineering, team lead, or project management positions.
              </p>
            </div>
          </a>

          <a
            href="mailto:aeiyankhan2@gmail.com?subject=Project%20Enquiry%20%E2%80%94%20Aeiyan%20Khan"
            className="p-6 rounded-xl bg-surface-card border border-hairline hover:border-accent/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-2">
                For Founders & Clients
              </span>
              <h4 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                Have a project in mind? →
              </h4>
              <p className="text-xs text-muted font-body mt-2 leading-relaxed">
                I take on select freelance work — web apps, dashboards, APIs, and full-stack builds.
              </p>
            </div>
          </a>
        </div>

        {/* Footer links */}
        <div className="mt-10 pt-8 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
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

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-accent border border-accent/50 hover:bg-accent hover:text-white px-4 py-2 rounded-lg transition-colors"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
