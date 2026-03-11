import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Rocket, Video, Database, Share2, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Founding Engineer (0→1 Product Building)",
    description: "Joined as 4th engineer at PipeCandy, scaling from 1M to 5M+ companies. Full-stack architecture from concept to launch in resource-constrained environments.",
  },
  {
    icon: Video,
    title: "Video Streaming Infrastructure",
    description: "Built scalable video processing pipelines at Flip using AWS MediaConvert, reducing processing time by 40% for millions of users.",
  },
  {
    icon: Database,
    title: "Real-time Data Engineering",
    description: "Architected Kafka/Airflow pipelines reducing data latency from 24 hours to 15 minutes at PipeCandy. Production data processing at scale.",
  },
  {
    icon: Share2,
    title: "GraphQL & API Architecture",
    description: "Migrated legacy REST to GraphQL federation, enabling 30% faster frontend development. Unified data access across multiple services.",
  },
  {
    icon: Smartphone,
    title: "Mobile Performance Optimization",
    description: "Optimized React Native apps reducing cold start by 35% at Flip. Performance profiling, memory optimization, and retention improvement.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Infrastructure",
    description: "CI/CD automation reducing deployments from hours to minutes at Gameloft. AWS architecture, Docker, Kubernetes, infrastructure as code.",
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
