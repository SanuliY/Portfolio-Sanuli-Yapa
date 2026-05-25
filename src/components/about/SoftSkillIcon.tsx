import {
  Brain,
  Clock,
  Lightbulb,
  MessageCircle,
  Presentation,
  Puzzle,
  Sparkles,
  Users,
  Crown,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SoftSkillIconProps {
  skillId: string;
  className?: string;
}

const iconClass = 'size-3.5 shrink-0';

const softSkillStyles: Record<string, { bg: string; icon: string }> = {
  creativity: { bg: 'bg-violet-500/20', icon: 'text-violet-400' },
  communication: { bg: 'bg-sky-500/20', icon: 'text-sky-400' },
  'problem-solving': { bg: 'bg-amber-500/20', icon: 'text-amber-400' },
  teamwork: { bg: 'bg-emerald-500/20', icon: 'text-emerald-400' },
  'time-management': { bg: 'bg-blue-500/20', icon: 'text-blue-400' },
  leadership: { bg: 'bg-rose-500/20', icon: 'text-rose-400' },
  analytical: { bg: 'bg-indigo-500/20', icon: 'text-indigo-400' },
  presentation: { bg: 'bg-fuchsia-500/20', icon: 'text-fuchsia-400' },
  'default-soft': { bg: 'bg-muted', icon: 'text-muted-foreground' },
};

export function SoftSkillIcon({ skillId, className }: SoftSkillIconProps) {
  const style = softSkillStyles[skillId] ?? softSkillStyles['default-soft'];

  const Icon = (() => {
    switch (skillId) {
      case 'creativity':
        return Lightbulb;
      case 'communication':
        return MessageCircle;
      case 'problem-solving':
        return Puzzle;
      case 'teamwork':
        return Users;
      case 'time-management':
        return Clock;
      case 'leadership':
        return Crown;
      case 'analytical':
        return Brain;
      case 'presentation':
        return Presentation;
      default:
        return Sparkles;
    }
  })();

  return (
    <span
      className={cn(
        'flex size-7 items-center justify-center rounded-md',
        style.bg,
        className
      )}
      aria-hidden
    >
      <Icon className={cn(iconClass, style.icon)} strokeWidth={2} />
    </span>
  );
}
