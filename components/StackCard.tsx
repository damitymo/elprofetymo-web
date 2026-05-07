// Logos vienen de https://cdn.simpleicons.org · cero dependencias.
// Para sumar / cambiar / reordenar: editá el array "stack" abajo.
//   - "slug" es el identificador en simpleicons (buscalo en https://simpleicons.org)
//   - "color" es opcional. Sin valor → blanco. Si querés el color oficial, ponelo
//     como hex SIN el "#". Ejemplo: "3178C6" para TypeScript azul.
//
// Tip: si la marca es muy oscura (Next.js, Vercel, Express), dejala en "white"
// para que se vea bien sobre el fondo oscuro del sitio.

type StackItem = { name: string; slug: string; color?: string };

const stack: StackItem[] = [
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Next.js",    slug: "nextdotjs",  color: "white"  },
  { name: "NestJS",     slug: "nestjs",     color: "E0234E" },
  { name: "React",      slug: "react",      color: "61DAFB" },
  { name: "Tailwind",   slug: "tailwindcss", color: "06B6D4" },
  { name: "Node.js",    slug: "nodedotjs",  color: "5FA04E" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "TypeORM",    slug: "typeorm",    color: "FE0902" },
  { name: "Vercel",     slug: "vercel",     color: "white"  },
];

export default function StackCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <p className="text-[11px] uppercase tracking-widest text-white/45 mb-4">
        Stack del día a día
      </p>

      <div className="grid grid-cols-3 gap-3">
        {stack.map((s) => (
          <div
            key={s.slug}
            title={s.name}
            className="aspect-square flex flex-col items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.06] transition"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${s.slug}/${s.color ?? "white"}`}
              alt={s.name}
              width={28}
              height={28}
              loading="lazy"
            />
            <p className="text-[11px] text-white/70">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
