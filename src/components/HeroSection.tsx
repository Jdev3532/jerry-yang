import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AIWorkflowBackground from "./AIWorkflowBackground";

const techIcons = ["LLMs", "RAG", "Python", "TypeScript", "React", "AWS"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI workflow diagram background */}
      <AIWorkflowBackground />

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-accent/5 blur-[80px] animate-float-delay-2" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating tech badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techIcons.map((tech, i) => (
              <motion.span
                key={tech}
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight">
            Jerry <span className="gradient-text">Yang</span>
          </h1>

          <p className="text-xl md:text-2xl font-heading font-medium text-muted-foreground mb-4">
            AI Engineer · LLM Product Builder · Full-Stack Architect
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Shipping production LLM products — Amazon Rufus, Turo AI Help — to hundreds of millions of users
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#projects"
              className="gradient-bg gradient-bg-hover px-8 py-3.5 rounded-lg font-heading font-semibold text-foreground transition-all hover:shadow-lg hover:shadow-primary/25 inline-flex items-center gap-2"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg font-heading font-semibold border border-border text-foreground hover:bg-muted transition-all inline-flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>

        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
