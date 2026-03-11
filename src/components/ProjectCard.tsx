import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  company: string;
  role: string;
  index: number;
  inView: boolean;
}

export default function ProjectCard({ project, company, role, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      className="card-surface overflow-hidden card-surface-hover transition-all duration-300 group flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
    >
      <Link to={`/project/${project.id}`} className="block relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          {project.stars}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-primary font-medium mb-1">{company} · {role}</p>
        <Link to={`/project/${project.id}`}>
          <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map(t => (
            <span key={t} className="tech-badge text-[10px]">{t}</span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
          >
            GitHub Repo
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg gradient-bg gradient-bg-hover text-sm font-medium text-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Live Demo <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
