type Line =
  | { type: "cmd"; text: string }
  | { type: "out"; text: string; tone?: "ok" | "warn" | "muted" };

const lines: Line[] = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "→ profe + dev fullstack", tone: "ok" },
  { type: "cmd", text: "cat stack.yml" },
  { type: "out", text: "- nest, next, express", tone: "warn" },
  { type: "out", text: "- typeorm, postgres", tone: "warn" },
  { type: "out", text: "- vercel, render", tone: "warn" },
  { type: "cmd", text: "teaching --year=2026" },
  { type: "out", text: "→ 21 alumnos · 92 clases", tone: "ok" },
];

export default function TerminalCard() {
  return (
    <div className="rounded-2xl border border-brand-orange/20 bg-gradient-to-br from-brand-navy to-brand-navy-deeper p-6 font-mono text-sm leading-relaxed">
      <div className="flex gap-1.5 mb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
      </div>
      <div className="space-y-1 text-white/80">
        {lines.map((l, i) => {
          if (l.type === "cmd") {
            return (
              <div key={i}>
                <span className="text-white/40">$</span>{" "}
                <span className="text-white">{l.text}</span>
              </div>
            );
          }
          const tone =
            l.tone === "ok"
              ? "text-emerald-300"
              : l.tone === "warn"
              ? "text-yellow-300"
              : "text-white/50";
          return (
            <div key={i} className={tone}>
              {l.text}
            </div>
          );
        })}
        <div className="pt-1">
          <span className="text-white/40">$</span>{" "}
          <span className="inline-block w-2 h-4 align-middle bg-brand-orange animate-pulse" />
        </div>
      </div>
    </div>
  );
}
