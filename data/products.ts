export type ProductCategory = "automatic-doors" | "garage-doors" | "security-gates" | "industrial-doors";

export const categories: { slug: ProductCategory; title: string; tagline: string; icon: string; description: string }[] = [
  {
    slug: "automatic-doors",
    title: "Automatic Doors",
    tagline: "Sliding, swinging & revolving",
    icon: "🚪",
    description: "Full range of automatic doors — sliding, swing, folding, revolving, and glass — supplied, installed, and maintained for commercial and residential entrances across UAE and GCC.",
  },
  {
    slug: "garage-doors",
    title: "Garage Doors",
    tagline: "Residential & commercial",
    icon: "🏠",
    description: "Premium sectional and garage doors with smooth operation, superior insulation, and elegant designs, backed by DoorHan automatic operators and remote controls.",
  },
  {
    slug: "security-gates",
    title: "Security Gates",
    tagline: "Barriers & turnstiles",
    icon: "🔒",
    description: "Electric gate security solutions, boom barriers, and turnstile access control — designed, installed, and serviced for reliable perimeter protection.",
  },
  {
    slug: "industrial-doors",
    title: "Industrial Doors",
    tagline: "Roller shutters & high-speed",
    icon: "🏭",
    description: "Roller shutters, high-speed doors, and loading dock equipment engineered for warehouses, cold storage, and industrial facilities.",
  },
];

export const products: { icon: string; title: string; desc: string; category: ProductCategory }[] = [
  { icon: "🏡", title: "Residential Sectional Doors", desc: "Premium residential sectional doors with smooth operation, superior insulation, and elegant designs for UAE homes.", category: "garage-doors" },
  { icon: "⚙️", title: "Automatic Door Operators", desc: "DoorHan automatic operators and motors with remote controls for sectional and garage doors — silent, reliable, and smart.", category: "automatic-doors" },
  { icon: "🏠", title: "Garage Doors", desc: "Wide range of residential and commercial garage doors in multiple brands, colors, materials, and designs.", category: "garage-doors" },
  { icon: "🚧", title: "Automatic Gates", desc: "Electric gate security solutions from design through installation with updated gate opener technology.", category: "security-gates" },
  { icon: "🔴", title: "Gate Barriers", desc: "Tested, reliable boom barriers from top brands, tailored for access control and security.", category: "security-gates" },
  { icon: "↔️", title: "Automatic Sliding Doors", desc: "Supply, installation, maintenance, and repair of all sliding door models for various applications.", category: "automatic-doors" },
  { icon: "🔄", title: "Automatic Revolving Doors", desc: "Installation and service for revolving doors of all scales with comprehensive customer support.", category: "automatic-doors" },
  { icon: "🚪", title: "Automatic Swinging Doors", desc: "Wide selection of swing door systems with custom finishes and retrofitting services.", category: "automatic-doors" },
  { icon: "📐", title: "Automatic Folding Doors", desc: "Space-saving folding automatic doors that add a sleek, contemporary look to any entrance.", category: "automatic-doors" },
  { icon: "🪟", title: "Automatic Glass Doors", desc: "Frameless and framed glass automatic doors combining transparency, beauty, and performance.", category: "automatic-doors" },
  { icon: "⬇️", title: "Rolling Shutters", desc: "Automatic and manual roller shutters with fire-rated and non-fire-rated steel options.", category: "industrial-doors" },
  { icon: "🔷", title: "Polycarbonate Shutters", desc: "Transparent, unbreakable roller shutters combining visibility and strength for retail environments.", category: "industrial-doors" },
  { icon: "🏭", title: "Industrial Doors", desc: "Versatile, reliable door solutions for warehouses and businesses designed for security and efficiency.", category: "industrial-doors" },
  { icon: "🚚", title: "Loading Dock Equipment", desc: "Complete turnkey dock solutions including equipment supply, design, and installation.", category: "industrial-doors" },
  { icon: "⚡", title: "High-Speed Doors", desc: "Specialized doors for freezers, coolers, docks, and clean rooms to minimize air exchange.", category: "industrial-doors" },
  { icon: "🚦", title: "Turnstile Gates", desc: "Entrance control solutions including turnstiles, speedgates, and tripod models.", category: "security-gates" },
];
