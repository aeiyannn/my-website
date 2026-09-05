import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const navItems = [
  { label: "Work", target: "work", num: "01" },
  { label: "Architecture", target: "architecture", num: "02" },
  { label: "Experience", target: "experience", num: "03" },
  { label: "Toolkit", target: "toolkit", num: "04" },
  { label: "About", target: "about", num: "05" },
  { label: "Contact", target: "contact", num: "06" },
];

export default function MobileMenu(props: {
  rotate: boolean;
  setRotate: (v: boolean) => void;
  setShowElement: (v: boolean) => void;
  ShowElement: boolean;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = React.useCallback(() => {
    props.setRotate(false);
    props.setShowElement(true);
  }, [props]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && props.rotate) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [props.rotate, closeMenu]);

  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`w-full fixed inset-0 h-screen flex md:hidden z-50 ${props.rotate ? "pointer-events-auto" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className="w-1/4 h-full bg-background/70 backdrop-blur-sm cursor-pointer"
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          ref={menuRef}
          className="w-3/4 h-full bg-surface border-l border-surface-border flex flex-col justify-center items-center space-y-6 px-6 font-mono"
        >
          <span className="text-xs text-text-secondary uppercase tracking-widest mb-2">Navigation</span>

          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              href={`#${item.target}`}
              onClick={closeMenu}
              className="flex items-center space-x-2 text-text-primary hover:text-accent transition-colors duration-200 cursor-pointer text-sm py-1"
            >
              <span className="text-accent text-xs">{item.num}.</span>
              <span>{item.label}</span>
            </Link>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-4 font-mono text-xs text-accent border border-accent/70 hover:bg-accent/10 px-6 py-2.5 rounded transition-colors"
          >
            Download Résumé
          </a>
        </div>
      </motion.div>
    </>
  );
}
