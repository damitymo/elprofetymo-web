import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostCategory = "Educativo" | "Personal" | "Técnico";

export type Post = {
  slug: string;
  title: string;
  date: string;            // formato: "DD MMM YYYY"
  rawDate: string;         // ISO para ordenar
  description: string;
  category: PostCategory;
  readingTime: string;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

const fmt = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts: Post[] = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const filePath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    const stats = readingTime(content);
    const dateObj = new Date(data.date);

    return {
      slug,
      title: data.title ?? slug,
      rawDate: dateObj.toISOString(),
      date: fmt.format(dateObj),
      description: data.description ?? "",
      category: (data.category ?? "Técnico") as PostCategory,
      readingTime: `${Math.max(1, Math.round(stats.minutes))} min`,
      content,
    };
  });

  return posts.sort((a, b) => (a.rawDate < b.rawDate ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}
