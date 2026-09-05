import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { portfolioContent, ToolkitCategory } from "../../../configuration/content";

export default function TechnicalToolkit() {
  const categories = portfolioContent.toolkit;

  const getTierStyle = (level: "production" | "familiar" | "exploring") => {
    switch (level) {
      case "production":
        return "bg-accent/10 text-accent border-accent/30";
      case "familiar":
        return "bg-surface text-text-secondary border-surface-border";
      case "exploring":
        return "bg-purple-900/20 text-purple-300 border-purple-800/40";
      default:
        return "bg-surface text-text-secondary border-surface-border";
    }
  };

  return (
    <section
      id="toolkit"
      aria-label="Technical Toolkit"
      className="flex flex-col bg-background w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72 py-24 border-t border-surface-border"
    >
      {/* Section Header */}
      <div className="flex flex-row items-center mb-4">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-accent" />
        <div className="flex items-center space-x-2 pr-4">
          <span className="text-accent font-mono text-sm sm:text-base">04.</span>
          <h2 className="font-bold text-text-primary text-xl sm:text-2xl tracking-wide">
            Technical Toolkit
          </h2>
        </div>
        <div className="bg-surface-border h-[1px] flex-1 max-w-xs" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <p className="font-body text-text-secondary text-sm sm:text-base max-w-xl">
          Core technologies grouped strictly by engineering layer, verified by production delivery.
        </p>

        {/* Legend */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 text-xs font-mono">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-text-primary">Production</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-text-secondary" />
            <span className="text-text-secondary">Working</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-purple-300">Exploring</span>
          </div>
        </div>
      </div>

      {/* 6-Cell Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-xl bg-surface border border-surface-border hover:border-accent/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-bold text-text-primary">{category.title}</h3>
              <p className="text-xs text-text-secondary font-mono mt-0.5 mb-4">{category.subtitle}</p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`font-mono text-xs px-2.5 py-1 rounded border transition-colors ${getTierStyle(
                      skill.level
                    )}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
