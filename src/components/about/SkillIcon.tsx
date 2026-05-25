import { getSoftSkillIconId, getTechSkillIconId } from '@/data/skillIcons';
import { SoftSkillIcon } from './SoftSkillIcon';
import { SoftwareSkillIcon } from './SoftwareSkillIcon';

interface SkillIconProps {
  name: string;
  type: 'tech' | 'soft';
  className?: string;
}

export function SkillIcon({ name, type, className }: SkillIconProps) {
  if (type === 'soft') {
    return (
      <SoftSkillIcon skillId={getSoftSkillIconId(name)} className={className} />
    );
  }
  return (
    <SoftwareSkillIcon
      skillId={getTechSkillIconId(name)}
      className={className}
    />
  );
}
