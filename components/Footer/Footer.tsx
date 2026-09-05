import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

const ClickableIcon = (props: { href: string; Icon: any; label: string }) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      aria-label={props.label}
      className="p-2 text-text-secondary hover:text-accent transition-colors duration-200"
    >
      <props.Icon className="w-5 h-5 fill-current" />
    </a>
  );
};

const iconsData = [
  { href: "https://github.com/aeiyannn", Icon: GithubIcon, label: "Aeiyan Khan on GitHub" },
  { href: "https://www.linkedin.com/in/aeiyan-khan/", Icon: LinkedinIcon, label: "Aeiyan Khan on LinkedIn" },
  { href: "https://www.instagram.com/xredme/", Icon: InstagramIcon, label: "Aeiyan Khan on Instagram" },
  { href: "https://www.youtube.com/@aeiyankhan3489", Icon: YoutubeIcon, label: "Aeiyan Khan on YouTube" },
];

export default function Footer({
  githubUrl = "https://github.com/aeiyannn/my-website",
  hideSocialsInDesktop = true,
}: {
  githubUrl?: string;
  hideSocialsInDesktop?: boolean;
}) {
  return (
    <footer className="bg-background border-t border-surface-border flex flex-col justify-center items-center py-8 space-y-4">
      {/* Mobile Socials */}
      <div className={`flex flex-row space-x-6 ${hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {iconsData.map((item) => (
          <ClickableIcon key={item.href} href={item.href} Icon={item.Icon} label={item.label} />
        ))}
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col font-mono justify-center items-center text-text-secondary text-xs space-y-1.5 hover:text-accent transition-colors"
      >
        <span>Designed &amp; Engineered by Aeiyan Khan</span>
        <span className="flex items-center space-x-1.5 text-[11px] text-text-secondary group-hover:text-accent">
          <GithubIcon className="w-3.5 h-3.5 fill-current" />
          <span>Open Source on GitHub</span>
        </span>
      </a>
    </footer>
  );
}
