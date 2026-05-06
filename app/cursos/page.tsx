import { ArrowUpRight, Calendar, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "Cursos",
  description: "Cursado anual de programación desde cero hasta job-ready.",
};

export default function CursosPage() {
  return (
    <>
      <section className="container-narrow pt-16 pb-10 max-w-3xl">
        <span className="pill mb-4">Cursos</span>
        <h1 className="text-4xl font-medium leading-tight mb-4">
          Formación profesional en programación
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          Cursado anual desde cero hasta poder buscar trabajo en la industria.
          92 clases, 8 bloques, dos proyectos integradores y un módulo final
          de Job Preparation.
        </p>
      </section>

      <section className="container-narrow py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card">
            <Calendar className="h-5 w-5 text-brand-orange-light mb-3" />
            <p className="font-medium mb-1">Cursado 2026</p>
            <p className="text-sm text-white/65">
              Abril a diciembre. Lun / mié / vie de 14:10 a 17:10.
            </p>
          </div>
          <div className="card">
            <BookOpen className="h-5 w-5 text-brand-orange-light mb-3" />
            <p className="font-medium mb-1">8 bloques temáticos</p>
            <p className="text-sm text-white/65">
              PSeInt, Frontend, Backend, Bases de Datos, React, NestJS y más.
            </p>
          </div>
          <div className="card">
            <Users className="h-5 w-5 text-brand-orange-light mb-3" />
            <p className="font-medium mb-1">Cupo limitado</p>
            <p className="text-sm text-white/65">
              Grupos chicos para acompañamiento real, no aulas de 100+.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow py-12 max-w-3xl">
        <h2 className="text-2xl font-medium mb-5">¿Qué incluye?</h2>
        <ul className="space-y-3 text-white/75 leading-relaxed">
          <li>• Material teórico, ejercicios y videos por clase.</li>
          <li>• Aula virtual propia con foros y entregas con rúbrica.</li>
          <li>• Slack del cursado para dudas entre clases.</li>
          <li>• Dos proyectos integradores con defensa oral.</li>
          <li>• Módulo de Job Preparation: CV, LinkedIn, GitHub, entrevistas.</li>
        </ul>
      </section>

      <section className="container-narrow py-12">
        <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-8 md:p-10 text-center">
          <h2 className="text-2xl font-medium mb-2">Aula virtual</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Si ya estás cursando, accedé directo. Si querés sumarte al
            próximo cursado, mandame mensaje.
          </p>
          <a
            href="https://aula.elprofetymo.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Entrar al aula
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
