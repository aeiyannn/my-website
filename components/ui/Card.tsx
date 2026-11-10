import { HTMLAttributes, forwardRef } from "react";

type Variant = "flat" | "elev" | "outline";
type Props = HTMLAttributes<HTMLDivElement> & { variant?: Variant; interactive?: boolean };

const variantStyle: Record<Variant, React.CSSProperties> = {
  flat:    { background: "var(--surface)", border: "1px solid transparent" },
  elev:    { background: "var(--elev)", border: "1px solid var(--border)", boxShadow: "var(--elev-2)" },
  outline: { background: "transparent", border: "1px solid var(--border)" },
};

export const Card = forwardRef<HTMLDivElement, Props>(function Card(
  { variant = "elev", interactive, style, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        borderRadius: "var(--r-card)",
        padding: "var(--s-6)",
        transition: `box-shadow var(--dur-hover, 200ms) var(--ease-out-expo), transform var(--dur-base) var(--ease-out-expo), border-color var(--dur-base) var(--ease-out-expo)`,
        cursor: interactive ? "pointer" : undefined,
        ...variantStyle[variant],
        ...style,
      }}
      {...rest}
    />
  );
});
