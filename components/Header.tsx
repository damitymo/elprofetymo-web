import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/impresion-3d", label: "Impresión 3D" },
  { href: "/blog", label: "Blog" },
  { href: "/cursos", label: "Cursos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-brand-navy-deeper/80 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-brand-orange text-base">{`</>`}</span>
          <span className="text-sm font-medium tracking-tight">elprofetymo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://aula.elprofetymo.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !py-2 !text-xs"
        >
          Ir al aula
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
