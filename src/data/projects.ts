import type { Project } from '@/types';

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
    githubUrl: 'https://github.com/SanuliY/E.R.A.S.',
  },
  {
    id: '2',
    title: 'Task Bee',
    category: 'user interface',
    year: '2024',
    slug: 'task-bee-service-marketplace-mobile-app',
    coverImage:
      'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWUlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D',
    description:
      'A service marketplace mobile app designed to help users find trusted local workers for everyday services such as home cleaning, repairs, tutoring, and personal support. The project focuses on clear service categories, smooth booking flows, worker profiles, and user-friendly mobile navigation.',
    tech: ['Figma', 'UI/UX Design', 'Prototyping'],
    role: 'UI/UX Designer',
    figmaUrl:
      'https://www.figma.com/design/mGlD8APl0NlhloJpL4rFYW/Task-Bee-Highfidelity-Prototype?node-id=0-1&t=ET4py5uT5jbxw9nT-1',
  },
  {
    id: '3',
    title: 'StudySprint',
    category: 'web',
    year: '2026',
    slug: 'study-sprint',
    coverImage:
      'https://images.unsplash.com/photo-1759984782024-ff13fd2b97b7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'A responsive study planning web app designed to help students organize academic tasks, manage schedules, set goals, and track study progress through a clean and intuitive dashboard experience.',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/SanuliY/Study-Planner',
  },
  {
    id: '4',
    title: 'ATS Friendly Resume Checker',
    category: 'ai',
    year: '2024',
    slug: 'ats-friendly-resume-checker',
    coverImage:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'An ATS-friendly resume checker concept that helps students and early-career professionals create clean, modern CVs with guided sections, structured layouts, and AI-assisted content suggestions.',
    tech: ['React', 'TailwindCSS', 'AI Integration'],
    role: 'Frontend & UX Designer',
    githubUrl: 'https://github.com/SanuliY/AI-resume-analyzer',
  },
  {
    id: '5',
    title: 'Mental Health Support Application',
    category: 'user interface',
    year: '2024',
    slug: 'mental-health-support-app',
    coverImage:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'A calm and empathy-focused mobile app concept designed to help users reflect on their thoughts, track moods, and access supportive mental wellness tools through a gentle and accessible user interface.',
    tech: ['Figma', 'UI/UX Design', 'Prototyping'],
    role: 'UI/UX Designer',
    figmaUrl: 'PASTE_YOUR_FIGMA_LINK_HERE',
  },
  {
    id: '6',
    title: 'Travel Planner',
    category: 'web',
    year: '2024',
    slug: 'travel-planner',
    coverImage:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'A frontend-focused travel planner where users can explore destinations, build itineraries, and plan trips through a vibrant, responsive, and photo-led interface with smooth user interactions.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/SanuliY/Travel-Planner',
  },
  {
    id: '7',
    title: 'Performance Pulse',
    category: 'user interface',
    year: '2024',
    slug: 'performance-pulse',
    coverImage:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280',
    description:
      'A sports performance tracking platform concept designed to help athletes and coaches view player statistics, monitor progress, and understand performance insights through clear dashboard-style interfaces.',
    tech: ['UI/UX Design', 'Figma'],
    role: 'UI/UX Designer',
    figmaUrl: 'PASTE_YOUR_FIGMA_LINK_HERE',
  },

  {
    id: '7',
    title: 'Future Interface - Article',
    category: 'Research',
    year: '2026',
    slug: 'future-interface-article',
    coverImage:
      'https://media.istockphoto.com/id/2212360504/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-visualization-web.jpg?s=2048x2048&w=is&k=20&c=Lcx7WupVOFhWObH51TlPlLkyS8yEcVgvCC10CQRSrFk=',
    description:
      'An interactive UI/UX article platform exploring how artificial intelligence is transforming design, user experiences, accessibility, and the future of digital products.',
    tech: ['UI/UX Design', 'Article Writing', 'Figma, Prototyping','AI Conceptualization'],
    role: 'UI/UX Designer',
    websiteUrl: 'future-interface.vercel.app',
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
    next:
      currentIndex < projects.length - 1
        ? projects[currentIndex + 1]
        : null,
  };
};