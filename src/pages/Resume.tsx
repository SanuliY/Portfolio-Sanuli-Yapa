import { motion } from 'framer-motion';
import { developerInfo } from '@/data/developer';
import { resumeData } from '@/data/resume';
import { DownloadCVButton } from '@/components/resume/DownloadCVButton';
import { ResumeTimeline } from '@/components/resume/ResumeTimeline';
import { SEOHead } from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';

function SkillPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-1 text-sm font-bold rounded-sm bg-accent text-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <SEOHead
        title="Resume"
        description={`Resume of ${developerInfo.name} — education, projects, experience, skills, and certifications.`}
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                Resume
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-bold tracking-wide">
                {developerInfo.tagline}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <DownloadCVButton />
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-border text-sm font-bold tracking-wide hover:bg-accent transition-colors"
                >
                  About Me
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl border border-border bg-card/50 p-6 md:p-10 lg:p-12">
              <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
                <div className="space-y-12">
                  <ResumeTimeline title="Education" items={resumeData.education} />
                  <ResumeTimeline
                    title="Projects & Research"
                    items={resumeData.projects}
                  />
                  <ResumeTimeline
                    title="Experience & Activities"
                    items={resumeData.experience}
                  />
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-muted-foreground font-bold">
                      Software & Tools
                    </h3>
                    <SkillPills items={resumeData.softwareTools} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-muted-foreground font-bold">
                      Certifications
                    </h3>
                    <ul className="space-y-3">
                      {resumeData.certifications.map((cert) => (
                        <li
                          key={cert}
                          className="text-sm font-bold leading-relaxed pl-4 border-l-2 border-blue-500/40"
                        >
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-muted-foreground font-bold">
                      Soft Skills
                    </h3>
                    <SkillPills items={resumeData.softSkills} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-muted-foreground font-bold">
                      Languages
                    </h3>
                    <ul className="space-y-3">
                      {resumeData.languages.map((lang) => (
                        <li key={lang.language} className="text-sm font-bold">
                          <span className="block">{lang.language}</span>
                          <span className="block text-muted-foreground text-xs font-bold">
                            {lang.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-muted-foreground font-bold">
                      References
                    </h3>

                    {resumeData.references.map((reference, index) => (
                      <div
                        key={index}
                        className="space-y-1 border border-border rounded-xl p-4"
                      >
                        <h4 className="font-bold">
                          {reference.name}
                        </h4>

                        <p className="text-sm text-muted-foreground">
                          {reference.role}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {reference.organization}
                        </p>

                        <p className="text-sm break-all">
                          {reference.email}
                        </p>

                        <p className="text-sm">
                          {reference.phone}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
