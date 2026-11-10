import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence as RawAP } from "framer-motion";
import { T, entryVariant, stagger } from "../../lib/motion";
import { LinkA } from "./LinkA";
import { Container } from "./Container";

const AnimatePresence = RawAP as any;

type Item = { href: string; label: string };
type Props = {
  brand: React.ReactNode;
  items: Item[];
  cta?: { href: string; label: string };
};

export function Nav({ brand, items, cta }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBlock: "var(--s-4)",
            gap: "var(--s-6)",
          }}
        >
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing: "-0.01em" }}>
            {brand}
          </div>

          {/* Desktop */}
          <nav
            aria-label="Primary"
            className="nav-desk"
            style={{ display: "none", gap: "var(--s-6)", alignItems: "center" }}
          >
            {items.map((it) => (
              <LinkA
                key={it.href}
                href={it.href}
                underline="hover"
                style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-small)", fontWeight: 500 }}
              >
                {it.label}
              </LinkA>
            ))}
            {cta && (
              <LinkA
                href={cta.href}
                underline="none"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-fg)",
                  padding: "10px 18px",
                  borderRadius: "var(--r-button)",
                  fontSize: "var(--fs-small)",
                  fontWeight: 500,
                }}
              >
                {cta.label}
              </LinkA>
            )}
          </nav>

          {/* Mobile trigger */}
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                aria-label="Open menu"
                className="nav-burger"
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 5,
                  width: 40,
                  height: 40,
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-xs)",
                  padding: "8px 10px",
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "block", height: 1.5, background: "var(--text)" }} />
                <span style={{ display: "block", height: 1.5, background: "var(--text)" }} />
              </button>
            </Dialog.Trigger>

            <AnimatePresence>
              {open && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={T.fast}
                      style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 200,
                        background: "rgba(10,9,8,0.4)",
                        backdropFilter: "blur(4px)",
                      }}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild aria-describedby={undefined}>
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={T.entry}
                      style={{
                        position: "fixed",
                        inset: "0 0 auto 0",
                        zIndex: 300,
                        background: "var(--bg)",
                        borderBottom: "1px solid var(--border)",
                        padding: "var(--s-8) var(--s-6) var(--s-10)",
                      }}
                    >
                      <Dialog.Title style={{ position: "absolute", left: -9999 }}>Menu</Dialog.Title>
                      <motion.ul
                        initial="hidden"
                        animate="shown"
                        variants={{ shown: { transition: { staggerChildren: stagger.base } } }}
                        style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "var(--s-5)" }}
                      >
                        {items.map((it) => (
                          <motion.li key={it.href} variants={entryVariant as any}>
                            <LinkA
                              href={it.href}
                              underline="none"
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "var(--fs-h2)",
                                fontWeight: 700,
                                letterSpacing: "var(--ls-h2)",
                              }}
                              onClick={() => setOpen(false)}
                            >
                              {it.label}
                            </LinkA>
                          </motion.li>
                        ))}
                        {cta && (
                          <motion.li variants={entryVariant as any}>
                            <LinkA
                              href={cta.href}
                              underline="none"
                              style={{
                                display: "inline-block",
                                background: "var(--primary)",
                                color: "var(--primary-fg)",
                                padding: "12px 22px",
                                borderRadius: "var(--r-button)",
                                fontSize: "var(--fs-body)",
                                fontWeight: 500,
                                marginTop: "var(--s-4)",
                              }}
                              onClick={() => setOpen(false)}
                            >
                              {cta.label}
                            </LinkA>
                          </motion.li>
                        )}
                      </motion.ul>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </Container>

      <style jsx>{`
        @media (min-width: 768px) {
          :global(.nav-desk) { display: flex !important; }
          :global(.nav-burger) { display: none !important; }
        }
      `}</style>
    </header>
  );
}
