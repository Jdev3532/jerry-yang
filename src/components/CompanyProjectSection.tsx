import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import ProjectCard from "./ProjectCard";
import type { CompanySection as CompanySectionType } from "@/data/projects";

interface Props {
  section: CompanySectionType;
}

export default function CompanyProjectSection({ section }: Props) {
  const { ref, inView } = useInView(0.05);
  return (
    <div ref={ref} className="mb-20">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        <h3 className="text-2xl md:text-3xl font-heading font-bold">
          <span className="gradient-text">{section.company}</span>
        </h3>
        <p className="text-muted-foreground mt-2">
          {section.role} · {section.period}
        </p>
        <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {section.projects.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            company={section.company}
            role={section.role}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
}
