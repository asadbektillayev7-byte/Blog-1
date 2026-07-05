import FadeIn from "./FadeIn";

interface LinkCardProps {
  label: string;
  handle: string;
  href: string;
  description: string;
  delay?: number;
}

export default function LinkCard({
  label,
  handle,
  href,
  description,
  delay = 0,
}: LinkCardProps) {
  return (
    <FadeIn delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-line rounded-lg p-5 hover:border-accent transition-colors group"
      >
        <div className="font-display text-xs uppercase tracking-wider text-sage mb-1">
          {label}
        </div>
        <div className="font-display text-lg text-ink group-hover:text-accent transition-colors mb-1">
          {handle}
        </div>
        <p className="text-muted text-sm">{description}</p>
      </a>
    </FadeIn>
  );
}
