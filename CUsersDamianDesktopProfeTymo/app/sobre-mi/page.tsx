import { Code2, GraduationCap, Compass, Heart } from "lucide-react";

export const metadata = {
  title: "Sobre mí",
  description: "Quién soy, qué hago y qué me mueve.",
};

const valores = [
  {
    icon: Code2,
    title: "Hacer las cosas bien",
    text: "Código que se entiende a los 6 meses. Procesos prolijos. Sin atajos que se pagan después.",
  },
  {
    icon: GraduationCap,
    title: "Aprender enseñando",
    text: "Enseñar me obliga a entender de verdad. Por eso enseño — me hace mejor dev.",
  },
  {
    icon: Compass,
    title: "Curiosidad permanente",
    text: "Probar herramientas nuevas, leer fuentes primarias, no quedarme con la primera respuesta.",
  },
  {
    icon: Heart,
    title: "Tratar bien al equipo",
    text: "Tanto a alumnos como a colegas: paciencia, respeto y feedback honesto.",
  },
];

export default function SobreMiPage() {
  return (
    <>
      {/* INTRO */}
      <section className="container-narrow pt-16 pb-12 max-w-3xl">
        <span className="pill mb-4">Sobre mí</span>
        <h1 className="text-4xl font-medium leading-tight mb-5">
          Soy Damián. Profe y dev. En ese orden, o al revés según el día.
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          Argentino, programador hace varios años y docente en formación
          profesional. Trabajo con TypeScript todos los días — Nest y Express
          en el back, Next y React en el front, TypeORM y PostgreSQL como
          casa. Deployo en Vercel y Render.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="container-narrow py-10 max-w-3xl space-y-6 text-white/75 leading-relaxed">
        <h2 className="text-2xl font-medium text-white">
          Cómo llegué hasta acá
        </h2>
        <p>
          Arranqué con la programación porque quería entender cómo funcionaban
          las cosas por dentro. La primera vez que un programa mío hizo algo
          útil para alguien más, no me bajé de eso.
        </p>
        <p>
          Con los años fui pasando por distintos stacks, pero siempre volví a
          lo que más me sirvió: TypeScript, frameworks que no te pelean,
          bases de datos relacionales bien diseñadas y buen tooling. Hoy
          combino eso con la docencia: doy un cursado anual de programación
          desde cero hasta job-ready.
        </p>
        <p>
          Lo que más me copa de enseñar es el momento en que un alumno hace
          el "click" mental con un concepto difícil. Pasa una vez por bloque
          si tenés suerte, pero cuando pasa, vale toda la preparación.
        </p>
      </section>

      {/* VALORES */}
      <section className="container-narrow py-12">
        <h2 className="text-2xl font-medium mb-6">Lo que me importa</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {valores.map((v) => (
            <div key={v.title} className="card">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange-light">
                <v.icon className="h-5 w-5" />
              </div>
              <p className="font-medium text-white mb-1.5">{v.title}</p>
              <p className="text-sm text-white/65 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="container-narrow py-12 max-w-3xl">
        <h2 className="text-2xl font-medium mb-6">Stack del día a día</h2>
        <div className="space-y-3 text-sm text-white/75">
          <p>
            <span className="text-white font-medium">Lenguajes:</span>{" "}
            TypeScript, JavaScript, SQL.
          </p>
          <p>
            <span className="text-white font-medium">Backend:</span> NestJS,
            Express, TypeORM, PostgreSQL, MongoDB cuando hace falta.
          </p>
          <p>
            <span className="text-white font-medium">Frontend:</span> Next.js
            (App Router), React, Tailwind, React Hook Form + Zod.
          </p>
          <p>
            <span className="text-white font-medium">Infra:</span> Vercel,
            Render, Cloudflare DNS, Docker básico.
          </p>
          <p>
            <span className="text-white font-medium">Dev tools:</span> VS
            Code, Git/GitHub, Slack, Linear cuando tengo equipo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow py-12">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <h2 className="text-xl font-medium mb-2">
            ¿Querés trabajar conmigo o sumarte al cursado?
          </h2>
          <p className="text-sm text-white/65 mb-5 max-w-xl mx-auto">
            Tomo proyectos puntuales (full o part-time, remoto) y abro
            cursadas nuevas una vez al año.
          </p>
          <a href="/contacto" className="btn-primary">
            Escribime
          </a>
        </div>
      </section>
    </>
  );
}
