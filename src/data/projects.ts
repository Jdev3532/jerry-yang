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
    company: "Flip",
    role: "Lead Software Engineer",
    period: "Jun 2022 - Present",
    description: "AI employee experience platform trusted by millions of frontline workers globally — used by Porsche, Coca-Cola, McDonald's, Bosch, and more.",
    projects: [
      {
        id: "flip-employee-app",
        name: "Employee App",
        description: "A branded mobile-first digital workspace that brings the entire workforce together — from headquarters to the shop floor — in one secure app combining news, chat, knowledge, and AI assistance.",
        yourWork: "Led the architecture and development of the mobile app experience using React Native. Optimized cold start time by 35% through Hermes integration, lazy module loading, and bundle splitting. Built offline-first sync for frontline workers with intermittent connectivity. Implemented push notification infrastructure handling millions of daily messages across iOS and Android.",
        demonstrates: "Deep expertise in React Native performance optimization, mobile architecture at scale, and building consumer-grade UX for enterprise users. The app achieved 70% adoption in just three days at Ben & Jerry's and 90% survey response rates at McDonald's Germany.",
        technologies: ["React Native", "TypeScript", "Hermes", "WebSockets", "Push Notifications", "Offline-First"],
        demoUrl: "https://www.getflip.com/platform/employee-app/",
        image: "/images/flip-employee-app.png",
      },
      {
        id: "flip-ai-intranet",
        name: "AI-Powered Intranet",
        description: "Next-generation knowledge sharing platform that transforms the traditional intranet into a dynamic, AI-driven space where information flows freely and intelligently across the organization.",
        yourWork: "Designed and built the AI content management system that helps editors create and organize content effortlessly. Integrated LLM-powered search enabling employees to get verified answers in seconds instead of scrolling through documents. Built the content recommendation engine using collaborative filtering and NLP to surface relevant articles based on role, location, and reading history.",
        demonstrates: "Expertise in AI/ML integration, natural language processing, and building intelligent content platforms. The AI intranet reduced time-to-answer by 60% and increased intranet engagement by 3x compared to the previous static system.",
        technologies: ["React", "TypeScript", "OpenAI API", "LangChain", "Elasticsearch", "Node.js"],
        demoUrl: "https://www.getflip.com/platform/intranet/",
        image: "/images/flip-ai-intranet.png",
      },
      {
        id: "flip-hr-portal",
        name: "HR Self-Service Portal",
        description: "Comprehensive employee self-service platform that digitizes HR processes — from payslip access and time-off requests to onboarding workflows — all accessible from a mobile phone.",
        yourWork: "Architected the HR microservices layer that integrates with SAP SuccessFactors, Workday, and other enterprise HRIS systems via standardized APIs. Built the secure document delivery pipeline for payslips using end-to-end encryption. Designed the onboarding workflow engine that reduced new employee setup time from 2 weeks to 2 days at Bosch.",
        demonstrates: "Full-stack architecture skills spanning React frontend, Node.js microservices, and enterprise system integration. HR teams reported saving 15+ hours per week, and Bosch eliminated physical payslip queues entirely after deployment.",
        technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "AWS Lambda", "SAP Integration"],
        demoUrl: "https://www.getflip.com/platform/hr-portal/",
        image: "/images/flip-hr-portal.png",
      },
      {
        id: "flip-workflow-engine",
        name: "Workflow Automation Engine",
        description: "No-code workflow builder that replaces paper forms and manual processes with digital workflows — from equipment orders to incident reports — completed in seconds without any coding or IT involvement.",
        yourWork: "Built the visual workflow builder using a drag-and-drop interface with React DnD. Designed the workflow execution engine that handles conditional branching, approval chains, and escalation rules. Implemented real-time video streaming for live shopping events using AWS MediaConvert, reducing video processing time by 40%. The workflow engine processes over 100,000 automated tasks daily.",
        demonstrates: "Expertise in building complex, user-facing automation tools that empower non-technical users. Combined with video infrastructure work, this demonstrates the breadth of technical challenges solved at Flip — from no-code tools to low-level video pipeline optimization.",
        technologies: ["React", "TypeScript", "AWS MediaConvert", "FFmpeg", "HLS", "WebSockets"],
        demoUrl: "https://www.getflip.com/platform/workflow-engine/",
        image: "/images/flip-workflow.png",
      },
    ],
  },
  {
    company: "PipeCandy",
    role: "Founding Engineer (4th hire)",
    period: "Jan 2020 - May 2022",
    description: "AI-powered company intelligence platform that profiles and enriches data on 5M+ companies worldwide — providing firmographic, technographic, and e-commerce intelligence to enterprise sales teams.",
    projects: [
      {
        id: "pipecandy-intelligence",
        name: "Company Intelligence Platform",
        description: "Core data enrichment engine that crawls, processes, and structures information on millions of companies — delivering actionable firmographic and technographic profiles to enterprise clients including Fortune 500 companies.",
        yourWork: "As the 4th engineer, designed the entire data ingestion architecture from scratch. Built web crawlers processing 500K+ pages daily using Python (Scrapy) with distributed task queues. Implemented ML classification models using scikit-learn to categorize companies by industry, business model, and technology stack with 94% accuracy. Designed the data quality scoring system that became PipeCandy's key differentiator against competitors.",
        demonstrates: "Founding engineer capability — building complex data systems from zero with no existing infrastructure. Demonstrates ownership of the full data lifecycle: collection, processing, enrichment, quality assurance, and delivery to end users.",
        technologies: ["Python", "Scrapy", "scikit-learn", "PostgreSQL", "Redis", "Docker"],
        image: "/images/pipecandy-intelligence.png",
      },
      {
        id: "pipecandy-pipeline",
        name: "Real-Time Data Pipeline",
        description: "High-throughput data processing pipeline that transforms raw crawled data into structured company profiles — reducing end-to-end data latency from 24 hours to just 15 minutes through Kafka streaming and Airflow orchestration.",
        yourWork: "Architected the migration from batch processing (24-hour cycles) to near real-time streaming using Apache Kafka and Airflow. Designed the DAG orchestration layer managing 200+ data transformation tasks with dependency resolution and automatic retry logic. Built monitoring dashboards tracking pipeline health, throughput, and data freshness. Reduced infrastructure costs by 40% through intelligent resource scheduling and spot instance management.",
        demonstrates: "Deep data engineering expertise in building production streaming architectures. The 24hr → 15min latency reduction directly enabled PipeCandy to offer 'fresh data' as a premium product tier, driving significant revenue growth.",
        technologies: ["Apache Kafka", "Apache Airflow", "Python", "Docker", "AWS ECS", "Prometheus"],
        image: "/images/pipecandy-pipeline.png",
      },
      {
        id: "pipecandy-analytics",
        name: "Analytics & Visualization Dashboard",
        description: "Interactive business intelligence dashboard providing enterprise clients with deep visual insights into company data — featuring custom D3.js charts, geographic heatmaps, industry trend analysis, and exportable reports across 5M+ company profiles.",
        yourWork: "Built the entire analytics frontend using React and D3.js, creating 15+ custom visualization components including interactive scatter plots, treemaps, Sankey diagrams, and geographic choropleth maps. Implemented virtual scrolling and WebGL-accelerated rendering to handle datasets with 100K+ data points without performance degradation. Designed the saved dashboard and scheduled report system that became PipeCandy's most-requested enterprise feature.",
        demonstrates: "Advanced data visualization expertise and the ability to make complex data accessible and actionable. The dashboard directly contributed to a 45% increase in enterprise client retention by making PipeCandy's data tangibly valuable.",
        technologies: ["React", "D3.js", "TypeScript", "WebGL", "Node.js", "PostgreSQL"],
        image: "/images/pipecandy-analytics.png",
      },
      {
        id: "pipecandy-search-api",
        name: "Search Infrastructure & API Layer",
        description: "Unified search and API gateway that powers PipeCandy's data access layer — combining Elasticsearch for full-text and faceted search with a GraphQL API that abstracts multiple backend services into a single developer-friendly interface.",
        yourWork: "Led the MongoDB to Elasticsearch migration for the company search index, achieving 200% faster query performance on complex faceted searches across 5M+ records. Designed and implemented the GraphQL API layer using Apollo Server, unifying 6 disparate REST services into a single schema. Built the query optimization layer with intelligent caching (Redis), query batching, and cost-based query planning. The API consistently handles 10K+ requests per minute with p99 latency under 200ms.",
        demonstrates: "Search infrastructure and API architecture expertise at scale. The Elasticsearch migration and GraphQL unification together accelerated frontend development velocity by 30%, enabling the small team to ship features faster than competitors with 10x the engineering headcount.",
        technologies: ["Elasticsearch", "GraphQL", "Apollo Server", "Node.js", "Redis", "MongoDB"],
        image: "/images/pipecandy-search-api.png",
      },
    ],
  },
  {
    company: "Gameloft",
    role: "Senior Software Engineer",
    period: "Jul 2017 - Dec 2019",
    description: "Global gaming company with millions of daily active users across mobile titles — responsible for backend infrastructure, analytics platforms, and DevOps automation serving 5 regional offices worldwide.",
    projects: [
      {
        id: "gameloft-analytics",
        name: "Game Analytics Platform",
        description: "Centralized analytics platform tracking player behavior, engagement metrics, and revenue KPIs across multiple game titles — providing real-time dashboards for game designers, product managers, and executives across 5 regional offices to make data-driven decisions on game balance, monetization, and user acquisition.",
        yourWork: "Built comprehensive Angular dashboards displaying DAU/MAU trends, retention curves, session duration heatmaps, and revenue waterfalls. Designed the event ingestion pipeline processing 50M+ player events daily using Node.js and Redis pub/sub. Implemented A/B testing infrastructure enabling game designers to test monetization strategies and feature variants with statistical significance tracking. Created automated anomaly detection alerts that caught revenue drops within 15 minutes instead of the previous next-day manual review.",
        demonstrates: "Expertise in building analytics platforms at massive scale for consumer applications. The real-time dashboards replaced a fragmented spreadsheet-based reporting system and directly contributed to a 20% improvement in player retention through data-driven game design decisions.",
        technologies: ["Angular", "TypeScript", "Node.js", "Redis", "D3.js", "PostgreSQL"],
        image: "/images/gameloft-analytics.png",
      },
      {
        id: "gameloft-realtime",
        name: "Real-Time Game Services",
        description: "Live operations platform handling real-time player interactions including matchmaking, leaderboards, push notifications, and in-game events — maintaining persistent WebSocket connections for millions of concurrent players across multiple game titles with 99.9% uptime.",
        yourWork: "Architected the WebSocket gateway using Node.js clustering, handling 100K+ concurrent connections per node with automatic failover. Built the matchmaking service using Redis sorted sets for skill-based matching with sub-second response times. Implemented the live events system that allowed game operators to deploy in-game events, tournaments, and challenges without requiring app updates. Designed the push notification pipeline delivering 10M+ targeted notifications daily with delivery confirmation tracking.",
        demonstrates: "Deep expertise in real-time systems architecture, WebSocket scaling, and building highly available services for latency-sensitive gaming applications. The platform maintained 99.9% uptime during peak events like holiday tournaments that saw 3x normal traffic spikes.",
        technologies: ["Node.js", "WebSockets", "Redis", "MongoDB", "AWS ECS", "CloudWatch"],
        image: "/images/gameloft-realtime.png",
      },
      {
        id: "gameloft-backend",
        name: "Scalable Backend Infrastructure",
        description: "Microservices architecture powering game backends for millions of daily active users — including player profile management, inventory systems, social features, and cross-platform save synchronization with auto-scaling infrastructure handling unpredictable traffic patterns.",
        yourWork: "Designed and implemented Node.js and Python microservices following domain-driven design principles, decomposing a monolithic game server into 12 independent services. Built the API gateway with rate limiting, authentication, and request routing. Implemented Redis caching layer that reduced API response times by 45% and database load by 60%. Designed the cross-platform save system enabling players to seamlessly switch between iOS, Android, and web without losing progress.",
        demonstrates: "Backend architecture expertise in building resilient, high-throughput systems for consumer applications with millions of users. The microservices migration reduced deployment risk (from full-system deploys to independent service updates) and enabled parallel development across 3 backend teams.",
        technologies: ["Node.js", "Python", "Redis", "MongoDB", "Docker", "AWS"],
        image: "/images/gameloft-backend.png",
      },
      {
        id: "gameloft-cicd",
        name: "CI/CD & DevOps Automation",
        description: "End-to-end continuous integration and deployment pipeline automating build, test, and release processes across multiple game titles and platforms — reducing deployment cycles from hours of manual work to automated minutes with comprehensive quality gates.",
        yourWork: "Built Jenkins pipeline-as-code configurations for 8 game titles across iOS, Android, and web platforms. Implemented Docker-based build environments ensuring reproducible builds across developer machines and CI servers. Created automated testing frameworks including unit tests, integration tests, and visual regression tests for game UIs. Designed the blue-green deployment strategy that eliminated downtime during releases and enabled instant rollback. Reduced average deployment time from 4 hours (manual) to 12 minutes (automated) with zero-downtime deployments.",
        demonstrates: "DevOps and infrastructure automation expertise critical for maintaining velocity in a fast-paced gaming environment. The CI/CD pipeline enabled the team to ship weekly updates instead of monthly releases, directly improving player engagement through faster feature delivery.",
        technologies: ["Jenkins", "Docker", "Groovy", "Bash", "AWS CodePipeline", "Terraform"],
        image: "/images/gameloft-cicd.png",
      },
    ],
  },
  {
    company: "TrueCommerce",
    role: "Full Stack Engineer",
    period: "Jan 2016 - May 2017",
    description: "Global supply chain automation platform providing EDI, e-invoicing, VMI, and B2B eCommerce solutions — connecting thousands of trading partners across industries with AI-powered supply chain intelligence.",
    projects: [
      {
        id: "truecommerce-edi",
        name: "EDI & Supply Chain Integration Platform",
        description: "Enterprise-grade Electronic Data Interchange platform automating supply chain document exchange — handling purchase orders, invoices, shipping notices, and inventory updates between thousands of trading partners with built-in compliance validation and error handling.",
        yourWork: "Built React-based supplier management interfaces used by thousands of trading partners to manage EDI document flows. Implemented real-time document tracking with status updates, error notifications, and compliance validation against X12 and EDIFACT standards. Designed the trading partner onboarding workflow that reduced setup time from 2 weeks to 3 days through automated mapping templates and guided configuration wizards. Built the document transformation engine that converts between different EDI formats, XML, CSV, and JSON.",
        demonstrates: "Full-stack engineering capability in complex B2B enterprise environments. Understanding of supply chain processes, EDI standards, and the ability to build intuitive interfaces for complex business workflows. The onboarding improvements directly contributed to 40% faster partner activation and reduced support tickets by 25%.",
        technologies: ["React", "Redux", "Node.js", "PostgreSQL", "REST APIs", "Material-UI"],
        demoUrl: "https://www.truecommerce.com/products/",
        image: "/images/truecommerce-edi.png",
      },
      {
        id: "truecommerce-b2b",
        name: "B2B eCommerce Portal",
        description: "White-label B2B eCommerce platform enabling manufacturers and distributors to provide self-service ordering portals for their business customers — with custom catalogs, pricing tiers, order management, and integration with ERP systems.",
        yourWork: "Developed the React-based storefront components including product catalog with faceted search, shopping cart with bulk ordering, and order history with reorder functionality. Built REST APIs for third-party integrations connecting the portal with ERP systems (SAP, NetSuite, QuickBooks). Implemented role-based access control supporting complex B2B hierarchies (parent companies, subsidiaries, individual buyers with different pricing tiers). Designed the custom pricing engine that calculates volume discounts, contract pricing, and promotional offers in real-time.",
        demonstrates: "E-commerce and B2B application development expertise with deep understanding of complex business logic, multi-tenant architectures, and enterprise system integration. The portal served thousands of active business users and processed millions in monthly order volume.",
        technologies: ["React", "Redux", "Material-UI", "Node.js", "REST APIs", "PostgreSQL"],
        demoUrl: "https://www.truecommerce.com/products/",
        image: "/images/truecommerce-b2b.png",
      },
    ],
  },
  {
    company: "Yamibuy",
    role: "Junior Software Engineer",
    period: "Jan 2014 - Dec 2015",
    description: "Leading Asian e-commerce platform bringing authentic Asian products to North American consumers — offering 50,000+ products across snacks, beauty, home goods, and more with same-day delivery in major metro areas.",
    projects: [
      {
        id: "yamibuy-storefront",
        name: "E-Commerce Storefront",
        description: "High-traffic consumer e-commerce storefront serving hundreds of thousands of monthly active shoppers — featuring dynamic product catalogs, personalized recommendations, multi-language support (English/Chinese), and a seamless checkout flow with multiple payment integrations.",
        yourWork: "Built responsive React components for product listing pages, product detail views, shopping cart, and checkout flow. Implemented lazy loading, image optimization, and code splitting that improved initial page load by 40%. Built the search and filtering system with autocomplete suggestions supporting both English and Chinese character input. Developed the promotional banner system and flash sale countdown timers that drove 30% of monthly revenue during sale events. Implemented Apple Pay and WeChat Pay integrations for the growing Chinese-American customer base.",
        demonstrates: "E-commerce frontend development skills with focus on performance, internationalization, and conversion optimization. Working at Yamibuy provided foundational experience in building consumer-facing applications at scale, handling high-traffic events like holiday sales with 10x normal traffic.",
        technologies: ["React", "JavaScript", "CSS3", "HTML5", "REST APIs", "i18n"],
        demoUrl: "https://www.yami.com",
        image: "/images/yamibuy-storefront.png",
      },
      {
        id: "yamibuy-performance",
        name: "Performance & SEO Optimization",
        description: "Comprehensive web performance optimization initiative using Google Lighthouse audits, Core Web Vitals monitoring, and SEO best practices — systematically improving page load times, search engine rankings, and organic traffic for the e-commerce platform.",
        yourWork: "Led the performance optimization project that improved Lighthouse scores from 45 to 90+ across all pages. Implemented server-side rendering for critical landing pages, reducing Time to First Contentful Paint by 60%. Built automated Lighthouse CI integration that blocked deployments if performance scores dropped below thresholds. Optimized images using WebP format with lazy loading and responsive srcsets, reducing page weight by 65%. Implemented structured data markup (JSON-LD) for products, reviews, and breadcrumbs, improving organic search click-through rates by 25%.",
        demonstrates: "Web performance engineering and SEO expertise that directly impacts business metrics. The optimization project resulted in 15% faster page loads, 25% improvement in organic search traffic, and measurable improvements in conversion rates — demonstrating the ability to connect technical work to business outcomes.",
        technologies: ["JavaScript", "Lighthouse", "Core Web Vitals", "SEO", "Performance APIs", "Webpack"],
        demoUrl: "https://www.yami.com",
        image: "/images/yamibuy-performance.png",
      },
    ],
  },
];

export const allProjects = companySections.flatMap(s => s.projects);
