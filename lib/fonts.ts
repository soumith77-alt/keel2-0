// lib/fonts.ts
import { Source_Serif_4 } from "next/font/google";

// “Source Serif Pro” is now “Source Serif 4” on Google Fonts
export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
