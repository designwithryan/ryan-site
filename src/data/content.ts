export const experience = [
  {
    role: "Product Design Lead",
    company: "Anaconda, Inc.",
    location: "Remote (Berlin)",
    period: "Aug 2022 – Jul 2026",
    highlights: [
      "Helped build and grow the design org from 4 to 16+ designers across four specialized groups , co-defined org vision, strategy, and operating model with the design director during Series C expansion. Built hiring standards, onboarding, mentorship programs, and internal career frameworks.",
      "Drove a four-year cultural shift from zero designers to design-essential: embedded in every roadmap and PI Planning cycle, design holds a leadership-level seat, and cross-functional teams request design proactively rather than being sold on it.",
      "Established governance models, success metrics, and clear ownership across four design groups, improving cross-functional alignment and delivery predictability across product and engineering.",
      "Self-initiated a 12-month, 55-initiative AI transformation across four design groups, coordinated four design managers, engineering, and product leadership.",
      "Built the Design System from zero: 70+ components, 40+ patterns, 20+ page templates across 10+ products. 85%+ adoption, 99% UI consistency, 77% fewer duplicate patterns, 24%+ velocity improvement in 15 months, and 40%+ reduction in design-to-engineering handoff gaps.",
      "Led design system merger strategy for Outerbounds: overlap assessment, consolidation architecture, and phased migration plan protecting velocity across both organizations.",
      "Represented design at executive level during Series C and as a driver of company growth in leadership communications.",
      "Built an internal package monitoring platform delivering ~50% improvement in operational efficiency within 7 months through workflow automation and enhanced visibility.",
    ],
  },
  {
    role: "Design Director (Consulting)",
    company: "Digitas Publicis Groupe",
    location: "Remote",
    period: "2023",
    highlights: [
      "Led redesign strategy for BRJ , Saudi Arabia's largest employment platform. Recommended and drove consolidation of five fragmented platforms into one unified product, against initial internal resistance.",
      "Led a 7-person team across UX/IA, UI, and business analysis running in parallel tracks. Conducted 20+ stakeholder sessions and analyzed 55+ documents to surface the consolidation insight.",
      "Built BRJ's Design System from scratch: 60+ components and 50+ pattern groups, scoped to serve future products beyond the initial platform. Platform launched to significant press reception in the Saudi market.",
    ],
  },
  {
    role: "UX Design Lead",
    company: "Mirum / Wunderman Thompson",
    location: "Dubai, UAE",
    period: "Feb 2020 – Jul 2022",
    highlights: [
      "Led cross-functional teams on enterprise digital products across banking, fintech, automotive, government, and sustainability sectors. Managed key client relationships including FAB, SABB, SNB, Aldar, and Maqta Gateway.",
      "Directed end-to-end UX and product design across web and mobile platforms. Mentored designers at all levels and established design standards for consistent client delivery.",
    ],
  },
  {
    role: "Product Design Lead",
    company: "ProTenders",
    location: "Dubai, UAE",
    period: "Oct 2018 – Jan 2020",
    highlights: [
      "Redesigned a large-scale procurement and construction platform for better usability.",
      "Introduced a centralized Design System that improved consistency and implementation efficiency across teams.",
      "Designed and launched an integrated CRM solution to support workflow management and collaboration between users and internal teams.",
    ],
  },
  {
    role: "Design Manager → Senior Designer → Product Designer",
    company: "MashreqBank",
    location: "Dubai, UAE",
    period: "Mar 2013 – Oct 2018",
    highlights: [
      "Drove UX initiatives for Mashreq Neo, one of the region's first digital banking platforms. Led research, testing, and optimization across web, mobile, and SMS banking to improve workflows.",
      "Built and managed a cross-functional team of 10 across design, development, analytics, and operations.",
      "Established design standards and mentored junior designers.",
    ],
  },
];

export const skills = [
  {
    category: "Leadership",
    items: [
      "Design Leadership",
      "Team Building & Mentorship",
      "Design Operations",
      "Organizational Excellence",
      "Hiring & Career Frameworks",
      "Executive Stakeholder Management",
      "Cross-functional Leadership",
    ],
  },
  {
    category: "Design",
    items: [
      "Design Systems Architecture",
      "UX Strategy",
      "Product Strategy",
      "Enterprise Product Design",
      "User Research & Testing",
      "Design Governance",
      "Platform Modernization",
      "Design Thinking",
    ],
  },
  {
    category: "Technical",
    items: [
      "AI-Assisted Workflows",
      "Design Tokens & Figma",
      "Agile / PI Planning",
      "Accessibility (WCAG 2.2)",
      "Storybook",
      "Kendo UI",
      "Astro / Starlight",
    ],
  },
  {
    category: "Tools",
    items: ["Figma", "Framer", "Miro", "Notion", "Linear", "Jira", "Claude Code"],
  },
];

export const competencies = [
  "Design Leadership",
  "Design Systems Architecture",
  "Design Operations",
  "UX Strategy",
  "Product Strategy",
  "Organizational Excellence",
  "Team Building & Mentorship",
  "Design Governance",
  "Cross-functional Leadership",
  "Executive Stakeholder Management",
  "Enterprise Product Design",
  "AI-Assisted Workflows",
  "User Research & Testing",
  "Design Tokens & Figma",
  "Platform Modernization",
  "Agile / PI Planning",
  "Accessibility (WCAG)",
  "Design Thinking",
];

export const philosophy = [
  { title: "Make design's value undeniable", body: "Not through advocacy. Through results. Metrics, business cases, and outcomes that leadership can't ignore." },
  { title: "Systems over moments", body: "The goal was never a better screen. It was infrastructure that keeps working long after the project ends." },
  { title: "Direction before perfection", body: "In ambiguous situations, I don't wait for clarity , I create it. A clear north star moves teams faster than a perfect plan." },
  { title: "Grow the people, grow the org", body: "I invest in the people around me, closing skill gaps, building confidence, creating conditions where everyone does their best work." },
  { title: "Vision is nothing without execution", body: "I build visions that teams believe in, then I build the environment to make them real. Strategy and delivery, together." },
];

export const leadership = [
  { title: "Clarity first", body: "I turn ambiguity into direction. Not a perfect plan , a north star everyone can move toward." },
  { title: "People over process", body: "I build cultures where designers feel heard, decisions are explained, and the team helps shape the vision, not just execute it." },
  { title: "Infrastructure thinking", body: "I build things that outlast me. Systems and cultures that keep working when I'm not in the room." },
];

export const LOGOS: Record<string, string> = {
  anaconda: "https://logo.clearbit.com/anaconda.com",
  digitas: "https://logo.clearbit.com/digitas.com",
  mashreqbank: "https://logo.clearbit.com/mashreq.com",
  protenders: "https://logo.clearbit.com/protenders.com",
  mirum: "https://logo.clearbit.com/mirumagency.com",
};

export const projects = [
  {
    slug: "anaconda",
    title: "Building a Design Org From Nothing",
    category: "Design Leadership",
    tags: ["Org Building", "Design Systems", "AI Strategy", "Design Ops"],
    year: "2022–2026",
    company: "Anaconda, Inc.",
    logo: LOGOS.anaconda,
    description: "Four years building the design organization, design system, and AI transformation strategy from zero at Anaconda , a Series C Python infrastructure company with 10+ products and no prior design culture.",
    role: "Product Design Lead",
  },
  {
    slug: "digitas",
    title: "Consulting at Speed: BRJ Platform Strategy",
    category: "Design Strategy & Consulting",
    tags: ["Platform Consolidation", "UX Strategy", "Design Systems", "Discovery"],
    year: "2023",
    company: "Digitas × BRJ",
    logo: LOGOS.digitas,
    description: "Led the redesign strategy for BRJ , Saudi Arabia's largest employment platform , recommending and driving the consolidation of five fragmented platforms into one unified product.",
    role: "Design Director (Consulting)",
  },
  {
    slug: "mirum",
    title: "Enterprise Design Across Banking, Fintech & Gov",
    category: "UX Design Leadership",
    tags: ["Enterprise Design", "Banking", "Fintech", "Government"],
    year: "2020–2022",
    company: "Mirum / Wunderman Thompson",
    logo: LOGOS.mirum,
    description: "Led UX design across enterprise digital products at Mirum, managing client relationships and design delivery across banking, fintech, automotive, government, and sustainability sectors.",
    role: "UX Design Lead",
  },
  {
    slug: "protenders",
    title: "Redesigning a Construction Procurement Platform",
    category: "Product Design",
    tags: ["Platform Redesign", "Design Systems", "CRM", "Enterprise UX"],
    year: "2018–2020",
    company: "ProTenders",
    logo: LOGOS.protenders,
    description: "Redesigned a large-scale procurement and construction platform, introduced a centralized design system, and launched an integrated CRM solution for workflow collaboration.",
    role: "Product Design Lead",
  },
  {
    slug: "mashreqbank",
    title: "Mashreq Neo , Digital Banking Pioneer",
    category: "Product Design",
    tags: ["Mobile Design", "UX Research", "Digital Banking", "Team Leadership"],
    year: "2013–2018",
    company: "MashreqBank",
    logo: LOGOS.mashreqbank,
    description: "Drove UX initiatives for Mashreq Neo, one of the region's first digital banking platforms, leading a cross-functional team of 10 over five years.",
    role: "Design Manager → Senior Designer → Product Designer",
  },
];
