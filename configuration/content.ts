export interface VerifiedStat {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectEvidence {
  slug: string;
  title: string;
  subtitle: string;
  isFlagship: boolean;
  categories: string[];
  outcome: string;
  context: string;
  ownership: string;
  architectureSignal: string;
  stackGroups: {
    frontend?: string;
    backend?: string;
    data?: string;
    integrations?: string;
    deployment?: string;
  };
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  teamContext: string;
  status: string;
  outcome: string;
  ownership: string;
  stackSummary: string;
  liveUrl?: string;
  githubUrl?: string;
  isProprietary: boolean;
  problem: {
    overview: string;
    users: string;
    constraints: string[];
    outOfScope: string;
  };
  systemContext: {
    summary: string;
    diagramText: string;
    caption: string;
  };
  containerView: {
    summary: string;
    layers: { name: string; tech: string; role: string }[];
  };
  criticalFlow: {
    title: string;
    description: string;
    steps: { step: number; title: string; detail: string }[];
  };
  decisions: {
    decision: string;
    alternatives: string;
    whyChosen: string;
    costOrRisk: string;
    qualityAttribute: string;
  }[];
  validation: {
    testsAndMonitoring: string;
    whatShipped: string[];
    whatToImproveNext: string[];
  };
}

export interface ExperienceRole {
  company: string;
  role: string;
  period: string;
  location: string;
  website: string;
  scope: string;
  ownership: string;
  collaboration: string;
  outcome: string;
  highlights: string[];
}

export interface ToolkitCategory {
  title: string;
  subtitle: string;
  skills: { name: string; level: "production" | "familiar" | "exploring" }[];
}

export const portfolioContent = {
  positioning: {
    roleTitle: "Technical Project Manager / Systems Architect",
    headline: "I run product delivery and stay close to the architecture.",
    supportingLine:
      "Based in Hyderabad, Pakistan. I was promoted from Full-Stack Developer to Project Manager at Samarix after leading backend architecture decisions, unblocking delivery risks, and keeping client launches on schedule. I now manage sprint execution across live products while continuing to review system-level technical trade-offs.",
    verifiedStats: [
      { label: "Experience", value: "2+ Years", detail: "Professional delivery since Dec 2023" },
      { label: "Current Scope", value: "4 Products", detail: "Parallel delivery across Samarix client pipelines" },
      { label: "Event Latency", value: "Sub-200ms", detail: "SentinelKids real-time event propagation" },
      { label: "Release Stability", value: "0 Rollbacks", detail: "Recent production release cycles" },
    ] as VerifiedStat[],
  },

  projects: [
    {
      slug: "sentinelkids",
      title: "SentinelKids",
      subtitle: "Real-Time Monitoring Platform",
      isFlagship: true,
      categories: ["Backend", "Real-time", "System Design"],
      outcome: "Delivered a Kafka and Redis event pipeline with sub-200ms propagation for core monitoring events and stable no-rollback releases.",
      context: "AI Platform · Samarix",
      ownership: "TPM and backend ownership: scoped milestones, managed sprint cadence, and guided event-driven architecture decisions.",
      architectureSignal: "NestJS · Kafka · Redis · Docker · TypeScript",
      stackGroups: {
        backend: "NestJS, Node.js, TypeScript",
        data: "Redis, Kafka, Event Pipelines",
        deployment: "Docker, CI/CD",
      },
      image: "/project-1.png",
      caseStudyUrl: "/work/sentinelkids",
      liveUrl: undefined,
    },
    {
      slug: "sehat-kahani",
      title: "Sehat Kahani",
      subtitle: "Pakistan's Leading Telemedicine Platform",
      isFlagship: true,
      categories: ["Full Stack", "Healthcare", "Backend"],
      outcome: "Built the backend APIs and admin portals supporting thousands of daily doctor-patient consultations.",
      context: "Healthcare · Zetsol Technologies",
      ownership: "Backend APIs, admin dashboards, doctor and patient web portals, e-pharmacy integrations.",
      architectureSignal: "Node.js · Angular/React · MongoDB · JWT auth · webhook integrations",
      stackGroups: {
        frontend: "Angular, React",
        backend: "Node.js, Express, REST APIs",
        data: "MongoDB",
        integrations: "E-pharmacy, Diagnostic Labs",
      },
      image: "/sehatkahani.png",
      liveUrl: "https://sehatkahani.com/",
      caseStudyUrl: "/work/sehat-kahani",
    },
    {
      slug: "neem-io",
      title: "Neem",
      subtitle: "Digital Financial Platform",
      isFlagship: true,
      categories: ["Full Stack", "Fintech"],
      outcome: "Developed full-stack modules for a platform handling online payments, digital lending, and wallet management.",
      context: "Fintech · Zetsol Technologies",
      ownership: "Full-stack modules, KYC onboarding, payment integrations, financial dashboards.",
      architectureSignal: "Next.js · Node.js · Tailwind CSS · KYC · payment integrations",
      stackGroups: {
        frontend: "Next.js, React, Tailwind CSS",
        backend: "Node.js, REST APIs",
        data: "MongoDB",
        integrations: "KYC, Digital Lending, Wallets",
      },
      image: "/neem.png",
      liveUrl: "https://neem.io",
      caseStudyUrl: "/work/neem-io",
    },
    {
      slug: "umah-shanti",
      title: "Umah Shanti Villa",
      subtitle: "Luxury Booking Platform",
      isFlagship: false,
      categories: ["Full Stack", "Freelance"],
      outcome: "Launched a booking platform for a luxury Bali villa with payment integration and zero booking conflicts.",
      context: "Hospitality · Freelance",
      ownership: "Full-stack — booking flow, date conflict prevention, payment gateway, responsive UI.",
      architectureSignal: "Next.js · Node.js · Payment Gateway · Vercel",
      stackGroups: {
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Payment Gateway",
        deployment: "Vercel",
      },
      image: "/umahshanti.png",
      liveUrl: "https://vus-fe-zeta.vercel.app/",
      caseStudyUrl: "/work/umah-shanti",
    },
    {
      slug: "lawn-barber",
      title: "Lawn Barber",
      subtitle: "Outdoor Services Website",
      isFlagship: false,
      categories: ["Full Stack", "Freelance"],
      outcome: "Delivered a clean, fast website for a US lawn care business with service listings and quote requests.",
      context: "Services · Freelance",
      ownership: "Full ownership — design, development, deployment.",
      architectureSignal: "Next.js · Tailwind CSS · Vercel",
      stackGroups: {
        frontend: "Next.js, Tailwind CSS",
        deployment: "Vercel",
      },
      image: "/project-1.png",
      liveUrl: undefined,
    },
    {
      slug: "jayak-hub",
      title: "Jayak Hub",
      subtitle: "Food Delivery Platform",
      isFlagship: false,
      categories: ["Full Stack", "Backend"],
      outcome: "Led project delivery for a food delivery platform while contributing to backend development.",
      context: "Food Delivery · Samarix",
      ownership: "Project management + backend contributions.",
      architectureSignal: "Node.js · NestJS · TypeScript · real-time order tracking",
      stackGroups: {
        backend: "Node.js, NestJS, TypeScript",
      },
      image: "/project-1.png",
      liveUrl: undefined,
    },
    {
      slug: "listr-ai",
      title: "Listr AI",
      subtitle: "AI Lead Response Tool for Real Estate",
      isFlagship: false,
      categories: ["Full Stack", "AI"],
      outcome: "Managed delivery of an AI-powered lead-response and follow-up tool for real estate teams.",
      context: "PropTech · Samarix × Nortra LLC",
      ownership: "Project management — timelines, team coordination, client delivery.",
      architectureSignal: "AI · Lead automation · Real estate workflows",
      stackGroups: {
        frontend: "Web App",
        backend: "AI, Automation",
      },
      image: "/project-1.png",
      liveUrl: undefined,
    },
    {
      slug: "siteflows",
      title: "SiteFlows",
      subtitle: "Short-Term Rental Operations Platform",
      isFlagship: false,
      categories: ["Full Stack", "Backend"],
      outcome: "Led delivery of an operations platform for managing rental turnovers, cleanings, and damage reports.",
      context: "PropTech · Samarix",
      ownership: "Project management — design, engineering, and client coordination.",
      architectureSignal: "Node.js · TypeScript · Operations management",
      stackGroups: {
        backend: "Node.js, TypeScript",
      },
      image: "/project-1.png",
      liveUrl: undefined,
    },
    {
      slug: "bc-appa",
      title: "BC Appa",
      subtitle: "Rotating Savings & Committee Management",
      isFlagship: false,
      categories: ["Full Stack", "Fintech"],
      outcome: "Built admin dashboards and member management for an online rotating savings platform.",
      context: "Fintech · Zetsol Technologies",
      ownership: "Frontend admin dashboards, payout tracking, contribution management UI.",
      architectureSignal: "Next.js · Node.js · role-based views · contribution tracking",
      stackGroups: {
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Express",
      },
      image: "/bcappa.png",
      liveUrl: "https://bcappa.com",
    },
    {
      slug: "elysium-dental",
      title: "Elysium Dental & Aesthetics",
      subtitle: "Dental Clinic Marketing Site",
      isFlagship: false,
      categories: ["Full Stack", "Freelance"],
      outcome: "Delivered a fast, responsive marketing site for a dental clinic with sub-second load times.",
      context: "Healthcare · Freelance",
      ownership: "Full ownership — design, development, performance optimisation, deployment.",
      architectureSignal: "Next.js SSG · Tailwind CSS · Vercel",
      stackGroups: {
        frontend: "Next.js, Tailwind CSS, SSG",
        deployment: "Vercel",
      },
      image: "/project-1.png",
      liveUrl: "https://edac.com.pk/",
    },
  ] as ProjectEvidence[],

  architecture: {
    headline: "How I Like to Work",
    subline: "A few things I've learned matter more than frameworks or stack choices.",
    pillars: [
      {
        tag: "Understand First",
        name: "Know the Problem Before Writing Code",
        description: "I spend time understanding what the product is actually for and who uses it — before touching the codebase.",
      },
      {
        tag: "Keep It Simple",
        name: "Complexity Is Easy. Simplicity Takes Work.",
        description: "I default to the simplest thing that works. Adding complexity is always easier than removing it later.",
      },
      {
        tag: "Ship Often",
        name: "Small Releases Beat Big Launches",
        description: "Getting real feedback early beats spending months on something users don't need. I prefer frequent, small deliveries.",
      },
      {
        tag: "Secure by Default",
        name: "Security Isn't an Afterthought",
        description: "Especially when working on healthcare or financial products — proper auth, access control, and input validation from day one.",
      },
      {
        tag: "Think About the Next Dev",
        name: "Leave It Better Than You Found It",
        description: "Clean code, clear names, sensible structure. Someone will work on this after you — make their life easier.",
      },
      {
        tag: "Own the Outcome",
        name: "Care About What Ships, Not Just What You Built",
        description: "I stay involved until the thing actually works for users — not just until my PR is merged.",
      },
      {
        tag: "Work Fast with Teams",
        name: "Clarity Beats Cleverness in a Team",
        description: "Code and decisions that everyone on the team can follow move faster than clever solutions only one person understands.",
      },
      {
        tag: "Keep Learning",
        name: "Stay Curious",
        description: "The stack changes. The fundamentals don't. I try to stay curious about both — new tools and timeless principles.",
      },
    ],
  },

  experience: [
    {
      company: "Samarix",
      role: "Project Manager & Systems Architect",
      period: "July 2026 — Present",
      location: "Hyderabad, Sindh, Pakistan",
      website: "https://samarix.com/",
      scope: "Own delivery across SentinelKids, Jayak Hub, Listr AI, and SiteFlows with parallel sprint tracks and weekly release checkpoints.",
      ownership: "Set milestone scope, run sprint planning, sequence dependencies, and drive architecture trade-offs across NestJS services, event pipelines, and deployment flow.",
      collaboration: "Lead daily coordination between UI/UX, backend, QA, and client stakeholders to keep scope, quality gates, and launch dates aligned.",
      outcome: "Internal promotion from Full-Stack Developer to Project Manager after taking ownership of architecture decisions, delivery blockers, and client launch execution.",
      highlights: [
        "Jayak Hub: delivered staged releases for core order and operations workflows under active client timelines.",
        "Listr AI: managed automation feature delivery for real-estate response pipelines with predictable sprint closures.",
        "SiteFlows: shipped rental operations modules with coordinated QA handoff and production launch readiness.",
        "SentinelKids: maintained sub-200ms real-time event propagation standards with stable release outcomes.",
      ],
    },
    {
      company: "Samarix",
      role: "Full-Stack Developer",
      period: "Before July 2026",
      location: "Hyderabad, Sindh, Pakistan",
      website: "https://samarix.com/",
      scope: "Built backend-first product features across live client platforms while supporting frontend delivery when needed.",
      ownership: "Implemented NestJS and Node.js services, shaped API contracts, and handled production issues that affected sprint commitments.",
      collaboration: "Worked directly with product, design, and QA to turn fast-moving requirements into shippable increments.",
      outcome: "Promotion to Project Manager followed sustained technical ownership, blocker resolution, and reliable client delivery.",
      highlights: [
        "Built event-driven service paths and API modules that became the baseline for later multi-team delivery.",
        "Reduced delivery risk by surfacing integration blockers early and aligning fixes before release windows.",
        "Created technical implementation plans used by engineering and QA during sprint execution.",
      ],
    },
    {
      company: "Zetsol Technologies",
      role: "MEAN & MERN Stack Developer",
      period: "December 2023 — January 2026",
      location: "Hyderabad, Sindh, Pakistan",
      website: "https://zetsol.ae/",
      scope: "Full-stack web development across healthcare, fintech, and client applications.",
      ownership: "Backend APIs, frontend dashboards, and third-party integrations across multiple products.",
      collaboration: "Cross-functional teams including UI/UX designers, backend engineers, and client stakeholders in an Agile environment.",
      outcome: "Delivered production features used by thousands of real users across Pakistan. Awarded Employee of the Month (June 2024).",
      highlights: [
        "Built and maintained backend APIs for Sehat Kahani — Pakistan's leading telemedicine platform.",
        "Developed full-stack modules for Neem, a digital financial platform, including KYC onboarding and wallet features.",
        "Worked across Angular and React frontends alongside Node.js backends.",
        "Awarded Employee of the Month (June 2024) for outstanding contribution.",
      ],
    },
    {
      company: "Saylani Mass IT Training (SMIT)",
      role: "Web & App Development Instructor",
      period: "July 2025 — Present",
      location: "Hyderabad, Sindh, Pakistan",
      website: "https://www.saylaniwelfare.com/",
      scope: "Teaching full-stack web development to aspiring developers.",
      ownership: "Curriculum delivery, student mentorship, and project-based learning.",
      collaboration: "Working with students individually and in groups through code reviews, debugging sessions, and career guidance.",
      outcome: "Guided 80+ students through building real-world web apps from concept to deployment.",
      highlights: [
        "Teaching HTML, CSS, JavaScript, React, Node.js, and databases hands-on.",
        "Guiding students through building complete MERN stack projects from scratch.",
        "Covering Git, deployment with Vercel and Netlify, and real interview prep.",
      ],
    },
  ] as ExperienceRole[],

  toolkit: [
    {
      title: "Frontend",
      subtitle: "What I build the UI with",
      skills: [
        { name: "React", level: "production" },
        { name: "Next.js", level: "production" },
        { name: "TypeScript", level: "production" },
        { name: "Tailwind CSS", level: "production" },
        { name: "Angular", level: "production" },
        { name: "React Native", level: "familiar" },
      ],
    },
    {
      title: "Backend",
      subtitle: "APIs, services, and server-side logic",
      skills: [
        { name: "Node.js", level: "production" },
        { name: "NestJS", level: "production" },
        { name: "Express.js", level: "production" },
        { name: "Koa.js", level: "production" },
        { name: "REST APIs", level: "production" },
        { name: "WebSockets", level: "production" },
      ],
    },
    {
      title: "Databases",
      subtitle: "Where the data lives",
      skills: [
        { name: "MongoDB", level: "production" },
        { name: "MySQL", level: "production" },
        { name: "PostgreSQL", level: "familiar" },
        { name: "Redis", level: "production" },
      ],
    },
    {
      title: "Real-time & Messaging",
      subtitle: "For systems that need to move fast",
      skills: [
        { name: "Apache Kafka", level: "production" },
        { name: "Redis Pub/Sub", level: "production" },
        { name: "WebSockets", level: "production" },
      ],
    },
    {
      title: "Deployment & Cloud",
      subtitle: "Getting things live and keeping them there",
      skills: [
        { name: "Git & GitHub", level: "production" },
        { name: "Vercel", level: "production" },
        { name: "Docker", level: "familiar" },
        { name: "AWS", level: "familiar" },
        { name: "Microsoft Azure", level: "familiar" },
        { name: "Google Cloud (GCP)", level: "familiar" },
        { name: "CI/CD", level: "familiar" },
      ],
    },
  ] as ToolkitCategory[],

  about: {
    bioParagraphs: [
      "I started coding at 17 out of curiosity. Wanted to understand how websites worked. That turned into a career — and I'm still enjoying it.",
      "Right now I'm a Project Manager at Samarix, coordinating delivery across several live products and client teams. Before that I was deep in the code — building backends with Node.js and NestJS, shipping features for healthcare and fintech platforms used by real people across Pakistan.",
    ],
    principles: [
      {
        title: "Build for people, not for portfolios",
        description: "The measure of good software isn't how clever the architecture is — it's whether it solves a real problem for a real person.",
      },
      {
        title: "Simple beats smart",
        description: "I've learned to be suspicious of complexity. Usually the boring solution is the right one.",
      },
      {
        title: "Grow the people around you",
        description: "I spend time mentoring at SMIT because teaching is how you really find out what you know — and because the community gets stronger when more people ship great work.",
      },
    ],
    productionValues: [
      { label: "Reliability", desc: "I don't ship things I'm not confident in. Better to delay a day than to break something for users." },
      { label: "Honesty", desc: "I'd rather tell a client or teammate hard news early than let a problem grow until it's urgent." },
      { label: "Craft", desc: "I take pride in clean, readable code — not because it's aesthetic, but because it's faster and safer to work with." },
      { label: "Ownership", desc: "If my name is on it, I see it through — from first commit to production." },
    ],
  },

  caseStudies: {
    sentinelkids: {
      slug: "sentinelkids",
      title: "SentinelKids",
      subtitle: "Real-Time Monitoring Platform",
      role: "Technical Project Manager & Systems Architect · Samarix",
      timeline: "2026 — Present",
      teamContext: "Cross-functional delivery across backend, UI/UX, QA, and client stakeholders",
      status: "Live in production",
      outcome: "Delivered reliable real-time monitoring flows with sub-200ms event propagation targets and zero rollback releases in recent cycles.",
      ownership: "Owned milestone scoping, sprint cadence, architecture trade-offs, and release readiness from planning through production launch.",
      stackSummary: "NestJS · Redis · Kafka · Docker · TypeScript",
      isProprietary: true,
      problem: {
        overview: "The product required low-latency event handling for live monitoring while keeping release quality high across frequent client-facing iterations.",
        users: "Parents, monitoring operators, support teams, and client-side product stakeholders.",
        constraints: [
          "Core monitoring updates had to propagate fast enough for real-time visibility.",
          "Concurrent event streams across clients needed predictable throughput without queue pileup.",
          "Release windows were fixed by client commitments, so regressions had to be caught before launch.",
        ],
        outOfScope: "Native mobile telemetry collection and hardware-level tracking firmware.",
      },
      systemContext: {
        summary: "An event-driven monitoring backend built for high-throughput updates and predictable operational behavior.",
        diagramText: "Event Producers → Kafka Topics → NestJS Consumers → Redis State Layer → API/WebSocket Delivery",
        caption: "Decoupled event ingestion and delivery paths to control latency and isolate failures.",
      },
      containerView: {
        summary: "Service-oriented runtime split between ingestion, processing, state caching, and delivery.",
        layers: [
          { name: "API & Service Layer", tech: "NestJS, TypeScript", role: "Request handling, validation, and monitoring workflows" },
          { name: "Event Backbone", tech: "Apache Kafka", role: "Durable stream ingestion and asynchronous processing" },
          { name: "Fast State Access", tech: "Redis", role: "Low-latency reads for current monitoring state" },
          { name: "Runtime & Delivery", tech: "Docker, CI/CD", role: "Consistent environment, deployment control, and release repeatability" },
        ],
      },
      criticalFlow: {
        title: "Monitoring Event to User Visibility",
        description: "How raw events move through the platform and appear in near real time.",
        steps: [
          { step: 1, title: "Event Ingestion", detail: "Incoming monitoring events are validated and published into partitioned Kafka topics." },
          { step: 2, title: "Stream Processing", detail: "NestJS consumers process events, apply business rules, and write current state snapshots." },
          { step: 3, title: "State Read Path", detail: "Redis serves current event state for low-latency API and socket responses." },
          { step: 4, title: "Client Update", detail: "User-facing surfaces receive updated monitoring status through API and real-time channels." },
        ],
      },
      decisions: [
        {
          decision: "Kafka-backed asynchronous event backbone",
          alternatives: "Direct synchronous service-to-service event handling",
          whyChosen: "Queue buffering and partitioned consumption gave better control over throughput and failure isolation.",
          costOrRisk: "Added operational complexity around consumer lag and topic management.",
          qualityAttribute: "Scalability & Reliability",
        },
        {
          decision: "Redis as the primary low-latency state layer",
          alternatives: "Serving all reads directly from persistent data stores",
          whyChosen: "In-memory state access reduced read latency for real-time monitoring endpoints.",
          costOrRisk: "Required careful cache invalidation and recovery strategy.",
          qualityAttribute: "Performance",
        },
      ],
      validation: {
        testsAndMonitoring: "Event throughput tracking, consumer lag monitoring, release checklists, and pre-launch QA signoff gates.",
        whatShipped: [
          "Event pipeline handling concurrent client monitoring streams.",
          "Real-time delivery path meeting sub-200ms propagation targets on core flows.",
          "Release process that held zero rollback incidents across recent deployments.",
        ],
        whatToImproveNext: [
          "Automated replay tooling for selective event backfills.",
          "Extended alerting on cross-topic lag spikes during peak windows.",
        ],
      },
    },

    "sehat-kahani": {
      slug: "sehat-kahani",
      title: "Sehat Kahani",
      subtitle: "Telemedicine Platform for Pakistan",
      role: "Full Stack Developer · Zetsol Technologies",
      timeline: "Dec 2023 — Jan 2026",
      teamContext: "Cross-functional team — web, mobile, backend, QA",
      status: "Live in production",
      outcome: "Supported thousands of daily teleconsultations across Pakistan through reliable backend APIs and clinical admin portals.",
      ownership: "Backend APIs, admin dashboards, doctor and patient web portals, e-pharmacy and lab integrations.",
      stackSummary: "Node.js · Express · Angular / React · MongoDB · JWT auth",
      liveUrl: "https://sehatkahani.com/",
      isProprietary: true,
      problem: {
        overview: "Patients across Pakistan — many in remote areas — needed a way to see licensed doctors online. The platform had to be fast, reliable, and handle sensitive medical data carefully.",
        users: "Patients, licensed doctors, clinic administrators, and corporate health partners.",
        constraints: [
          "Medical data requires strict privacy controls — no unauthorized access between patient sessions.",
          "Users on slower mobile connections in rural areas need the app to stay responsive.",
          "Third-party lab and pharmacy APIs are sometimes unavailable — the system needs to handle that gracefully.",
        ],
        outOfScope: "Native hardware diagnostics and insurance underwriting.",
      },
      systemContext: {
        summary: "A central coordination platform connecting patients, doctors, and healthcare vendors.",
        diagramText: "Patients / Doctors → HTTPS Gateway → Node.js API [Auth gated] → MongoDB → Async bridges [E-Pharmacy & Labs]",
        caption: "Clinical scheduling is decoupled from third-party vendor fulfillment.",
      },
      containerView: {
        summary: "Multi-tier architecture separating web clients, API, database, and external integrations.",
        layers: [
          { name: "Web Clients", tech: "Angular & React", role: "Doctor and patient portals" },
          { name: "API Layer", tech: "Node.js, Express", role: "Auth, routing, business logic" },
          { name: "Database", tech: "MongoDB", role: "Patient records, appointments, audit logs" },
          { name: "Integrations", tech: "REST Webhooks", role: "E-pharmacy and lab order dispatch" },
        ],
      },
      criticalFlow: {
        title: "Patient Appointment to Prescription",
        description: "How a patient books, sees a doctor, and receives a prescription — end to end.",
        steps: [
          { step: 1, title: "Patient Books Appointment", detail: "Patient picks a specialty and time; system creates a consultation with a unique ID." },
          { step: 2, title: "Doctor Claims", detail: "Available doctors receive a notification; the first to accept claims the session." },
          { step: 3, title: "Consultation Happens", detail: "Scoped session credentials are generated — valid only for that window." },
          { step: 4, title: "Prescription & Dispatch", detail: "Doctor writes a digital prescription; lab and pharmacy orders are dispatched automatically." },
        ],
      },
      decisions: [
        {
          decision: "JWT auth with role-based access",
          alternatives: "Session cookies, single-role flags",
          whyChosen: "Stateless tokens let the system scale horizontally without a shared session store.",
          costOrRisk: "Tokens must be short-lived with refresh rotation to stay secure.",
          qualityAttribute: "Security & Scalability",
        },
        {
          decision: "Async webhooks for pharmacy and lab orders",
          alternatives: "Synchronous calls during consultation close",
          whyChosen: "Keeps consultation wrap-up fast even if a third-party API is slow or down.",
          costOrRisk: "Requires retry logic and order status tracking.",
          qualityAttribute: "Reliability",
        },
      ],
      validation: {
        testsAndMonitoring: "Route permission tests, health check endpoints, structured error tracking on webhook calls.",
        whatShipped: [
          "Multi-role admin dashboard with real-time consultation oversight.",
          "Backend APIs supporting thousands of daily teleconsultations.",
          "Automated prescription and lab dispatch integrations.",
        ],
        whatToImproveNext: [
          "Distributed tracing across pharmacy partner networks.",
          "Edge caching for static doctor profile data.",
        ],
      },
    },

    "neem-io": {
      slug: "neem-io",
      title: "Neem",
      subtitle: "Digital Financial Platform",
      role: "Full Stack Developer · Zetsol Technologies",
      timeline: "Dec 2023 — Jan 2026",
      teamContext: "Core fintech team — engineering, compliance, design",
      status: "Live in production",
      outcome: "Built dashboards and onboarding flows for a platform handling online payments, digital lending, and wallet management.",
      ownership: "KYC onboarding, financial dashboards, payment integrations, and full-stack module development.",
      stackSummary: "Next.js · React · Tailwind CSS · Node.js · REST APIs",
      liveUrl: "https://neem.io",
      isProprietary: true,
      problem: {
        overview: "Merchants and businesses needed a clean, reliable interface to manage transactions, wallets, and onboard customers through KYC — in a regulated, compliance-sensitive context.",
        users: "Merchant business owners, financial operations teams, and compliance officers.",
        constraints: [
          "Financial data must be accurate — no stale balances or display discrepancies.",
          "KYC documents require careful multi-step validation.",
          "High transaction volume requires efficient data loading and rendering.",
        ],
        outOfScope: "Direct banking core integration and fiat clearance networks.",
      },
      systemContext: {
        summary: "Merchant-facing admin and operations portal for the embedded lending and payments platform.",
        diagramText: "Merchant Browser [Next.js] → HTTPS Gateway → Financial Engine → Ledger DB ↘ KYC Service",
        caption: "Clean separation between the merchant UI and financial data operations.",
      },
      containerView: {
        summary: "Modular Next.js frontend with typed API connectors and reusable component library.",
        layers: [
          { name: "Merchant Dashboard", tech: "Next.js, React, Tailwind CSS", role: "Fast, responsive portal with transaction tables and filters" },
          { name: "API Gateway", tech: "Node.js, Bearer Tokens", role: "Auth, rate limiting, query routing" },
          { name: "Transaction Service", tech: "Microservices", role: "Wallet balance updates and ledger processing" },
        ],
      },
      criticalFlow: {
        title: "Merchant Transaction View",
        description: "How a merchant queries and sees their transaction history — fast and accurate.",
        steps: [
          { step: 1, title: "Filter Selection", detail: "Merchant picks date range, payment method, status — UI sends debounced query." },
          { step: 2, title: "Auth Check", detail: "Gateway verifies token and scopes the query to the correct merchant account." },
          { step: 3, title: "Database Lookup", detail: "Indexed query runs — no full table scans." },
          { step: 4, title: "Response", detail: "Structured payload with total count, pagination, and clean formatting." },
        ],
      },
      decisions: [
        {
          decision: "Server-side pagination",
          alternatives: "Client-side slicing, offset/limit",
          whyChosen: "Stable rendering and low memory footprint as transaction logs grow.",
          costOrRisk: "Requires cursor state management across pages.",
          qualityAttribute: "Performance & Scalability",
        },
        {
          decision: "Tailwind CSS with reusable component tokens",
          alternatives: "Ad-hoc styling, heavy UI libraries",
          whyChosen: "Consistent look across all dashboards with a small bundle.",
          costOrRisk: "Upfront time to build the component library.",
          qualityAttribute: "Maintainability",
        },
      ],
      validation: {
        testsAndMonitoring: "Currency calculation checks, responsive QA, Lighthouse audits.",
        whatShipped: [
          "Merchant control panel for real-time payment and wallet monitoring.",
          "Multi-step KYC verification flow with document upload.",
          "Transaction ledger tables with filters and pagination.",
        ],
        whatToImproveNext: [
          "WebSocket push for instant transaction notifications.",
          "CSV/PDF export for monthly reconciliation.",
        ],
      },
    },

    "umah-shanti": {
      slug: "umah-shanti",
      title: "Umah Shanti Villa",
      subtitle: "Luxury Villa Booking Platform",
      role: "Full-Stack Developer · Freelance",
      timeline: "Freelance Client Delivery",
      teamContext: "Solo — full stack and deployment",
      status: "Live",
      outcome: "Launched a booking platform for a luxury Bali villa with date conflict prevention and integrated card payments.",
      ownership: "Everything — booking logic, payment integration, UI design implementation, deployment.",
      stackSummary: "Next.js · Node.js · Payment Gateway · Vercel",
      liveUrl: "https://vus-fe-zeta.vercel.app/",
      isProprietary: false,
      problem: {
        overview: "The villa wanted a direct booking site to avoid paying high commissions to travel platforms — but needed it to handle reservations reliably, especially preventing double-bookings.",
        users: "International guests and the villa's property managers.",
        constraints: [
          "Two guests cannot book the same dates simultaneously.",
          "High-quality images need to load fast on mobile for international visitors.",
          "Payment processing needs to handle failures gracefully.",
        ],
        outOfScope: "Multi-property channel manager sync.",
      },
      systemContext: {
        summary: "Direct booking site connected to a reservation engine and payment gateway.",
        diagramText: "Guest Browser [Next.js] → Booking Engine [Date conflict check] → Payment Gateway → Confirmation",
        caption: "Atomic reservation check tied directly to payment settlement.",
      },
      containerView: {
        summary: "Next.js site on Vercel with serverless functions for booking and payment.",
        layers: [
          { name: "Villa Website", tech: "Next.js, Tailwind CSS", role: "Fast, image-rich showcase and booking UI" },
          { name: "Booking Service", tech: "Node.js Serverless", role: "Date-range locking and reservation state" },
          { name: "Payment", tech: "Stripe / Card Gateway", role: "Secure card capture and charge" },
        ],
      },
      criticalFlow: {
        title: "Guest Books and Pays",
        description: "How a date selection turns into a confirmed, paid reservation without conflicts.",
        steps: [
          { step: 1, title: "Date Selection", detail: "Guest picks check-in/out; system checks real-time availability." },
          { step: 2, title: "Hold", detail: "Server creates a 15-minute hold, blocking the same dates for other guests." },
          { step: 3, title: "Payment", detail: "Guest pays via the secure card form." },
          { step: 4, title: "Confirmation", detail: "Payment webhook confirms the charge; hold becomes a permanent reservation." },
        ],
      },
      decisions: [
        {
          decision: "Static site generation with on-demand revalidation",
          alternatives: "Full server render on every request",
          whyChosen: "Near-instant load for international visitors with dynamic availability still up to date.",
          costOrRisk: "Needs a revalidation trigger when villa rates or photos change.",
          qualityAttribute: "Performance & SEO",
        },
        {
          decision: "Server-side date conflict check",
          alternatives: "Client-only disabled date arrays",
          whyChosen: "Eliminates race conditions where two guests try to book the same holiday window at the same time.",
          costOrRisk: "Needs a background job to release abandoned 15-minute holds.",
          qualityAttribute: "Reliability",
        },
      ],
      validation: {
        testsAndMonitoring: "Concurrent booking tests to verify zero date collisions under simultaneous load.",
        whatShipped: [
          "Fast, high-quality marketing and booking site.",
          "Conflict-free reservation engine.",
          "Direct card checkout with automated receipts.",
        ],
        whatToImproveNext: [
          "iCal sync with Airbnb and Booking.com.",
          "Multi-currency geo-pricing.",
        ],
      },
    },
  } as Record<string, CaseStudyData>,
};
