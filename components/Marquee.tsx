export default function Marquee() {
  const itemsTop = [
    "SCREEN-PRINT PACKAGING",
    "POSTERS & LUXURY PRINT",
    "500+ COMMERCIAL RUNS",
    "BRAND IDENTITY SYSTEMS",
    "VECTOR DIE-LINE ARCHITECTURE",
    "PREPRESS & SEPARATION SPECIALIST",
    "ADOBE ILLUSTRATOR EXPERT",
    "FIGMA UI PROTOTYPING",
    "ZERO REGISTRATION BLEED"
  ];

  const itemsBottom = [
    "STYLEX WEAR STREETWEAR",
    "ECHO CHAMBER RAVE POSTER",
    "OFFGRID ADVENTURE TOTE",
    "MIVARA LUXURY SYSTEM",
    "ADELINE ARCHITECTURE EXHIBIT",
    "MAILTRUM SAAS BRANDING",
    "SYNQ PLATFORM SYMBOL",
    "BTV MEDIA BROADCAST",
    "HIGH-DENSITY SPOT INKS"
  ];

  return (
    <div className="border-y-2 border-black bg-[#111114] text-white py-3.5 overflow-hidden select-none shadow-inner">
      
      {/* Top Track (Moving Left) */}
      <div className="flex animate-marquee-left whitespace-nowrap text-xs font-mono font-bold tracking-widest uppercase">
        {itemsTop.concat(itemsTop).map((item, idx) => (
          <span key={idx} className="flex items-center gap-4 mx-4">
            <span className="text-[#f4f4f5]">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
          </span>
        ))}
      </div>

      {/* Bottom Track (Moving Right) */}
      <div className="flex animate-marquee-right whitespace-nowrap text-[11px] font-mono font-medium tracking-widest uppercase mt-1.5 text-zinc-400">
        {itemsBottom.concat(itemsBottom).map((item, idx) => (
          <span key={idx} className="flex items-center gap-4 mx-4">
            <span>{item}</span>
            <span className="text-[#e63946]">✦</span>
          </span>
        ))}
      </div>

    </div>
  );
}
