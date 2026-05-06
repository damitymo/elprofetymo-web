import Link from "next/link";
import { Github, Linkedin, Mail, Slack } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="container-narrow py-10 grid gap-8 md:grid-cols-3 text-sm text-white/60">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-brand-orange text-base">{`</>`}</span>
            <span className="text-white text-sm font-medium">elprofetymo</span>
          </div>
          <p className="leading-relaxed">
            Hecho con Next.js + Tailwind + MDX, deployado en Vercel. El código
            fuente del sitio está en GitHub.
          </p>
        </div>

        <div>
          <p className="text-white/80 mb-3 font-medium">Navegación</p>
          <ul className="space-y-2">
            <li><Link href="/sobre-mi" className="hover:text-white">Sobre mí</Link></li>
            <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/cursos" className="hover:text-white">Cursos</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white/80 mb-3 font-medium">Encontrame</p>
          <div className="flex gap-3">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg border border-white/10 p-2 hover:border-white/30 hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/10 p-2 hover:border-white/30 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:hola@elprofetymo.com.ar" aria-label="Email" className="rounded-lg border border-white/10 p-2 hover:border-white/30 hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Slack" className="rounded-lg border border-white/10 p-2 hover:border-white/30 hover:text-white">
              <Slack className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-narrow py-5 text-xs text-white/40 flex justify-between">
          <span>© {new Date().getFullYear()} Damián De Jesús Tymoszuk</span>
          <span className="font-mono">v0.1 · build {`{tymo}`}</span>
        </div>
      </div>
    </footer>
  );
}
