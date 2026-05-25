import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { GroupedSkillsSection } from '@/components/about/GroupedSkillsSection';

export default function About() {
  return (
    <>
      <SEOHead
        title="About Me"
        description={`Learn about ${developerInfo.name}, ${developerInfo.tagline}.`}
        image={developerInfo.profileImage}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4">
                About
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-bold tracking-wide">
                {developerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait + Bio */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                  <img
                    src={developerInfo.profileImage}
                    alt={developerInfo.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-4">
                  {developerInfo.socialLinks.github && (
                    <a
                      href={developerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {developerInfo.socialLinks.linkedin && (
                    <a
                      href={developerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                  {developerInfo.socialLinks.instagram && (
                    <a
                      href={developerInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                    {developerInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-bold tracking-wide">
                    {developerInfo.tagline}
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  {developerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-bold leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-2 space-y-2 text-sm font-bold tracking-wide">
                  <div>
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="hover:text-muted-foreground transition-colors"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Education: </span>
                    <span>{developerInfo.education}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location: </span>
                    <span>{developerInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 md:py-28 px-6 lg:px-8 border-t border-border bg-accent/30">
          <div className="max-w-6xl mx-auto space-y-14 md:space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                Skills & Tools
              </h2>
              <p className="text-muted-foreground font-bold max-w-xl mx-auto leading-relaxed">
                The technologies I use to design and ship products.
              </p>
            </div>

            <GroupedSkillsSection />
          </div>
        </section>


      </div>
    </>
  );
}
