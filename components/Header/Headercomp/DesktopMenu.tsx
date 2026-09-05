import React from "react";
import { Link as ReactScrollLink } from "react-scroll";

const navItems = [
  { label: "Work", target: "work", num: "01" },
  { label: "Architecture", target: "architecture", num: "02" },
  { label: "Experience", target: "experience", num: "03" },
  { label: "Toolkit", target: "toolkit", num: "04" },
  { label: "About", target: "about", num: "05" },
  { label: "Contact", target: "contact", num: "06" },
];

export default function DesktopMenu({ finishedLoading }: { finishedLoading?: boolean }) {
  return (
    <nav aria-label="Main Navigation" className="font-mono text-xs md:flex hidden flex-row items-center space-x-6">
      {navItems.map((item) => (
        <ReactScrollLink
          key={item.target}
          to={item.target}
          spy={true}
          smooth={true}
          offset={-80}
          duration={300}
          href={`#${item.target}`}
          className="group flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent rounded px-1.5 py-1"
        >
          <span className="text-accent text-[11px]">{item.num}.</span>
          <span className="relative">
            {item.label}
            <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-accent transition-all duration-200 group-hover:w-full"></span>
          </span>
        </ReactScrollLink>
      ))}

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        aria-label="Download Aeiyan Khan's résumé (PDF)"
        className="font-mono text-xs text-accent border border-accent/70 hover:border-accent hover:bg-accent/10 px-3.5 py-1.5 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Résumé
      </a>
    </nav>
  );
}
