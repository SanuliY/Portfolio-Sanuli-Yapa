import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

/**
 * Project card. If the project has a githubUrl, the card opens GitHub
 * in a new tab; otherwise it falls back to the internal detail route.
 */
export function ProjectCard({
  project,
  aspectRatio,
  showCategory = true,
  index = 0,
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';

  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square',
  };

  const isExternal = Boolean(project.githubUrl);

  const content = (
    <div className={cn('relative overflow-hidden bg-muted', aspectRatioClasses[ratio])}>
      {!isLoaded && <div className="absolute inset-0 bg-muted" />}

      <motion.img
        src={project.coverImage}
        alt={project.title}
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-all duration-700',
          isLoaded ? 'opacity-100' : 'opacity-0',
          'group-hover:scale-110'
        )}
        loading={index < 6 ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Always-visible gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Status badge */}
      {project.status === 'ongoing' && (
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-primary/90 text-primary-foreground">
          Ongoing
        </span>
      )}

      {/* GitHub icon top right */}
      {isExternal && (
        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-90 group-hover:bg-white group-hover:text-black transition-all duration-300">
          <Github className="size-4" />
        </div>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
        <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide flex items-center gap-2">
          <span>{project.title}</span>
          {isExternal && (
            <ArrowUpRight className="size-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          )}
        </h3>
        {showCategory && (
          <div className="flex items-center gap-3 text-sm text-white/80 font-bold tracking-wide">
            <span className="capitalize">{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
        )}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[11px] font-bold tracking-wide rounded-sm bg-white/10 text-white/90 border border-white/15"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-500" />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {isExternal ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative overflow-hidden rounded-sm"
          aria-label={`Open ${project.title} on GitHub`}
        >
          {content}
        </a>
      ) : (
        <Link
          to={`/project/${project.slug}`}
          className="group block relative overflow-hidden rounded-sm"
        >
          {content}
        </Link>
      )}
    </motion.div>
  );
}
