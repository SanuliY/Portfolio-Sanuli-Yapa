import type { ResumeData } from '@/types';

export const resumeData: ResumeData = {
  cvUrl: '/cv/sanuli-yapa-cv.pdf',
  cvFileName: 'Sanuli-Yapa-CV.pdf',

  education: [
    {
      period: '2024 — Present',
      title: 'BSc (Hons) Computer Science',
      organization: 'University of Westminster • IIT Sri Lanka',
      description:
        'Currently pursuing a Computer Science degree with strong interests in frontend engineering, UI/UX design, creative technologies, software engineering, and modern web development.',
    },
    {
      period: '2024',
      title: 'Foundation Certificate in Higher Education',
      organization: 'Informatics Institute of Technology',
      description:
        'Completed higher education foundation studies preparing for undergraduate-level computing and software engineering.',
    },
    {
      period: '2022 (2023)',
      title: 'G.C.E Ordinary Level Examination',
      organization: 'Sri Lanka',
      description: 'Successfully completed with 8A passes and 1B pass.',
    },
  ],

  projects: [
    {
      period: 'Ongoing',
      title: 'Elephant Railway Alert System — E.R.A.S',
      subtitle: 'Smart Railway Safety System',
      description:
        'Contributing to the development of an intelligent railway safety solution integrating CCTV-based detection and microwave radar sensors to identify elephants near railway tracks and generate real-time mobile alerts for collision prevention.',
    },
    {
      period: '2026',
      title: 'StudySprint',
      subtitle: 'Luxury Study Planner',
      description:
        'Designed and developed a cinematic productivity platform focused on helping students organize tasks, manage focus sessions, and improve study routines through immersive UI design and responsive frontend development.',
    },
    {
      period: '2026',
      title: 'ATS-Friendly Resume Checker',
      subtitle: 'AI-Assisted Resume Analysis Tool',
      description:
        'Designed and developed a responsive resume analysis web application focused on improving Applicant Tracking System compatibility through AI-assisted feedback, keyword optimization, and clean user-focused workflows.',
    },
  ],

  experience: [
    {
      period: '2025 — Present',
      title: 'Frontend Developer & UI/UX Designer',
      organization: 'Personal Projects & Independent Learning',
      description:
        'Building responsive web applications and immersive digital experiences while improving frontend engineering, UI/UX design, creative development, and modern web technologies through self-directed projects.',
    },
    {
      period: '2026 — Present',
      title: 'Student Society Member',
      organization:
        'Computer Society • Computer Intelligence Society • Robotics & Automation Society',
      description:
        'Actively participating in computing-related student activities, technical learning, collaborative university events, and innovation-focused communities.',
    },
    {
      period: 'Volunteer',
      title: 'University Volunteer',
      organization: 'Student Activities',
      description:
        'Contributed to university and community activities through collaborative volunteering and project support initiatives.',
    },
  ],

  softwareTools: [
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'Tailwind CSS',
    'Next.js',
    'Figma',
    'Flutter',
    'Git',
    'GitHub',
    'My SQL',
    'Cypress',
    'Postman',
    'Selenium',
  ],

  certifications: [
    'Microsoft Azure Data Fundamentals — 2025',
    'Microsoft Azure AI Fundamentals — 2025',
  ],

  softSkills: [
    'Teamwork',
    'Communication',
    'Problem Solving',
    'Critical Thinking',
    'Time Management',
    'Adaptability',
    'Leadership',
  ],

  languages: [
    { language: 'English', level: 'Fluent' },
    { language: 'Sinhala', level: 'Native' },
    { language: 'Tamil', level: 'Reading & Writing' },
  ],

  references: [
    {
      name: 'Asha Jayakody',
      role: 'Senior Lecturer',
      organization: 'Informatics Institute of Technology',
      email: 'asha.j@iit.ac.lk',
      phone: '(+94) 761433440',
    },
    {
      name: 'Sanjalee Tissera',
      role: 'Assistant Lecturer',
      organization: 'Informatics Institute of Technology',
      email: 'sanjalee.t@iit.ac.lk',
      phone: '(+94) 763746806',
    },
  ],
};