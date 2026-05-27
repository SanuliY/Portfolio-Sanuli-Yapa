import type { DeveloperInfo } from '@/types';
import profilePic from '@/assets/about.png';

export const developerInfo: DeveloperInfo = {
  name: 'Sanuli Yapa',
  tagline: 'Frontend Developer · UI/UX Designer · QA Enthusiast',
  heroIntroduction:
    'I craft responsive, user-friendly and visually engaging web experiences — combining clean design, accessible code, and an eye for quality assurance.',
  biography: `I'm Sanuli Yapa, a Computer Science undergraduate passionate about creating immersive digital experiences that blend creativity, functionality, and user-centered design. My interests span frontend development, backend technologies, UI/UX design, and software quality assurance, allowing me to approach projects with both technical precision and creative thinking.

I enjoy transforming ideas into modern, responsive, and visually engaging applications using technologies like React, JavaScript, TailwindCSS, and contemporary web tools. From designing intuitive user flows in Figma to developing polished interfaces and exploring QA practices, I'm constantly learning how to build products that are not only beautiful, but also reliable and meaningful.`,
  approach: `My process is guided by three values: clarity, craft, and care. Clarity in how interfaces communicate intent, craft in the details of typography, motion, and code, and care for the people who actually use what I build.

Whether it's a research-driven project, a hackathon prototype, or a UI/UX exploration, I aim to leave every product more intuitive, more accessible, and a little more human than I found it.`,
  skills: [
    {
      title: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frontend & Design',
      items: ['React', 'TailwindCSS', 'Figma', 'Responsive Design'],
    },
    {
      title: 'Backend & Tools',
      items: ['Node.js', 'REST APIs', 'Git & GitHub', 'VS Code', 'Postman'],
    },
    {
      title: 'QA & Practice',
      items: ['Manual Testing', 'Test Case Design', 'Cross-browser Testing', 'Accessibility'],
    },
  ],
  certifications: [
    'Microsoft Azure Data Fundamentals — 2025',
    'Microsoft Azure AI Fundamentals — 2025',
  ],
  softSkills: [
    'Creativity',
    'Communication',
    'Problem Solving',
    'Teamwork',
    'Time Management',
  
    'Analytical Thinking',
    'Presentation Skills',
  ],
  experience: [
    {
      period: '2023 — Present',
      title: 'Frontend Development & UI/UX Practice',
      organization: 'Self-learning & Associated Projects',
      description:
        'Continuously improving frontend engineering, responsive design, creative motion, and user-centered UI/UX through personal and collaborative projects.',
    },
    {
      period: '2024 — Present',
      title: 'Student Society Member',
      organization: 'University Student Community',
      description:
        'Actively participating in computing-related student activities, technical learning, and collaborative team work.',
    },
    {
      period: 'Volunteer',
      title: 'University Volunteer',
      organization: 'Student Activities',
      description:
        'Participated in volunteering activities and collaborative student initiatives while developing communication and teamwork skills.',
    },
  ],
  languages: [
    { language: 'English'},
    { language: 'Sinhala' },
    { language: 'Tamil' },
  ],
  education: `BSc (Hons)
Computer Science
University of Westminster
Informatics Institute of Technology (IIT) Sri Lanka`,
  location: 'Sri Lanka',
  email: 'sanulisenarath@gmail.com',
  phone: '+94 76 381 9478',
  availability: 'Open to internships, freelance opportunities, and creative collaborations.',
  socialLinks: {
    github: 'https://github.com/SanuliY',
    linkedin: 'https://www.linkedin.com/in/sanuli-yapa-55b01a333/',
    instagram: 'https://www.instagram.com/?hl=en',
  },
  profileImage:
    profilePic,
};
