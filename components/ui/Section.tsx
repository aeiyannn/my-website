import { HTMLAttributes, ElementType, forwardRef } from "react";

type Rhythm = "sm" | "md" | "lg" | "xl";
type Props = HTMLAttributes<HTMLElement> & { as?: ElementType; rhythm?: Rhythm };

export const Section = forwardRef<HTMLElement, Props>(function Section(
  { as: Tag = "section", rhythm = "md", style, ...rest },
  ref
) {
  return (
    <Tag
      ref={ref as any}
      style={{
        paddingBlock: `var(--section-${rhythm})`,
        ...style,
      }}
      {...rest}
    />
  );
});
