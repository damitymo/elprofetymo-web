import Link from "next/link";
import { Zap, GraduationCap, PenLine, ArrowRight } from "lucide-react";
import TerminalCard from "@/components/TerminalCard";
import HighlightCard from "@/components/HighlightCard";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="container-narrow pt-20 pb-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
          <div>
            <span className="pill mb-5">Disponible para colaborar</span>
            <h1 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-5">
              Damián De Jesús Tymoszuk
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-7">
              Profe de programación, dev fullstack y eterno curioso. Construyo
              apps con Nest, Next, TypeORM y PostgreSQL — y le enseño a otros
              a hacer lo mismo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/proyectos" className="btn-primary">
                Ver mis proyectos
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/blog" className="btn-secondary">
                Leer el blog
              </Link>
            </div>
          </div>
          <TerminalCard />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-narrow py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <HighlightCard
            icon={Zap}
            title="Fullstack"
            description="Construyo APIs REST y frontends que no se quiebran en producción."
          />
          <HighlightCard
            icon={GraduationCap}
            title="Profesor"
            description="Cursos anuales presenciales y online en formación profesional."
          />
          <HighlightCard
            icon={PenLine}
            title="Escribo"
            description="Notas técnicas y reflexiones cada vez que tengo algo que decir."
          />
        </div>
      </section>

      {/* ÚLTIMO DEL BLOG */}
      <section className="container-narrow py-12">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-medium">Últimos del blog</h2>
          <Link
            href="/blog"
            className="text-sm text-brand-orange-light hover:text-brand-orange transition"
          >
            Ver todos →
          </Link>
        </div>
        {latestPosts.length === 0 ? (
          <div className="card text-sm text-white/60">
            Todavía no hay posts publicados. Pronto vamos a escribir.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {latestPosts.map((p) => (
              <PostCard
                key={p.slug}
                href={`/blog/${p.slug}`}
                category={p.category}
                title={p.title}
                date={p.date}
                readingTime={p.readingTime}
              />
            ))}
          </div>
        )}
      </section>

      {/* CTA AULA */}
      <section className="container-narrow py-12">
        <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-8 text-center">
          <h2 className="text-xl font-medium mb-2">¿Sos alumno del cursado?</h2>
          <p className="text-sm text-white/65 mb-5">
            Accedé al aula virtual con tu DNI.
          </p>
          <a
            href="https://aula.elprofetymo.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            aula.elprofetymo.com.ar
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
