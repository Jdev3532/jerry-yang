import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Sparkles, Bot, Database, MessageSquare, LineChart, Globe } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Generative AI Product Engineering",
    description: "Shipped Amazon Rufus and Turo's AI Help Center to hundreds of millions of users — streaming chat UX, prompt orchestration, and product surfaces that turn LLMs into trusted assistants.",
  },
  {
    icon: Database,
    title: "RAG & Retrieval Pipelines",
    description: "Designed retrieval-augmented generation stacks grounded in real product data — hybrid keyword + vector search, re-ranking, and citation-backed answers with strict hallucination guardrails.",
  },
  {
    icon: Bot,
    title: "Virtual Agents & Support Automation",
    description: "Integrated UJET's AI Virtual Agent at Turo with customer context injection and intent-to-action mapping — automating triage and account operations while keeping CSAT high.",
  },
  {
    icon: LineChart,
    title: "LLM Evaluation & Observability",
    description: "Built evaluation harnesses scoring relevance, hallucination rate, and citation accuracy across millions of queries — the feedback loop that turns prompt and model changes into measurable wins.",
  },
  {
    icon: MessageSquare,
    title: "Conversational UX at Scale",
    description: "Production streaming chat interfaces with optimistic rendering, inline citations, feedback loops, and live agent handoff — the UI layer that makes LLM products feel reliable.",
  },
  {
    icon: Globe,
    title: "Multilingual & Global AI Rollouts",
    description: "Localized AI products across English, French, Spanish, German, and Italian — locale-aware prompts, region-specific guardrails, and rollout pipelines proven on Rufus UK and Turo EU.",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView(0.05);
  return (
    <section id="services" className="py-24 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          What I <span className="gradient-text">Do</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card-surface p-8 card-surface-hover transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow">
                <s.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
