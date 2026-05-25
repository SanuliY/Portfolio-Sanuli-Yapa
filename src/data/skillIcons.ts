/** Maps skill display names to icon ids used by SkillIcon */
export const techSkillIconMap: Record<string, string> = {
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  Python: 'python',
  Java: 'java',
  SQL: 'sql',
  HTML: 'html',
  CSS: 'css',
  React: 'react',
  TailwindCSS: 'tailwind',
  Figma: 'figma',
  'Framer Motion': 'framer',
  'Responsive Design': 'responsive',
  'Node.js': 'nodejs',
  'REST APIs': 'api',
  'Git & GitHub': 'git',
  'VS Code': 'vscode',
  Postman: 'postman',
  'Manual Testing': 'testing',
  'Test Case Design': 'testcase',
  'Cross-browser Testing': 'browser',
  Accessibility: 'accessibility',
};

export const softSkillIconMap: Record<string, string> = {
  Creativity: 'creativity',
  Communication: 'communication',
  'Problem Solving': 'problem-solving',
  Teamwork: 'teamwork',
  'Time Management': 'time-management',
  Leadership: 'leadership',
  'Analytical Thinking': 'analytical',
  'Presentation Skills': 'presentation',
};

export function getTechSkillIconId(name: string): string {
  return techSkillIconMap[name] ?? 'default';
}

export function getSoftSkillIconId(name: string): string {
  return softSkillIconMap[name] ?? 'default-soft';
}
