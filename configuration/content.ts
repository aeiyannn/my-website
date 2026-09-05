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
      subtitle: "Family Safety Monitoring Platform",
      isFlagship: true,
      categories: ["Backend", "Real-time", "System Design"],
      outcome: "Built a fast and stable monitoring flow that keeps parents updated quickly and stayed reliable across releases.",
      context: "Product Platform · Samarix",
      ownership: "I handled planning and backend delivery with the team from kickoff to production.",
      architectureSignal: "Node.js · Firebase · Kafka · Redis",
      stackGroups: {
        backend: "Node.js, NestJS, TypeScript",
        data: "Firebase, Redis, Kafka",
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
      outcome: "Helped deliver a stable telemedicine platform used daily by doctors and patients across Pakistan.",
      context: "Healthcare · Zetsol Technologies",
      ownership: "I worked on APIs, dashboards, and integrations used by doctors, patients, and operations teams.",
      architectureSignal: "Node.js · Angular · React · MongoDB",
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
      outcome: "Built important product modules that helped teams manage payments, lending, and wallets in one place.",
      context: "Fintech · Zetsol Technologies",
      ownership: "I owned key full stack features including onboarding, dashboards, and payment related flows.",
      architectureSignal: "Next.js · React · Node.js · Tailwind CSS",
      stackGroups: {
        frontend: "Next.js, React, Tailwind CSS",
        backend: "Node.js, REST APIs",
        data: "MongoDB",
        integrations: "KYC, Digital Lending, Wallets",
      },
      image: "/neem.png",
      liveUrl: "https://neem.io",
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
      subtitle: "Family Safety Monitoring Platform",
      role: "Project Manager and Backend Lead · Samarix",
      timeline: "2026 — Present",
      teamContext: "Cross-functional delivery across distributed backend, frontend, QA, and client stakeholders",
      status: "Live in production",
      outcome: "Delivered fast and reliable live updates for families while keeping releases stable in production.",
      ownership: "I led delivery planning and backend execution with the engineering team through launch and ongoing updates.",
      stackSummary: "Node.js for backend APIs · Firebase for auth and realtime data support · Kafka for event streaming · Redis for fast reads and caching",
      isProprietary: true,
      problem: {
        overview: "Families needed quick and dependable monitoring updates, and the team needed a setup that could handle growth without slowing down.",
        users: "Parents, support teams, and operations staff.",
        constraints: [
          "Updates had to appear quickly for parents to trust the system.",
          "Traffic spikes could not break event delivery.",
          "Release dates were fixed, so quality checks had to stay strong.",
        ],
        outOfScope: "Device firmware and hardware level tracking logic.",
      },
      systemContext: {
        summary: "Events come in, get processed, and are pushed to users quickly in a stable flow.",
        diagramText: "Apps and Devices → Kafka → Node.js Services → Redis and Firebase → API and live updates",
        caption: "This flow keeps updates fast while reducing downtime risk.",
      },
      containerView: {
        summary: "Stack used and why it was used.",
        layers: [
          { name: "Backend Services", tech: "Node.js, NestJS, TypeScript", role: "Used to build and scale backend APIs and core monitoring logic." },
          { name: "Real-Time Data Support", tech: "Firebase", role: "Used for auth support and realtime client side updates where needed." },
          { name: "Event Streaming", tech: "Kafka", role: "Used to process large event traffic safely and in order." },
          { name: "Caching Layer", tech: "Redis", role: "Used to keep reads fast and reduce backend load." },
        ],
      },
      criticalFlow: {
        title: "Alert to Family Update",
        description: "How an incoming event turns into a visible update for the user.",
        steps: [
          { step: 1, title: "Event Received", detail: "A monitoring event is captured and sent into the event stream." },
          { step: 2, title: "Event Processed", detail: "Node.js services apply rules and prepare the latest status." },
          { step: 3, title: "State Updated", detail: "Redis and Firebase hold the newest state for fast access." },
          { step: 4, title: "User Notified", detail: "The user sees the updated status in near real time." },
        ],
      },
      decisions: [
        {
          decision: "Apache Kafka partitioned streaming over synchronous HTTP/database writes",
          alternatives: "Synchronous REST API writes to relational DB, single Redis pub/sub queue",
          whyChosen: "Durable log buffering protects downstream services during traffic spikes and allows consumer groups to scale independently without data loss.",
          costOrRisk: "Introduced operational complexity in consumer group offset tracking and partition rebalancing.",
          qualityAttribute: "Scalability, Reliability & Durability",
        },
        {
          decision: "In-memory Redis state layer for active monitoring queries",
          alternatives: "Querying persistent database on every status lookup",
          whyChosen: "Direct in-memory access reduced P99 query latency from 85ms to under 4ms, ensuring real-time responsiveness for monitoring operators.",
          costOrRisk: "Required rigorous cache eviction policies and background snapshot persistence.",
          qualityAttribute: "Performance & Low Latency",
        },
        {
          decision: "Schema-driven DTO validation with class-validator and TypeScript interfaces",
          alternatives: "Unchecked payload routing with ad-hoc runtime checks",
          whyChosen: "Ensures corrupted telemetry packets are dropped at the edge gateway before reaching Kafka queues.",
          costOrRisk: "Slight CPU overhead during edge deserialization (<1ms per request).",
          qualityAttribute: "Data Integrity & Security",
        },
      ],
      validation: {
        testsAndMonitoring: "Synthetic load testing with Apache JMeter, Prometheus consumer lag metrics, Grafana dashboards, and staging release gates.",
        whatShipped: [
          "Distributed real-time streaming pipeline processing high-frequency client telemetry.",
          "Sub-200ms latency across core monitoring and alert dispatch paths.",
          "Zero rollback release cadence achieved through reproducible Docker builds and staging verification.",
        ],
        whatToImproveNext: [
          "Automated dead-letter queue (DLQ) re-drive tooling with operator self-service dashboard.",
          "Dynamic auto-scaling of worker consumer pods based on active consumer lag thresholds.",
        ],
      },
    },

    "sehat-kahani": {
      slug: "sehat-kahani",
      title: "Sehat Kahani",
      subtitle: "Pakistan's Leading Telemedicine Platform",
      role: "Full Stack Developer · Zetsol Technologies",
      timeline: "Dec 2023 — Jan 2026",
      teamContext: "Cross-functional engineering pod — web portals, mobile apps, backend services, QA, clinical liaisons",
      status: "Live in production",
      outcome: "Helped keep daily online consultations smooth for doctors and patients across Pakistan.",
      ownership: "I worked on APIs, portals, dashboards, and integrations used in day to day clinical operations.",
      stackSummary: "Node.js and Express for backend APIs · Angular and React for web portals · MongoDB for patient and appointment data",
      liveUrl: "https://sehatkahani.com/",
      isProprietary: true,
      problem: {
        overview: "People needed access to doctors online, including users in areas where physical clinics are harder to reach.",
        users: "Patients, licensed doctors, clinic administrators, and corporate health partners.",
        constraints: [
          "Private health data had to stay protected at every step.",
          "The app had to work well even on slower connections.",
          "Lab and pharmacy partners could fail, but consultations still had to continue.",
        ],
        outOfScope: "Direct hardware biosensor driver interfacing and health insurance underwriting adjudication.",
      },
      systemContext: {
        summary: "One platform connects patients, doctors, and partner services in a clean flow.",
        diagramText: "Patients / Doctors → HTTPS Gateway → Node.js API [Auth gated] → MongoDB → Async bridges [E-Pharmacy & Labs]",
        caption: "This keeps doctor sessions smooth while partner integrations run in parallel.",
      },
      containerView: {
        summary: "Stack used and why it was used.",
        layers: [
          { name: "Web Portals", tech: "Angular, React", role: "Used to give separate, user friendly views for doctors and patients." },
          { name: "Backend APIs", tech: "Node.js, Express", role: "Used to handle appointment logic, auth, and core data flows." },
          { name: "Data Store", tech: "MongoDB", role: "Used for flexible patient, appointment, and admin records." },
          { name: "Partner Integrations", tech: "REST Webhooks", role: "Used to connect pharmacy and lab services without blocking the core app." },
        ],
      },
      criticalFlow: {
        title: "Appointment Booking to Prescription & Lab Fulfillment",
        description: "How a patient books a session, connects securely with a doctor, and receives automated medicine delivery.",
        steps: [
          { step: 1, title: "Patient Booking & Atomic Claim Guard", detail: "Patient requests a consultation; system creates a pending consultation document with an atomic optimistic lock to prevent concurrent double-booking." },
          { step: 2, title: "Doctor Notification & Claim Lock", detail: "Available licensed physicians receive push alerts; the first doctor to claim acquires the atomic lock and assigns their scoped physician credentials." },
          { step: 3, title: "Encrypted Video Consultation Session", detail: "Short-lived, cryptographically scoped session tokens are generated, granting room access strictly for the scheduled consultation window." },
          { step: 4, title: "Digital Prescription & Asynchronous Dispatch", detail: "Doctor enters digital prescription and diagnostic test orders; system enqueues asynchronous webhooks to fulfillment partners with automatic retries." },
        ],
      },
      decisions: [
        {
          decision: "Stateless JWT authentication with cryptographic role-based access control (RBAC)",
          alternatives: "Stateful session cookies with shared server-side session store",
          whyChosen: "Enabled horizontal scaling of backend API instances without requiring a synchronized shared session cluster, eliminating a single point of failure.",
          costOrRisk: "Required short token lifespans (15 min) paired with secure refresh token rotation to mitigate revocation latency.",
          qualityAttribute: "Scalability, Security & Availability",
        },
        {
          decision: "Asynchronous webhook dispatch queue with exponential backoff for external vendors",
          alternatives: "Synchronous blocking HTTP calls during consultation closure",
          whyChosen: "Prevents slow or failing third-party pharmacy or lab systems from locking the consultation checkout flow or degrading the patient experience.",
          costOrRisk: "Required durable retry state tracking and dead-letter monitoring in MongoDB.",
          qualityAttribute: "Fault Tolerance & Resilience",
        },
        {
          decision: "Optimistic locking with version keys on consultation documents",
          alternatives: "Pessimistic table/collection locks, manual client-side flags",
          whyChosen: "Eliminated race conditions when multiple physicians accepted simultaneous notifications, without degrading overall database throughput.",
          costOrRisk: "Occasional write conflict requiring transparent client-side retry for the slower claiming physician.",
          qualityAttribute: "Concurrency & Data Consistency",
        },
      ],
      validation: {
        testsAndMonitoring: "Automated route permission test suites, synthetic connection tests on low-bandwidth throttles, and structured error tracking with Sentry.",
        whatShipped: [
          "High-performance backend APIs powering thousands of remote clinical consultations daily.",
          "Role-based clinical dashboards for doctors, hospital administrators, and diagnostic partners.",
          "Resilient asynchronous prescription and lab fulfillment integration pipeline.",
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
      outcome: "Delivered practical product features for payments, lending, wallets, and onboarding operations.",
      ownership: "I built and shipped full stack modules focused on onboarding, dashboards, and financial workflows.",
      stackSummary: "Next.js and React for dashboard UX · Tailwind CSS for fast UI consistency · Node.js for backend APIs",
      liveUrl: "https://neem.io",
      isProprietary: true,
      problem: {
        overview: "Merchants needed one clear platform to manage transactions, wallets, and customer onboarding.",
        users: "Merchant business owners, financial operations teams, and compliance officers.",
        constraints: [
          "Financial numbers had to stay accurate and up to date.",
          "KYC checks needed a clear, reliable step by step flow.",
          "Large transaction lists had to stay fast and easy to use.",
        ],
        outOfScope: "Direct banking core integration and fiat clearance networks.",
      },
      systemContext: {
        summary: "A merchant focused platform for operations, payments, and onboarding tasks.",
        diagramText: "Merchant Browser [Next.js] → HTTPS Gateway → Financial Engine → Ledger DB ↘ KYC Service",
        caption: "This setup kept the interface fast while backend services handled data workloads.",
      },
      containerView: {
        summary: "Stack used and why it was used.",
        layers: [
          { name: "Merchant Dashboard", tech: "Next.js, React, Tailwind CSS", role: "Used to build a fast and consistent dashboard experience." },
          { name: "API Layer", tech: "Node.js", role: "Used to manage auth, request routing, and business rules." },
          { name: "Financial Services", tech: "Service Modules", role: "Used to process wallet updates and transaction records safely." },
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
