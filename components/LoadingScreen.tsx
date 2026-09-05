import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade-out at 1.2s, call onDone at 1.6s once transition finishes
    const fadeTimer = setTimeout(() => setFading(true), 1200);
    const doneTimer = setTimeout(onDone, 1700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-canvas"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Monogram */}
      <span
        className="font-Header text-7xl sm:text-8xl text-ink select-none"
        style={{ letterSpacing: "-3px", fontWeight: 400 }}
      >
        AK
      </span>

      {/* Animated bar */}
      <div className="mt-8 w-24 h-[2px] bg-hairline rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full"
          style={{
            animation: "loadbar 1.2s ease-in-out forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes loadbar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
