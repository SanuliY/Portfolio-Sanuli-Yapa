import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { developerInfo } from '@/data/developer';

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Projects"
        description="A collection of Sanuli Yapa's projects spanning web development, UI/UX design, mobile apps and research."
      />

      <div className="min-h-screen">
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4">
                Projects
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-bold tracking-wide max-w-2xl mx-auto">
                Frontend, UI/UX and research work. Tap any project to open it on GitHub.
              </p>
              {developerInfo.socialLinks.github && (
                <a
                  href={developerInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-sm border border-border text-sm font-bold tracking-wide hover:bg-accent transition-colors"
                >
                  <Github className="size-4" /> Visit full GitHub profile
                </a>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-2 md:px-4">
          <PortfolioGrid projects={projects} />
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
