import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const education = [
  {
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    school: "New York University",
    period: "May 2016 - Aug 2020",
  },
  {
    degree: "Higher Diploma in Information Technology",
    field: "Information Technology",
    school: "HKU SPACE Community College",
    period: "May 2013 - Aug 2015",
  },
];

export default function EducationSection() {
  const { ref, inView } = useInView(0.1);
  return (
    <section id="education" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground">
            CS foundations that ground 11+ years of building production software and AI products.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              className="card-surface p-6 card-surface-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg leading-snug">{e.degree}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{e.school}</p>
                  <p className="text-sm text-muted-foreground mt-1">{e.field}</p>
                  <p className="text-xs text-muted-foreground mt-2">{e.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
