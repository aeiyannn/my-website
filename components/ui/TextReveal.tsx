import { ElementType, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { entryVariant, stagger } from "../../lib/motion";

type Props = {
  children: string;
  as?: ElementType;
  mode?: "word" | "line";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

// ponytail: framer-motion v4 has no whileInView — roll an IntersectionObserver,
// fire variants once, forget. Upgrade to v11 when the rest of the site moves.
export function TextReveal({ children, as: Tag = "span", mode = "word", className, style, delay = 0 }: Props) {
  const tokens = useMemo(() => {
    if (mode === "line") return children.split(/\n/);
    return children.split(/(\s+)/);
  }, [children, mode]);

  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag ref={ref as any} className={className} style={style}>
      <motion.span
        initial="hidden"
        animate={shown ? "shown" : "hidden"}
        variants={{
          shown: { transition: { delayChildren: delay, staggerChildren: stagger.base } },
        }}
        style={{ display: "inline" }}
      >
        {tokens.map((tok, i) =>
          /^\s+$/.test(tok) ? (
            <span key={i}>{tok}</span>
          ) : (
            <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
              <motion.span variants={entryVariant as any} style={{ display: "inline-block" }}>
                {tok}
              </motion.span>
            </span>
          )
        )}
      </motion.span>
    </Tag>
  );
}
