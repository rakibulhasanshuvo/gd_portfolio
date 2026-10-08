import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Permanent_Marker, Syne, Space_Grotesk, Russo_One, Chakra_Petch } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  subsets: ["latin"],
  variable: "--font-russo",
  weight: ["400"],
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-chakra",
  weight: ["600", "700"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-marker",
  weight: ["400"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gdportfolio-omega.vercel.app"),
  title: "Muhammad Rakibul Hasan Shuvo — Visual & UI Designer | Brand & Graphic Specialist",
  description: "Graphic design, commercial screen-print packaging (500+ bags), logo identity systems, and high-impact poster design by Muhammad Rakibul Hasan Shuvo.",
  keywords: [
    "Graphic Designer Portfolio",
    "Screen Print Packaging",
    "Bag Design",
    "Logo Design",
    "Brand Identity",
    "Muhammad Rakibul Hasan Shuvo",
    "Prepress Specialist",
    "UI Designer"
  ],
  authors: [{ name: "Muhammad Rakibul Hasan Shuvo" }],
  openGraph: {
    title: "Muhammad Rakibul Hasan Shuvo — Visual & UI Designer",
    description: "Precision graphic and UI designer portfolio featuring commercial screen-print packaging, brandmark systems, and digital interfaces.",
    url: "https://gdportfolio-omega.vercel.app",
    siteName: "Muhammad Rakibul Hasan Shuvo Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${russoOne.variable} ${chakraPetch.variable} ${permanentMarker.variable} ${syne.variable} ${spaceGrotesk.variable} ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[#f6f5f0] text-[#0f1012] selection:bg-[#f5b800] selection:text-black">
        <div className="fixed inset-0 halftone-paper opacity-40 z-0 pointer-events-none" />
        <div className="relative z-10 flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
