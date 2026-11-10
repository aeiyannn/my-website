import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ponytail: 2D first. R3F variant is a separate dynamic import; swap in when needed.
// Spring physics via useSpring, glare via radial-gradient layer, parallax between layers.

type Props = {
  name: string;
  role: string;
  tagline: string;
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const SPRING = { stiffness: 220, damping: 22, mass: 0.6 };

export function HeroCard({
  name,
  role,
  tagline,
  eyebrow = "Hero card",
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltable, setTiltable] = useState(true);

  // Raw pointer deltas normalized to -1..1
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, SPRING);
  const smy = useSpring(my, SPRING);

  // Rotate up to 8deg either axis
  const rotY = useTransform(smx, (v) => v * 8);
  const rotX = useTransform(smy, (v) => -v * 8);
  // Layered parallax: deeper layers move less
  const bgX = useTransform(smx, (v) => v * -14);
  const bgY = useTransform(smy, (v) => v * -14);
  const fgX = useTransform(smx, (v) => v * 10);
  const fgY = useTransform(smy, (v) => v * 10);

  // Glare position in %
  const glareX = useTransform(smx, (v) => `${50 + v * 50}%`);
  const glareY = useTransform(smy, (v) => `${50 + v * 50}%`);
  const glareOpacity = useTransform([smx, smy] as any, (vals: any) => {
    const [x, y] = vals as [number, number];
    return Math.min(1, Math.hypot(x, y) * 0.9);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (reduce) setTiltable(false);

    if (!touch || reduce) return;
    // ponytail: mobile gyro — only after permission on iOS. Fail silent on refusal.
    const handler = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      mx.set(Math.max(-1, Math.min(1, e.gamma / 35)));
      my.set(Math.max(-1, Math.min(1, (e.beta - 30) / 35)));
    };
    const anyDM: any = (window as any).DeviceMotionEvent;
    const needPerm = anyDM && typeof anyDM.requestPermission === "function";
    if (needPerm) {
      // ponytail: user-gesture required on iOS — tap anywhere to opt in.
      const askOnce = async () => {
        try {
          const r = await anyDM.requestPermission();
          if (r === "granted") window.addEventListener("deviceorientation", handler);
        } catch {}
        window.removeEventListener("click", askOnce);
      };
      window.addEventListener("click", askOnce, { once: true });
    } else {
      window.addEventListener("deviceorientation", handler);
    }
    return () => window.removeEventListener("deviceorientation", handler);
  }, [mx, my]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltable || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
    mx.set(nx);
    my.set(ny);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        perspective: 1400,
        maxWidth: 720,
        width: "100%",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          rotateX: tiltable ? rotX : 0,
          rotateY: tiltable ? rotY : 0,
          transformStyle: "preserve-3d",
          background: "var(--elev)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-card)",
          padding: "clamp(var(--s-8), 5vw, var(--s-16))",
          boxShadow: "var(--elev-3)",
          overflow: "hidden",
        }}
      >
        {/* Depth bg — taupe blob that parallaxes with cursor */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-20% -10% auto auto",
            width: "55%",
            height: "55%",
            background:
              "radial-gradient(60% 60% at 50% 50%, var(--accent-decor) 0%, transparent 60%)",
            x: bgX,
            y: bgY,
            opacity: 0.35,
            pointerEvents: "none",
            transform: "translateZ(-40px)",
          }}
        />
        {/* Hairline grid for Swiss feel */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
            opacity: 0.35,
            pointerEvents: "none",
          }}
        />

        {/* Content layer */}
        <motion.div
          style={{
            position: "relative",
            x: fgX,
            y: fgY,
            transform: "translateZ(40px)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--fs-caption)",
              letterSpacing: "var(--ls-caption)",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {eyebrow}
          </div>
          <h1
            style={{
              margin: "var(--s-3) 0 var(--s-4)",
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-display)",
              lineHeight: "var(--lh-display)",
              letterSpacing: "var(--ls-display)",
              fontWeight: 900,
              color: "var(--text)",
            }}
          >
            {name}
          </h1>
          <div
            style={{
              fontSize: "var(--fs-h3)",
              fontWeight: 600,
              color: "var(--text)",
              letterSpacing: "var(--ls-h3)",
              marginBottom: "var(--s-4)",
            }}
          >
            {role}
          </div>
          <p
            style={{
              maxWidth: "48ch",
              color: "var(--muted)",
              fontSize: "var(--fs-body)",
              lineHeight: "var(--lh-body)",
              margin: 0,
            }}
          >
            {tagline}
          </p>

          {(ctaLabel || secondaryLabel) && (
            <div style={{ display: "flex", gap: "var(--s-3)", marginTop: "var(--s-6)", flexWrap: "wrap" }}>
              {ctaLabel && (
                <a
                  href={ctaHref ?? "#"}
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-fg)",
                    padding: "12px 22px",
                    borderRadius: "var(--r-button)",
                    fontSize: "var(--fs-small)",
                    fontWeight: 500,
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                  }}
                >
                  {ctaLabel}
                </a>
              )}
              {secondaryLabel && (
                <a
                  href={secondaryHref ?? "#"}
                  style={{
                    border: "1.5px solid var(--border)",
                    color: "var(--text)",
                    padding: "12px 22px",
                    borderRadius: "var(--r-button)",
                    fontSize: "var(--fs-small)",
                    fontWeight: 500,
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                  }}
                >
                  {secondaryLabel}
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Specular glare — cursor-tracked */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: useTransform([glareX, glareY] as any, (vals: any) => {
              const [x, y] = vals as [string, string];
              return `radial-gradient(240px 160px at ${x} ${y}, rgba(255,255,255,0.55), rgba(255,255,255,0) 70%)`;
            }) as any,
            opacity: glareOpacity,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
