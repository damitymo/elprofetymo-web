import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contacto",
  description: "Hablamos por mail, LinkedIn o GitHub.",
};

const canales = [
  {
    icon: Mail,
    label: "hola@elprofetymo.com.ar",
    href: "mailto:hola@elprofetymo.com.ar",
    description: "Para colaboraciones, consultas del cursado o lo que sea.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    description: "Si querés conectar profesionalmente.",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/",
    description: "Mirá lo que estoy haciendo o mandá un PR a este sitio.",
  },
  {
    icon: MessageSquare,
    label: "Slack del cursado",
    href: "#",
    description: "Solo si ya estás dentro del cursado activo.",
  },
];

export default function ContactoPage() {
  return (
    <section className="container-narrow pt-16 pb-16 max-w-3xl">
      <span className="pill mb-4">Contacto</span>
      <h1 className="text-4xl font-medium leading-tight mb-4">
        Hablamos por donde te quede cómodo
      </h1>
      <p className="text-white/70 text-lg leading-relaxed mb-10">
        Respondo en general dentro de 24-48hs hábiles. Si es urgente y sos
        alumno, escribime mejor por Slack.
      </p>

      <div className="grid gap-4">
        {canales.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card flex items-center gap-4 group"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange-light shrink-0">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-white group-hover:text-brand-orange-light transition">
                {c.label}
              </p>
              <p className="text-sm text-white/60">{c.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
