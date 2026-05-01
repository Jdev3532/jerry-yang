import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const skillCategories = [
  { name: "AI & LLMs", skills: ["OpenAI GPT-4/5", "Anthropic Claude", "Google Gemini", "LangChain", "LlamaIndex", "Function Calling", "Streaming", "Prompt Engineering"] },
  { name: "RAG & Retrieval", skills: ["Vector Search", "OpenSearch", "Pinecone", "pgvector", "Hybrid Search", "Re-ranking", "Embeddings", "Chunking Strategies"] },
  { name: "AI Evaluation & Ops", skills: ["LLM Evals", "Hallucination Scoring", "Citation Accuracy", "A/B Testing", "Prompt Versioning", "Observability"] },
  { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Streaming UI", "WebSockets", "Tailwind", "Framer Motion"] },
  { name: "Backend", skills: ["Node.js (NestJS, Express)", "Python (FastAPI)", "GraphQL", "REST APIs", "Edge Functions", "Microservices"] },
  { name: "Data & Storage", skills: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB", "Elasticsearch", "Kafka"] },
  { name: "Cloud & DevOps", skills: ["AWS (Lambda, ECS, S3, Bedrock)", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
  { name: "ML Tooling", skills: ["Python", "pandas", "NumPy", "scikit-learn", "Hugging Face", "Jupyter"] },
  { name: "Monitoring & QA", skills: ["Datadog", "Sentry", "Jest", "PyTest", "Playwright"] },
];

export default function SkillsSection() {
  const { ref, inView } = useInView(0.05);
  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="card-surface p-6 card-surface-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i }}
            >
              <h3 className="font-heading font-semibold text-lg mb-4 gradient-text">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="tech-badge text-xs">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
