import { cn } from '@/lib/utils';

interface SoftwareSkillIconProps {
  skillId: string;
  className?: string;
}

const boxClass = 'flex size-7 items-center justify-center rounded-md shrink-0';
const iconClass = 'size-3.5 shrink-0';

export function SoftwareSkillIcon({ skillId, className }: SoftwareSkillIconProps) {
  switch (skillId) {
    case 'javascript':
      return (
        <span
          className={cn(
            boxClass,
            'bg-[#F7DF1E] text-[9px] font-bold text-black',
            className
          )}
          aria-hidden
        >
          JS
        </span>
      );
    case 'typescript':
      return (
        <span
          className={cn(boxClass, 'bg-[#3178C6] text-[9px] font-bold text-white', className)}
          aria-hidden
        >
          TS
        </span>
      );
    case 'html':
      return (
        <span
          className={cn(boxClass, 'bg-[#E34F26] text-[9px] font-bold text-white', className)}
          aria-hidden
        >
          H
        </span>
      );
    case 'css':
      return (
        <span
          className={cn(boxClass, 'bg-[#1572B6] text-[9px] font-bold text-white', className)}
          aria-hidden
        >
          C
        </span>
      );
    case 'react':
      return (
        <span className={cn(boxClass, 'bg-[#20232A]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="#61DAFB">
            <circle cx="12" cy="12" r="2.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              fill="none"
              stroke="#61DAFB"
              strokeWidth="1.2"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              fill="none"
              stroke="#61DAFB"
              strokeWidth="1.2"
              transform="rotate(-60 12 12)"
            />
          </svg>
        </span>
      );
    case 'tailwind':
      return (
        <span className={cn(boxClass, 'bg-[#0F172A]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="#38BDF8">
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 8c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 15.15 9.47 14 7 14z" />
          </svg>
        </span>
      );
    case 'nodejs':
      return (
        <span className={cn(boxClass, 'bg-[#339933]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="white">
            <path d="M12 2C7 2 3 4 3 7v10c0 3 4 5 9 5s9-2 9-5V7c0-3-4-5-9-5zm0 2c3.5 0 7 1.5 7 3s-3.5 3-7 3-7-1.5-7-3 3.5-3 7-3z" />
          </svg>
        </span>
      );
    case 'vscode':
      return (
        <span className={cn(boxClass, 'bg-[#007ACC]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="white">
            <path d="M15.5 3.5L3 10.5v3l12.5 7 2-1.2-9.3-5.3 9.3-5.3-2-1.2z" />
          </svg>
        </span>
      );
    case 'postman':
      return (
        <span className={cn(boxClass, 'bg-[#FF6C37]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="white">
            <path d="M12 3l8 4.5v9L12 21 4 16.5v-9L12 3zm0 3.5L8 9v6l4 2.5 4-2.5V9l-4-2.5z" />
          </svg>
        </span>
      );
    case 'framer':
      return (
        <span className={cn(boxClass, 'bg-[#0055FF]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="white">
            <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm13 0h3v7h-3v-7z" />
          </svg>
        </span>
      );
    case 'responsive':
      return (
        <span className={cn(boxClass, 'bg-[#0D9488]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M9 9h6M9 12h4" />
          </svg>
        </span>
      );
    case 'api':
      return (
        <span className={cn(boxClass, 'bg-[#6366F1]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M8 12h8M12 8v8" />
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="18" r="2" />
          </svg>
        </span>
      );
    case 'testing':
      return (
        <span className={cn(boxClass, 'bg-[#D97706]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
        </span>
      );
    case 'testcase':
      return (
        <span className={cn(boxClass, 'bg-[#CA8A04]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6M9 15h6M9 11h6" />
          </svg>
        </span>
      );
    case 'browser':
      return (
        <span className={cn(boxClass, 'bg-[#2563EB]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
          </svg>
        </span>
      );
    case 'accessibility':
      return (
        <span className={cn(boxClass, 'bg-[#7C3AED]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="4" r="2" />
            <path d="M5 8h14l-2 10H7L5 8zm-2 4h4m10 0h4" />
          </svg>
        </span>
      );
    case 'python':
      return (
        <span className={cn(boxClass, 'bg-[#1E293B]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24">
            <path
              fill="#3776AB"
              d="M12 3c-3.5 0-5.2 1.5-5.5 4h3.5v1.5H7.2C6.5 11.5 8 13 12 13h2v2.5H9.5C6 15.5 3 14 3 18.5 3 21 5 22 8 22h8c3 0 5-1 5-3.5 0-4.5-3.5-3-7-3h-2v-2.5h3.5c3.5 0 5.2-1.5 5.5-4H14v-1.5h2.8c.7-3-2.2-4.5-4.8-4.5H12V3z"
            />
            <path
              fill="#FFD43B"
              d="M9 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
            />
          </svg>
        </span>
      );
    case 'java':
      return (
        <span className={cn(boxClass, 'bg-[#1E293B]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24">
            <path fill="#5382A1" d="M8 18c0 2 2.5 3 4 3s4-1 4-3c0-2-2-2.5-4-2.5S8 16 8 18z" />
            <path fill="#E76F00" d="M10 4c-2 1-3 3-2.5 5.5.5 2 2 3 4.5 3.5 1 .2 2 .5 2.5 1.5" />
            <path fill="#5382A1" d="M14 4c2 1 3 3 2.5 5.5-.5 2-2 3-4.5 3.5-1 .2-2 .5-2.5 1.5" />
          </svg>
        </span>
      );
    case 'sql':
      return (
        <span className={cn(boxClass, 'bg-[#1E3A5F]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="#00758F">
            <path d="M12 3C7 3 3 4.5 3 7v2c0 2.5 4 4 9 4s9-1.5 9-4V7c0-2.5-4-4-9-4zm0 14c-5 0-9 1.5-9 4v2c0 2.5 4 4 9 4s9-1.5 9-4v-2c0-2.5-4-4-9-4z" />
          </svg>
        </span>
      );
    case 'git':
      return (
        <span className={cn(boxClass, 'bg-[#1E293B]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24" fill="#F05032">
            <path d="M23.5 10.2c-.2-.7-.8-1.2-1.5-1.2H14V2.5c0-.8-.7-1.5-1.5-1.5S11 1.7 11 2.5v6.5H2.5c-.8 0-1.5.7-1.5 1.5v7c0 .8.7 1.5 1.5 1.5H11v6.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.5h8c.8 0 1.5-.7 1.5-1.5v-7c0-.3-.1-.6-.2-.8l-2.8 2.8-1.4-1.4 2.9-2.9zM8.5 15.5l-1.4-1.4 4.9-4.9 1.4 1.4-4.9 4.9z" />
          </svg>
        </span>
      );
    case 'figma':
      return (
        <span className={cn(boxClass, 'bg-[#1E293B]', className)} aria-hidden>
          <svg className={iconClass} viewBox="0 0 24 24">
            <path fill="#F24E1E" d="M8 3H5a2 2 0 00-2 2v3a2 2 0 002 2h3V3z" />
            <path fill="#A259FF" d="M13 3h-3v7h3a3.5 3.5 0 100-7z" />
            <path fill="#1ABCFE" d="M8 13H5a2 2 0 00-2 2v3a2 2 0 002 2h3v-7z" />
            <path fill="#0ACF83" d="M13 13h3a3.5 3.5 0 110 7h-3v-7z" />
          </svg>
        </span>
      );
    default:
      return (
        <span
          className={cn(
            boxClass,
            'bg-muted text-[9px] font-bold text-muted-foreground',
            className
          )}
          aria-hidden
        >
          •
        </span>
      );
  }
}
