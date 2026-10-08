import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhatIDoSection from "@/components/WhatIDoSection";
import WhereIveWorkedSection from "@/components/WhereIveWorkedSection";
import Vol01PackagingShowcase from "@/components/Vol01PackagingShowcase";
import Vol02LogoShowcase from "@/components/Vol02LogoShowcase";
import Vol03PrintShowcase from "@/components/Vol03PrintShowcase";
import ThumbnailGallery from "@/components/ThumbnailGallery";
import PrepressVisualizer from "@/components/PrepressVisualizer";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#f6f5f0] text-[#0f1012]">
      <Navbar />
      <Hero />
      <Marquee />
      <WhatIDoSection />
      <WhereIveWorkedSection />
      <Vol01PackagingShowcase />
      <Vol02LogoShowcase />
      <Vol03PrintShowcase />
      <ThumbnailGallery />
      <PrepressVisualizer />
      <ContactFooter />
    </main>
  );
}
