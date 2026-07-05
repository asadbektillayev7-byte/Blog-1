interface SectionLabelProps {
  index: string;
  title: string;
}

export default function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-display text-sm text-muted tabular-nums">
        {index}
      </span>
      <span className="font-display text-sm uppercase tracking-widest text-muted">
        {title}
      </span>
      <hr className="flex-1 border-0 h-px bg-line" />
    </div>
  );
}
