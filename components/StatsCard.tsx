import { getUser } from "@/lib/github";

// 👇 Stats fijas (editá los números cuando cambien).
const stats: Array<{ number: string; label: string; sub: string }> = [
  { number: "21", label: "Alumnos", sub: "cursando este 2026" },
  { number: "92", label: "Clases", sub: "en el cursado anual" },
];

export default async function StatsCard() {
  const user = await getUser();
  const repos = user?.publicRepos ?? null;

  return (
    <div className="relative pl-6 md:pl-8">
      {/* línea naranja de acento */}
      <span className="absolute left-0 top-2 bottom-2 w-px bg-brand-orange/40" />

      <div className="space-y-8">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
        {repos !== null && (
          <Stat
            number={String(repos)}
            label="Repos"
            sub="públicos en GitHub"
          />
        )}
      </div>
    </div>
  );
}

function Stat({
  number,
  label,
  sub,
}: {
  number: string;
  label: string;
  sub: string;
}) {
  return (
    <div>
      <p className="text-5xl md:text-6xl font-medium tracking-tight leading-none">
        {number}
      </p>
      <p className="mt-2 text-sm font-medium text-white">{label}</p>
      <p className="text-xs text-white/55">{sub}</p>
    </div>
  );
}
