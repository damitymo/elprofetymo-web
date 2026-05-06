import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Notas educativas, técnicas y personales sobre programación y enseñanza.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="container-narrow pt-16 pb-12">
      <div className="mb-10">
        <span className="pill mb-4">Blog</span>
        <h1 className="text-4xl font-medium mb-3">Notas y reflexiones</h1>
        <p className="text-white/65 max-w-2xl">
          Educativo, técnico y personal. Sin orden, sin agenda fija — escribo
          cuando tengo algo que decir.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="card text-sm text-white/60">
          Todavía no hay posts publicados.
        </div>
      ) : (
        <ul className="divide-y divide-white/5">
          {posts.map((p) => (
            <li key={p.slug} className="py-5">
              <Link href={`/blog/${p.slug}`} className="group block">
                <div className="flex items-baseline gap-3 text-xs text-white/50 mb-2">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.readingTime}</span>
                  <span>·</span>
                  <span className="text-brand-orange-light">{p.category}</span>
                </div>
                <h2 className="text-lg md:text-xl font-medium group-hover:text-brand-orange-light transition">
                  {p.title}
                </h2>
                {p.description && (
                  <p className="text-sm text-white/65 mt-1.5 leading-relaxed">
                    {p.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
