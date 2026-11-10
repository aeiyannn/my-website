import { HTMLAttributes, forwardRef } from "react";

type Tone = "neutral" | "accent" | "ink";
type Props = HTMLAttributes<HTMLSpanElement> & { tone?: Tone };

const tones: Record<Tone, React.CSSProperties> = {
  neutral: { background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)" },
  accent:  { background: "transparent", color: "var(--accent)", border: "1px solid var(--accent)" },
  ink:     { background: "var(--primary)", color: "var(--primary-fg)", border: "1px solid var(--primary)" },
};

export const Tag = forwardRef<HTMLSpanElement, Props>(function Tag(
  { tone = "neutral", style, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--s-1)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        fontWeight: 500,
        letterSpacing: "var(--ls-caption)",
        textTransform: "uppercase",
        padding: "4px 10px",
        borderRadius: "var(--r-xs)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    />
  );
});
