import { useParams, Link } from "react-router-dom";
import { allProjects, companySections } from "@/data/projects";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = allProjects.find(p => p.id === id);
  const company = companySections.find(s => s.projects.some(p => p.id === id));

  if (!project || !company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const hasLinks = project.githubUrl || project.demoUrl;

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-8">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Hero image */}
          <div className="relative rounded-xl overflow-hidden mb-8 aspect-video">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {company.company}
                </span>
                {project.stars && (
                  <span className="flex items-center gap-1 text-xs bg-background/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    {project.stars}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">{project.name}</h1>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-heading font-semibold mb-3">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="card-surface p-6">
                <h2 className="text-lg font-heading font-semibold mb-3 gradient-text">My Role at {company.company}</h2>
                <p className="text-muted-foreground leading-relaxed">{project.yourWork}</p>
              </div>

              <div className="card-surface p-6">
                <h2 className="text-lg font-heading font-semibold mb-3 gradient-text">Impact & Results</h2>
                <p className="text-muted-foreground leading-relaxed">{project.demonstrates}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-surface p-6">
                <h3 className="font-heading font-semibold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="card-surface p-6">
                <h3 className="font-heading font-semibold mb-4">Company Context</h3>
                <p className="text-sm text-muted-foreground mb-1">{company.role}</p>
                <p className="text-xs text-muted-foreground">{company.period}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{company.description}</p>
              </div>

              {hasLinks && (
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-muted hover:bg-muted/80 font-medium transition-colors"
                    >
                      View GitHub Repository
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg gradient-bg gradient-bg-hover font-medium text-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
