import { Inter, JetBrains_Mono } from "next/font/google";

// ponytail: single sans covers display + body (Swiss style). Mono for eyebrows + code.

export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-next",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-next",
  weight: ["400", "500"],
});

// Display shares the sans variable — one family, many weights.
export const fontDisplay = fontSans;

export const fontClass = `${fontSans.variable} ${fontMono.variable}`;
