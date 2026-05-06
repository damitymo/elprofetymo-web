import ProjectCard, { Project } from "@/components/ProjectCard";

export const metadata = {
  title: "Proyectos",
  description: "Cosas que hago, en producción o en construcción.",
};

// 👉 Cuando crees un proyecto nuevo, sumalo a esta lista (o conectá GitHub API).
const projects: Project[] = [
  {
    name: "Aula virtual elprofetymo",
    description:
      "Moodle 5.2 customizado con tema Moove, branding propio y flujo de inscripción por DNI. Hostinger + Cloudflare.",
    stack: ["Moodle", "PHP", "Cloudflare", "Hostinger"],
    liveUrl: "https://aula.elprofetymo.com.ar",
    highlight: true,
  },
  {
    name: "elprofetymo.com.ar",
    description:
      "Este mismo sitio. Next.js 14 con App Router, blog en MDX, deploy en Vercel.",
    stack: ["Next.js", "Tailwind", "MDX", "Vercel"],
    repoUrl: "https://github.com/",
    liveUrl: "https://elprofetymo.com.ar",
  },
  // Sumá más proyectos acá. Idea de campos:
  // { name, description, stack, repoUrl, liveUrl, highlight }
];

export default function ProyectosPage() {
  return (
    <section className="container-narrow pt-16 pb-12">
      <div className="mb-10 max-w-2xl">
        <span className="pill mb-4">Proyectos</span>
        <h1 className="text-4xl font-medium mb-3">Cosas que hago</h1>
        <p className="text-white/65">
          Algunos en producción, otros en construcción. Tirá click en el repo
          si querés mirar el código.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="card text-sm text-white/60">
          Pronto vamos a tener proyectos para mostrar.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      )}

      <div className="mt-12 text-sm text-white/55">
        Repos públicos completos:{" "}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange-light hover:text-brand-orange"
        >
          github.com →
        </a>
      </div>
    </section>
  );
}
