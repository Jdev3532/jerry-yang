export interface Project {
  id: string;
  name: string;
  description: string;
  yourWork: string;
  demonstrates: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
  stars: string;
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
    description: "Social commerce platform with millions of users",
    projects: [
      {
        id: "owncast",
        name: "Video Streaming Platform",
        description: "Self-hosted live video streaming with HLS, S3, and real-time chat.",
        yourWork: "Designed video pipeline with AWS MediaConvert (40% faster processing)",
        demonstrates: "Video processing and streaming expertise applied at Flip",
        technologies: ["Go", "FFmpeg", "HLS", "S3", "WebSockets", "React"],
        githubUrl: "https://github.com/owncast/owncast",
        demoUrl: "https://watch.owncast.online/",
        image: "/images/owncast.png",
        stars: "9.5k+",
      },
      {
        id: "apollo-federation",
        name: "GraphQL Federation",
        description: "Production GraphQL platform with interactive schema exploration.",
        yourWork: "Migrated REST to GraphQL federation (30% faster dev cycles)",
        demonstrates: "GraphQL architecture expertise used at Flip",
        technologies: ["GraphQL", "Apollo Federation", "Node.js", "TypeScript"],
        githubUrl: "https://github.com/apollographql/federation",
        demoUrl: "https://studio.apollographql.com/sandbox/explorer",
        image: "/images/apollo-explorer.png",
        stars: "1.5k+",
      },
      {
        id: "rocketchat",
        name: "Real-time Communication",
        description: "Enterprise real-time communication handling thousands of concurrent connections.",
        yourWork: "WebSockets for live shopping (thousands concurrent users)",
        demonstrates: "Real-time communication at scale applied at Flip",
        technologies: ["WebSockets", "Node.js", "MongoDB", "React"],
        githubUrl: "https://github.com/RocketChat/Rocket.Chat",
        demoUrl: "https://www.rocket.chat/",
        image: "/images/rocketchat.png",
        stars: "41k+",
      },
      {
        id: "expo",
        name: "React Native Performance",
        description: "Leading React Native development platform with performance tools.",
        yourWork: "React Native optimization (35% faster cold start)",
        demonstrates: "Mobile performance expertise applied at Flip",
        technologies: ["React Native", "TypeScript", "Hermes", "Expo"],
        githubUrl: "https://github.com/expo/expo",
        demoUrl: "https://snack.expo.dev/",
        image: "/images/expo.png",
        stars: "34k+",
      },
    ],
  },
  {
    company: "PipeCandy",
    role: "Founding Engineer (4th hire)",
    period: "Jan 2020 - May 2022",
    description: "Scaled from 1M to 5M+ companies",
    projects: [
      {
        id: "airflow",
        name: "Data Pipeline",
        description: "Production workflow orchestration for data pipeline management.",
        yourWork: "Kafka/Airflow pipeline (24hr → 15min latency)",
        demonstrates: "Data engineering at scale applied at PipeCandy",
        technologies: ["Python", "Airflow", "Kafka", "Docker"],
        githubUrl: "https://github.com/apache/airflow",
        demoUrl: "https://airflow.apache.org/",
        image: "/images/airflow.png",
        stars: "37k+",
      },
      {
        id: "metabase",
        name: "Analytics Dashboard",
        description: "Open source BI tool for dashboarding and data visualization.",
        yourWork: "D3.js dashboards for 5M+ companies",
        demonstrates: "Analytics visualization expertise from PipeCandy",
        technologies: ["Clojure", "JavaScript", "React", "D3.js"],
        githubUrl: "https://github.com/metabase/metabase",
        demoUrl: "https://www.metabase.com/demo/",
        image: "/images/metabase.png",
        stars: "39k+",
      },
      {
        id: "opensearch",
        name: "Database & Search",
        description: "Production search and analytics engine for large-scale data.",
        yourWork: "MongoDB/Elasticsearch migration (200% faster queries)",
        demonstrates: "Search infrastructure expertise from PipeCandy",
        technologies: ["Java", "OpenSearch", "OpenSearch Dashboards"],
        githubUrl: "https://github.com/opensearch-project/OpenSearch",
        demoUrl: "https://playground.opensearch.org/",
        image: "/images/opensearch.png",
        stars: "9.5k+",
      },
      {
        id: "apollo-server",
        name: "GraphQL API Unification",
        description: "Most popular GraphQL server implementation for Node.js.",
        yourWork: "GraphQL APIs unifying multiple services (30% faster dev)",
        demonstrates: "API architecture from PipeCandy",
        technologies: ["GraphQL", "Apollo Server", "Node.js"],
        githubUrl: "https://github.com/apollographql/apollo-server",
        demoUrl: "https://www.apollographql.com/docs/apollo-server/",
        image: "/images/apollo-server.png",
        stars: "13k+",
      },
    ],
  },
  {
    company: "Gameloft",
    role: "Senior Software Engineer",
    period: "Jul 2017 - Dec 2019",
    description: "Mobile games with millions of DAU",
    projects: [
      {
        id: "grafana",
        name: "Admin Dashboard",
        description: "World's most popular dashboard platform for monitoring.",
        yourWork: "Angular dashboards for 5 regional offices",
        demonstrates: "Dashboard and monitoring expertise from Gameloft",
        technologies: ["TypeScript", "Angular", "React", "Go"],
        githubUrl: "https://github.com/grafana/grafana",
        demoUrl: "https://play.grafana.org/",
        image: "/images/grafana.png",
        stars: "65k+",
      },
      {
        id: "nodebb",
        name: "Redis Caching",
        description: "Production Node.js forum with Redis caching and real-time features.",
        yourWork: "Redis caching (45% faster API responses)",
        demonstrates: "Caching and performance optimization from Gameloft",
        technologies: ["Node.js", "Redis", "MongoDB", "WebSockets"],
        githubUrl: "https://github.com/NodeBB/NodeBB",
        demoUrl: "https://community.nodebb.org/",
        image: "/images/nodebb.png",
        stars: "14k+",
      },
      {
        id: "expressjs",
        name: "Scalable Backend Services",
        description: "Most popular Node.js web framework for scalable backends.",
        yourWork: "Node.js/Python services for millions of DAU",
        demonstrates: "Backend architecture expertise from Gameloft",
        technologies: ["Node.js", "Express", "JavaScript"],
        githubUrl: "https://github.com/expressjs/express",
        demoUrl: "https://expressjs.com/",
        image: "/images/expressjs.png",
        stars: "65k+",
      },
      {
        id: "jenkins",
        name: "CI/CD Pipeline",
        description: "Leading automation server for CI/CD pipelines.",
        yourWork: "Jenkins/Docker CI/CD (hours → minutes)",
        demonstrates: "DevOps and automation expertise from Gameloft",
        technologies: ["Java", "Jenkins", "Groovy", "Docker"],
        githubUrl: "https://github.com/jenkinsci/jenkins",
        demoUrl: "https://www.jenkins.io/",
        image: "/images/jenkins.png",
        stars: "23k+",
      },
    ],
  },
  {
    company: "TrueCommerce",
    role: "Full Stack Engineer",
    period: "Jan 2016 - May 2017",
    description: "Supplier management portal",
    projects: [
      {
        id: "react-admin",
        name: "B2B Portal",
        description: "Framework for building B2B admin panels used by thousands.",
        yourWork: "React supplier portal (thousands of users)",
        demonstrates: "B2B application development from TrueCommerce",
        technologies: ["React", "Redux", "Material-UI", "REST"],
        githubUrl: "https://github.com/marmelab/react-admin",
        demoUrl: "https://marmelab.com/react-admin-demo/",
        image: "/images/react-admin.png",
        stars: "24k+",
      },
      {
        id: "json-server",
        name: "REST API Integration",
        description: "Most popular tool for creating mock REST APIs.",
        yourWork: "REST APIs for frontend and third-party integrations",
        demonstrates: "API integration expertise from TrueCommerce",
        technologies: ["Node.js", "REST", "JavaScript"],
        githubUrl: "https://github.com/typicode/json-server",
        demoUrl: "https://my-json-server.typicode.com/",
        image: "/images/json-server.png",
        stars: "73k+",
      },
    ],
  },
  {
    company: "Nacelle",
    role: "Junior Software Engineer",
    period: "Jan 2014 - Dec 2015",
    description: "E-commerce frontend",
    projects: [
      {
        id: "saleor",
        name: "E-commerce Frontend",
        description: "Modern e-commerce platform with React frontend used by brands worldwide.",
        yourWork: "React components for e-commerce clients",
        demonstrates: "E-commerce frontend expertise from Nacelle",
        technologies: ["React", "Next.js", "Python", "GraphQL", "Django"],
        githubUrl: "https://github.com/saleor/saleor",
        demoUrl: "https://demo.saleor.io/",
        image: "/images/saleor.png",
        stars: "20k+",
      },
      {
        id: "lighthouse",
        name: "Page Load Optimization",
        description: "Google's official tool for measuring and improving web performance.",
        yourWork: "Performance optimization (15% faster page loads)",
        demonstrates: "Performance engineering from Nacelle",
        technologies: ["JavaScript", "Chrome DevTools", "Performance APIs"],
        githubUrl: "https://github.com/GoogleChrome/lighthouse",
        demoUrl: "https://pagespeed.web.dev/",
        image: "/images/lighthouse.png",
        stars: "28k+",
      },
    ],
  },
];

export const allProjects = companySections.flatMap(s => s.projects);
