export interface Project {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: 'packaging' | 'logos' | 'print';
  categoryLabel: string;
  year: string;
  client: string;
  primaryImage: string;
  mockupImage?: string;
  constructionImage?: string;
  vectorFile?: string;
  extraFiles?: string[];
  mockupType?: 'kraft_tote' | 'urban_plastic_tote' | 'luxury_matte_bag' | 'athletic_poly_bag' | 'white_handle_bag' | 'card_mockup' | 'poster_mockup' | 'logo_suite' | 'none';
  palette: string[];
  tags: string[];
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  prepressDetails?: {
    substrate: string;
    colors: string;
    runCount: string;
    tolerance: string;
    meshCount?: string;
  };
  featured?: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Disciplines', count: 18 },
  { id: 'packaging', label: 'Packaging & Bag Series', count: 6 },
  { id: 'logos', label: 'Logos & Brand Systems', count: 4 },
  { id: 'print', label: 'Posters & Luxury Print', count: 8 },
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'offgrid-bag',
    code: 'PKG-001',
    title: 'OFFGRID Adventure Packaging',
    subtitle: 'High-density commercial screen-print tote with outdoor vector graphics',
    category: 'packaging',
    categoryLabel: 'Screen-Print Packaging',
    year: '2025',
    client: 'OFFGRID Gear & Apparel',
    primaryImage: '/assets/bags/OFFGRID.svg',
    mockupImage: '/assets/bags/offgrid_mockup_real.jpg',
    vectorFile: '/assets/bags/OFFGRID.svg',
    mockupType: 'kraft_tote',
    palette: ['#18181B', '#F97316', '#FAFAF9'],
    tags: ['Screen Print', 'Non-Woven Tote', 'Vector Die-Line', 'Outdoor Retail'],
    description: 'Engineered for high-volume commercial screen printing with zero registration errors. Designed with heavy stroke calibration to ensure clean ink release on coarse non-woven fabric.',
    specs: [
      { label: 'Print Method', value: '2-Color Screen Print' },
      { label: 'Substrate', value: '120 GSM Eco Non-Woven Kraft' },
      { label: 'Color Separation', value: 'Deep Obsidian + High-Vis Orange' },
      { label: 'Vector Density', value: 'Optimized stroke & node paths' }
    ],
    prepressDetails: {
      substrate: 'Eco Non-Woven Polypropylene',
      colors: 'PMS Black + PMS 021 C (Spot Orange)',
      runCount: '5,000+ Units Commercial Run',
      tolerance: '±0.5mm registration margin',
      meshCount: '100T Screen Mesh'
    },
    featured: true
  },
  {
    id: 'stylex-wear-bag',
    code: 'PKG-002',
    title: 'Stylex Wear Streetwear Bag',
    subtitle: 'Complex urban typography and layered vector art on retail bag packaging',
    category: 'packaging',
    categoryLabel: 'Retail Packaging',
    year: '2025',
    client: 'Stylex Wear Urban Brand',
    primaryImage: '/assets/bags/stylex_wear.svg',
    mockupImage: '/assets/bags/stylex_mockup_real.jpg',
    vectorFile: '/assets/bags/stylex_wear.svg',
    mockupType: 'urban_plastic_tote',
    palette: ['#090A0F', '#E11D48', '#38BDF8', '#FFFFFF'],
    tags: ['High-Velocity Production', 'Streetwear', 'Multi-Layer Vector', 'Retail'],
    description: 'High-complexity retail bag combining raw urban typography, custom vector stamps, and multi-pass spot ink layers. Calibrated for high-speed automated screen presses without color bleeding.',
    specs: [
      { label: 'File Complexity', value: '747KB Precision Vector Curves' },
      { label: 'Ink Passes', value: '3 Spot Inks + Base White' },
      { label: 'Substrate Finish', value: 'Matte Coated Polymer' },
      { label: 'Bleed Control', value: 'Double-trapped vector overlaps' }
    ],
    prepressDetails: {
      substrate: 'D2W Bio-Degradable Polyethylene',
      colors: 'Deep Night, Crimson, Cyan & White',
      runCount: '10,000+ Units Batch',
      tolerance: 'Zero bleed registration',
      meshCount: '120T Screen Mesh'
    },
    featured: true
  },
  {
    id: 'mivara-bag',
    code: 'PKG-003',
    title: 'Mivara Luxury Retail Bag',
    subtitle: 'Minimalist high-fashion packaging with elegant curves & die-cut handle',
    category: 'packaging',
    categoryLabel: 'Luxury Packaging',
    year: '2025',
    client: 'Mivara Fashion House',
    primaryImage: '/assets/bags/mivara.svg',
    mockupImage: '/assets/bags/mivara_mockup_real.jpg',
    vectorFile: '/assets/bags/mivara.svg',
    mockupType: 'luxury_matte_bag',
    palette: ['#1E293B', '#D97706', '#F8FAFC'],
    tags: ['Luxury Apparel', 'Die-Cut Handle', 'Spot Gold', 'Minimalist'],
    description: 'Sophisticated retail packaging for an upscale boutique brand. Features razor-sharp typography, balanced white space, and spot metallic gold ink on matte charcoal craft stock.',
    specs: [
      { label: 'Design System', value: 'Mivara Brand Guidelines' },
      { label: 'Handle Type', value: 'Reinforced Oval Die-Cut' },
      { label: 'Inks', value: 'Custom Metallic Gold + Ink Charcoal' },
      { label: 'Paper Grade', value: '180 GSM Art Board' }
    ],
    prepressDetails: {
      substrate: 'Matte Laminated Art Card',
      colors: 'Pantone 871 C (Rich Gold) + Pantone Black 6 C',
      runCount: '3,000 Units Luxury Run',
      tolerance: '±0.2mm Precision',
      meshCount: '140T Ultra-Fine Mesh'
    },
    featured: true
  },
  {
    id: 'ome-sports-bag',
    code: 'PKG-004',
    title: 'OME Sports Zone Gear Bag',
    subtitle: 'Dynamic high-velocity athletic branding for sports retail packaging',
    category: 'packaging',
    categoryLabel: 'Athletic Packaging',
    year: '2025',
    client: 'OME Sports Zone',
    primaryImage: '/assets/bags/ome_sports_zone.svg',
    mockupImage: '/assets/bags/ome_mockup_real.jpg',
    vectorFile: '/assets/bags/ome_sports_zone.svg',
    mockupType: 'athletic_poly_bag',
    palette: ['#0B132B', '#0052FF', '#FFFFFF'],
    tags: ['Sportswear', 'Athletic Retail', 'Spot Blue Inks', 'Bold Geometry'],
    description: 'High-energy sportswear bag with dynamic slanted typography and athletic iconography. Specially calibrated for maximum opacity when screen printed on dark dyed fabrics.',
    specs: [
      { label: 'Substrate', value: 'Heavyweight Matte Non-Woven' },
      { label: 'Ink Formula', value: 'Plastisol High-Opacity White & Cobalt' },
      { label: 'Die-Line', value: 'Full gusset side expansion' },
      { label: 'Batch Size', value: '500+ Delivered' }
    ],
    prepressDetails: {
      substrate: 'Navy Blue Dyed Non-Woven',
      colors: 'Underbase White + Hyper Cobalt #0052FF',
      runCount: '4,500 Units',
      tolerance: '0.3mm Trapping Margin',
      meshCount: '90T Heavy Deposit Mesh'
    }
  },
  {
    id: 'mobile-media-bag',
    code: 'PKG-005',
    title: 'Mobile Media Tech Packaging',
    subtitle: 'Consumer electronics retail bag with iconographic visual language',
    category: 'packaging',
    categoryLabel: 'Tech Retail Packaging',
    year: '2025',
    client: 'Mobile Media Electronics Hub',
    primaryImage: '/assets/bags/mobile_media.svg',
    vectorFile: '/assets/bags/mobile_media.svg',
    mockupType: 'white_handle_bag',
    palette: ['#0369A1', '#0F172A', '#F0F9FF'],
    tags: ['Tech Gadgets', 'Retail Bag', 'Cyan Spot Inks', 'Geometric'],
    description: 'Clean, modern tech packaging engineered for a high-traffic consumer mobile accessories retailer. Spot cyan and deep slate ensure instant brand recognition in crowded shopping malls.',
    specs: [
      { label: 'Print Style', value: 'Vector Spot Duotone' },
      { label: 'Handles', value: 'Ultrasonic Welded Loop Handles' },
      { label: 'Prepress', value: 'Calibrated color separation' },
      { label: 'Registration', value: '100% Zero-Bleed Record' }
    ],
    prepressDetails: {
      substrate: 'Bright White LDPE',
      colors: 'PMS 3005 C + PMS Black C',
      runCount: '8,000 Units',
      tolerance: '±0.4mm',
      meshCount: '120T Screen Mesh'
    }
  },
  {
    id: 'rongin-fashion-bag',
    code: 'PKG-006',
    title: 'Rongin Fashion Apparel Bag',
    subtitle: 'Contemporary ethnic fashion packaging with custom typographic flourish',
    category: 'packaging',
    categoryLabel: 'Fashion Packaging',
    year: '2025',
    client: 'Rongin Fashion House',
    primaryImage: '/assets/bags/rongin_fashion.svg',
    vectorFile: '/assets/bags/rongin_fashion.svg',
    mockupType: 'kraft_tote',
    palette: ['#7C2D12', '#EA580C', '#FEF3C7'],
    tags: ['Ethnic Fashion', 'Apparel', 'Warm Earth Inks', 'Custom Lettering'],
    description: 'Rich warm terracotta and pumpkin orange spot inks harmonized for a boutique fashion house. Nodes smoothed to prevent screen clogs during long continuous printing runs.',
    specs: [
      { label: 'Colors', value: '2-Color Spot Inks' },
      { label: 'Material', value: 'Natural Kraft Texture Non-Woven' },
      { label: 'Run Quality', value: 'Zero registration slips' },
      { label: 'Turnaround', value: 'Fast-paced production schedule' }
    ],
    prepressDetails: {
      substrate: 'Natural Brown Kraft',
      colors: 'PMS 173 C (Terracotta) + PMS 165 C',
      runCount: '3,500 Units',
      tolerance: '±0.5mm',
      meshCount: '110T Screen Mesh'
    }
  },
  {
    id: 'created-by-shuvo-logo',
    code: 'ID-001',
    title: 'Created by Shuvo — Brand System',
    subtitle: 'Personal designer monogram symbol & full horizontal / stacked lockups',
    category: 'logos',
    categoryLabel: 'Brand Identity',
    year: '2025',
    client: 'Personal Brand (Muhammad Rakibul Hasan Shuvo)',
    primaryImage: '/assets/logos/created-by-shuvo-horizontal-mono-0052ff.svg',
    mockupImage: '/assets/logos/mockups/shuvo-mockups.png',
    constructionImage: '/assets/logos/mockups/shuvo-construction.png',
    vectorFile: '/assets/logos/created-by-shuvo-horizontal-mono-0052ff.svg',
    extraFiles: [
      '/assets/logos/created-by-shuvo-horizontal.svg',
      '/assets/logos/created-by-shuvo-stacked.svg',
      '/assets/logos/created-by-shuvo-symbol.svg',
      '/assets/logos/created-by-shuvo-horizontal-white.svg'
    ],
    mockupType: 'logo_suite',
    palette: ['#0052FF', '#111111', '#FFFFFF', '#555555'],
    tags: ['Brand Identity', 'The Swiss Duad', '256x256 Modular Grid', 'Signature Mark'],
    description: 'The definitive visual signature of Muhammad Rakibul Hasan Shuvo. Built on a mathematical 256×256 modular grid, combining the letters C and S in seamless 180° rotational symmetry with uniform 26-unit stroke weights and 20-unit negative space channels. Tested rigorously from a 16px favicon to architectural signage.',
    specs: [
      { label: 'Mark Concept', value: 'The Swiss Duad Monogram (C + S)' },
      { label: 'Grid Architecture', value: '256 × 256 Modular Unit System' },
      { label: 'Stroke & Channel', value: '26-unit stroke / 20-unit channel' },
      { label: 'Signature Color', value: 'Electric Cobalt #0052FF & Jet Carbon' },
      { label: 'Tested Scales', value: '16px, 24px, 32px, 64px, Architectural' },
      { label: 'Mockup Suite', value: 'Business Cards, App Icon, Signage, Tote' }
    ],
    featured: true
  },
  {
    id: 'mailtrum-logo',
    code: 'ID-002',
    title: 'MAILTRUM — Cloud Brand Matrix',
    subtitle: 'Dynamic email platform brand system with multi-palette showcase lockups',
    category: 'logos',
    categoryLabel: 'Tech Brand System',
    year: '2025',
    client: 'MAILTRUM Cloud Inc.',
    primaryImage: '/assets/logos/color_lockups_showcase.svg',
    mockupImage: '/assets/logos/mockups/mailtrum-mockups.png',
    constructionImage: '/assets/logos/mockups/mailtrum-construction.png',
    vectorFile: '/assets/logos/color_lockups_showcase.svg',
    extraFiles: [
      '/assets/logos/color_lockups_all.svg',
      '/assets/logos/color_options.svg'
    ],
    mockupType: 'logo_suite',
    palette: ['#0066FF', '#18181B', '#FFFFFF', '#FF6B00'],
    tags: ['SaaS Branding', 'Domain T-Shield', 'Color Matrix', 'Visual Identity'],
    description: 'Comprehensive brand identity for an enterprise email infrastructure platform. Features the Domain T-Shield mark combining kinetic envelope folds with a cybersecurity shield, evaluated across a complete 4-state background matrix (Dark Mode, Light Canvas, Deep Navy, and Amber).',
    specs: [
      { label: 'Mark Concept', value: 'Domain T-Shield Kinetic Fold' },
      { label: 'Deliverable', value: 'Complete Brand Identity System' },
      { label: 'Color Matrix', value: '4 Brand Context Variations' },
      { label: 'Typography', value: 'Custom Geometric Neo-Grotesque' },
      { label: 'Mockup Suite', value: 'Website, Browser Tab, App Icon, Cards' }
    ],
    featured: true
  },
  {
    id: 'synq-logo',
    code: 'ID-003',
    title: 'SynQ With Us Platform Brandmark',
    subtitle: 'Interlocking dual-torus monogram representing real-time collaboration',
    category: 'logos',
    categoryLabel: 'Software Brandmark',
    year: '2025',
    client: 'SynQ Digital Collaboration',
    primaryImage: '/assets/logos/synq_in_sync.svg',
    mockupImage: '/assets/logos/mockups/synq-mockups.png',
    constructionImage: '/assets/logos/mockups/synq-construction.png',
    vectorFile: '/assets/logos/synq_in_sync.svg',
    mockupType: 'logo_suite',
    palette: ['#0052FF', '#0F172A', '#10B981', '#FFFFFF'],
    tags: ['Collaboration Tool', 'The Resonant Q', 'Continuous Loop', 'Vector Monogram'],
    description: 'An interlocking ribbon monogram representing synchronization and human-to-human digital connection. Engineered using continuous mathematical curves with custom depth gradients and tested across digital cards, mobile applications, and packaging collateral.',
    specs: [
      { label: 'Mark Concept', value: 'The Resonant Q Dual-Torus' },
      { label: 'Core Geometry', value: 'Dual Overlapping Torus Curves' },
      { label: 'Symbolism', value: 'Synchronized Connection (S + Q)' },
      { label: 'Color Accent', value: 'Electric Cobalt + Emerald Glow' },
      { label: 'Mockup Suite', value: 'Payment Card, iOS Icon, Web, Stationery' }
    ]
  },
  {
    id: 'btv-refresh',
    code: 'ID-004',
    title: 'BTV Media Network Brand Refresh',
    subtitle: 'Modern dynamic identity evolution for broadcast television & digital media',
    category: 'logos',
    categoryLabel: 'Media Broadcast Identity',
    year: '2025',
    client: 'BTV Broadcast Network',
    primaryImage: '/assets/logos/concept-c-refinements.svg',
    mockupImage: '/assets/logos/mockups/btv-mockups.png',
    constructionImage: '/assets/logos/mockups/btv-construction.png',
    vectorFile: '/assets/logos/concept-c-refinements.svg',
    extraFiles: [
      '/assets/logos/concepts-color.svg'
    ],
    mockupType: 'logo_suite',
    palette: ['#006A4E', '#F42A41', '#111827', '#FFFFFF'],
    tags: ['Broadcast Media', 'The Precision Viewfinder', '1971 Heritage', 'Identity System'],
    description: 'A contemporary evolution of national broadcast television identity. Features the Precision Viewfinder architectural 16:9 aperture with crisp 24px uniform cuts framing the iconic 1971 national heritage crimson sun, optimized for 4K lower-thirds, streaming apps, and corporate event badges.',
    specs: [
      { label: 'Mark Concept', value: 'The Precision Viewfinder 16:9' },
      { label: 'Heritage Fusion', value: '1971 National Crimson Sun + Widescreen Frame' },
      { label: 'Screen Visibility', value: 'Calibrated for 4K Broadcast & Mobile Favicon' },
      { label: 'Mockup Suite', value: 'Storefront Signage, App Icon, Event Badge, Cards' }
    ]
  },
  {
    id: 'club-poster',
    code: 'PRT-001',
    title: 'Back-to-School Campus Showcase Poster',
    subtitle: 'High-impact commercial poster combining editorial typography, photo edit, & QR',
    category: 'print',
    categoryLabel: 'Print & Poster Media',
    year: '2025',
    client: 'University Student Association',
    primaryImage: '/assets/print/club_poster_highres.jpg',
    vectorFile: '/assets/print/club_poster_print_ready.svg',
    mockupType: 'poster_mockup',
    palette: ['#3B82F6', '#F59E0B', '#0F172A', '#FFFFFF'],
    tags: ['Poster Design', 'Photo Manipulation', 'Event Branding', 'Large Format 300DPI'],
    description: 'Large-format commercial print poster created in Adobe Photoshop and Illustrator. Features high-contrast typography, color-balanced model photography, integrated event QR codes, and full print-ready bleed calibrations.',
    specs: [
      { label: 'Print Format', value: 'A2 High-Resolution 300 DPI' },
      { label: 'Color Space', value: 'CMYK Euroscale Coated v2' },
      { label: 'Prepress', value: '3mm Bleed with Crop & Registration Marks' },
      { label: 'Software', value: 'Adobe Photoshop + Illustrator Vector Layering' }
    ],
    featured: true
  },
  {
    id: 'corporate-flyer',
    code: 'PRT-002',
    title: 'Corporate Growth Strategy Flyer',
    subtitle: 'Executive promotional business collateral with clean grid architecture',
    category: 'print',
    categoryLabel: 'Corporate Collateral',
    year: '2025',
    client: 'Apex Business Consulting',
    primaryImage: '/assets/print/flyer_highres.jpg',
    vectorFile: '/assets/print/flyer_print_ready.svg',
    mockupType: 'poster_mockup',
    palette: ['#0284C7', '#0F172A', '#F8FAFC'],
    tags: ['Corporate Flyer', 'Print Ready', 'CMYK Die-Line', 'Executive Collateral'],
    description: 'Multi-column corporate marketing collateral designed for crisp corporate distribution. Features geometric photo framing, infographic data callouts, and clean vector typography.',
    specs: [
      { label: 'Format', value: 'US Letter / A4 Print Collateral' },
      { label: 'Prepress Spec', value: 'Vector text outlined, 0.125in bleed' },
      { label: 'Target Audience', value: 'B2B Enterprise Decision Makers' },
      { label: 'Production', value: 'Offset High-Volume Print Ready' }
    ],
    prepressDetails: {
      substrate: '150 GSM Matte Recycled Paper',
      colors: 'Pantone Process Cyan + Rich Slate',
      runCount: '10,000 B2B Executive Copies',
      tolerance: '±0.25mm Precision Fold & Trim'
    }
  },
  {
    id: 'echo-chamber-poster',
    code: 'PRT-003',
    title: 'ECHO CHAMBER // 12-Hour Audio Experience',
    subtitle: 'Neo-brutalist underground rave festival poster with 150kW line array audio specs & timetable',
    category: 'print',
    categoryLabel: 'Electronic Music & Rave Poster',
    year: '2025',
    client: 'ECHO CHAMBER Underground Music Collective',
    primaryImage: '/assets/print/echo_chamber_poster.jpg',
    mockupType: 'poster_mockup',
    palette: ['#D4FF00', '#0B0C10', '#FFFFFF', '#FF5500'],
    tags: ['Neo-Brutalist', 'Rave Poster', 'Audio Engineering', '150kW Sound Spec', 'A2 300DPI'],
    description: 'High-impact underground festival poster combining raw industrial typography, multi-tier timetable lineup, custom sound system engineering callouts, and cyberpunk warning aesthetics. Calibrated for high-contrast outdoor street plastering and UV screen printing.',
    specs: [
      { label: 'Print Format', value: 'A2 Large-Format Screen Print (420 x 594 mm)' },
      { label: 'Audio Rig Spec', value: '150kW Custom D&B Line Array + Bass Horns' },
      { label: 'Color System', value: 'Spot Neon Lime #D4FF00 + Dense Carbon Black' },
      { label: 'Prepress', value: 'Halftone Screen Positive + 3mm Bleed' }
    ],
    prepressDetails: {
      substrate: '170 GSM Heavyweight Matte Poster Stock',
      colors: 'Fluorescent Spot Green + Carbon Black + Warm Orange',
      runCount: '2,500 Festival Screen-Prints',
      tolerance: '±0.2mm Registration Margins'
    },
    featured: true
  },
  {
    id: 'buffet-flyer',
    code: 'PRT-004',
    title: 'Taste the Flavor // All You Can Eat Buffet',
    subtitle: 'Commercial hospitality promotional flyer with dynamic cascade curves & price anchoring',
    category: 'print',
    categoryLabel: 'F&B Promotional Flyer',
    year: '2025',
    client: 'Saffron & Smoke Grill Buffet',
    primaryImage: '/assets/print/buffet_flyer.jpg',
    mockupType: 'poster_mockup',
    palette: ['#6B1724', '#F59F00', '#E8590C', '#FBF6EB'],
    tags: ['Restaurant Flyer', 'F&B Marketing', 'Dishes Cascade', 'Price Anchor', 'Offset CMYK'],
    description: 'High-converting promotional restaurant collateral featuring appetizing overhead culinary photography, dynamic organic wave framing, and psychological strikethrough discount pricing. Designed for multi-channel print distribution and high-traffic display stands.',
    specs: [
      { label: 'Format', value: 'Standard A5 Promotional Handout (148 x 210 mm)' },
      { label: 'Paper Grade', value: '170 GSM Gloss Art Paper' },
      { label: 'Color Space', value: 'CMYK High-Saturation Food Profile' },
      { label: 'Coating', value: 'Overall Gloss Varnish with Spot UV on Sizzling Skillet' }
    ],
    prepressDetails: {
      substrate: '170 GSM FSC Gloss Coated Art Paper',
      colors: '4-Color Process CMYK + Spot Gloss UV',
      runCount: '15,000 Promotional Print Run',
      tolerance: '±0.5mm Die-Cut Trim Margin'
    },
    featured: true
  },
  {
    id: 'adeline-architecture',
    code: 'PRT-005',
    title: 'Adeline Architects Exhibition Poster',
    subtitle: 'Minimalist Swiss modernist wireframe architectural pavilion showcase',
    category: 'print',
    categoryLabel: 'Architectural Exhibition Poster',
    year: '2025',
    client: 'Adeline Architectural Studio',
    primaryImage: '/assets/print/adeline_architecture.jpg',
    mockupType: 'poster_mockup',
    palette: ['#8B1E1E', '#2B282A', '#F4F3EE', '#92431D'],
    tags: ['Swiss Modernist', 'Architectural Wireframe', 'Bauhaus Layout', '90° Rotated Headline'],
    description: 'Sophisticated architectural exhibition poster balancing technical perspective wireframes with 90-degree rotated Swiss neo-grotesque display typography. Features strict grid alignment, disciplined monospaced event details, and refined cream substrate warmth.',
    specs: [
      { label: 'Format', value: 'A1 Exhibition Gallery Format (594 x 841 mm)' },
      { label: 'Typography', value: 'Vertical Rotated Swiss Grotesque + Monospaced Metas' },
      { label: 'Artwork', value: 'Vector Structural Isometric Wireframe Pavilion' },
      { label: 'Finish', value: 'Archival Matte Cotton Rag 230 GSM' }
    ],
    prepressDetails: {
      substrate: '230 GSM Archival Velvet Fine Art Paper',
      colors: 'Duotone Deep Crimson + Carbon Slate on Cream',
      runCount: '500 Limited Gallery Edition',
      tolerance: '±0.1mm Precision Museum Trim'
    }
  },
  {
    id: 'atelier-bakery-menu',
    code: 'PRT-006',
    title: 'Atelier Bread & Roastery Autumn Menu',
    subtitle: 'Tactile artisanal bakery table card with vintage circular wheat brandmark & terracotta rules',
    category: 'print',
    categoryLabel: 'Hospitality Table Card',
    year: '2025',
    client: 'Atelier Bread & Roastery',
    primaryImage: '/assets/print/atelier_bakery_menu.jpg',
    mockupType: 'poster_mockup',
    palette: ['#3E1E12', '#A84D25', '#F5EFE6', '#7C2D12'],
    tags: ['Artisanal Bakery', 'Menu Design', 'Kraft Paper', 'Handcrafted Roasts', 'Serif Typography'],
    description: 'Tactile table card and menu flyer designed for a boutique sourdough bakery and specialty coffee roastery. Features an authentic circular wheat stamp mark, French bistro typography, and warm earthy tones printed on unbleached textured stock.',
    specs: [
      { label: 'Format', value: 'Tall Standing Table Card (120 x 240 mm)' },
      { label: 'Stock Finish', value: '280 GSM Unbleached Kraft Felt Card' },
      { label: 'Inks', value: 'Custom Espresso Brown + Burnt Terracotta Inks' },
      { label: 'Creasing', value: 'Precision scored center crease' }
    ],
    prepressDetails: {
      substrate: '280 GSM Eco Recycled Cotton Kraft',
      colors: 'Pantone 4695 C (Espresso) + Pantone 7592 C (Terracotta)',
      runCount: '1,200 Table Cards',
      tolerance: '0.25mm Scored Folding Margin'
    }
  },
  {
    id: 'black-gold-menu',
    code: 'PRT-007',
    title: 'Black & Gold Modern Dining Food Menu',
    subtitle: 'Dark modern restaurant flyer featuring diamond split culinary grids and golden price accents',
    category: 'print',
    categoryLabel: 'Restaurant Collateral',
    year: '2025',
    client: "L'Artisan Gourmet Smokehouse",
    primaryImage: '/assets/print/black_gold_menu.jpg',
    mockupType: 'poster_mockup',
    palette: ['#18181B', '#E5A93C', '#FFFFFF', '#EA580C'],
    tags: ['Dark Modern', 'Isometric Diamond Grid', 'Gold Accents', 'Gourmet Fast Food'],
    description: 'Striking dark-mode restaurant collateral designed with interlocking diagonal photo masks and high-contrast mustard gold price pills. Engineered for upscale casual dining establishments, delivery takeaway inserts, and backlit counter displays.',
    specs: [
      { label: 'Format', value: 'A4 Bi-Fold / Flat Flyer (210 x 297 mm)' },
      { label: 'Grid Architecture', value: '45-Degree Diamond Photo Matrix' },
      { label: 'Contrast Ratio', value: 'Deep Obsidian Background with Gold Accents' },
      { label: 'Lamination', value: 'Soft-Touch Matte Lamination' }
    ],
    prepressDetails: {
      substrate: '250 GSM Silk Coated Artboard',
      colors: 'Rich Black (60/40/40/100) + Warm Amber Yellow + CMYK',
      runCount: '8,000 Menus Delivered',
      tolerance: '±0.5mm Full Bleed Registration'
    }
  },
  {
    id: 'summer-sale-poster',
    code: 'PRT-008',
    title: 'Fashion Factory Big Summer Sale Poster',
    subtitle: 'High-impact retail promotional poster with model-interlocking bold display typography',
    category: 'print',
    categoryLabel: 'Fashion Retail Poster',
    year: '2025',
    client: 'Fashion Factory Apparel',
    primaryImage: '/assets/print/summer_sale_poster.jpg',
    mockupType: 'poster_mockup',
    palette: ['#FFB300', '#0F172A', '#38BDF8', '#FFFFFF'],
    tags: ['Retail Fashion', 'Bold Typography', 'Layer Masking', 'High-Street Campaign'],
    description: 'Vibrant retail promotional campaign poster featuring deep subject-typography interlocking where the photographic model is layered through ultra-bold sans lettering. High-energy yellow background ensures instant visibility across shopping mall storefront windows.',
    specs: [
      { label: 'Format', value: 'Large Format Mall Poster (600 x 900 mm)' },
      { label: 'Layering Technique', value: 'Multi-pass pen tool subject mask through text' },
      { label: 'Color Saturation', value: 'Vivid Chrome Yellow #FFB300' },
      { label: 'Production', value: 'Wide-Format UV Pigment Print' }
    ],
    prepressDetails: {
      substrate: '200 GSM Semi-Gloss Synthetic Poster Stock',
      colors: '8-Color Wide-Gamut Pigment Inks',
      runCount: '850 Storefront Posters',
      tolerance: 'Zero Color Shift Proofing'
    }
  }
];

export const DESIGNER_INFO = {
  name: 'Muhammad Rakibul Hasan Shuvo',
  role: 'Visual & UI Designer | Brand & Graphic Specialist',
  bio: 'Specializing in translating bold ideas into polished digital interfaces, brand identities, and production-engineered packaging. Expert in Adobe Illustrator, Photoshop, and Figma, with a foundational Computer Science background that bridges design with technical execution.',
  email: 'm.rakibul.h45@gmail.com',
  phone: '+880 1404-591770',
  location: 'Dhaka, Bangladesh',
  timezone: 'Asia/Dhaka',
  stats: [
    { label: 'Commercial Bags Engineered', value: '500+', detail: 'Zero registration or bleed errors' },
    { label: 'Marketing Assets Delivered', value: '50+', detail: 'High-converting social & print' },
    { label: 'UI Mockups & Screens', value: '15+', detail: 'Figma component-driven layouts' },
    { label: 'Milestone Delivery Rate', value: '100%', detail: 'Tight-deadline turnaround record' },
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science & Engineering (CSE)',
      institution: 'Bangladesh Open University (BOU)',
      status: '1st Year, 2nd Semester (In Progress)',
      tag: 'Technical Fluency'
    },
    {
      degree: 'Applied AI & Data Science Intensive',
      institution: 'University of Tokyo (Matsuo-Iwasawa Lab) & JICA',
      status: 'GCI World (Enrolled / In Progress)',
      tag: 'Analytical Innovation'
    }
  ],
  skills: [
    { name: 'Adobe Illustrator', level: 'Expert', desc: 'Vector Craftsmanship, Screen-Print Color Separation, Packaging Die-Lines' },
    { name: 'Adobe Photoshop', level: 'Expert', desc: 'Photo Manipulation, Image Retouching, Social Media Kits' },
    { name: 'Figma', level: 'Advanced', desc: 'Auto Layout, Visual Mockups, Component Styling, Responsive Layouts' },
    { name: 'Prepress & Print Production', level: 'Expert', desc: 'Spot Color Separation, Node Optimization, Bleed Control' },
    { name: 'Modern Web / UI', level: 'Intermediate', desc: 'Design Tokens, CSS / Tailwind, Responsive Systems, Git' }
  ],
  links: {
    cv: '/cv.html',
    behance: 'https://behance.net/rakibulhasanshuvo',
    linkedin: 'https://www.linkedin.com/in/muhammad-rakibul-hasan-shuvo-5783363a0/',
    github: 'https://github.com/rakibulhasanshuvo'
  }
};
