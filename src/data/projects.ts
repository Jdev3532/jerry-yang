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
    company: "Andela",
    role: "Senior Software Engineer",
    period: "Mar 2023 - Present",
    description: "AI-powered global talent marketplace that connects companies with vetted, world-class engineers — training models, deploying AI-native engineers, and upskilling teams that build production AI systems.",
    projects: [
      {
        id: "andela-platform",
        name: "AI Talent Marketplace Platform",
        description: "Core marketplace platform connecting companies with pre-vetted engineers worldwide, featuring AI-powered matching, real-time availability tracking, and enterprise-grade talent procurement workflows.",
        yourWork: "Led the architecture and development of the talent matching engine using React and TypeScript. Built the AI-powered recommendation system that analyzes skill profiles, project requirements, and historical placement data to surface optimal candidate matches. Implemented real-time WebSocket-based availability tracking and interview scheduling system. Optimized search performance with Elasticsearch, reducing talent discovery time by 60%.",
        demonstrates: "Full-stack platform engineering at scale, combining frontend excellence with AI/ML integration. The matching engine directly contributed to a 40% improvement in placement success rates and reduced time-to-hire from weeks to days.",
        technologies: ["React", "TypeScript", "Node.js", "Elasticsearch", "WebSockets", "AWS"],
        demoUrl: "https://andela.com",
        image: "/images/andela-platform.png",
      },
      {
        id: "andela-insights",
        name: "Talent Analytics & Insights Dashboard",
        description: "Comprehensive analytics platform providing hiring managers with deep insights into talent metrics, skill trends, market rates, and team performance — enabling data-driven workforce planning decisions.",
        yourWork: "Built the entire analytics frontend using React and D3.js, creating interactive visualizations for hiring funnels, skill distribution heatmaps, and market rate benchmarking. Implemented real-time data pipelines feeding dashboard metrics from multiple microservices. Designed the automated reporting system that generates weekly talent market insights for enterprise clients.",
        demonstrates: "Data visualization expertise and the ability to transform complex workforce data into actionable insights. The dashboard became a key differentiator in enterprise sales, contributing to a 35% increase in platform engagement among hiring managers.",
        technologies: ["React", "D3.js", "TypeScript", "Python", "Redis", "PostgreSQL"],
        demoUrl: "https://andela.com",
        image: "/images/andela-insights.png",
      },
      {
        id: "andela-matching",
        name: "AI-Powered Talent Matching Engine",
        description: "Machine learning-driven matching system that intelligently pairs engineers with opportunities based on technical skills, cultural fit, timezone compatibility, and project complexity requirements.",
        yourWork: "Designed and implemented the ML-powered matching algorithm using collaborative filtering and NLP-based skill extraction. Built the candidate scoring pipeline that evaluates 50+ signals including coding assessment results, peer reviews, and project history. Implemented the feedback loop system that continuously improves match quality based on placement outcomes. The engine processes 10K+ match requests daily with sub-second response times.",
        demonstrates: "Deep expertise in building AI/ML-powered product features at scale. The matching engine achieved a 92% satisfaction rate from both clients and engineers, making it the platform's highest-rated feature.",
        technologies: ["Python", "scikit-learn", "React", "TypeScript", "GraphQL", "Redis"],
        demoUrl: "https://andela.com",
        image: "/images/andela-matching.png",
      },
      {
        id: "andela-assessment",
        name: "Technical Assessment & Vetting Platform",
        description: "End-to-end engineer vetting system featuring automated coding challenges, live technical interviews, skill verification, and continuous performance tracking across the talent pipeline.",
        yourWork: "Built the technical assessment platform with real-time code execution environments, automated test case evaluation, and plagiarism detection. Designed the multi-stage vetting workflow from initial screening through live coding interviews to final verification. Implemented the skill badge system that provides transparent, verified credentials for engineers. Reduced vetting time by 50% while maintaining quality standards.",
        demonstrates: "Expertise in building complex, multi-stage workflow systems with real-time code evaluation capabilities. The assessment platform processes thousands of candidates monthly and maintains a 98% accuracy rate in skill verification.",
        technologies: ["React", "TypeScript", "Node.js", "Docker", "WebSockets", "PostgreSQL"],
        demoUrl: "https://andela.com",
        image: "/images/andela-assessment.png",
      },
    ],
  },
  {
    company: "BigCommerce",
    role: "Software Engineer",
    period: "Jul 2018 - Sep 2020",
    description: "Leading open SaaS e-commerce platform powering modern buying experiences across brands, regions, and channels — from a single, scalable foundation trusted by thousands of merchants worldwide.",
    projects: [
      {
        id: "bigcommerce-platform",
        name: "E-Commerce Platform Core",
        description: "Core commerce platform enabling merchants to build, manage, and scale their online stores with enterprise-grade features including product management, order processing, and multi-channel selling capabilities.",
        yourWork: "Developed key storefront components using React and TypeScript, including the product catalog, shopping cart, and checkout flow. Built the real-time inventory management system that synchronizes stock levels across multiple sales channels. Implemented server-side rendering for critical pages, improving Core Web Vitals scores by 40%. Designed the theme customization engine that allows merchants to create branded storefronts without coding.",
        demonstrates: "E-commerce frontend expertise at scale, handling high-traffic events like Black Friday with 10x normal load. The checkout optimization work directly contributed to a 15% improvement in conversion rates across the platform.",
        technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Redis", "PostgreSQL"],
        demoUrl: "https://www.bigcommerce.com",
        image: "/images/bigcommerce-platform.png",
      },
      {
        id: "bigcommerce-developer",
        name: "Developer Portal & API Platform",
        description: "Comprehensive developer ecosystem providing documentation, SDKs, API references, and tools for building custom storefronts, apps, and integrations on the BigCommerce platform.",
        yourWork: "Built the interactive developer portal using React with live API explorers and code playgrounds. Designed the SDK generation pipeline that automatically creates type-safe client libraries from OpenAPI specifications. Implemented the webhook management system allowing developers to subscribe to real-time commerce events. Created the app marketplace submission and review workflow used by thousands of third-party developers.",
        demonstrates: "Developer experience engineering and API platform design. The developer portal saw a 60% increase in third-party app submissions after launch, directly growing the BigCommerce ecosystem.",
        technologies: ["React", "TypeScript", "OpenAPI", "Node.js", "REST APIs", "GraphQL"],
        demoUrl: "https://developer.bigcommerce.com",
        image: "/images/bigcommerce-developer.png",
      },
      {
        id: "bigcommerce-api",
        name: "REST & GraphQL API Architecture",
        description: "Unified API layer powering the BigCommerce platform — combining REST APIs for store management with a GraphQL Storefront API for high-performance, headless commerce experiences.",
        yourWork: "Led the design and implementation of the GraphQL Storefront API, enabling headless commerce architectures. Built the API gateway with rate limiting, authentication, and request routing handling 50K+ requests per minute. Implemented query optimization with intelligent caching and DataLoader patterns, reducing average API response times by 45%. Designed the versioning strategy that allows backward-compatible API evolution.",
        demonstrates: "API architecture expertise at massive scale. The GraphQL API became BigCommerce's fastest-growing developer product, enabling the headless commerce movement that attracted major enterprise merchants.",
        technologies: ["GraphQL", "Node.js", "TypeScript", "Redis", "PostgreSQL", "REST APIs"],
        demoUrl: "https://developer.bigcommerce.com/api-docs",
        image: "/images/bigcommerce-api.png",
      },
      {
        id: "bigcommerce-multistorefront",
        name: "Multi-Storefront Architecture",
        description: "Enterprise multi-storefront system enabling merchants to manage multiple brands, regions, and B2B/B2C channels from a single BigCommerce instance with shared catalogs and independent configurations.",
        yourWork: "Architected the multi-storefront data isolation layer that allows shared product catalogs with per-storefront pricing, inventory, and content. Built the storefront management UI enabling merchants to configure independent themes, domains, and checkout flows. Implemented the channel-aware API middleware that routes requests to the correct storefront context. Designed the analytics aggregation system providing both per-store and consolidated reporting.",
        demonstrates: "Complex multi-tenant architecture design for enterprise e-commerce. Multi-storefront became BigCommerce's key enterprise differentiator, directly cited in deals with major retail brands managing 10+ storefronts.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Microservices"],
        demoUrl: "https://www.bigcommerce.com",
        image: "/images/bigcommerce-multistorefront.png",
      },
    ],
  },
  {
    company: "Zocdoc",
    role: "Software Engineer",
    period: "Jan 2017 - Jun 2018",
    description: "Leading healthcare marketplace connecting patients with doctors, enabling instant appointment booking, insurance verification, and telehealth visits — trusted by millions of patients and thousands of providers.",
    projects: [
      {
        id: "zocdoc-booking",
        name: "Patient Booking Platform",
        description: "Core appointment booking system allowing patients to search for doctors by specialty, location, and insurance — with real-time availability, verified reviews, and instant online scheduling.",
        yourWork: "Built the doctor search and booking interface using React, featuring real-time availability calendars, insurance verification, and location-based search with map integration. Implemented the search ranking algorithm that balances relevance, availability, and patient ratings. Designed the booking confirmation flow with automated SMS/email reminders that reduced no-show rates by 25%. Optimized page load performance achieving sub-2-second Time to Interactive.",
        demonstrates: "Consumer-facing product engineering with direct impact on healthcare access. The booking flow handles millions of monthly searches and processes hundreds of thousands of appointments, making healthcare more accessible.",
        technologies: ["React", "TypeScript", "C#", ".NET", "Elasticsearch", "Redis"],
        demoUrl: "https://www.zocdoc.com",
        image: "/images/zocdoc-booking.png",
      },
      {
        id: "zocdoc-providers",
        name: "Provider Growth Platform",
        description: "Practice management portal enabling healthcare providers to grow their patient base, manage online presence, track performance metrics, and optimize their Zocdoc profiles for maximum visibility.",
        yourWork: "Developed the provider dashboard with patient analytics, appointment management, and review response tools. Built the practice growth insights engine that recommends profile optimizations based on search ranking factors. Implemented the provider onboarding workflow that reduced setup time from 2 hours to 15 minutes through automated credential verification. Designed the revenue reporting system tracking ROI for provider subscriptions.",
        demonstrates: "B2B product engineering for healthcare providers. The provider platform serves thousands of practices and the onboarding improvements directly accelerated provider acquisition by 40%.",
        technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "Azure"],
        demoUrl: "https://www.zocdoc.com/join/",
        image: "/images/zocdoc-providers.png",
      },
      {
        id: "zocdoc-telehealth",
        name: "Telehealth & Virtual Care Platform",
        description: "HIPAA-compliant telehealth system enabling video consultations between patients and doctors — with integrated scheduling, waiting rooms, prescription management, and post-visit summaries.",
        yourWork: "Architected the WebRTC-based video consultation system with automatic quality adaptation for varying network conditions. Built the virtual waiting room with real-time queue management and estimated wait time calculations. Implemented end-to-end encryption for all telehealth sessions ensuring HIPAA compliance. Designed the post-visit workflow including prescription management and follow-up scheduling that increased patient retention by 30%.",
        demonstrates: "Real-time communication and healthcare compliance expertise. The telehealth platform launched during a critical period of demand growth, scaling from zero to hundreds of thousands of monthly virtual visits.",
        technologies: ["React", "TypeScript", "WebRTC", "Node.js", "WebSockets", "AWS"],
        image: "/images/zocdoc-telehealth.png",
      },
      {
        id: "zocdoc-search",
        name: "Healthcare Search & Discovery Engine",
        description: "Intelligent search system helping patients find the right doctor based on specialty, symptoms, insurance compatibility, availability, location, and verified patient reviews with advanced filtering.",
        yourWork: "Built the faceted search interface with real-time filtering across 20+ dimensions including specialty, insurance, language, gender, and availability windows. Implemented the typeahead search with NLP-powered symptom-to-specialty mapping that helps patients who don't know which type of doctor they need. Designed the search result ranking algorithm incorporating proximity, availability density, patient satisfaction scores, and booking conversion rates. Optimized Elasticsearch queries reducing p95 search latency from 800ms to 120ms.",
        demonstrates: "Search infrastructure expertise applied to healthcare discovery. The search improvements directly correlated with a 20% increase in successful bookings, connecting more patients with the right providers faster.",
        technologies: ["React", "TypeScript", "Elasticsearch", "Python", "Redis", "PostgreSQL"],
        demoUrl: "https://www.zocdoc.com",
        image: "/images/zocdoc-search.png",
      },
    ],
  },
  {
    company: "OpenLearning",
    role: "Full Stack Engineer",
    period: "Jan 2015 - Dec 2016",
    description: "AI-powered social learning management system connecting 5M+ learners, 231+ institutions, and 18K+ courses — turning education progress into public, career-shaping proof through active learning.",
    projects: [
      {
        id: "openlearning-platform",
        name: "Social Learning Platform",
        description: "Interactive learning management system where learners engage through discussion forums, peer reviews, collaborative projects, and portfolio building — with AI-powered content recommendations and progress tracking.",
        yourWork: "Built the course creation and delivery interface using React, featuring drag-and-drop lesson builders, rich media embedding, and real-time collaborative editing. Implemented the social learning features including threaded discussions, peer review workflows, and group project spaces. Designed the gamification system with achievement badges, progress milestones, and leaderboards that increased course completion rates by 35%. Built the responsive mobile experience serving learners across devices.",
        demonstrates: "EdTech product engineering with focus on engagement and learning outcomes. The platform serves millions of learners across 231+ institutions, proving the ability to build products that scale globally while maintaining excellent user experience.",
        technologies: ["React", "JavaScript", "Python", "Django", "PostgreSQL", "Redis"],
        demoUrl: "https://www.openlearning.com",
        image: "/images/openlearning-platform.png",
      },
      {
        id: "openlearning-courses",
        name: "Course Marketplace & Discovery",
        description: "Comprehensive course marketplace with advanced search, filtering by credential type, topic area, and institution — connecting learners with certificates, diplomas, micro-credentials, and degree programs worldwide.",
        yourWork: "Developed the course marketplace frontend with faceted search, category browsing, and personalized recommendations. Built the course enrollment and payment processing pipeline supporting multiple currencies and payment methods. Implemented the course review and rating system with verified enrollment badges. Designed the institution onboarding portal that reduced course publishing time from days to hours, enabling rapid marketplace growth.",
        demonstrates: "Marketplace engineering and search infrastructure for education. The marketplace grew to 18K+ courses across 231+ institutions during this period, demonstrating the ability to build scalable marketplace platforms.",
        technologies: ["React", "JavaScript", "Python", "Django", "Elasticsearch", "AWS"],
        demoUrl: "https://www.openlearning.com/courses/",
        image: "/images/openlearning-courses.png",
      },
    ],
  },
  {
    company: "Lazada",
    role: "Junior Software Engineer",
    period: "Jan 2014 - Dec 2014",
    description: "Southeast Asia's leading e-commerce platform (Alibaba Group) connecting millions of shoppers with sellers across 6 countries — offering a safe, seamless shopping experience with cutting-edge logistics and payments infrastructure.",
    projects: [
      {
        id: "lazada-marketplace",
        name: "E-Commerce Marketplace",
        description: "High-traffic consumer marketplace serving millions of daily shoppers across Southeast Asia — featuring dynamic product catalogs, flash sales, personalized recommendations, and multi-language support across 6 countries.",
        yourWork: "Built responsive storefront components for product listings, search results, and category pages using JavaScript and CSS3. Implemented lazy loading, image optimization, and code splitting that improved page load times by 40%. Built the flash sale countdown system and promotional banner engine that drove 30% of monthly revenue during sale events. Developed the multi-language support system handling English, Bahasa, Thai, Vietnamese, and Filipino content.",
        demonstrates: "High-traffic e-commerce frontend development with focus on performance and internationalization. Working at Lazada provided foundational experience building consumer applications serving millions of users across diverse Southeast Asian markets.",
        technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "PHP", "MySQL"],
        demoUrl: "https://www.lazada.com",
        image: "/images/lazada-marketplace.png",
      },
      {
        id: "lazada-seller",
        name: "Seller Center & Analytics",
        description: "Comprehensive seller management portal providing tools for product listing, inventory management, order fulfillment, sales analytics, and performance tracking — empowering hundreds of thousands of merchants across Southeast Asia.",
        yourWork: "Developed the seller dashboard with real-time sales analytics, inventory alerts, and order management workflows. Built the bulk product upload system supporting CSV imports with validation and error handling for catalogs with 100K+ SKUs. Implemented the seller performance scoring algorithm that evaluates response time, fulfillment rate, and customer satisfaction. Designed the automated pricing recommendation engine based on competitor analysis and market demand.",
        demonstrates: "B2B platform engineering for marketplace sellers at scale. The seller center improvements contributed to a 25% increase in seller activation rates and reduced product listing time by 60%.",
        technologies: ["JavaScript", "PHP", "MySQL", "Redis", "REST APIs", "jQuery"],
        demoUrl: "https://www.lazada.com",
        image: "/images/lazada-seller.png",
      },
    ],
  },
];

export const allProjects = companySections.flatMap(s => s.projects);
