import Link from "next/link";

type Props = {
  href: string;
  category: "Educativo" | "Personal" | "Técnico";
  title: string;
  date: string;
  readingTime: string;
};

const tone: Record<Props["category"], string> = {
  Educativo: "bg-brand-orange/15 text-brand-orange-light",
  Personal: "bg-teal-400/15 text-teal-200",
  Técnico: "bg-violet-400/15 text-violet-200",
};

export default function PostCard({
  href,
  category,
  title,
  date,
  readingTime,
}: Props) {
  return (
    <Link href={href} className="card block group">
      <span
        className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-medium ${tone[category]}`}
      >
        {category}
      </span>
      <p className="mt-2 text-sm font-medium text-white leading-snug group-hover:text-brand-orange-light transition">
        {title}
      </p>
      <p className="mt-2 text-[11px] text-white/50">
        {date} · {readingTime}
      </p>
    </Link>
  );
}
