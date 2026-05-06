import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { getRepos, GITHUB_USER } from "@/lib/github";

export const metadata = {
  title: "Proyectos",
  description: "Repositorios públicos sincronizados desde GitHub.",
};

// Cuáles destacar arriba (usá el nombre exacto del repo).
const FEATURED = new Set<string>([
  // Ejemplo: "elprofetymo-web"
  // Sumá los que quieras destacar.
]);

// Repos que NO quiero mostrar (privados de práctica, dotfiles, etc).
const HIDDEN = new Set<string>([
  // "playground",
]);

export default async function ProyectosPage() {
  const repos = await getRepos();

  const visible = repos.filter((r) => !HIDDEN.has(r.name));
  const featured = visible.filter((r) => FEATURED.has(r.name));
  const otros = visible.filter((r) => !FEATURED.has(r.name));

  return (
    <section className="container-narrow pt-16 pb-12">
      <div className="mb-10 max-w-2xl">
        <span className="pill mb-4">Proyectos</span>
        <h1 className="text-4xl font-medium mb-3">Cosas que hago</h1>
        <p className="text-white/65">
          Estos son mis repos públicos en GitHub, sincronizados automáticamente
          cada hora. Los más recientes arriba.
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="card text-sm text-white/60">
          No se pudieron cargar los repos. Si recién creaste el usuario, dale
          unos minutos al cache de GitHub.
        </div>
      ) : (
        <>
          {featured.length > 0 && (
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                Destacados
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {featured.map((r) => (
                  <RepoCard key={r.id} repo={r} highlight />
                ))}
              </div>
            </div>
          )}

          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
            Todos los repos ({otros.length})
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {otros.map((r) => (
              <RepoCard key={r.id} repo={r} />
            ))}
          </div>
        </>
      )}

      <div className="mt-12 text-sm text-white/55">
        Ver perfil completo:{" "}
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange-light hover:text-brand-orange"
        >
          github.com/{GITHUB_USER} →
        </a>
      </div>
    </section>
  );
}

function RepoCard({
  repo,
  highlight,
}: {
  repo: Awaited<ReturnType<typeof getRepos>>[number];
  highlight?: boolean;
}) {
  return (
    <div
      className={`card flex flex-col ${
        highlight ? "!border-brand-orange/40" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <p className="font-medium text-white">{repo.name}</p>
        {highlight && (
          <span className="text-[10px] text-brand-orange-light bg-brand-orange/15 px-2 py-0.5 rounded-md">
            destacado
          </span>
        )}
      </div>

      <p className="text-sm text-white/65 leading-relaxed mb-4 flex-1 min-h-[2.5em]">
        {repo.description || (
          <span className="italic text-white/40">Sin descripción</span>
        )}
      </p>

      {(repo.language || repo.topics.length > 0) && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.language && (
            <span className="text-[11px] font-mono text-brand-orange-light border border-brand-orange/30 rounded-md px-2 py-0.5">
              {repo.language}
            </span>
          )}
          {repo.topics.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-white/65 border border-white/10 rounded-md px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 text-xs text-white/55">
        {repo.stars > 0 && (
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            {repo.stars}
          </span>
        )}
        {repo.forks > 0 && (
          <span className="inline-flex items-center gap-1">
            <GitFork className="h-3.5 w-3.5" />
            {repo.forks}
          </span>
        )}

        <span className="ml-auto flex gap-3">
          <a
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/65 hover:text-white transition"
          >
            <Github className="h-3.5 w-3.5" />
            Repo
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-orange-light hover:text-brand-orange transition"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Demo
            </a>
          )}
        </span>
      </div>
    </div>
  );
}
