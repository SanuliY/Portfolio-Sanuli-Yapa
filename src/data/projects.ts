import type { Project } from '@/types';

/**
 * Sanuli's project portfolio.
 * Each project links out to its GitHub repository.
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'Elephant Railway Alert System — E.R.A.S',
    category: 'collaboration',
    year: 'Ongoing',
    status: 'ongoing',
    slug: 'elephant-railway-alert-system',
    coverImage:
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'A railway safety solution integrating CCTV-based detection and early-warning alerts to help prevent train–elephant collisions. My focus is on the frontend dashboard and alert visualization for railway operators.',
    tech: ['React', 'TailwindCSS', 'Computer Vision', 'IoT'],
    role: 'Frontend & UI Developer, AI Developer',
    githubUrl: 'https://github.com/SanuliY',
    websiteUrl: 'https://eras.systems',
  },
  {
    id: '2',
    title: 'Task Bee',
    category: 'user interface',
    year: '2024',
    slug: 'task-bee-service-marketplace-mobile-app',
    coverImage:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'A service marketplace mobile app designed to help users find trusted local workers for everyday tasks such as home cleaning, repairs, tutoring, and other personal services. The project focuses on simple navigation, clear service categories, and a smooth booking experience.',
    tech: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    role: 'UI/UX Designer',
    figmaUrl:
      'https://www.figma.com/design/mGlD8APl0NlhloJpL4rFYW/Task-Bee-Highfidelity-Prototype?node-id=0-1&t=ET4py5uT5jbxw9nT-1',
  },
  {
    id: '3',
    title: 'Performance Pulse',
    category: 'user interface',
    year: '2024',
    slug: 'performance-pulse',
    coverImage:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'A sports performance analytics platform that turns raw match data into clear, actionable insights for athletes and coaches through interactive charts and dashboards.',
    tech: ['React', 'TailwindCSS', 'Chart.js', 'Node.js'],
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/SanuliY',
  },
  {
    id: '4',
    title: 'Mental Health Support Application',
    category: 'mobile',
    year: '2024',
    slug: 'mental-health-support-app',
    coverImage:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'A Reality Tree concept app designed to help users reflect on thoughts, track mood, and access supportive tools — built with empathy-first UI and a calm, accessible design language.',
    tech: ['Figma'],
    role: 'UI/UX Designer',
    githubUrl: 'https://github.com/SanuliY',
    websiteUrl: 'https://mental-health-support-app.com',
  },
  {
    id: '5',
    title: 'AI Resume Builder',
    category: 'ai',
    year: '2024',
    slug: 'ai-resume-builder',
    coverImage:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'An ATS-friendly resume builder that helps students and early-career professionals craft clean, modern CVs with AI-assisted suggestions and one-click export.',
    tech: ['React', 'OpenAI API', 'TailwindCSS'],
    role: 'Frontend & UX',
    githubUrl: 'https://github.com/SanuliY',
    websiteUrl: 'https://ai-resume-builder.com',
  },
  {
    id: '6',
    title: 'Tourism & Travel Planner',
    category: 'web',
    year: '2024',
    slug: 'tourism-travel-planner',
    coverImage:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'A frontend-focused travel planner where users can browse destinations, build itineraries, and visualize trip budgets — designed with smooth motion and a vibrant, photo-led layout.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/SanuliY',
    websiteUrl: 'https://tourism-travel-planner.com',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] => projects.slice(0, 4);

export const getAdjacentProjects = (
  currentSlug: string
): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};