// Sync con la API pública de GitHub para repos y profile.
// Usa fetch con revalidate para hacer caché por 1 hora — el sitio queda
// rápido y no consume requests de más.
//
// Si en algún momento necesitás más rate-limit (5000 req/h en vez de 60),
// agregá GITHUB_TOKEN a las env vars y se manda en el header Authorization.

export const GITHUB_USER = "damitymo";

const REVALIDATE_SECONDS = 60 * 60; // 1 hora

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  pushedAt: string;
  archived: boolean;
  fork: boolean;
};

export type GithubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  twitterUsername: string | null;
};

/** Repositorios públicos del usuario, ordenados por última actividad. */
export async function getRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
      { headers, next: { revalidate: REVALIDATE_SECONDS } }
    );

    if (!res.ok) {
      console.error("[github] error fetching repos:", res.status);
      return [];
    }

    const data = (await res.json()) as Array<{
      id: number;
      name: string;
      description: string | null;
      html_url: string;
      homepage: string | null;
      language: string | null;
      topics: string[];
      stargazers_count: number;
      forks_count: number;
      pushed_at: string;
      archived: boolean;
      fork: boolean;
    }>;

    return data
      .filter((r) => !r.fork && !r.archived)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        htmlUrl: r.html_url,
        homepage: r.homepage,
        language: r.language,
        topics: r.topics ?? [],
        stars: r.stargazers_count,
        forks: r.forks_count,
        pushedAt: r.pushed_at,
        archived: r.archived,
        fork: r.fork,
      }));
  } catch (err) {
    console.error("[github] getRepos failed:", err);
    return [];
  }
}

/** Perfil público del usuario. */
export async function getUser(): Promise<GithubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      headers,
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error("[github] error fetching user:", res.status);
      return null;
    }

    const r = (await res.json()) as {
      login: string;
      name: string | null;
      bio: string | null;
      avatar_url: string;
      html_url: string;
      public_repos: number;
      followers: number;
      following: number;
      location: string | null;
      blog: string | null;
      twitter_username: string | null;
    };

    return {
      login: r.login,
      name: r.name,
      bio: r.bio,
      avatarUrl: r.avatar_url,
      htmlUrl: r.html_url,
      publicRepos: r.public_repos,
      followers: r.followers,
      following: r.following,
      location: r.location,
      blog: r.blog,
      twitterUsername: r.twitter_username,
    };
  } catch (err) {
    console.error("[github] getUser failed:", err);
    return null;
  }
}

/**
 * Lee el README.md del repo "perfil" (el que tiene el mismo nombre que el
 * usuario, ej: damitymo/damitymo). Si no existe, devuelve null.
 */
export async function getProfileReadme(): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_USER}/readme`,
      {
        headers: { ...headers, Accept: "application/vnd.github.raw" },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!res.ok) return null;
    return await res.text();
  } catch (err) {
    console.error("[github] getProfileReadme failed:", err);
    return null;
  }
}

/** Cuenta cuántos repos hay por lenguaje principal. */
export function aggregateLanguages(repos: GithubRepo[]): Array<[string, number]> {
  const map = new Map<string, number>();
  for (const r of repos) {
    if (!r.language) continue;
    map.set(r.language, (map.get(r.language) ?? 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}
