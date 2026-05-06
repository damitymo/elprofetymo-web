import { MapPin, BookOpen, Users, Github } from "lucide-react";
import { getUser, getRepos, aggregateLanguages } from "@/lib/github";

export default async function GithubProfile() {
  const [user, repos] = await Promise.all([getUser(), getRepos()]);

  if (!user) {
    return (
      <div className="card text-sm text-white/55">
        No se pudo cargar el perfil de GitHub. Probá de nuevo en un rato.
      </div>
    );
  }

  const langs = aggregateLanguages(repos).slice(0, 6);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-4 mb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user.avatarUrl}
          alt={`Avatar de ${user.login}`}
          className="h-14 w-14 rounded-full border border-white/10"
        />
        <div>
          <p className="font-medium text-white">
            {user.name ?? user.login}
          </p>
          <a
            href={user.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-orange-light hover:text-brand-orange inline-flex items-center gap-1"
          >
            <Github className="h-3 w-3" />
            github.com/{user.login}
          </a>
        </div>
      </div>

      {user.bio && (
        <p className="text-sm text-white/75 leading-relaxed mb-5">
          {user.bio}
        </p>
      )}

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60 mb-5">
        {user.location && (
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {user.location}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5" />
          {user.publicRepos} repos públicos
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" />
          {user.followers} seguidores
        </span>
      </div>

      {langs.length > 0 && (
        <>
          <p className="text-[11px] uppercase tracking-widest text-white/40 mb-2">
            Lenguajes que más uso
          </p>
          <div className="flex flex-wrap gap-1.5">
            {langs.map(([lang, count]) => (
              <span
                key={lang}
                className="text-[11px] font-mono text-white/75 border border-white/10 rounded-md px-2 py-0.5"
              >
                {lang}
                <span className="text-white/40 ml-1.5">{count}</span>
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
