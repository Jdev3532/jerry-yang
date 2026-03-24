import { motion } from "framer-motion";
import { useInView, useCountUp } from "@/hooks/use-in-view";

const metrics = [
  { value: 11, suffix: "+", label: "Years Experience", icon: "📅" },
  { value: 92, suffix: "%", label: "Match Satisfaction", icon: "🎯" },
  { value: 60, suffix: "%", label: "Faster Discovery", icon: "🚀" },
  { value: 5, suffix: "M+", label: "Learners Served", icon: "📊" },
  { value: 40, suffix: "%", label: "Faster Page Loads", icon: "⚡" },
  { value: 6, suffix: "", label: "Countries Served", icon: "🌏" },
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
            Results-oriented Technology Leader with over 11 years of full-stack development and startup engineering experience. As a Founding Engineer, I thrive in fast-paced, ambiguous environments—wearing multiple hats across frontend, backend, cloud infrastructure, and product strategy. I'm passionate about building scalable platforms from 0 to 1, mentoring engineering teams, and driving technical growth in resource-constrained settings.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} inView={inView} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
