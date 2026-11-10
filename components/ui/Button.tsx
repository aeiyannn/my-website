import { ButtonHTMLAttributes, forwardRef, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { T } from "../../lib/motion";

type Variant = "primary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
};

const sizeMap: Record<Size, { px: string; py: string; fs: string }> = {
  sm: { px: "var(--s-3)", py: "var(--s-2)", fs: "var(--fs-small)" },
  md: { px: "var(--s-5)", py: "var(--s-3)", fs: "var(--fs-body)" },
  lg: { px: "var(--s-6)", py: "var(--s-4)", fs: "var(--fs-h4)" },
};

const variantStyle = (v: Variant): React.CSSProperties => {
  if (v === "primary")
    return {
      background: "var(--primary)",
      color: "var(--primary-fg)",
      border: `var(--bw) solid var(--primary)`,
    };
  if (v === "ghost")
    return {
      background: "transparent",
      color: "var(--text)",
      border: `1.5px solid var(--border)`,
    };
  return {
    background: "transparent",
    color: "var(--text)",
    border: `var(--bw) solid transparent`,
    padding: 0,
  };
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", size = "md", magnetic, style, onMouseMove, onMouseLeave, children, ...rest },
  ref
) {
  const inner = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    onMouseMove?.(e);
    if (!magnetic || !inner.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const mx = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const my = (e.clientY - (r.top + r.height / 2)) * 0.25;
    inner.current.style.transform = `translate(${mx}px, ${my}px)`;
  };

  const onLeave = (e: MouseEvent<HTMLButtonElement>) => {
    onMouseLeave?.(e);
    if (!magnetic || !inner.current) return;
    inner.current.style.transform = "translate(0,0)";
  };

  const sz = sizeMap[size];
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--s-2)",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: sz.fs,
    lineHeight: 1,
    letterSpacing: "0",
    padding: variant === "link" ? 0 : `${sz.py} ${sz.px}`,
    borderRadius: variant === "link" ? 0 : "var(--r-button)",
    cursor: "pointer",
    transitionProperty: "background, color, border-color, transform",
    transitionDuration: "var(--dur-base)",
    transitionTimingFunction: "var(--ease-out-expo)",
    outline: "none",
    ...variantStyle(variant),
  };

  return (
    <motion.button
      ref={ref as any}
      whileTap={{ scale: 0.98 }}
      transition={T.fast}
      onMouseMove={onMove as any}
      onMouseLeave={onLeave as any}
      style={{ ...base, ...style }}
      {...(rest as any)}
    >
      <span
        ref={inner}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--s-2)",
          transition: `transform var(--dur-base) var(--ease-spring-soft)`,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
});
