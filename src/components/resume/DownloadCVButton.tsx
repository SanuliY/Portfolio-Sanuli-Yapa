import { Download } from 'lucide-react';
import { resumeData } from '@/data/resume';
import { cn } from '@/lib/utils';

interface DownloadCVButtonProps {
  variant?: 'solid' | 'outline';
  className?: string;
}

export function DownloadCVButton({
  variant = 'solid',
  className,
}: DownloadCVButtonProps) {
  return (
    <a
      href={resumeData.cvUrl}
      download={resumeData.cvFileName}
      className={cn(
        'inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-bold tracking-wide transition-colors',
        variant === 'solid' &&
          'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'outline' &&
          'border border-white/40 text-white hover:bg-white/10',
        className
      )}
    >
      <Download className="size-4" />
      Download CV
    </a>
  );
}
