import { HTMLAttributes, forwardRef } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { wide?: boolean };

export const Container = forwardRef<HTMLDivElement, Props>(function Container(
  { wide, style, className, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: `var(${wide ? "--container-wide" : "--container"})`,
        marginInline: "auto",
        ...style,
      }}
      {...rest}
    />
  );
});
