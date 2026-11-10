import { useEffect, useRef } from "react";

// ponytail: single DOM dot + lerped ring. Touch devices skipped.

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let over = false;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const check = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hit = !!t.closest?.("a, button, [role=button], input, textarea, select");
      if (hit !== over) {
        over = hit;
        ring.current?.classList.toggle("cu--on", hit);
      }
    };

    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", check, { passive: true });
    document.documentElement.classList.add("cu-on");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", check);
      document.documentElement.classList.remove("cu-on");
    };
  }, []);

  return (
    <>
      <div ref={ring} aria-hidden="true" className="cu cu-ring" />
      <div ref={dot} aria-hidden="true" className="cu cu-dot" />
      <style jsx global>{`
        .cu {
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
          opacity: 0;
          transition: opacity var(--dur-base) var(--ease-out-expo);
        }
        .cu-dot {
          width: 6px; height: 6px;
          background: var(--primary);
          margin: -3px 0 0 -3px;
        }
        .cu-ring {
          width: 32px; height: 32px;
          border: 1px solid var(--primary);
          border-radius: 999px;
          margin: -16px 0 0 -16px;
          transition: opacity var(--dur-base) var(--ease-out-expo),
                      width var(--dur-base) var(--ease-out-expo),
                      height var(--dur-base) var(--ease-out-expo),
                      margin var(--dur-base) var(--ease-out-expo);
        }
        .cu-ring.cu--on {
          width: 52px; height: 52px;
          margin: -26px 0 0 -26px;
        }
        html.cu-on .cu { opacity: 1; }
        html.cu-on, html.cu-on * { cursor: none !important; }
      `}</style>
    </>
  );
}
