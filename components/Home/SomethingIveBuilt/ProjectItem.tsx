import React, { useRef } from "react";
import Link from "next/link";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import { useRouter } from "next/router";
import { ProjectEvidence } from "../../../configuration/content";

export default function ProjectItem({
  project,
  index,
}: {
  project: ProjectEvidence;
  index: number;
}) {
  const router = useRouter();
  const isOdd = index % 2 !== 0;
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el || window.innerWidth < 768) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <article
      ref={cardRef}
      data-project-slug={project.slug}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card rounded-xl bg-surface border border-surface-border hover:border-accent/40 transition-[border-color] duration-200 overflow-hidden flex flex-col lg:grid lg:grid-cols-12 gap-6 p-6 sm:p-8"
      style={{ transformStyle: "preserve-3d", willChange: "transform", transition: "transform 0.1s ease, border-color 0.2s ease" }}
      aria-labelledby={`project-title-${project.slug}`}
    >
      {/* Left Column (Desktop image) or Top (Mobile) */}
      <div className={`lg:col-span-5 flex flex-col justify-between ${isOdd ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative rounded-lg overflow-hidden border border-surface-border aspect-video bg-background/80 group">
          <Img
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live platform for ${project.title}`}
              className="absolute inset-0 bg-background/40 hover:bg-background/10 transition-colors duration-200 z-10"
            />
          )}
        </div>

        {/* Stack chips grouped by layer */}
        <div className="mt-4 pt-3 border-t border-surface-border">
          <span className="font-mono text-[11px] text-text-secondary uppercase tracking-wider block mb-2">
            Layered Tech Stack
          </span>
          <div className="space-y-1.5 text-xs font-mono">
            {project.stackGroups.frontend && (
              <div className="flex items-start gap-2">
                <span className="text-accent text-[11px] min-w-[65px]">Frontend:</span>
                <span className="text-text-secondary">{project.stackGroups.frontend}</span>
              </div>
            )}
            {project.stackGroups.backend && (
              <div className="flex items-start gap-2">
                <span className="text-accent-alt text-[11px] min-w-[65px]">Backend:</span>
                <span className="text-text-secondary">{project.stackGroups.backend}</span>
              </div>
            )}
            {project.stackGroups.data && (
              <div className="flex items-start gap-2">
                <span className="text-warning text-[11px] min-w-[65px]">Data:</span>
                <span className="text-text-secondary">{project.stackGroups.data}</span>
              </div>
            )}
            {project.stackGroups.integrations && (
              <div className="flex items-start gap-2">
                <span className="text-purple-300 text-[11px] min-w-[65px]">Bridge:</span>
                <span className="text-text-secondary">{project.stackGroups.integrations}</span>
              </div>
            )}
            {project.stackGroups.deployment && (
              <div className="flex items-start gap-2">
                <span className="text-text-secondary text-[11px] min-w-[65px]">Deploy:</span>
                <span className="text-text-secondary">{project.stackGroups.deployment}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Narrative Proof & Details */}
      <div className={`lg:col-span-7 flex flex-col justify-between ${isOdd ? "lg:order-1" : "lg:order-2"}`}>
        <div>
          {/* Context & Category Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider">
              {project.context}
            </span>
            <span className="text-surface-border">·</span>
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-[10px] text-text-secondary bg-background px-2 py-0.5 rounded border border-surface-border"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 id={`project-title-${project.slug}`} className="text-xl sm:text-2xl font-bold text-text-primary">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary font-mono mt-0.5">
            {project.subtitle}
          </p>

          {/* Outcome Headline (Without Hover) */}
          <div className="mt-4 p-3 rounded-lg bg-background/80 border border-surface-border">
            <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-1">
              Measurable Outcome
            </span>
            <p className="text-sm font-medium text-text-primary leading-snug">
              {project.outcome}
            </p>
          </div>

          {/* Ownership Line (Without Hover) */}
          <div className="mt-3">
            <span className="font-mono text-[11px] text-text-secondary uppercase tracking-wider">
              Engineering Ownership:
            </span>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5 leading-relaxed">
              {project.ownership}
            </p>
          </div>

          {/* Architecture Signal (Without Hover) */}
          <div className="mt-3 p-2.5 rounded bg-background/50 border border-surface-border/80">
            <span className="font-mono text-[11px] text-accent-alt uppercase tracking-wider block">
              Architecture Signal:
            </span>
            <p className="font-mono text-xs text-text-primary mt-1">
              {project.architectureSignal}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-surface-border">
          <div className="flex items-center gap-4">
            {project.caseStudyUrl && (
              <Link href={project.caseStudyUrl}>
                <span className="inline-flex items-center font-mono text-xs text-accent hover:text-white border border-accent/70 hover:border-accent hover:bg-accent px-4 py-2 rounded transition-colors cursor-pointer">
                  Read architecture case study →
                </span>
              </Link>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit live deployment of ${project.title}`}
                className="font-mono text-xs text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                <span>Live deployment</span>
                <ExternalLink url={project.liveUrl} router={router} />
              </a>
            )}
          </div>

          {project.githubUrl && (
            <div className="flex items-center space-x-2">
              <GithubIcon link={project.githubUrl} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}