import { GraduationCap, Code2, Boxes, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

// 👇 Editá esta lista cuando cambie tu día a día.
const items: Item[] = [
  {
    icon: GraduationCap,
    label: "Enseñando",
    detail: "Cursado anual 2026 con 21 alumnos",
  },
  {
    icon: Code2,
    label: "Construyendo",
    detail: "Este sitio + el aula virtual propia",
  },
  {
    icon: Boxes,
    label: "Imprimiendo",
    detail: "Piezas 3D a pedido (PLA / PETG)",
  },
  {
    icon: BookOpen,
    label: "Aprendiendo",
    detail: "NestJS avanzado y arquitectura por capas",
  },
];

export default function CurrentlyCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="flex items-center gap-2 mb-5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange" />
        </span>
        <p className="text-[11px] uppercase tracking-widest text-white/55">
          Ahora mismo
        </p>
      </div>

      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.label} className="flex items-start gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange-light shrink-0">
              <it.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/45 mb-0.5">
                {it.label}
              </p>
              <p className="text-sm text-white/85 leading-snug">{it.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 pt-4 border-t border-white/5 text-[11px] text-white/40">
        Actualizado cada tanto · inspirado en{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-orange-light"
        >
          /now
        </a>
      </p>
    </div>
  );
}
