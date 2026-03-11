import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const skillCategories = [
  { name: "Frontend", skills: ["React", "React Native", "Next.js", "Angular", "TypeScript", "JavaScript", "Redux", "D3.js", "HTML5", "CSS3", "Tailwind"] },
  { name: "Backend", skills: ["Node.js (Express, NestJS)", "Python (Flask, FastAPI)", "GraphQL (Apollo)", "REST APIs", "Microservices"] },
  { name: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Elasticsearch"] },
  { name: "Data Engineering", skills: ["Apache Airflow", "Kafka", "pandas", "NumPy", "AWS Redshift"] },
  { name: "Cloud & DevOps", skills: ["AWS (EC2, S3, Lambda, ECS, CloudFront, MediaConvert)", "Docker", "CI/CD", "Terraform", "Kubernetes", "Jenkins"] },
  { name: "AI/ML", skills: ["OpenAI API", "LangChain", "Python (scikit-learn, pandas)"] },
  { name: "Testing", skills: ["Jest", "React Testing Library", "Cypress", "Jasmine", "Karma", "PyTest"] },
  { name: "Monitoring", skills: ["Datadog", "New Relic", "Sentry"] },
  { name: "Tools", skills: ["Git", "Jira", "Confluence", "Figma", "Slack", "Notion", "Agile/Scrum"] },
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
