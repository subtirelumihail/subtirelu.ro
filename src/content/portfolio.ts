export interface FeaturedRole {
  id: string;
  organization: string;
  locationNote: string;
  title: string;
  period: string;
  intro: string;
  highlights: string[];
  stack: string[];
}

export interface BackgroundRole {
  id: string;
  organization: string;
  title: string;
  period: string;
  intro: string;
  location?: string;
  highlights: string[];
  stack?: string[];
}

export const summaryPoints = [] as const;

export const featuredRoles: FeaturedRole[] = [
  {
    id: "webtron",
    organization: "Webtron Future Solutions",
    locationNote: "Freelance · Remote",
    title: "Owner — Senior Full-Stack Developer",
    period: "Oct 2016 — Present",
    intro:
      "End-to-end product work for clients — architecture and delivery with special attention to frontend UX, integrations, and shipping quickly.",
    highlights: [
      "SaaS and integrations across industries; MVP through production.",
      "Stacks include React, Next.js, Node, NestJS, Go, React Native, AWS, and Docker.",
      "Automation and third-party integrations — Stripe, analytics, messaging, and LLM-assisted workflows where they fit.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Go",
      "OpenAI",
      "AWS",
      "React Native",
    ],
  },
];

export const backgroundRoles: BackgroundRole[] = [
  {
    id: "avochat",
    organization: "Avochat",
    title: "Co-Founder & Full-Stack Developer",
    period: "Nov 2020 — Jul 2022",
    intro:
      "Co-founded a real-time platform for lawyers and clients — messaging, monetization, and secure document workflows.",
    location: "Remote",
    highlights: [
      "Built chat-based monetization with payments in conversation; secure file sharing with paywall access control.",
      "Full CMS for lawyers: client and task management, file storage, and messaging.",
      "Real-time layer with WebSockets; notifications via Firebase; Stripe including Express Connect for provider payouts.",
      "Backend on Strapi with AWS.",
    ],
    stack: ["React", "Next.js", "WebSockets", "Node.js", "Strapi", "AWS", "Firebase", "Stripe"],
  },
  {
    id: "wyndy",
    organization: "Wyndy",
    title: "Senior Frontend Engineer",
    period: "Mar 2021 — Jan 2023",
    intro:
      "Frontend ownership on a high-traffic product with Rust-backed APIs and React Native mobile surfaces.",
    location: "USA",
    highlights: [
      "Developed and maintained a high-traffic platform serving thousands of users.",
      "Scalable, performant React frontends; collaboration with Rust backend teams for API integrations.",
      "Enhanced React Native mobile apps; improved performance, maintainability, and developer experience.",
    ],
    stack: ["React", "Next.js", "Rust", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: "recomedica",
    organization: "Recomedica (Add Health Company)",
    title: "Co-Founder & CTO",
    period: "Jan 2018 — Mar 2022",
    intro:
      "Healthcare second opinions from volunteer access to premium multi-disciplinary care — full product and infra ownership.",
    location: "Bucharest",
    highlights: [
      "Co-founded a digital healthcare platform for medical second opinions and patient support.",
      "Recomedica Free: second-opinion platform connecting patients with volunteer doctors; early COVID-19 home monitoring and guidance in Romania.",
      "Recomedica PRO: premium multi-disciplinary second opinions, structured patient journeys, multi-layer doctor–patient collaboration, secure records, and async flows.",
      "Full-stack ownership: Node.js and Strapi APIs, AWS infrastructure, Stripe payments, product lifecycle from idea to production with clinical stakeholders.",
    ],
    stack: ["Node.js", "Strapi", "AWS", "React", "TypeScript", "NoSQL", "Docker", "Stripe"],
  },
  {
    id: "metrosystems",
    organization: "Metrosystems",
    title: "Senior Frontend Developer",
    period: "Mar 2018 — 2020",
    intro:
      "Enterprise React and Redux systems — clear architecture, performance, and tight coordination with backend teams.",
    location: "Bucharest",
    highlights: [
      "Led frontend architecture for enterprise applications.",
      "Scalable UI with React and Redux; performance and modular structure.",
      "Close collaboration with backend teams.",
    ],
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "GCP",
      "Express",
      "NestJS",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    id: "rinftech",
    organization: "Rinftech",
    title: "Senior Frontend Developer",
    period: "Oct 2016 — Mar 2018",
    intro:
      "React delivery with emphasis on UI performance, structure, and maintainability.",
    location: "Bucharest",
    highlights: [
      "React applications with a focus on UI performance and maintainability.",
      "Contributed to frontend architecture and technical decisions.",
    ],
    stack: ["React", "Node.js", "NestJS", "Docker", "PostgreSQL"],
  },
  {
    id: "devicehub",
    organization: "DeviceHub / OpenFleetLabs",
    title: "Senior Frontend / Full-Stack Engineer",
    period: "Mar 2016 — Oct 2016",
    intro:
      "IoT and public transit ticketing — hardware-linked validation, POS, vending UIs, and live operator tooling.",
    location: "Bucharest",
    highlights: [
      "Part of a five-engineer team building IoT and transportation systems; DeviceHub for device management and real-time monitoring.",
      "Government contract: full public transport monitoring and ticketing for ETA Bus (Râmnicu Vâlcea).",
      "Ticket validation in buses with hardware-integrated validators; POS for subscriptions with card writers, printers, and ID scanners; ticket vending machine UI (Electron + React) with C++ services for payments and hardware queues.",
      "Real-time dashboards for operations; work across frontend, backend, and hardware integration.",
    ],
    stack: ["React", "Electron", "Node.js", "Python", "C++", "MySQL", "Docker"],
  },
];

export const earlierCareerRoles: BackgroundRole[] = [
  {
    id: "wowapp",
    organization: "WowApp",
    title: "Senior Frontend Developer",
    period: "Feb 2016",
    intro:
      "Short engagement shipping features on a large-scale social platform under tight delivery pressure.",
    location: "Bucharest",
    highlights: [
      "Delivered features for a large-scale social platform.",
      "Worked in a fast-paced, high-pressure environment.",
    ],
    stack: ["React", "CoffeeScript"],
  },
  {
    id: "arimatrix",
    organization: "Ari Matrix",
    title: "Senior Frontend / Full-Stack Developer",
    period: "Sep 2015 — Feb 2016",
    intro:
      "AriLove matchmaking product — deep questionnaires, psychology-backed scoring, and end-to-end delivery.",
    location: "Bucharest",
    highlights: [
      "Six-person engineering team; platform built from scratch across frontend, backend, and architecture.",
      "Complex questionnaire system (300+ items) with psychologists defining methodology and scoring.",
      "High-accuracy matchmaking flows (80%+ compatibility scoring) with strong UX for long forms.",
      "Ownership across APIs, architecture, and product design discussions.",
    ],
    stack: ["JavaScript", "React", "Node.js", "HTML5", "CSS3", "REST APIs"],
  },
  {
    id: "kalon",
    organization: "Kalon Global Group",
    title: "Frontend Developer",
    period: "Nov 2014 — Sep 2015",
    intro:
      "Enterprise web applications — reusable UI, prototypes, and partnering with backend on APIs.",
    location: "Bucharest",
    highlights: [
      "Scalable frontend architecture for enterprise web applications.",
      "Reusable components and better maintainability across projects.",
      "Rapid prototypes moved into production; tight collaboration on APIs and data flows.",
      "Improved development workflows and tooling.",
    ],
    stack: ["JavaScript", "React", "SCSS", "Node.js", "Webpack", "Babel"],
  },
  {
    id: "xlteam",
    organization: "XL Team",
    title: "Frontend Developer",
    period: "Aug 2014 — Nov 2014",
    intro: "Client work end to end — design participation through deployment.",
    location: "Bucharest",
    highlights: [
      "Multiple client projects from concept to deployment.",
      "Product design and development phases.",
      "Responsive interfaces tuned for performance; varied stacks per client.",
    ],
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Node.js",
      "Backbone.js",
      "Gulp.js",
      "WordPress",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    id: "digitalstar",
    organization: "Digital Star (Leo Burnett)",
    title: "Senior Web Developer",
    period: "Aug 2013 — Jul 2014",
    intro:
      "Interactive campaigns and Facebook marketing apps — agency deadlines and high-visibility launches.",
    location: "Bucharest",
    highlights: [
      "Interactive web apps and Facebook-based marketing experiences.",
      "Contributed to award-winning digital campaigns for major brands.",
      "Collaboration with design and marketing; strict performance and deadline pressure.",
      "Agency recognized as Best Agency of the Year (2014).",
    ],
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "LESS",
      "Node.js",
      "Gulp.js",
      "WordPress",
      "CodeIgniter",
      "jQuery",
      "Facebook SDK",
    ],
  },
  {
    id: "romnet",
    organization: "Romnet Creative",
    title: "Web Developer",
    period: "Mar 2013 — Aug 2013",
    intro: "Full-stack and CMS builds for clients across industries.",
    location: "Bucharest",
    highlights: [
      "Full-stack applications tailored to varied client needs.",
      "Technology choices aligned to business constraints.",
      "CMS and custom PHP applications; maintainable delivery.",
    ],
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "WordPress",
      "CodeIgniter",
      "OpenCart",
      "CakePHP",
      "jQuery",
    ],
  },
  {
    id: "gcntv",
    organization: "GCNTV.net",
    title: "Web Developer",
    period: "Jul 2012 — Mar 2013",
    intro:
      "Streaming product for US audiences — payments, performance, and a lightweight custom PHP framework.",
    location: "Remote / US market",
    highlights: [
      "Video streaming platform designed and built from scratch.",
      "Secure payments via First Data; scalability for high traffic.",
      "Custom PHP framework for speed and flexibility; video delivery and backend tuning.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "CSS", "CakePHP", "jQuery", "First Data"],
  },
  {
    id: "dezibel",
    organization: "Dezibel Media",
    title: "Web Developer",
    period: "Jun 2012 — Jul 2012",
    intro: "eCommerce builds, legacy PHP maintenance, and client deadlines.",
    location: "Bucharest",
    highlights: [
      "eCommerce and custom PHP applications.",
      "Legacy maintenance with security and performance improvements.",
      "Fast turnaround for multiple clients.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "CSS", "OpenCart", "osCommerce", "jQuery"],
  },
  {
    id: "ipsos",
    organization: "Ipsos Interactive Services",
    title: "Frontend Developer & QA Engineer",
    period: "Jun 2011 — Jun 2012",
    intro:
      "Global survey UIs — cross-browser quality, accurate logic, and research-grade reliability.",
    location: "Bucharest",
    highlights: [
      "Interactive online surveys for worldwide research programs.",
      "Cross-browser compatibility and high data accuracy.",
      "QA of complex survey logic; collaboration with international teams.",
      "Performance and UX improvements on data-collection platforms.",
    ],
    stack: ["JavaScript", "HTML", "CSS", "jQuery", "ConfirmIT"],
  },
];

/** Shown with emphasis in the skills matrix UI. */
export const spotlightSkills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "PostgreSQL",
  "OpenAI",
  "Gemini",
] as const;

export const skillGroups = [
  {
    name: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "React Native",
      "HTML & CSS",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    name: "Backend & AI",
    items: [
      "Node.js",
      "NestJS",
      "Directus",
      "Python",
      "Go",
      "REST & GraphQL",
      "LLMs & agents",
    ],
  },
  {
    name: "Data & cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
  {
    name: "Integrations",
    items: [
      "Stripe",
      "Twilio",
      "LiveKit",
      "OpenAI",
      "Gemini",
      "ElevenLabs",
      "Retell",
    ],
  },
] as const;

export const education = [
  {
    school: "Romanian-American University",
    lines: ["Computer Science & Management — 2008–2011", "Law — 2008–2012"],
  },
  {
    school: '"Nicolae Iorga" National College',
    lines: ["Computer Science — 2004–2008"],
  },
] as const;

export const languages = [
  { label: "Romanian", level: "Native" },
  { label: "English", level: "Professional (C1)" },
  { label: "French", level: "Basic" },
] as const;

export const highlights = [
  "13+ years in software engineering",
  "Founder / CTO on multiple products",
  "UI/UX-focused full-stack delivery",
] as const;
