interface Props {
  label: string;
}

export default function SectionBadge({ label }: Props) {
  return (
    <span className="inline-block bg-orange-400/15 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
      {label}
    </span>
  );
}
