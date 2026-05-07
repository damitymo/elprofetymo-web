// Metadata extra para los repos de GitHub.
//
// La página /proyectos lee tus repos automáticamente. Acá podés agregarle
// info que no está en GitHub (descripción más rica, alias para el título,
// destacar/ocultar):
//
//   alias       → cómo se muestra el nombre en la card (ej: "SGA · Frontend")
//   description → texto largo que reemplaza la "description" de GitHub
//   highlight   → true para que aparezca arriba en "Destacados"
//   hidden      → true para que no se muestre en la página
//
// La key del objeto debe ser el NOMBRE EXACTO del repo en GitHub.
// Si te falla algún match, abrí github.com/damitymo, copiá el slug del repo
// y reemplazá acá.

export type ProjectMeta = {
  alias?: string;
  description?: string;
  highlight?: boolean;
  hidden?: boolean;
};

export const projectsMeta: Record<string, ProjectMeta> = {
  // ── PROYECTOS REALES ─────────────────────────────────────────

  "sga-frontend": {
    alias: "SGA · Frontend",
    description:
      "Frontend del Sistema de Gestión Administrativa de la Escuela Técnica Valentín Virasoro. Maneja altas/bajas de alumnos, cargas de notas, asistencia y reportes. Deployado en Vercel. Trabaja contra el repo backend `sga`.",
    highlight: true,
  },

  "sga": {
    alias: "SGA · Backend",
    description:
      "API del Sistema de Gestión Administrativa de la Escuela Técnica Valentín Virasoro. Endpoints de autenticación, CRUD de alumnos/profesores/cursos, calificaciones y asistencia. Deployado en Render. Cliente: el repo `sga-frontend`.",
    highlight: true,
  },

  "votacion-frontend": {
    alias: "Votación electrónica · Frontend",
    description:
      "Sistema de votación electrónica para el centro de estudiantes de la escuela. Login del votante, papeleta digital y resultados en vivo. Deployado en Vercel. Pareja del backend.",
    highlight: true,
  },

  "votacion-backend": {
    alias: "Votación electrónica · Backend",
    description:
      "API del sistema de votación electrónica para el centro de estudiantes. Padrón, registro de voto único por DNI, conteo y resultados en tiempo real. Deployado en Render.",
    highlight: true,
  },

  "catalogo-peliculas": {
    alias: "Catálogo de películas",
    description:
      "Aplicación de catálogo de películas con base de datos en MongoDB. Búsqueda, filtros por género/año y ficha individual de cada título. Pensada para uso local.",
    highlight: true,
  },

  "sonrisas-felices": {
    alias: "Sonrisas Felices · Backend",
    description:
      "Backend para el sistema de un centro de salud primaria de la ciudad. Gestión de pacientes, turnos, historias clínicas y reportes de atención.",
    highlight: true,
  },

  "elprofetymo-web": {
    alias: "elprofetymo.com.ar",
    description:
      "Este mismo sitio: portfolio + blog. Next.js 14 (App Router), Tailwind y MDX para el blog. Sync automático con GitHub para mostrar los repos. Deploy en Vercel.",
    highlight: true,
  },

  "damitymo": {
    alias: "Profile README",
    description:
      "El README que aparece sobre mi perfil de GitHub. Bio, stack y proyectos destacados — la cara pública del usuario.",
  },

  // ── ALIAS COMUNES ALTERNATIVOS ───────────────────────────────
  // Por si el repo tiene un slug ligeramente distinto al esperado:

  "sga-back": {
    alias: "SGA · Backend",
    description:
      "API del Sistema de Gestión Administrativa de la Escuela Técnica Valentín Virasoro. Deployado en Render.",
    highlight: true,
  },
  "votacion": {
    alias: "Votación electrónica",
    description:
      "Sistema de votación electrónica para el centro de estudiantes. Frontend + backend. Vercel + Render.",
    highlight: true,
  },
  "catalogo-de-peliculas": {
    alias: "Catálogo de películas",
    description:
      "Aplicación con MongoDB para listar y buscar películas. Pensada para uso local.",
    highlight: true,
  },
  "peliculas": {
    alias: "Catálogo de películas",
    description:
      "Aplicación con MongoDB para listar y buscar películas. Pensada para uso local.",
    highlight: true,
  },

  // ── PARA EL RESTO ────────────────────────────────────────────
  // Copiá una entrada nueva con el slug exacto del repo y completá:
  //
  //   "nombre-repo": {
  //     alias: "Nombre lindo",
  //     description: "Qué hace y con qué stack.",
  //     highlight: true,    // si querés que vaya destacado
  //   },
};

export function getMeta(repoName: string): ProjectMeta | null {
  return projectsMeta[repoName] ?? null;
}
