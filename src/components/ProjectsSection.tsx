import { companySections } from "@/data/projects";
import CompanyProjectSection from "./CompanyProjectSection";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Open-source projects that demonstrate the expertise I've applied across my career
        </p>

        {companySections.map(section => (
          <CompanyProjectSection key={section.company} section={section} />
        ))}
      </div>
    </section>
  );
}
