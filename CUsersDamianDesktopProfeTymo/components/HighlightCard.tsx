import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function HighlightCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="card">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange-light">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-medium text-white mb-1">{title}</p>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
