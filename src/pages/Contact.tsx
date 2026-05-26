import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Portfolio Contact - ${formData.projectType}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Message:
${formData.message}`;

    window.location.href = `mailto:${developerInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${developerInfo.name} for project inquiries, collaborations, and opportunities. ${developerInfo.availability}`}
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-bold tracking-wide">
                Let's discuss your next project
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground font-bold">
                    Fill out the form below and I&apos;ll get back to you within 24-48 hours.{' '}
                    {developerInfo.availability}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-bold">Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-md border border-border bg-accent px-4 py-3 font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-md border border-border bg-accent px-4 py-3 font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 font-bold"
                    >
                      <option>UI/UX Design</option>
                      <option>Frontend Development</option>
                      <option>Portfolio Project</option>
                      <option>Freelance Work</option>
                      <option>Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 font-bold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-white px-6 py-4 font-bold text-black transition hover:opacity-80"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground font-bold">
                    Prefer to reach out directly? Here&apos;s how you can contact me.
                  </p>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Mail className="size-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground">Email</p>
                      <a href={`mailto:${developerInfo.email}`} className="text-lg font-bold">
                        {developerInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Phone className="size-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground">Phone</p>
                      <a href={`tel:${developerInfo.phone}`} className="text-lg font-bold">
                        {developerInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <MapPin className="size-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground">Location</p>
                      <p className="text-lg font-bold">{developerInfo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}