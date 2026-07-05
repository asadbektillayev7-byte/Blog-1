import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

interface LogItem {
  status: string;
  name: string | ReactNode;
  description?: string;
  link?: string;
}

interface LogListProps {
  items: LogItem[];
}

export default function LogList({ items }: LogListProps) {
  return (
    <div className="divide-y divide-line">
      {items.map((item, i) => (
        <FadeIn
          key={i}
          delay={i * 0.08}
          className="py-4 flex gap-4"
        >
          <span className="font-display text-xs uppercase text-sage min-w-[5rem] shrink-0 pt-0.5">
            {item.status}
          </span>
          <div className="flex-1 min-w-0">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <span className="text-ink">{item.name}</span>
            )}
            {item.description && (
              <p className="text-muted text-sm mt-0.5">
                {item.description}
              </p>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
