import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

const IconClickableWithAnimation = ({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: any;
  label: string;
}) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="text-text-secondary hover:text-accent transition-colors duration-200 block p-1"
      >
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </motion.div>
  );
};

export default function SocialMediaEmail({
  finishedLoading = true,
}: {
  finishedLoading?: boolean;
}) {
  return (
    <>
      {/* Left fixed social icons bar */}
      <div className="z-30 fixed bottom-0 left-8 xl:left-12 hidden lg:flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <IconClickableWithAnimation
            Icon={GithubIcon}
            href="https://github.com/aeiyannn"
            label="Aeiyan Khan on GitHub"
          />
          <IconClickableWithAnimation
            Icon={LinkedinIcon}
            href="https://www.linkedin.com/in/aeiyan-khan/"
            label="Aeiyan Khan on LinkedIn"
          />
          <IconClickableWithAnimation
            Icon={YoutubeIcon}
            href="https://www.youtube.com/@aeiyankhan3489"
            label="Aeiyan Khan on YouTube"
          />
        </div>
        <div className="h-24 w-[1px] bg-surface-border" />
      </div>

      {/* Right fixed email bar */}
      <div className="z-30 fixed bottom-0 right-8 xl:right-12 hidden lg:flex flex-col items-center space-y-20">
        <div style={{ writingMode: "vertical-rl" }}>
          <a
            href="mailto:aeiyankhan2@gmail.com"
            aria-label="Send direct email to Aeiyan Khan"
            className="font-mono text-xs text-text-secondary hover:text-accent tracking-widest transition-colors duration-200"
          >
            aeiyankhan2@gmail.com
          </a>
        </div>
        <div className="h-24 w-[1px] bg-surface-border" />
      </div>
    </>
  );
}
