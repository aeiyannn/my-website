import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    underline?: "always" | "hover" | "none";
    tone?: "text" | "accent" | "muted";
  };

const toneColor = {
  text: "var(--text)",
  accent: "var(--accent)",
  muted: "var(--muted)",
} as const;

export const LinkA = forwardRef<HTMLAnchorElement, Props>(function LinkA(
  { underline = "hover", tone = "text", style, children, ...rest },
  ref
) {
  const base: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    color: toneColor[tone],
    textDecoration: "none",
    paddingBottom: 2,
  };

  // Underline rendered via pseudo-ish span so it can scale on hover without layout shift
  return (
    <NextLink
      ref={ref as any}
      style={{ ...base, ...style }}
      className={`la la--${underline}`}
      {...(rest as any)}
    >
      <span className="la-text">{children}</span>
      <style jsx>{`
        .la {
          --la-color: currentColor;
        }
        .la::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--la-color);
          transform-origin: left center;
          transition: transform var(--dur-base) var(--ease-out-expo);
        }
        .la--none::after { display: none; }
        .la--always::after { transform: scaleX(1); }
        .la--hover::after { transform: scaleX(0); }
        .la--hover:hover::after,
        .la--hover:focus-visible::after { transform: scaleX(1); }
      `}</style>
    </NextLink>
  );
});
