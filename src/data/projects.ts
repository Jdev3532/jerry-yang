export interface Project {
  id: string;
  name: string;
  description: string;
  yourWork: string;
  demonstrates: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  stars?: string;
}

export interface CompanySection {
  company: string;
  role: string;
  period: string;
  description: string;
  projects: Project[];
}

export const companySections: CompanySection[] = [
  {
    company: "Turo",
    role: "Senior Software Engineer",
    period: "Mar 2023 - Present",
    description: "World's largest car-sharing marketplace — building AI-powered customer experience systems that handle millions of host and guest interactions across multiple languages and regions.",
    projects: [
      {
        id: "turo-ai-support",
        name: "AI Customer Support Platform",
        description: "AI-powered Help Center and virtual agent that resolves host and guest inquiries in real time — covering trip issues, insurance claims, cancellations, and account questions across the Turo marketplace.",
        yourWork: "Architected the front-end of the AI Help Center using React and TypeScript, integrating a streaming LLM-backed virtual agent with intent classification, entity extraction, and live agent handoff. Built the conversation UI with optimistic streaming, citation rendering, and feedback loops that continuously improve answer quality. Implemented the embedded chat widget and SDK that surfaces the assistant across help.turo.com, the iOS/Android app, and host dashboards.",
        demonstrates: "End-to-end AI product engineering — from LLM orchestration to a production-grade conversational UI. The platform deflects a majority of incoming tickets, dramatically lowers support cost per contact, and keeps CSAT high across millions of conversations.",
        technologies: ["React", "TypeScript", "Next.js", "Node.js", "LLMs", "WebSockets"],
        demoUrl: "https://help.turo.com",
        image: "/images/turo-ai-support.png",
      },
      {
        id: "turo-multilingual",
        name: "Multilingual Help & Localization",
        description: "Globalized Help Center serving Turo hosts and guests in English, French, Spanish, German, and Italian — with locale-aware content, AI translation pipelines, and a unified content model across regions.",
        yourWork: "Built the localization layer that drives every help article, virtual agent response, and UI string from a single source of truth. Designed the content pipeline that combines professional translation with LLM-assisted translation review for long-tail content. Implemented locale routing, hreflang SEO, and per-market content variants so European hosts see region-specific policies (insurance, taxes, ID checks) while sharing one platform.",
        demonstrates: "Internationalization at marketplace scale — shipping a single product surface that feels native in every language and country Turo operates in, while keeping content engineering velocity high.",
        technologies: ["React", "TypeScript", "i18next", "Next.js", "Contentful", "Node.js"],
        demoUrl: "https://help.turo.com/en_us/languages-available-for-turo-hosts-H1aLjYvDZ",
        image: "/images/turo-multilingual.png",
      },
      {
        id: "turo-ujet",
        name: "UJET AI Virtual Agent Integration",
        description: "Production deployment of UJET's AI Virtual Agent across Turo's contact center — handling automated triage, knowledge retrieval, and seamless escalation to human support specialists.",
        yourWork: "Owned the Turo-side integration with UJET's AI Virtual Agent: webhook orchestration, customer context injection (active trips, vehicle, claim history), and intent-to-action mapping that lets the agent perform real account operations such as trip lookups and refund eligibility checks. Built the analytics surface that tracks containment rate, deflection, CSAT, and escalation reasons used by the support and product orgs to tune the bot weekly.",
        demonstrates: "AI ops and vendor integration depth — connecting a third-party conversational AI platform to Turo's internal systems with strict reliability, observability, and privacy guarantees. Featured publicly in the UJET case study.",
        technologies: ["UJET", "Node.js", "TypeScript", "REST APIs", "Webhooks", "Analytics"],
        demoUrl: "https://ujet.cx/blog/ai-virtual-agent-turo",
        image: "/images/turo-ujet-case.png",
      },
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer",
    period: "Jul 2021 - Feb 2023",
    description: "Generative AI shopping experience powering Amazon Rufus — the conversational assistant that helps hundreds of millions of customers research products, compare options, and make confident buying decisions worldwide.",
    projects: [
      {
        id: "amazon-rufus",
        name: "Rufus Generative AI Shopping Assistant",
        description: "Amazon's flagship generative AI shopping assistant — surfaced across Amazon.com and the mobile app to answer product questions, compare items, summarize reviews, and personalize recommendations.",
        yourWork: "Contributed to the Rufus front-end and orchestration layer: streaming chat UI embedded across the Amazon shopping surface, product card rendering inside conversational answers, and the prompt-routing layer that decides which retrieval source (catalog, reviews, community Q&A, web) to use per query. Hardened latency, error handling, and fallback paths to keep the assistant fast and reliable at Amazon traffic levels.",
        demonstrates: "Building consumer AI features at extreme scale — fusing LLMs with Amazon's catalog and behavioral data while meeting strict latency, cost, and trust bars. Direct contribution to a flagship Amazon product cited by leadership and the press.",
        technologies: ["React", "TypeScript", "Node.js", "LLMs", "AWS", "GraphQL"],
        demoUrl: "https://www.amazon.com/rufus",
        image: "/images/amazon-rufus.png",
      },
      {
        id: "amazon-rufus-uk",
        name: "Rufus UK Launch",
        description: "International expansion of Rufus to the United Kingdom — adapting the assistant for UK English, UK catalog, regional pricing, and local shopping behaviors.",
        yourWork: "Worked on the locale rollout pipeline that brought Rufus to amazon.co.uk: locale-aware prompt templates, UK catalog grounding, currency and date formatting, and region-specific guardrails. Coordinated with marketplace, legal, and ML teams to validate answer quality on UK-specific queries (Boxing Day, VAT, Royal Mail delivery) before general availability.",
        demonstrates: "Owning a regional launch of a high-visibility AI product end-to-end — locale, content, ML evaluation, and rollout — with the operational discipline Amazon expects on customer-facing launches.",
        technologies: ["React", "TypeScript", "Node.js", "i18n", "AWS", "LLMs"],
        demoUrl: "https://www.aboutamazon.co.uk/news/retail/amazon-rufus-launch-uk-generative-ai-shopping-assistant",
        image: "/images/amazon-rufus-uk.png",
      },
      {
        id: "amazon-rufus-tech",
        name: "Rufus Architecture & RAG Pipeline",
        description: "Technical foundation behind Rufus — a retrieval-augmented generation pipeline grounded in Amazon's product catalog, customer reviews, and community Q&A to produce accurate, citeable shopping answers.",
        yourWork: "Helped design and maintain the RAG retrieval layer: query rewriting, hybrid (keyword + vector) search across catalog and reviews, re-ranking, and answer composition with inline product citations. Built evaluation harnesses that score answer relevance, hallucination rate, and product attribution accuracy on millions of synthetic and real queries, feeding model and prompt iteration cycles.",
        demonstrates: "Production RAG and LLM evaluation expertise — turning unstructured Amazon data into trustworthy generative answers. The same architecture is what third-party technical write-ups describe when explaining how Rufus actually works.",
        technologies: ["Python", "LLMs", "Vector Search", "OpenSearch", "AWS", "RAG"],
        demoUrl: "https://www.zonguru.com/blog/understanding-amazon-rufus-ai",
        image: "/images/amazon-rufus-tech.png",
      },
    ],
  },
  {
    company: "HUNTER",
    role: "Senior Full-Stack Engineer",
    period: "Aug 2020 - Jun 2021",
    description: "Email outreach and B2B intelligence platform — building the public Hunter API that powers email discovery, verification, and data enrichment for tens of thousands of sales, marketing, and recruiting teams.",
    projects: [
      {
        id: "hunter-api",
        name: "Hunter Public API v2",
        description: "Live production API at api.hunter.io/v2 — the core integration surface for Domain Search, Email Finder, Email Verifier, and Author Finder used by thousands of customer integrations.",
        yourWork: "Owned core endpoints in the Hunter API v2 service: request validation, authentication, quota and rate-limit enforcement, and consistent error semantics across endpoints. Built the high-throughput email verification pipeline that combines SMTP probing, MX validation, catch-all detection, and ML-based confidence scoring. Tuned latency and cost per request so the API stays fast for real-time use cases like CRM enrichment.",
        demonstrates: "Production API ownership — designing endpoints that other engineers depend on every minute of every day. Reliability, backwards compatibility, and clear contracts are non-negotiable, and the API maintains them at scale.",
        technologies: ["Ruby on Rails", "Node.js", "PostgreSQL", "Redis", "REST APIs", "Sidekiq"],
        demoUrl: "https://api.hunter.io/v2",
        image: "/images/hunter-api.png",
      },
      {
        id: "hunter-docs",
        name: "API Documentation & Developer Experience",
        description: "Official Hunter API documentation — authentication, endpoint reference, code samples, SDKs, and integration guides used by developers to ship with Hunter in hours instead of days.",
        yourWork: "Drove the developer experience for the Hunter API: authored the public API reference, built the interactive request examples in cURL/Python/Node/Ruby, and standardized error codes and pagination across endpoints. Coordinated SDK releases and made sure every behavior change shipped with a migration note so existing customer integrations never broke silently.",
        demonstrates: "Developer-facing product thinking — treating the API and its docs as a single product surface. Strong DX is what turns a public API into a growth channel, and Hunter's docs are a reference example in the space.",
        technologies: ["Markdown", "OpenAPI", "Ruby", "JavaScript", "REST APIs", "DX"],
        demoUrl: "https://help.hunter.io/en/articles/1970956-hunter-api",
        image: "/images/hunter-docs.png",
      },
      {
        id: "hunter-data-plans",
        name: "Hunter API for Data Plans",
        description: "Specialized API tier for high-volume data customers — bulk endpoints, elevated rate limits, dedicated quotas, and SLA-backed reliability for enrichment and sales-intelligence workloads.",
        yourWork: "Designed and shipped the Data Plans tier on top of the existing API: per-plan quota enforcement, bulk task endpoints, async result fetching, and usage analytics. Built the billing-aware throttling layer so customers can burst safely without breaking shared infrastructure, and the admin tooling for the customer success team to manage data customers without engineering involvement.",
        demonstrates: "Productizing infrastructure — turning raw API capacity into a packaged offering with clear limits, SLAs, and unit economics. Combines back-end engineering with product and pricing instincts.",
        technologies: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "Stripe", "REST APIs"],
        demoUrl: "https://help.hunter.io/en/articles/12149400-hunter-api-for-data-plans",
        image: "/images/hunter-data-plans.png",
      },
    ],
  },
  {
    company: "Mindvalley",
    role: "Senior Full-Stack Engineer",
    period: "Jan 2018 - Jul 2020",
    description: "Premium personal-growth learning platform serving millions of learners — Mindvalley.com is live and uses the video learning platform built during this period.",
    projects: [
      {
        id: "mindvalley-platform",
        name: "Mindvalley Learning Platform",
        description: "Mindvalley.com — flagship subscription platform delivering Quests, courses, and live events from the world's best teachers in personal growth, mindfulness, and performance.",
        yourWork: "Built core surfaces of mindvalley.com: course discovery, Quest enrollment, member dashboard, and the unified subscription experience across web and mobile web. Implemented the front-end architecture (React + TypeScript) and the GraphQL data layer that powers personalized recommendations, progress tracking, and community features at scale.",
        demonstrates: "Subscription product engineering for a global consumer brand — clean UX, strong performance, and tight coupling to retention metrics. The platform is the live, public face of Mindvalley today.",
        technologies: ["React", "TypeScript", "GraphQL", "Node.js", "Ruby on Rails", "PostgreSQL"],
        demoUrl: "https://www.mindvalley.com",
        image: "/images/mindvalley-home.png",
      },
      {
        id: "mindvalley-video",
        name: "Adaptive Video Learning Platform",
        description: "Custom HLS-based video learning experience powering every Mindvalley lesson — adaptive bitrate streaming, chaptered playback, transcripts, resume-where-you-left-off, and DRM protection.",
        yourWork: "Architected and shipped the video player and streaming pipeline: HLS packaging, adaptive bitrate ladders, signed-URL DRM, and a custom player UI with chapters, speed control, transcripts, and per-second resume. Built the analytics layer that captures playback heartbeats and feeds engagement, completion, and content-quality dashboards used by the curriculum team.",
        demonstrates: "Heavy-duty media engineering — DRM, adaptive streaming, and player UX at scale. This is the same video platform Mindvalley.com still uses to deliver lessons to its global membership.",
        technologies: ["React", "TypeScript", "HLS", "Video.js", "AWS MediaConvert", "CloudFront"],
        demoUrl: "https://www.mindvalley.com",
        image: "/images/mindvalley-video.png",
      },
    ],
  },
  {
    company: "Grab",
    role: "Software Engineer",
    period: "Jan 2016 - Dec 2017",
    description: "Southeast Asia's leading super-app — Grab.com processes millions of transactions daily through ride-hailing, food delivery, and payments systems built on the infrastructure contributed to during this period.",
    projects: [
      {
        id: "grab-superapp",
        name: "Grab Super-App Platform",
        description: "Grab.com — consumer-facing super-app spanning GrabCar, GrabFood, GrabMart, GrabExpress, and GrabPay across Singapore, Indonesia, Thailand, Malaysia, the Philippines, and Vietnam.",
        yourWork: "Contributed to core booking and dispatch flows in the Grab consumer surface: ride request UX, real-time driver tracking, fare estimation, and multi-service navigation. Built reusable UI components shared across services so launching a new vertical (Mart, Express) reused booking, payment, and tracking primitives instead of rebuilding them.",
        demonstrates: "Working inside a high-stakes super-app codebase where every change touches millions of users across six countries. Required strong instincts for reliability, localization, and graceful degradation on flaky mobile networks.",
        technologies: ["React", "JavaScript", "Node.js", "Go", "Microservices", "Kafka"],
        demoUrl: "https://www.grab.com",
        image: "/images/grab-superapp.png",
      },
      {
        id: "grab-payments",
        name: "Real-Time Payments Infrastructure",
        description: "Backend systems behind GrabPay — high-throughput payment authorization, wallet operations, and settlement that processes millions of transactions every day across Southeast Asia.",
        yourWork: "Worked on payment orchestration services: idempotent authorization flows, wallet ledger writes, retry/compensation logic, and fraud-signal hooks. Helped tune the hot path so p99 authorization latency stays well under 100ms even during peak demand events (lunch rush, holidays, surge pricing). Built the operator tooling used by finance and ops to investigate transactions in real time.",
        demonstrates: "Mission-critical fintech engineering — correctness, auditability, and latency all have to be right at the same time. The systems built here still process millions of GrabPay transactions every single day.",
        technologies: ["Go", "Kafka", "PostgreSQL", "Redis", "gRPC", "AWS"],
        demoUrl: "https://www.grab.com",
        image: "/images/grab-payments.png",
      },
    ],
  },
];

export const allProjects = companySections.flatMap(s => s.projects);
