import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Carga dinámica del MDX. Next compila los .mdx como componentes.
  const { default: MDXContent } = await import(
    `@/content/posts/${post.slug}.mdx`
  );

  return (
    <article className="container-narrow pt-12 pb-16 max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white mb-8 transition"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al blog
      </Link>

      <div className="mb-10">
        <div className="flex items-baseline gap-3 text-xs text-white/50 mb-3">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
          <span>·</span>
          <span className="text-brand-orange-light">{post.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-3">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-lg text-white/70 leading-relaxed">
            {post.description}
          </p>
        )}
      </div>

      <div className="prose prose-invert max-w-none prose-headings:font-medium prose-h2:text-2xl prose-h3:text-xl prose-pre:bg-brand-navy prose-pre:border prose-pre:border-white/10">
        <MDXContent />
      </div>
    </article>
  );
}
