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
  keyFeatures?: string[];
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

export interface CaseStudyFeature {
  title: string;
  subtitle: string;
  badge?: string;
  capabilities: string[];
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
  featureBreakdown?: CaseStudyFeature[];
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
      subtitle: "Parent-Child Digital Safety & Device Management Platform",
      isFlagship: true,
      categories: ["Backend/API", "Architecture", "Full stack"],
      outcome: "Engineered real-time telemetry and rule enforcement pipelines powering parent monitoring, instant app blocking, and web filtering with sub-200ms push alert latency across React Native and Flutter mobile clients.",
      context: "Safety & EdTech · Samarix",
      ownership: "Led backend architecture and sprint delivery from inception to production. Engineered Node.js and Express backend services, PostgreSQL database schemas, Socket.io real-time connections, PubNub state synchronization, and Firebase push notifications for the React Native parent app and Flutter child app.",
      architectureSignal: "Node.js · Express.js · PostgreSQL · Socket.io · PubNub · Firebase FCM · React Native · Flutter",
      keyFeatures: [
        "Dual-App Architecture: Dedicated SentinelKids Parent App (React Native) securely paired to SentinelKids Child App (Flutter) via encrypted QR handshake",
        "Live Child Telemetry: Real-time sync of GPS coordinates, battery health, connection status, active screen time, and app usage logs via Socket.io and PubNub",
        "Web Filtering & Safe Browsing: Dynamic DNS and URL content filtering engine blocking adult, malicious, and restricted websites in real time",
        "App Blocker & Controls: Remote inventory of child-installed apps with one-tap instant blocking and per-app daily time allowances",
        "Routines & Bedtime Schedules: Automated recurring schedules (Study Time, Bedtime Curfews, Dinner) with remote device lockdown",
        "Geofencing & Smart Alerts: Safe zone boundary detection (Home, School) triggering sub-200ms Firebase push notifications on departure or arrival",
      ],
      stackGroups: {
        frontend: "Parent App (React Native), Child App (Flutter)",
        backend: "Node.js, Express.js, Socket.io, PubNub Data Streams",
        data: "PostgreSQL (Relational Store), PubNub Sync & Cache, Firebase",
        integrations: "Firebase Cloud Messaging (FCM Push Notifications), Geolocation Services",
        deployment: "Docker, CI/CD, Production Staging Gates",
      },
      image: "/project-1.png",
      caseStudyUrl: "/work/sentinelkids",
      liveUrl: undefined,
    },
    {
      slug: "sehat-kahani",
      title: "Sehat Kahani",
      subtitle: "Pakistan's Leading Telemedicine & Digital Healthcare Platform",
      isFlagship: true,
      categories: ["Full stack", "Backend/API"],
      outcome: "Engineered core clinical consultation and dispatch pipelines connecting over 7,500 licensed physicians across 40+ specialties with patients nationwide, delivering sub-60-second doctor response times and 99.9% uptime.",
      context: "Healthcare & Telemedicine · Zetsol Technologies",
      ownership: "Developed backend REST APIs in Koa.js and Express.js, clinical and admin portals in Angular, transactional medical schemas in MySQL, real-time consultation chat with SendBird SDK, and integrations for native mobile apps in Swift, Kotlin, and Java.",
      architectureSignal: "Angular · Koa.js · Express.js · MySQL · SendBird SDK · Swift · Kotlin · Java",
      keyFeatures: [
        "24/7 Instant Doctor Consultations: Live video, audio, and encrypted SendBird chat connecting patients with licensed physicians in under 60 seconds",
        "Cross-Platform Mobile Ecosystem: Dedicated native mobile applications engineered in Java and Kotlin for Android and Swift for iOS",
        "Clinical Web Portals: High-density clinical management and nurse intermediary portals built in Angular for doctors, nurses, and hospital staff",
        "Digital Health Records (EMR): HIPAA-compliant patient medical history, previous consultations, vitals charts, and diagnostic attachments stored in MySQL",
        "E-Prescriptions & Lab Dispatch: Automated electronic prescriptions instantly bridged to partner e-pharmacies and at-home diagnostic networks",
        "Rural E-Clinic Network: Specialized clinic portal empowering nurse intermediaries in underserved areas to connect walk-ins to online specialists",
      ],
      stackGroups: {
        frontend: "Angular (Clinical & Admin Portals), React (Patient Web App)",
        backend: "Koa.js, Express.js, Node.js Microservices",
        data: "MySQL (Transactional Clinical Records & EMR Schemas)",
        integrations: "SendBird SDK, WebRTC Video, Native Mobile SDKs (Swift, Kotlin, Java), E-Pharmacies & Labs",
        deployment: "Docker, AWS Cloud, Nginx Reverse Proxy",
      },
      image: "/sehatkahani.png",
      liveUrl: "https://sehatkahani.com/",
      caseStudyUrl: "/work/sehat-kahani",
    },
    {
      slug: "neem-io",
      title: "Neem",
      subtitle: "Embedded Financial Infrastructure & Banking-as-a-Service Platform",
      isFlagship: true,
      categories: ["Full stack", "Next.js", "Backend/API"],
      outcome: "Built mission-critical embedded banking, collections, and bulk disbursement modules for a licensed financial infrastructure platform, facilitating seamless money movement, automated reconciliation, and earned wage access.",
      context: "Fintech & Embedded Finance · Zetsol Technologies",
      ownership: "Developed merchant control panels in Next.js and Tailwind CSS, core backend financial API endpoints in Node.js, native app modules in Swift and Kotlin, multi-step KYC onboarding verification pipelines, and transaction ledger views.",
      architectureSignal: "Next.js · Node.js · Swift · Kotlin · Tailwind CSS · BaaS · REST APIs",
      keyFeatures: [
        "Embedded Banking-as-a-Service (BaaS): White-labeled digital accounts and custom-branded wallets for digital businesses and platforms",
        "Native Mobile App Integration: Mobile wallet and payment SDK modules developed in Swift for iOS and Kotlin for Android",
        "Merchant Dashboard & Web Experience: Fast, responsive web control panel built with Next.js and Tailwind CSS for real-time transaction monitoring and payouts",
        "Payment Rails (Collections & Bulk Payouts): Full-stack payment gateway supporting online collections, checkout buttons, and bulk disbursements",
        "Real-Time Double-Entry Ledger: Multi-tenant accounting ledger engine tracking debit/credit transactions with automated settlement reconciliation",
        "Neem Paymenow (Earned Wage Access): Shariah-compliant salary streaming enabling employees debt-free access to accrued earnings before payday",
        "Automated Multi-Tier KYC & Mastercard Issuance: Government NADRA CNIC verification and virtual/physical Mastercard card provisioning",
      ],
      stackGroups: {
        frontend: "Next.js, React, Tailwind CSS, TypeScript",
        backend: "Node.js, Express, REST APIs, Financial Microservices",
        data: "Double-Entry Ledger Store, Multi-tenant Financial DB",
        integrations: "Swift (iOS), Kotlin (Android), Meezan Bank, Mastercard, NADRA KYC, 1LINK / Raast",
        deployment: "Docker, Microservices, CI/CD",
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
      ownership: "Full-stack: booking flow, date conflict prevention, payment gateway, responsive UI.",
      architectureSignal: "Next.js · Node.js · Payment Gateway · Vercel",
      stackGroups: {
        frontend: "Next.js, Tailwind CSS",
        backend: "Node.js, Payment Gateway",
        deployment: "Vercel",
      },
      image: "/umahshanti.png",
      liveUrl: "https://www.villaumahshanti.com/",
    },
    {
      slug: "lawn-barber",
      title: "Lawn Barber",
      subtitle: "Outdoor Services Website",
      isFlagship: false,
      categories: ["Full Stack", "Freelance"],
      outcome: "Delivered a clean, fast website for a US lawn care business with service listings and quote requests.",
      context: "Services · Freelance",
      ownership: "Full ownership: design, development, deployment.",
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
      liveUrl: "https://jayakhub.com",
    },
    {
      slug: "listr-ai",
      title: "Listr AI",
      subtitle: "AI Lead Response Tool for Real Estate",
      isFlagship: false,
      categories: ["Full Stack", "AI"],
      outcome: "Managed delivery of an AI-powered lead-response and follow-up tool for real estate teams.",
      context: "PropTech · Samarix × Nortra LLC",
      ownership: "Project management: timelines, team coordination, client delivery.",
      architectureSignal: "AI · Lead automation · Real estate workflows",
      stackGroups: {
        frontend: "Web App",
        backend: "AI, Automation",
      },
      image: "/project-1.png",
      liveUrl: "https://listr.live",
    },
    {
      slug: "siteflows",
      title: "SiteFlows",
      subtitle: "Short-Term Rental Operations Platform",
      isFlagship: false,
      categories: ["Full Stack", "Backend"],
      outcome: "Led delivery of an operations platform for managing rental turnovers, cleanings, and damage reports.",
      context: "PropTech · Samarix",
      ownership: "Project management: design, engineering, and client coordination.",
      architectureSignal: "Node.js · TypeScript · Operations management",
      stackGroups: {
        backend: "Node.js, TypeScript",
      },
      image: "/project-1.png",
      liveUrl: "https://siteflows.ai",
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
      ownership: "Full ownership: design, development, performance optimisation, deployment.",
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
        description: "I spend time understanding what the product is actually for and who uses it, before touching the codebase.",
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
        description: "Especially when working on healthcare or financial products: proper auth, access control, and input validation from day one.",
      },
      {
        tag: "Think About the Next Dev",
        name: "Leave It Better Than You Found It",
        description: "Clean code, clear names, sensible structure. Someone will work on this after you, make their life easier.",
      },
      {
        tag: "Own the Outcome",
        name: "Care About What Ships, Not Just What You Built",
        description: "I stay involved until the thing actually works for users, not just until my PR is merged.",
      },
      {
        tag: "Work Fast with Teams",
        name: "Clarity Beats Cleverness in a Team",
        description: "Code and decisions that everyone on the team can follow move faster than clever solutions only one person understands.",
      },
      {
        tag: "Keep Learning",
        name: "Stay Curious",
        description: "The stack changes. The fundamentals don't. I try to stay curious about both: new tools and timeless principles.",
      },
    ],
  },

  experience: [
    {
      company: "Samarix",
      role: "Project Manager & Systems Architect",
      period: "July 2026 to Present",
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
      period: "December 2023 to January 2026",
      location: "Hyderabad, Sindh, Pakistan",
      website: "https://zetsol.ae/",
      scope: "Full-stack web development across healthcare, fintech, and client applications.",
      ownership: "Backend APIs, frontend dashboards, and third-party integrations across multiple products.",
      collaboration: "Cross-functional teams including UI/UX designers, backend engineers, and client stakeholders in an Agile environment.",
      outcome: "Delivered production features used by thousands of real users across Pakistan. Awarded Employee of the Month (June 2024).",
      highlights: [
        "Built and maintained backend APIs for Sehat Kahani, Pakistan's leading telemedicine platform.",
        "Developed full-stack modules for Neem, a digital financial platform, including KYC onboarding and wallet features.",
        "Worked across Angular and React frontends alongside Node.js backends.",
        "Awarded Employee of the Month (June 2024) for outstanding contribution.",
      ],
    },
    {
      company: "Saylani Mass IT Training (SMIT)",
      role: "Web & App Development Instructor",
      period: "July 2025 to Present",
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
      title: "Frontend & Mobile",
      subtitle: "Web applications and mobile client interfaces",
      skills: [
        { name: "React", level: "production" },
        { name: "Next.js", level: "production" },
        { name: "Angular", level: "production" },
        { name: "React Native", level: "production" },
        { name: "Flutter", level: "familiar" },
        { name: "Swift", level: "familiar" },
        { name: "Kotlin", level: "familiar" },
        { name: "TypeScript", level: "production" },
        { name: "Tailwind CSS", level: "production" },
      ],
    },
    {
      title: "Backend",
      subtitle: "APIs, microservices, and server-side logic",
      skills: [
        { name: "Node.js", level: "production" },
        { name: "Express.js", level: "production" },
        { name: "Koa.js", level: "production" },
        { name: "NestJS", level: "production" },
        { name: "REST APIs", level: "production" },
        { name: "Microservices", level: "production" },
      ],
    },
    {
      title: "Databases",
      subtitle: "Where the data lives",
      skills: [
        { name: "PostgreSQL", level: "production" },
        { name: "MySQL", level: "production" },
        { name: "MongoDB", level: "production" },
        { name: "Redis", level: "production" },
      ],
    },
    {
      title: "Real-time & Messaging",
      subtitle: "For systems that need to move fast",
      skills: [
        { name: "Socket.io", level: "production" },
        { name: "PubNub", level: "production" },
        { name: "SendBird SDK", level: "production" },
        { name: "Firebase FCM", level: "production" },
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
      "I started coding at 17 out of curiosity. Wanted to understand how websites worked. That turned into a career, and I'm still enjoying it.",
      "Right now I'm a Project Manager at Samarix, coordinating delivery across several live products and client teams. Before that I was deep in the code, building backends with Node.js and NestJS, shipping features for healthcare and fintech platforms used by real people across Pakistan.",
    ],
    principles: [
      {
        title: "Build for people, not for portfolios",
        description: "The measure of good software isn't how clever the architecture is; it's whether it solves a real problem for a real person.",
      },
      {
        title: "Simple beats smart",
        description: "I've learned to be suspicious of complexity. Usually the boring solution is the right one.",
      },
      {
        title: "Grow the people around you",
        description: "I spend time mentoring at SMIT because teaching is how you really find out what you know, and because the community gets stronger when more people ship great work.",
      },
    ],
    productionValues: [
      { label: "Reliability", desc: "I don't ship things I'm not confident in. Better to delay a day than to break something for users." },
      { label: "Honesty", desc: "I'd rather tell a client or teammate hard news early than let a problem grow until it's urgent." },
      { label: "Craft", desc: "I take pride in clean, readable code, not because it's aesthetic, but because it's faster and safer to work with." },
      { label: "Ownership", desc: "If my name is on it, I see it through from first commit to production." },
    ],
  },

  caseStudies: {
    sentinelkids: {
      slug: "sentinelkids",
      title: "SentinelKids",
      subtitle: "Parent-Child Digital Safety & Device Management Platform",
      role: "Project Manager & Backend Lead · Samarix",
      timeline: "2026 to Present",
      teamContext: "Cross-functional delivery squad across mobile engineers (Parent App in React Native, Child Daemon in Flutter), backend engineers, QA, and client leadership",
      status: "Live in production",
      outcome: "Delivered a resilient parent-child monitoring infrastructure processing high-frequency device telemetry with sub-200ms alert propagation, real-time web filtering, instant app blocking, and multi-device synchronization across zero-rollback releases.",
      ownership: "Architected the backend telemetry ingestion pipelines using Node.js and Express.js, designed PostgreSQL relational schemas for family hierarchies and device state, implemented Socket.io connections for real-time streaming, integrated PubNub for distributed state caching, and configured Firebase Cloud Messaging for instant push notifications to the React Native and Flutter clients.",
      stackSummary: "Node.js & Express.js backend services · PostgreSQL relational database · Socket.io real-time connection · PubNub real-time state sync & cache · Firebase push notifications · React Native (Parent App) · Flutter (Child App)",
      isProprietary: true,
      featureBreakdown: [
        {
          title: "Parent & Child Ecosystem & Secure Pairing",
          subtitle: "Dedicated dual-app architecture tailored strictly for parents and children",
          badge: "Core Ecosystem",
          capabilities: [
            "SentinelKids Parent App (React Native): Centralized command dashboard for parents to configure safety rules, monitor live locations, review usage reports, and trigger instant device locks.",
            "SentinelKids Child App (Flutter): Lightweight, battery-optimized background service installed on the child device enforcing system rules, intercepting URLs, and streaming telemetry.",
            "Cryptographic QR Pairing: 60-second out-of-band device onboarding establishing mutual authenticated trust between parent account and child hardware.",
            "Tamper & Uninstall Protection: Alerts parents immediately if accessibility permissions, device administration, or the child background daemon are tampered with.",
          ],
        },
        {
          title: "Real-Time Child Data & Telemetry Sync",
          subtitle: "Continuous tracking of child safety, device vitals, and digital health",
          badge: "Live Telemetry",
          capabilities: [
            "High-Precision GPS Tracking: Live map updates with breadcrumb trail history, movement velocity, and accuracy confidence intervals.",
            "Battery & Network Monitoring: Proactive alerts when a child's device drops below critical battery thresholds (e.g. 15%) or loses network connectivity.",
            "Active Screen Time Telemetry: Real-time calculation of daily screen usage, active foreground applications, and device unlock frequencies.",
            "Socket.io & PubNub Synchronization: Bidirectional real-time telemetry streaming maintaining active connection states and sub-second updates across parent and child devices.",
            "Zero-Data-Loss Offline Buffering: Local SQLite caching on the Flutter child device ensuring telemetry beacons upload smoothly via Socket.io once connectivity is restored.",
          ],
        },
        {
          title: "Web Filtering & Safe Surfing Engine",
          subtitle: "Dynamic content filtering blocking inappropriate, adult, and malicious websites",
          badge: "Web Filtering",
          capabilities: [
            "Multi-Category Content Blocker: Automated DNS and URL inspection blocking adult content, gambling, violence, weapons, and phishing sites in real time.",
            "Enforced Safe Search: Automatically forces SafeSearch on Google, Bing, and restricted mode on YouTube across all mobile browsers.",
            "Custom Blacklist & Whitelist: Allows parents to add specific domain exemptions or block custom websites instantly from the Parent App.",
            "Real-Time Web Browsing Logs: Detailed visibility into domains visited, search queries, and timestamped blocked access attempts.",
          ],
        },
        {
          title: "App Blocker & Application Inventory Management",
          subtitle: "Granular app-level management and instant application locking",
          badge: "App Management",
          capabilities: [
            "Live Application Inventory: Automatically catalogs every new app installed on the child device and sends an alert to the parent dashboard.",
            "One-Tap Instant App Lock: Instantly shut down access to specific distracting apps (social media, games) without affecting school or phone tools.",
            "Per-App Time Limits: Set strict daily quotas on specific entertainment apps (e.g., 30 minutes max on video streaming per day).",
            "New App Installation Approval: Optional gating preventing children from launching newly downloaded apps until parent approval is granted.",
          ],
        },
        {
          title: "Routines & Screen Time Scheduling",
          subtitle: "Automated daily schedules for bedtime, study, and family routines",
          badge: "Routines & Curfews",
          capabilities: [
            "Scheduled Bedtime Lockdown: Enforces complete device lockdown during sleep hours, leaving only emergency phone calling accessible.",
            "Education & Study Mode: Blocks social media and games during homework hours while keeping educational apps and calculators active.",
            "Dinner & Downtime Routines: One-tap 'Pause All Devices' routine for family dinners or study sessions.",
            "Daily Time Allowances: Global screen time limits that automatically disable entertainment once the daily threshold is met.",
          ],
        },
        {
          title: "Geofencing Safe Zones & Instant Alerts",
          subtitle: "Geographical boundaries with sub-200ms Firebase push alert dispatch",
          badge: "Geofencing & Alerts",
          capabilities: [
            "Custom Safe Zones: Circular and polygonal geofences around Home, School, Grandparents' House, and Sports Centers.",
            "Entry & Departure Triggering: Millisecond boundary evaluation generating instant alerts the moment a child arrives or departs.",
            "SOS Emergency Beacon: Instant one-tap child distress alert that broadcasts exact coordinates to parents with maximum alarm priority.",
            "Sub-200ms Firebase Push Dispatch: Real-time event pipeline evaluating geofence triggers and routing alerts through Firebase Cloud Messaging (FCM) to parent devices in under 200 milliseconds.",
          ],
        },
      ],
      problem: {
        overview: "Modern parents struggle to protect children from online harms, excessive screen time, and physical safety risks without resorting to invasive surveillance. SentinelKids required an ultra-reliable, battery-efficient dual-app platform capable of continuous telemetry, low-latency parent notifications, robust web filtering, and granular app management.",
        users: "Parents managing child well-being, children using connected mobile devices, and operations engineers monitoring streaming health.",
        constraints: [
          "Alert latency must stay strictly under 200ms for safety-critical geofence crossings and emergency SOS events.",
          "Child background service must maintain minimal battery drain (<3% daily impact) despite continuous GPS and telemetry sync.",
          "High-frequency telemetry spikes across thousands of concurrent child devices cannot saturate or degrade database writes.",
          "System must enforce strict COPPA/GDPR-K child privacy standards with end-to-end encrypted device-to-parent tunnels.",
        ],
        outOfScope: "Low-level OS firmware modifications, hardware-level carrier cell-tower triangulation, or third-party ad monetisation.",
      },
      systemContext: {
        summary: "Child mobile daemons (built in Flutter) stream real-time telemetry and rule validation queries over Socket.io into high-performance Node.js and Express ingestion gateways. Live state is coordinated through PubNub real-time streams and cached state buffers, persistent records commit to PostgreSQL, and safety triggers dispatch push notifications to the React Native Parent App via Firebase Cloud Messaging.",
        diagramText: "SentinelKids Child App (Flutter) ──(Socket.io / HTTPS)──> Node.js & Express Gateway ──> PubNub Sync & Cache ──> PostgreSQL [Relational DB] ──> Push Worker [Firebase FCM] ──> SentinelKids Parent App (React Native)",
        caption: "Decoupled streaming pipeline guarantees zero packet loss during traffic surges while providing instant state reflection to parent dashboards.",
      },
      containerView: {
        summary: "Layered distributed architecture designed for low-latency ingest, safe buffering, and high-frequency real-time updates.",
        layers: [
          { name: "Parent Mobile App", tech: "React Native, TypeScript", role: "Central parent command center for live location maps, routine schedules, app locks, and Firebase push alerts." },
          { name: "Child Mobile App & Background Daemon", tech: "Flutter, Dart, Native Accessibility Services", role: "Child client running background telemetry, URL interception, screen time calculation, and local app blocking." },
          { name: "API & Ingress Gateway", tech: "Node.js, Express.js, TypeScript", role: "Terminates client connections, validates DTO payloads, and orchestrates device authentication." },
          { name: "Real-Time Telemetry & Sync Layer", tech: "Socket.io, PubNub Data Streams", role: "Maintains bidirectional real-time sockets with child and parent clients, synchronizing state changes and caching active child vitals." },
          { name: "Persistent Relational Database", tech: "PostgreSQL", role: "Stores parent accounts, family hierarchies, device pairings, schedule policies, and historical telemetry logs with relational integrity." },
          { name: "Push Notification Worker", tech: "Firebase Cloud Messaging (FCM)", role: "Subscribes to high-priority alert triggers and dispatches instant parent push notifications." },
        ],
      },
      criticalFlow: {
        title: "Child Safe-Zone Departure & Instant Parent Alert Flow",
        description: "How a child leaving a designated School safe zone triggers spatial evaluation, event queueing, and sub-200ms parent push notification.",
        steps: [
          { step: 1, title: "Child Daemon Telemetry Capture", detail: "Flutter child device registers GPS movement and emits an encrypted location telemetry beacon via Socket.io to the Node.js/Express gateway." },
          { step: 2, title: "Spatial Ray-Casting & PubNub Publish", detail: "Edge worker verifies coordinates against safe zone polygon boundaries, detects exit boundary violation, and immediately broadcasts a boundary event through PubNub." },
          { step: 3, title: "Database Record & Alert Payload Formatting", detail: "System commits the incident to PostgreSQL and constructs a localized, high-priority notification payload for the parent account." },
          { step: 4, title: "Parent Notification & Live Map Lock", detail: "Parent receives high-priority Firebase push alert in <180ms; opening the notification launches the React Native Parent App focused on the child's live moving location." },
        ],
      },
      decisions: [
        {
          decision: "Socket.io and PubNub data stream pipeline for real-time telemetry and state sync",
          alternatives: "Periodic HTTP client polling, custom raw TCP socket servers",
          whyChosen: "Socket.io provides lightweight bidirectional communication with automatic fallback, while PubNub delivers managed pub/sub state caching across mobile clients with minimal battery consumption.",
          costOrRisk: "Required maintaining socket lifecycle states and reconnections when mobile devices switch between Wi-Fi and cellular.",
          qualityAttribute: "Performance, Low Latency & Battery Efficiency",
        },
        {
          decision: "PostgreSQL relational schemas with foreign key constraints for family hierarchies",
          alternatives: "Unstructured document stores without schema enforcement",
          whyChosen: "Safety-critical parent-child pairing, routine schedules, and geofence rules require strict relational consistency, ACID guarantees, and referential integrity.",
          costOrRisk: "Required structured database migration scripts and index optimization for high-frequency location history tables.",
          qualityAttribute: "Data Integrity & Reliability",
        },
        {
          decision: "Dedicated Flutter for Child App and React Native for Parent App",
          alternatives: "Single shared hybrid framework for both applications",
          whyChosen: "Flutter compiles directly to native machine code with fine-grained access to OS accessibility APIs and battery-efficient background daemons for the child device; React Native provides rapid component modularity and seamless native bridge access for the parent dashboard.",
          costOrRisk: "Required coordinating two distinct mobile codebases and client SDK contracts.",
          qualityAttribute: "Modularity, Native Device Control & Performance",
        },
      ],
      validation: {
        testsAndMonitoring: "Synthetic load testing with Apache JMeter, Prometheus consumer lag metrics, Grafana dashboards, and staging release gates.",
        whatShipped: [
          "End-to-end dual app pairing flow linking SentinelKids Parent App and SentinelKids Child App via secure QR handshake.",
          "Sub-200ms latency across core monitoring, safe zone geofence exits, and emergency alert dispatch paths.",
          "Dynamic web filtering and safe search engine blocking unauthorized URLs and harmful web categories.",
          "Application blocker and routine scheduling system enforcing bedtime and homework screen time limits.",
          "Zero rollback release cadence achieved through reproducible Docker builds and staging verification.",
        ],
        whatToImproveNext: [
          "Automated dead-letter queue (DLQ) re-drive tooling with operator self-service dashboard.",
          "Dynamic auto-scaling of worker consumer pods based on active consumer lag thresholds.",
          "On-device lightweight machine learning for intelligent anomaly and driving-speed detection.",
        ],
      },
    },

    "sehat-kahani": {
      slug: "sehat-kahani",
      title: "Sehat Kahani",
      subtitle: "Pakistan's Leading Telemedicine & Digital Healthcare Platform",
      role: "Full Stack Developer · Zetsol Technologies",
      timeline: "Dec 2023 to Jan 2026",
      teamContext: "Clinical engineering pod: native mobile developers (Swift, Kotlin, Java), web engineers (Angular), backend engineers (Koa.js, Express.js), QA, and clinical liaisons",
      status: "Live in production",
      outcome: "Built resilient, high-volume telemedicine pipelines serving thousands of daily consultations across rural clinics, urban mobile users, and major corporate healthcare partners with sub-60-second physician match times.",
      ownership: "Developed backend REST APIs in Koa.js and Express.js, clinical and admin portals in Angular, transactional medical schemas in MySQL, real-time consultation chat with SendBird SDK, and integrations for native mobile apps in Swift, Kotlin, and Java.",
      stackSummary: "Angular clinical management portals · Koa.js & Express.js backend services · MySQL relational database · SendBird SDK for encrypted clinical chat · Native Java/Kotlin (Android) & Swift (iOS) mobile apps · WebRTC video",
      liveUrl: "https://sehatkahani.com/",
      isProprietary: true,
      featureBreakdown: [
        {
          title: "24/7 Instant Tele-Consultations & Doctor Matching",
          subtitle: "Rapid video, voice, and text consultations connecting patients in under 60 seconds",
          badge: "Instant Care",
          capabilities: [
            "Rapid Physician Routing: Dynamic queuing matching incoming patient consultation requests with available licensed general physicians in under 60 seconds.",
            "40+ Specialist Clinics: Scheduled consultations across cardiology, gynecology, pediatrics, dermatology, oncology, psychiatry, and internal medicine.",
            "Multi-Modal Communication: Secure, low-bandwidth optimized WebRTC video streaming, crystal-clear audio calls, and encrypted in-consultation chat powered by SendBird SDK.",
            "Native Mobile Apps: Dedicated high-performance apps built in Swift for iOS and Java/Kotlin for Android, optimized for low-latency video and audio consultations.",
          ],
        },
        {
          title: "Encrypted Electronic Medical Records (EMR)",
          subtitle: "Centralized, compliant medical history vault for patients and practitioners",
          badge: "Digital Records",
          capabilities: [
            "Comprehensive Patient Timeline: Consolidated repository of previous consultations, chronic condition notes, vitals histories, and surgical records.",
            "Relational Clinical Storage: Structured, ACID-compliant patient histories, consultation sessions, and billing logs stored in MySQL with field-level encryption.",
            "Diagnostic Report Attachments: Secure upload and high-speed viewing of high-resolution radiology scans, blood tests, and ultrasound PDFs.",
            "Automated Compliance Audit Trails: Immutable logging of every record inspection, prescription generation, and modification for healthcare compliance.",
          ],
        },
        {
          title: "E-Prescriptions & Asynchronous Fulfillment Rails",
          subtitle: "End-to-end digital prescription generation and home medicine delivery",
          badge: "Pharmacy & Labs",
          capabilities: [
            "Standardized Drug Database: Doctor prescription builder featuring verified pharmaceutical brand names, dosages, frequencies, and duration intervals.",
            "Automated Pharmacy Dispatch: Webhook integration routing prescriptions directly to certified partner e-pharmacies for doorstep medicine delivery.",
            "At-Home Lab Sample Collection: Digital diagnostic test orders that automatically schedule certified phlebotomists to collect patient samples at home.",
            "Fulfillment Status Tracking: Real-time order tracking from prescription validation and pharmacy packing to courier delivery.",
          ],
        },
        {
          title: "Rural E-Clinics & Nurse Intermediary Portals",
          subtitle: "Bridging the urban-rural healthcare divide through nurse-assisted telemedicine hubs",
          badge: "Rural Access",
          capabilities: [
            "Nurse-Assisted Walk-In Flow: Dedicated tablet/desktop interface allowing trained community nurses to register walk-in patients in remote villages.",
            "Vitals Recording Station: Rapid capture of blood pressure, blood glucose, temperature, and pulse prior to initiating doctor video connection.",
            "Low-Bandwidth Video Optimization: Dynamic video stream scaling sustaining continuous clinical consultations even on erratic 2G/3G connections.",
            "Physical Prescription Printout: In-clinic printing of digitally signed prescriptions for patients without smartphones or digital literacy.",
          ],
        },
        {
          title: "Corporate Wellness & Mental Health Portals",
          subtitle: "Enterprise health benefits, outpatient coverage, and psychological counseling",
          badge: "Corporate Care",
          capabilities: [
            "B2B Enterprise Admin Dashboard: Real-time corporate health analytics, utilization metrics, and employee coverage verification.",
            "Dedicated Mental Health Services: Confidential online counseling and therapy sessions with certified psychologists and psychiatrists.",
            "Corporate OPD Wallet Deductions: Automated billing against corporate employee health allowances with zero out-of-pocket friction.",
            "Preventative Health Checkups: Scheduled annual screenings, corporate health risk assessments, and wellness webinars.",
          ],
        },
      ],
      problem: {
        overview: "Millions of citizens in Pakistan lack immediate access to quality healthcare due to geographic remoteness, severe physician shortages in rural areas, and congested tertiary hospitals. Sehat Kahani required a reliable telemedicine platform capable of connecting patients with licensed physicians 24/7 in under 60 seconds, even over low-bandwidth cellular connections.",
        users: "Patients seeking consultations, licensed general physicians and specialists, rural nurse intermediaries, hospital administrators, and corporate HR managers.",
        constraints: [
          "Private health data (PHDS/HIPAA standards) had to stay protected at rest and in transit.",
          "Video consultations must maintain stability even on fluctuating 2G/3G mobile networks in semi-urban and rural areas.",
          "Third-party lab and pharmacy delivery API downtime must not block doctor consultations or delay medical care.",
        ],
        outOfScope: "Direct hardware biosensor driver interfacing and health insurance underwriting adjudication.",
      },
      systemContext: {
        summary: "One unified platform bridges patients, doctors, rural clinics, and fulfillment partners. Patient consultation requests from native mobile apps (Java, Kotlin, Swift) and web pass through Koa.js and Express.js API gateways into an atomic doctor claiming engine. Consultations execute via WebRTC video and SendBird chat channels, patient records store in MySQL, while prescription and lab fulfillment events queue into resilient asynchronous webhook workers.",
        diagramText: "Patients & Doctors [Java, Kotlin, Swift, Angular] ──(WebRTC / SendBird SDK / HTTPS)──> Koa.js & Express Gateway ──> MySQL [Transactional EMR & Consultations] ──> Async Webhook Workers ──> Partner E-Pharmacies & Diagnostic Labs",
        caption: "Stateless clinical services handle high-concurrency patient traffic while asynchronous queues protect doctor sessions from third-party vendor downtime.",
      },
      containerView: {
        summary: "Micro-architected services separating real-time communication, clinical records, and partner integrations.",
        layers: [
          { name: "Native Mobile Applications", tech: "Swift (iOS), Kotlin & Java (Android)", role: "Hardware-accelerated mobile apps for patients and doctors featuring low-latency camera/microphone integration and push notifications." },
          { name: "Clinical Management Web Portal", tech: "Angular, TypeScript", role: "High-density clinical web dashboard for physician consultations, patient queue triage, and EMR review." },
          { name: "Clinical API & Consultation Gateway", tech: "Koa.js, Express.js, Node.js", role: "Handles patient routing, doctor queue management, JWT authentication, and consultation lifecycles." },
          { name: "Encrypted Messaging Engine", tech: "SendBird SDK", role: "HIPAA-ready encrypted messaging infrastructure powering clinical chats, doctor-patient file attachments, and consultation transcripts." },
          { name: "Relational Health Store (EMR)", tech: "MySQL with Field-Level Encryption", role: "Strict ACID-compliant relational storage for patient records, medical histories, prescription entries, diagnostic attachments, and immutable audit trails." },
          { name: "Fulfillment Webhook Bus", tech: "Node.js Workers, Redis Queue", role: "Enqueues asynchronous dispatch to partner e-pharmacies and diagnostic sample collectors with retry backoff." },
        ],
      },
      criticalFlow: {
        title: "Appointment Booking to Prescription & Lab Fulfillment",
        description: "How a patient books a session, connects securely with a doctor, and receives automated medicine delivery.",
        steps: [
          { step: 1, title: "Patient Booking & Atomic Claim Guard", detail: "Patient requests a consultation via mobile or web; Koa.js/Express gateway creates a pending consultation record with an atomic database lock in MySQL to prevent concurrent double-booking." },
          { step: 2, title: "Doctor Notification & Claim Lock", detail: "Available licensed physicians receive push alerts; the first doctor to claim acquires the atomic lock and assigns their scoped physician credentials." },
          { step: 3, title: "Encrypted Video & SendBird Chat Session", detail: "Short-lived, cryptographically scoped session tokens are generated for WebRTC video and SendBird chat, granting room access strictly for the scheduled consultation window." },
          { step: 4, title: "Digital Prescription & Asynchronous Dispatch", detail: "Doctor enters digital prescription and diagnostic test orders; system commits records to MySQL and enqueues asynchronous webhooks to fulfillment partners with automatic retries." },
        ],
      },
      decisions: [
        {
          decision: "Koa.js and Express.js dual-microservice backend architecture",
          alternatives: "Monolithic single-framework setup, Django or Ruby backends",
          whyChosen: "Koa.js provides an ultra-lightweight, high-throughput asynchronous core for real-time consultation triage and doctor matching, while Express.js reliably orchestrates clinical administration, reporting, and webhook fulfillment.",
          costOrRisk: "Required maintaining consistent middleware patterns and error handling standards across both services.",
          qualityAttribute: "Performance, Throughput & Maintainability",
        },
        {
          decision: "MySQL relational database for clinical records and EMR over NoSQL",
          alternatives: "Schemaless document stores without relational constraints",
          whyChosen: "Patient diagnoses, pharmacy orders, doctor billing, and clinical audit records necessitate strict ACID guarantees, normalized table foreign keys, and zero transactional anomalies.",
          costOrRisk: "Required strict schema migration governance across releases.",
          qualityAttribute: "ACID Consistency, Compliance & Data Integrity",
        },
        {
          decision: "SendBird SDK for HIPAA-compliant encrypted in-consultation chat",
          alternatives: "Building custom WebSocket chat server from scratch",
          whyChosen: "Provided production-grade encrypted messaging, file attachment upload security, typing indicators, and offline message caching with established compliance out of the box.",
          costOrRisk: "Incurred third-party SDK subscription dependency and vendor API version maintenance.",
          qualityAttribute: "Security, Compliance & Fast Time to Market",
        },
      ],
      validation: {
        testsAndMonitoring: "Automated route permission test suites, synthetic connection tests on low-bandwidth throttles, and structured error tracking with Sentry.",
        whatShipped: [
          "High-performance backend APIs powering thousands of remote clinical consultations daily.",
          "Instant physician matching connecting patients to certified doctors in under 60 seconds.",
          "Role-based clinical dashboards for doctors, hospital administrators, and diagnostic partners.",
          "Rural E-Clinic portal supporting nurse intermediaries and offline-tolerant vitals logging.",
          "Resilient asynchronous prescription and lab fulfillment integration pipeline.",
        ],
        whatToImproveNext: [
          "Distributed tracing across pharmacy and courier partner networks.",
          "Edge caching for static doctor profile and specialty directory data.",
          "AI-assisted clinical note summarization for faster doctor handover.",
        ],
      },
    },

    "neem-io": {
      slug: "neem-io",
      title: "Neem",
      subtitle: "Embedded Financial Infrastructure & Banking-as-a-Service Platform",
      role: "Full Stack Developer · Zetsol Technologies",
      timeline: "Dec 2023 to Jan 2026",
      teamContext: "Core fintech squad: mobile engineers (Swift, Kotlin), payment systems engineers, compliance officers, frontend architects (Next.js), and banking partners",
      status: "Live in production",
      outcome: "Delivered mission-critical embedded banking, collections, and bulk disbursement modules for a licensed financial infrastructure platform, facilitating seamless money movement, automated reconciliation, and earned wage access.",
      ownership: "Built Next.js and Tailwind CSS merchant control panels, native app modules in Swift and Kotlin, KYC customer onboarding state machines, backend transaction processing endpoints in Node.js, and secure role-based ledger inspection tables with automated pagination.",
      stackSummary: "Next.js & React for dashboard UX · Swift (iOS) & Kotlin (Android) native mobile app modules · Tailwind CSS for modular design tokens · Node.js & Express for financial APIs · Double-entry ledger store · Banking partner rails",
      liveUrl: "https://neem.io",
      isProprietary: true,
      featureBreakdown: [
        {
          title: "Embedded Banking-as-a-Service (BaaS) & White-Labeled Wallets",
          subtitle: "Empowering digital businesses to embed banking capabilities natively without a banking license",
          badge: "BaaS & Wallets",
          capabilities: [
            "Virtual Account Creation: Generates unique digital bank accounts for end-users and merchants without requiring direct bank branch visits.",
            "White-Labeled Wallet Infrastructure: Allows e-commerce, agriculture, and logistics apps to offer custom-branded digital wallets for instant payments and claims.",
            "Interbank Transfers (IBFT / Raast): Instant funds movement across all Pakistani banks and mobile wallets via central financial switches.",
            "Programmatic Balance & Hold Management: Automated funds reservation and settlement release for escrow, lending, and multi-party workflows.",
          ],
        },
        {
          title: "Payment Rails: Collections & High-Volume Bulk Payouts",
          subtitle: "Full-stack money movement rails for businesses, vendors, and gig platforms",
          badge: "Payment Rails",
          capabilities: [
            "Multi-Method Collections: Accept payments via credit/debit cards, bank direct debit, digital wallets, and Raast instant QR codes.",
            "Automated Bulk Disbursements: High-throughput payout engine allowing businesses to disburse salaries, vendor invoices, and gig earnings in seconds.",
            "No-Code Payment Button & Plugins: Drop-in embeddable payment buttons and Shopify plugins for rapid merchant e-commerce checkout integration.",
            "SoftPOS Capability: Enables merchant Android smartphones to accept contactless card payments without expensive dedicated hardware terminals.",
          ],
        },
        {
          title: "Real-Time Double-Entry Ledger & Reconciliation",
          subtitle: "Bulletproof accounting integrity with automated bank settlement matching",
          badge: "Financial Ledger",
          capabilities: [
            "Immutable Double-Entry Bookkeeping: Every financial event creates paired, auditable debit and credit entries guaranteeing balance integrity.",
            "Automated Settlement Reconciliation: Daily matching of gateway collections against banking partner settlement reports with zero discrepancies.",
            "Merchant Analytics Dashboard: Real-time visual tracking of transaction velocity, processing fees, pending settlements, and chargebacks.",
            "Server-Side Cursor Pagination: High-performance ledger inspection supporting millions of historical transaction rows without UI degradation.",
          ],
        },
        {
          title: "Neem Paymenow: Shariah-Compliant Earned Wage Access (EWA)",
          subtitle: "Ethical, debt-free salary streaming empowering employees with accrued earnings",
          badge: "Earned Wage Access",
          capabilities: [
            "Accrued Wage Calculation: Automatically tracks verified days worked and calculates available earned wages in real time.",
            "Instant Salary Drawdown: Employees can withdraw a portion of their earned wages directly into their bank account or wallet before month-end.",
            "Shariah-Compliant Structure: Zero loan interest; transparent fixed micro-fee model structured according to Islamic finance principles.",
            "Payroll Integration Sync: Automatic deduction of drawn amounts from standard monthly corporate payroll runs.",
          ],
        },
        {
          title: "Automated Multi-Tier KYC & Mastercard Issuance",
          subtitle: "Frictionless identity verification and payment card provisioning",
          badge: "KYC & Cards",
          capabilities: [
            "NADRA CNIC Verification: Real-time government identity verification checking citizen records and biometric markers.",
            "Multi-Tier Verification Workflows: Tiered onboarding transaction limits adapting to user document submission (CNIC, proof of income, live selfie).",
            "Mastercard Debit Card Issuance: Provisioning of virtual debit cards for instant online checkout and physical cards for ATM/POS use.",
            "Card Security Controls: In-app PIN management, spend limit enforcement, and instant card freezing/unfreezing.",
          ],
        },
      ],
      problem: {
        overview: "Emerging market enterprises struggle to incorporate financial services into their customer journeys due to regulatory hurdles, legacy bank APIs, and complex compliance frameworks. Neem bridges this gap by providing an embedded financial infrastructure layer that enables platforms to offer digital accounts, cards, payments, and credit natively.",
        users: "Merchant business owners, enterprise finance teams, compliance officers, and platform end-users utilizing embedded wallets.",
        constraints: [
          "Financial accounting requires absolute zero-loss ledger consistency and idempotent transaction processing.",
          "Identity verification (KYC/AML) must comply with State Bank of Pakistan (SBP) regulatory requirements while maintaining low friction.",
          "High transaction volumes during peak shopping or payroll cycles must not exceed database connection limits or degrade latency.",
        ],
        outOfScope: "Direct central bank fiat minting and physical cash transit operations.",
      },
      systemContext: {
        summary: "Merchant web applications and enterprise platforms interact with Neem's API Gateway. Requests are authenticated, scoped to specific merchant tenants, and processed by core microservices handling wallets, payments, and KYC. Every balance change triggers double-entry ledger commits and partner bank settlement synchronization.",
        diagramText: "Merchant Platforms & Apps [Next.js, Swift, Kotlin] ──(HTTPS/REST)──> Neem API Gateway [Tenant Auth] ──> Payment & BaaS Core ──> Double-Entry Ledger DB ──> Banking Switches [1LINK / Meezan / Mastercard]",
        caption: "Multi-tenant architecture isolating client records while routing financial instructions through licensed banking partner networks.",
      },
      containerView: {
        summary: "Modular full-stack fintech architecture separating merchant client UX, API orchestration, and core ledger persistence.",
        layers: [
          { name: "Merchant Dashboard & Web Experience", tech: "Next.js, React, Tailwind CSS", role: "Fast, responsive web portals for transaction monitoring, API key provisioning, and KYC submissions." },
          { name: "Native Mobile Apps & Embedded SDKs", tech: "Swift (iOS), Kotlin (Android)", role: "Native mobile wallet and payment SDK modules embedded into partner consumer applications." },
          { name: "Financial API Gateway", tech: "Node.js, Express, TypeScript", role: "Enforces tenant isolation, idempotency keys, rate limiting, and request signature verification." },
          { name: "Payment & BaaS Engine", tech: "Node.js Microservices", role: "Processes collection flows, bulk payout batches, and wallet balance adjustments." },
          { name: "Double-Entry Ledger Store", tech: "Multi-Tenant Financial Cluster", role: "Stores auditable transaction entries, account balances, and merchant settlement logs." },
          { name: "Banking & Card Bridges", tech: "REST Webhooks, ISO 8583 Adapters", role: "Communicates directly with Meezan Bank, 1LINK switch, and Mastercard issuance networks." },
        ],
      },
      criticalFlow: {
        title: "Merchant Payment Collection & Instant Ledger Settlement",
        description: "How an online payment is captured, validated, and credited to the merchant's digital wallet in real time.",
        steps: [
          { step: 1, title: "Checkout Initialization & Idempotency Key", detail: "Customer clicks checkout; merchant sends request with a unique idempotency key to prevent duplicate charging." },
          { step: 2, title: "Payment Routing & Bank Authorization", detail: "Gateway verifies merchant tenant and routes charge through partner banking rails (Meezan/1LINK) for instant debit authorization." },
          { step: 3, title: "Double-Entry Ledger Commit", detail: "Upon payment confirmation, ledger service executes an atomic write: debiting payment gateway clearing account and crediting merchant digital wallet account." },
          { step: 4, title: "Real-time Dashboard Reflection & Webhook", detail: "Merchant Next.js dashboard updates balances immediately, and an asynchronous webhook fires to the merchant server with transaction proof." },
        ],
      },
      decisions: [
        {
          decision: "Server-side cursor pagination for transaction ledgers",
          alternatives: "Client-side slicing, traditional offset/limit SQL pagination",
          whyChosen: "Guarantees stable O(1) query performance and prevents skipped/duplicated records even when high-frequency transactions are continually appended to the ledger.",
          costOrRisk: "Requires cursor state management across pages rather than jumping directly to arbitrary page numbers.",
          qualityAttribute: "Performance & Scalability",
        },
        {
          decision: "Tailwind CSS with centralized design token architecture",
          alternatives: "Ad-hoc component styling, heavy third-party UI component libraries",
          whyChosen: "Maintains absolute visual consistency across financial dashboards while producing an ultra-lightweight client CSS bundle with fast loading times.",
          costOrRisk: "Required upfront effort to establish design tokens for badges, status chips, and tabular layouts.",
          qualityAttribute: "Maintainability & Performance",
        },
        {
          decision: "Idempotency key enforcement on all payment and disbursement endpoints",
          alternatives: "Optimistic frontend debouncing without backend enforcement",
          whyChosen: "Completely eliminates double-charge or double-payout anomalies caused by network retries or aggressive user clicking.",
          costOrRisk: "Requires caching transaction idempotency tokens in Redis with TTL expiration.",
          qualityAttribute: "Financial Consistency & Reliability",
        },
      ],
      validation: {
        testsAndMonitoring: "Automated currency calculation test suites, double-entry balanced-ledger integrity checks, and real-time error tracking.",
        whatShipped: [
          "Merchant control panel for real-time payment monitoring, bulk payouts, and wallet balance management.",
          "Multi-step KYC customer verification flow integrated with national identity databases.",
          "High-performance transaction ledger tables with live filtering and cursor-based pagination.",
          "Neem Paymenow Earned Wage Access module for debt-free employee salary streaming.",
          "Mastercard card management dashboard supporting virtual card generation and status locking.",
        ],
        whatToImproveNext: [
          "WebSocket push integration for sub-second transaction sound and visual notifications.",
          "Automated PDF and Excel tax statement generation for quarterly reconciliation.",
          "Granular team permission levels (Maker-Checker workflow) for bulk payout approvals.",
        ],
      },
    },

    "umah-shanti": {
      slug: "umah-shanti",
      title: "Umah Shanti Villa",
      subtitle: "Luxury Villa Booking Platform",
      role: "Full-Stack Developer · Freelance",
      timeline: "Freelance Client Delivery",
      teamContext: "Solo: full stack and deployment",
      status: "Live",
      outcome: "Launched a booking platform for a luxury Bali villa with date conflict prevention and integrated card payments.",
      ownership: "Everything: booking logic, payment integration, UI design implementation, deployment.",
      stackSummary: "Next.js · Node.js · Payment Gateway · Vercel",
      liveUrl: "https://www.villaumahshanti.com/",
      isProprietary: false,
      problem: {
        overview: "The villa wanted a direct booking site to avoid paying high commissions to travel platforms, but needed it to handle reservations reliably, especially preventing double-bookings.",
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
