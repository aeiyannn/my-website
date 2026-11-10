import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { LinkA } from "../components/ui/LinkA";
import { Tag } from "../components/ui/Tag";
import { Card } from "../components/ui/Card";
import { Nav } from "../components/ui/Nav";
import { TextReveal } from "../components/ui/TextReveal";
import { HeroCard } from "../components/hero/HeroCard";

// ponytail: showcase route. Every token and component, toggled light/dark.
// Not linked from the main site — reachable at /design-system.

const palette = [
  { name: "n-50 · canvas", v: "--n-50" },
  { name: "n-100 · beige surface", v: "--n-100" },
  { name: "n-200 · border", v: "--n-200" },
  { name: "n-500 · grey", v: "--n-500" },
  { name: "n-700", v: "--n-700" },
  { name: "n-900 · off-black", v: "--n-900" },
  { name: "a-300 · taupe (decor)", v: "--a-300" },
  { name: "a-400 · brown (text-safe)", v: "--a-400" },
  { name: "a-500 · deep brown", v: "--a-500" },
];

const typeScale: [string, string, string][] = [
  ["Display", "--fs-display", "var(--fw-display)"],
  ["H1", "--fs-h1", "var(--fw-h1)"],
  ["H2", "--fs-h2", "var(--fw-h2)"],
  ["H3", "--fs-h3", "var(--fw-h3)"],
  ["H4", "--fs-h4", "var(--fw-h4)"],
  ["Body", "--fs-body", "var(--fw-body)"],
  ["Small", "--fs-small", "400"],
  ["Caption", "--fs-caption", "500"],
];

const spacingSteps = ["s-1", "s-2", "s-3", "s-4", "s-6", "s-8", "s-12", "s-16"];
const radii = [
  ["r-0", "0"],
  ["r-xs", "2"],
  ["r-sm", "4"],
  ["r-md", "8"],
  ["r-lg", "14"],
  ["r-full", "999"],
];
const durations = [
  ["fast", "--dur-fast", "180ms"],
  ["hover", "--dur-hover", "200ms"],
  ["base", "--dur-base", "320ms"],
  ["entry", "--dur-entry", "420ms"],
  ["slow", "--dur-slow", "600ms"],
  ["cinematic", "--dur-cinematic", "1200ms"],
];

export default function DesignSystem() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => {
      delete document.documentElement.dataset.theme;
    };
  }, [theme]);

  return (
    <>
      <Head>
        <title>Design System — Aeiyan Khan</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div
        style={{
          background: "var(--bg)",
          color: "var(--text)",
          fontFamily: "var(--font-sans)",
          minHeight: "100vh",
        }}
      >
        <Nav
          brand="AK/DS"
          items={[
            { href: "#palette", label: "Palette" },
            { href: "#type", label: "Type" },
            { href: "#spacing", label: "Spacing" },
            { href: "#components", label: "Components" },
          ]}
          cta={{ href: "/", label: "Back to site" }}
        />

        <Container>
          <Section rhythm="lg">
            <Tag tone="accent">Internal</Tag>
            <h1
              style={{
                margin: "var(--s-4) 0 var(--s-5)",
                fontSize: "var(--fs-display)",
                lineHeight: "var(--lh-display)",
                letterSpacing: "var(--ls-display)",
                fontWeight: "var(--fw-display)" as any,
              }}
            >
              <TextReveal>Design system</TextReveal>
            </h1>
            <p style={{ maxWidth: 640, color: "var(--muted)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>
              Tokens, primitives and motion for the portfolio. Everything renders from CSS variables — no hex values in components.
            </p>
            <div style={{ display: "flex", gap: "var(--s-3)", marginTop: "var(--s-6)" }}>
              <Button onClick={() => setTheme("light")} variant={theme === "light" ? "primary" : "ghost"} size="sm">
                Light
              </Button>
              <Button onClick={() => setTheme("dark")} variant={theme === "dark" ? "primary" : "ghost"} size="sm">
                Dark
              </Button>
            </div>
          </Section>

          {/* Hero card showcase */}
          <Section id="hero" rhythm="md">
            <Tag>Hero</Tag>
            <h2 style={h2Style}>Interactive card</h2>
            <p style={{ color: "var(--muted)", marginTop: "var(--s-3)", maxWidth: 560, fontSize: "var(--fs-body)" }}>
              Pointer tilt, parallax layers, and a cursor-tracked specular glare. Reduces to a static card under reduced-motion.
            </p>
            <div style={{ marginTop: "var(--s-8)", display: "grid", placeItems: "center" }}>
              <HeroCard
                eyebrow="Design system · Hero"
                name="Aeiyan Khan"
                role="Project Manager · Senior Developer"
                tagline="Shipping product across four live Samarix pipelines. Close to the architecture, closer to the release."
                ctaLabel="See the work"
                ctaHref="/#work"
                secondaryLabel="Résumé"
                secondaryHref="/resume.pdf"
              />
            </div>
          </Section>

          {/* Palette */}
          <Section id="palette" rhythm="md">
            <Tag>Palette</Tag>
            <h2 style={h2Style}>Colour</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "var(--s-3)", marginTop: "var(--s-6)" }}>
              {palette.map((c) => (
                <div key={c.v} style={{ border: "1px solid var(--border)" }}>
                  <div style={{ height: 88, background: `var(${c.v})` }} />
                  <div style={{ padding: "var(--s-3)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-caption)", color: "var(--muted)" }}>{c.v}</div>
                    <div style={{ fontSize: "var(--fs-small)" }}>{c.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Type */}
          <Section id="type" rhythm="md">
            <Tag>Typography</Tag>
            <h2 style={h2Style}>Type scale</h2>
            <div style={{ display: "grid", gap: "var(--s-5)", marginTop: "var(--s-6)" }}>
              {typeScale.map(([name, fs, fw]) => (
                <div key={name} style={{ borderTop: "1px solid var(--border)", paddingTop: "var(--s-3)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--s-4)" }}>
                  <span style={{ fontSize: `var(${fs})`, fontWeight: fw as any, letterSpacing: name === "Display" ? "var(--ls-display)" : "-0.01em" }}>
                    {name === "Caption" ? "WIDE TRACKED LABEL" : "The grid is the API"}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-caption)", color: "var(--muted)", whiteSpace: "nowrap" }}>
                    {fs}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* Spacing */}
          <Section id="spacing" rhythm="md">
            <Tag>Spacing</Tag>
            <h2 style={h2Style}>4px base</h2>
            <div style={{ display: "grid", gap: "var(--s-2)", marginTop: "var(--s-6)" }}>
              {spacingSteps.map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "var(--s-4)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-caption)", width: 60, color: "var(--muted)" }}>{s}</span>
                  <span style={{ height: 8, background: "var(--primary)", width: `var(--${s})`, display: "block" }} />
                </div>
              ))}
            </div>
          </Section>

          {/* Radii */}
          <Section rhythm="md">
            <Tag>Shape</Tag>
            <h2 style={h2Style}>Radii</h2>
            <div style={{ display: "flex", gap: "var(--s-4)", marginTop: "var(--s-6)", flexWrap: "wrap" }}>
              {radii.map(([name, val]) => (
                <div key={name} style={{ textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: `var(--${name})` }} />
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-caption)", color: "var(--muted)", marginTop: "var(--s-2)" }}>
                    {name} · {val}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Motion */}
          <Section rhythm="md">
            <Tag>Motion</Tag>
            <h2 style={h2Style}>Durations & easings</h2>
            <table style={{ marginTop: "var(--s-6)", width: "100%", maxWidth: 560, borderCollapse: "collapse", fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)" }}>
              <tbody>
                {durations.map(([k, v, ms]) => (
                  <tr key={k} style={{ borderTop: "1px solid var(--border)" }}>
                    <td style={{ padding: "var(--s-3) 0" }}>{k}</td>
                    <td style={{ padding: "var(--s-3) 0", color: "var(--muted)" }}>{v}</td>
                    <td style={{ padding: "var(--s-3) 0", textAlign: "right" }}>{ms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* Components */}
          <Section id="components" rhythm="lg">
            <Tag>Components</Tag>
            <h2 style={h2Style}>Primitives</h2>

            <h3 style={h3Style}>Buttons</h3>
            <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap", marginTop: "var(--s-4)" }}>
              <Button variant="primary" size="sm">Primary sm</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="primary" size="lg" magnetic>Primary lg (magnetic)</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link style</Button>
            </div>

            <h3 style={h3Style}>Links</h3>
            <div style={{ display: "flex", gap: "var(--s-5)", flexWrap: "wrap", marginTop: "var(--s-4)" }}>
              <LinkA href="#" underline="hover">Hover underline</LinkA>
              <LinkA href="#" underline="always">Always underline</LinkA>
              <LinkA href="#" tone="accent">Accent tone</LinkA>
              <LinkA href="#" tone="muted" underline="hover">Muted</LinkA>
            </div>

            <h3 style={h3Style}>Tags</h3>
            <div style={{ display: "flex", gap: "var(--s-3)", marginTop: "var(--s-4)" }}>
              <Tag>Neutral</Tag>
              <Tag tone="accent">Accent</Tag>
              <Tag tone="ink">Ink</Tag>
            </div>

            <h3 style={h3Style}>Cards</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--s-4)", marginTop: "var(--s-4)" }}>
              <Card variant="flat">
                <div style={{ fontSize: "var(--fs-h3)", fontWeight: 700, marginBottom: "var(--s-2)" }}>Flat</div>
                <p style={{ color: "var(--muted)", fontSize: "var(--fs-small)", margin: 0 }}>Beige surface, no border, no shadow.</p>
              </Card>
              <Card variant="elev">
                <div style={{ fontSize: "var(--fs-h3)", fontWeight: 700, marginBottom: "var(--s-2)" }}>Elev</div>
                <p style={{ color: "var(--muted)", fontSize: "var(--fs-small)", margin: 0 }}>White, 1px border, subtle shadow.</p>
              </Card>
              <Card variant="outline">
                <div style={{ fontSize: "var(--fs-h3)", fontWeight: 700, marginBottom: "var(--s-2)" }}>Outline</div>
                <p style={{ color: "var(--muted)", fontSize: "var(--fs-small)", margin: 0 }}>Transparent, 1px border only.</p>
              </Card>
            </div>
          </Section>
        </Container>
      </div>
    </>
  );
}

const h2Style: React.CSSProperties = {
  margin: "var(--s-3) 0 0",
  fontSize: "var(--fs-h2)",
  fontWeight: 800,
  letterSpacing: "var(--ls-h2)",
};
const h3Style: React.CSSProperties = {
  marginTop: "var(--s-8)",
  marginBottom: 0,
  fontSize: "var(--fs-h3)",
  fontWeight: 700,
  letterSpacing: "var(--ls-h3)",
};
