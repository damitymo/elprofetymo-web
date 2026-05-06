import {
  Boxes,
  Ruler,
  Palette,
  Clock,
  Mail,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Impresión 3D",
  description:
    "Impresiones 3D a pedido: prototipos, piezas funcionales, figuras y proyectos personalizados.",
};

const capacidades = [
  {
    icon: Ruler,
    title: "Tamaño máximo",
    text: "Hasta 220 × 220 × 220 mm. Piezas más grandes se dividen en partes y se ensamblan.",
  },
  {
    icon: Palette,
    title: "Materiales",
    text: "PLA, PLA+, PETG. Variedad de colores. ABS y TPU bajo pedido.",
  },
  {
    icon: Boxes,
    title: "Calidad",
    text: "Capa desde 0,1 mm. Boquilla 0,4 mm estándar. Detalles finos disponibles.",
  },
  {
    icon: Clock,
    title: "Tiempos",
    text: "Cotización en 24hs. Producción según volumen, normalmente 2-5 días.",
  },
];

// 👇 Galería de trabajos. Las fotos van en /public/3d/ con estos nombres exactos.
//    Sumá / sacá / reordená libremente.
const galeria: Array<{ src: string; alt: string; caption?: string }> = [
  {
    src: "/3d/oveja-y-cohete.jpg",
    alt: "Pieza decorativa de oveja blanca y cohete con base roja",
    caption: "Oveja decorativa + cohete · PLA",
  },
  {
    src: "/3d/floks-llaveros.jpg",
    alt: "Colección de llaveros de personajes Flork en bolsitas individuales",
    caption: "Llaveros Flork · serie completa",
  },
  {
    src: "/3d/mates.jpg",
    alt: "Tres mates impresos: dos fucsia y uno verde",
    caption: "Mates personalizados · PLA",
  },
  {
    src: "/3d/baby-groot.jpg",
    alt: "Figura de Baby Groot pintada en bronce",
    caption: "Baby Groot · acabado bronce",
  },
  {
    src: "/3d/carpincho.jpg",
    alt: "Figura realista de carpincho",
    caption: "Carpincho · figura realista",
  },
  {
    src: "/3d/figura-anime.jpg",
    alt: "Figura anime de mujer con espada rosa y trenza larga",
    caption: "Figura anime · pintada a mano",
  },
  {
    src: "/3d/luffy.jpg",
    alt: "Busto de Luffy de One Piece sobre tesoro de monedas",
    caption: "Luffy · One Piece",
  },
  {
    src: "/3d/pez.jpg",
    alt: "Figura realista de pez de río con detalles pintados",
    caption: "Pez de río · pintado a mano",
  },
  {
    src: "/3d/at-at.jpg",
    alt: "AT-AT Walker de Star Wars con detalles de panel y armas",
    caption: "AT-AT Walker · Star Wars",
  },
  {
    src: "/3d/majin-vegeta.jpg",
    alt: "Figura de Majin Vegeta en pose de pelea",
    caption: "Majin Vegeta · Dragon Ball",
  },
];

const servicios = [
  {
    title: "Prototipos funcionales",
    desc: "Para validar diseños antes de mandar a inyección o mecanizado.",
    items: [
      "Tolerancias controladas",
      "Modelos en CAD propio o tuyo (.stl)",
      "Iteraciones rápidas",
    ],
  },
  {
    title: "Piezas de reemplazo",
    desc: "Esa pieza que se rompió y ya no se consigue.",
    items: [
      "Modelado a partir de la pieza original",
      "Material adecuado al uso",
      "Más barato que comprar el repuesto OEM",
    ],
  },
  {
    title: "Personalizados",
    desc: "Regalos, soportes, organizadores, llaveros, figuras.",
    items: [
      "Diseño según tu idea",
      "Múltiples colores",
      "Acabado lijado / pintado opcional",
    ],
  },
];

export default function Impresion3DPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-narrow pt-16 pb-10 max-w-3xl">
        <span className="pill mb-4">Impresión 3D</span>
        <h1 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-5">
          Imprimo lo que diseñes (o lo que necesites diseñar).
        </h1>
        <p className="text-white/70 text-lg leading-relaxed mb-7">
          Prototipos, piezas funcionales, soportes, figuras o ese repuesto
          imposible de conseguir. Si lo podés imaginar, lo imprimimos.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#cotizar" className="btn-primary">
            Pedir cotización
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#servicios" className="btn-secondary">
            Ver servicios
          </a>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="container-narrow py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capacidades.map((c) => (
            <div key={c.title} className="card">
              <c.icon className="h-5 w-5 text-brand-orange-light mb-3" />
              <p className="font-medium text-white mb-1">{c.title}</p>
              <p className="text-sm text-white/65 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="container-narrow py-12">
        <h2 className="text-2xl font-medium mb-2">Qué puedo hacer</h2>
        <p className="text-white/60 mb-7 max-w-2xl">
          Algunos ejemplos típicos. Si tu proyecto no entra en estas
          categorías, escribime igual y lo charlamos.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {servicios.map((s) => (
            <div key={s.title} className="card">
              <p className="font-medium text-white mb-2">{s.title}</p>
              <p className="text-sm text-white/65 leading-relaxed mb-4">
                {s.desc}
              </p>
              <ul className="space-y-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-sm text-white/75"
                  >
                    <Check className="h-4 w-4 text-brand-orange-light shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="container-narrow py-12">
        <h2 className="text-2xl font-medium mb-2">Trabajos recientes</h2>
        <p className="text-white/60 mb-7">
          Algunas piezas que salieron de la impresora últimamente. Pasá el
          mouse para ver el detalle.
        </p>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {galeria.map((g) => (
            <figure
              key={g.src}
              className="group break-inside-avoid mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="block w-full h-auto transition duration-500 group-hover:scale-[1.02]"
              />
              {g.caption && (
                <figcaption className="px-3 py-2 text-xs text-white/65 border-t border-white/5">
                  {g.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="container-narrow py-12 max-w-3xl">
        <h2 className="text-2xl font-medium mb-6">Cómo trabajamos</h2>
        <ol className="space-y-4">
          {[
            {
              n: 1,
              title: "Me contás qué necesitás",
              text: "Mandame un mensaje con la idea, foto o archivo .stl si ya lo tenés.",
            },
            {
              n: 2,
              title: "Cotizo en 24 hs",
              text: "Te paso precio (con materiales y mano de obra), tiempo estimado y opciones de color/material.",
            },
            {
              n: 3,
              title: "Confirmás y arranco",
              text: "Con el OK, mando a impresión. Te muestro fotos del avance.",
            },
            {
              n: 4,
              title: "Te llega",
              text: "Retiro o envío según donde estés. Pagás contra entrega o transferencia previa.",
            },
          ].map((p) => (
            <li key={p.n} className="flex gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange-light font-medium shrink-0">
                {p.n}
              </span>
              <div>
                <p className="font-medium text-white mb-1">{p.title}</p>
                <p className="text-sm text-white/65 leading-relaxed">
                  {p.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section
        id="cotizar"
        className="container-narrow py-12 scroll-mt-24"
      >
        <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-8 md:p-10">
          <div className="md:flex md:items-center md:justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-medium mb-2">Pedí tu cotización</h2>
              <p className="text-white/70 max-w-md">
                Mandame un mensaje con tu idea o un archivo .stl/.step y te
                respondo en menos de 24 hs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:tymoszukdamiandejesus@gmail.com?subject=Cotizaci%C3%B3n%20impresi%C3%B3n%203D"
                className="btn-primary"
              >
                <Mail className="h-4 w-4" />
                Mail
              </a>
              <a
                href="https://wa.me/?text=Hola%20Tymo!%20Quiero%20cotizar%20una%20impresi%C3%B3n%203D."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
