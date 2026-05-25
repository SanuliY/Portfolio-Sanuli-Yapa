import type { ResumeEntry } from '@/types';

interface ResumeTimelineProps {
  title: string;
  items: ResumeEntry[];
}

function TimelineEntry({ item }: { item: ResumeEntry }) {
  return (
    <div className="relative pl-6 border-l border-border space-y-2">
      <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500" />
      <p className="text-xs uppercase tracking-wide text-muted-foreground font-bold">
        {item.period}
      </p>
      <h3 className="text-lg font-bold">{item.title}</h3>
      {item.subtitle && (
        <p className="text-sm text-foreground/90 font-bold">{item.subtitle}</p>
      )}
      {item.organization && (
        <p className="text-sm text-muted-foreground font-bold">{item.organization}</p>
      )}
      <p className="text-sm font-bold leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </div>
  );
}

export function ResumeTimeline({ title, items }: ResumeTimelineProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold tracking-wide">{title}</h2>
      <div className="space-y-8">
        {items.map((item, i) => (
          <TimelineEntry key={`${item.title}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
