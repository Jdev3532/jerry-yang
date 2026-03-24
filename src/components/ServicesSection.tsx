import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Rocket, Video, Database, Share2, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "AI-Powered Platform Engineering",
    description: "Built AI talent matching engines at Andela with ML-powered recommendations, achieving 92% satisfaction rates and reducing time-to-hire from weeks to days.",
  },
  {
    icon: Share2,
    title: "E-Commerce & API Architecture",
    description: "Designed GraphQL Storefront APIs and multi-storefront architectures at BigCommerce, powering headless commerce for thousands of enterprise merchants.",
  },
  {
    icon: Database,
    title: "Search & Data Infrastructure",
    description: "Built high-performance search engines at Zocdoc and BigCommerce with Elasticsearch, reducing query latency by 85% and improving conversion rates.",
  },
  {
    icon: Smartphone,
    title: "Healthcare & Real-Time Systems",
    description: "Architected HIPAA-compliant telehealth with WebRTC at Zocdoc, scaling to hundreds of thousands of monthly virtual visits with real-time video consultations.",
  },
  {
    icon: Video,
    title: "EdTech & Social Learning",
    description: "Built AI-powered learning management systems at OpenLearning serving 5M+ learners across 231+ institutions with gamification and peer collaboration.",
  },
  {
    icon: Cloud,
    title: "Marketplace & Scalable Commerce",
    description: "Developed high-traffic e-commerce platforms at Lazada serving millions of daily shoppers across 6 Southeast Asian countries with multi-language support.",
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
