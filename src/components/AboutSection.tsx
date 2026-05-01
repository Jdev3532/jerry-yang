import { motion } from "framer-motion";
import { useInView, useCountUp } from "@/hooks/use-in-view";
import VisitorHeatmap from "./VisitorHeatmap";

const metrics = [
  { value: 11, suffix: "+", label: "Years Engineering", icon: "📅" },
  { value: 5, suffix: "+", label: "AI Products Shipped", icon: "🤖" },
  { value: 70, suffix: "%", label: "Ticket Deflection", icon: "🎯" },
  { value: 100, suffix: "M+", label: "AI Conversations", icon: "💬" },
  { value: 40, suffix: "%", label: "Lower Latency", icon: "⚡" },
  { value: 6, suffix: "", label: "Languages Supported", icon: "🌏" },
];

function MetricCard({ value, suffix, label, icon, inView, delay }: { value: number; suffix: string; label: string; icon: string; inView: boolean; delay: number }) {
  const count = useCountUp(value, 2000, true, inView);
  return (
    <motion.div
      className="card-surface p-6 text-center card-surface-hover transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <span className="text-3xl mb-3 block">{icon}</span>
      <div className="counter-value">{count}{suffix}</div>
      <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AI Engineer with 11+ years building production software and 4+ years shipping LLM-powered products at scale. I've contributed to Amazon Rufus (generative shopping for hundreds of millions of customers) and Turo's AI Help Center & Virtual Agent (deflecting the majority of support tickets). I focus on the full AI product stack: RAG pipelines, prompt orchestration, evaluation harnesses, streaming chat UX, and the latency, cost, and trust guarantees needed to put LLMs in front of real users.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} inView={inView} delay={0.1 + i * 0.1} />
          ))}
        </div>

        <div className="mt-8">
          <VisitorHeatmap />
        </div>
      </div>
    </section>
  );
}
