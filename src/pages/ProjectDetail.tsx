import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Github, ArrowLeft, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';
import { getProjectBySlug } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      <div className="min-h-screen">
        <motion.div
          className="relative w-full h-[60vh] overflow-hidden bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>

        <section className="max-w-3xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="size-4" /> Back to projects
          </Link>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-bold">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{project.year}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2 capitalize">
                  <Tag className="size-4" />
                  <span>{project.category}</span>
                </div>
                {project.role && (
                  <>
                    <span>•</span>
                    <span>{project.role}</span>
                  </>
                )}
              </div>
            </div>

            <Separator />

            <p className="text-lg font-bold leading-relaxed text-foreground">
              {project.description}
            </p>

            {project.tech && (
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm font-bold rounded-sm bg-accent text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.githubUrl && (
              <div className="pt-4">
                <Button asChild size="lg" className="gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            )}
          </motion.div>
        </section>
      </div>
    </>
  );
}
