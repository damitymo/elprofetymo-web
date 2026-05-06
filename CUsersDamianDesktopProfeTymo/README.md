# elprofetymo.com.ar

Sitio personal de Damián De Jesús Tymoszuk: profe + dev fullstack.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · MDX (blog) · deploy en Vercel.

---

## 📁 Estructura

```
sitio/
├── app/                   # Rutas (App Router)
│   ├── page.tsx           # Home
│   ├── layout.tsx         # Layout root (header + footer + fonts)
│   ├── globals.css        # Tailwind + utilities (.btn-primary, .card, .pill)
│   ├── sobre-mi/page.tsx
│   ├── proyectos/page.tsx
│   ├── blog/
│   │   ├── page.tsx       # Listado
│   │   └── [slug]/page.tsx# Post individual
│   ├── cursos/page.tsx
│   └── contacto/page.tsx
├── components/            # UI reutilizable
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── TerminalCard.tsx
│   ├── HighlightCard.tsx
│   ├── PostCard.tsx
│   └── ProjectCard.tsx
├── content/
│   └── posts/             # 👈 acá van tus posts en .mdx
│       └── hola-mundo.mdx
├── lib/
│   └── posts.ts           # lectura/parseo de MDX
├── mdx-components.tsx     # extender componentes en MDX si querés
├── tailwind.config.ts     # paleta brand-navy + brand-orange
├── next.config.mjs        # MDX + remark/rehype
└── package.json
```

---

## 🚀 Cómo correrlo localmente

Necesitás Node 20+ instalado.

```bash
# 1) instalar dependencias
npm install

# 2) copiar las variables de entorno
cp .env.local.example .env.local

# 3) levantar el servidor de desarrollo
npm run dev
```

Abrí `http://localhost:3000` y listo.

> Si ves errores de tipos al arrancar, corré `npm run build` una vez —
> Next genera el archivo `next-env.d.ts` y se acomoda solo.

---

## ✍️ Cómo escribir un post nuevo

1. Creá un archivo `content/posts/mi-post.mdx`.
2. Empezá con el frontmatter:

   ```mdx
   ---
   title: "Mi título"
   description: "Resumen corto que aparece en el listado."
   date: "2026-06-01"
   category: "Educativo"   # o "Personal" o "Técnico"
   ---

   # Mi título

   Acá empieza el contenido en markdown común.

   ## Subtítulo

   - Listas
   - Negrita con **dos asteriscos**
   - Code inline con `backticks`
   ```

3. Guardá. El listado y el detalle se generan solos.
4. Push a GitHub → Vercel deploya automático.

**Categorías disponibles:** `Educativo`, `Personal`, `Técnico`. Si querés
agregar otra, editá el tipo `PostCategory` en `lib/posts.ts` y el mapeo de
colores en `components/PostCard.tsx`.

---

## 🎨 Paleta y tipografía

- **Colores brand** (en `tailwind.config.ts`):
  - `brand-navy` `#1F3A5F` · `brand-navy-deeper` `#0F1729` (background)
  - `brand-orange` `#E88A1A` · `brand-orange-light` `#F7B26A`
- **Tipografía:** Inter (UI) + JetBrains Mono (código), ambas vía `next/font`.

Las clases helper (`.btn-primary`, `.btn-secondary`, `.card`, `.pill`) están
definidas en `app/globals.css` con `@layer components`. Reusalas para
mantener consistencia.

---

## 🌐 Deploy a Vercel + dominio en Cloudflare

### 1. Subir el código a GitHub

```bash
git init
git add .
git commit -m "primer commit del sitio"
git branch -M main
git remote add origin git@github.com:TU_USUARIO/elprofetymo-web.git
git push -u origin main
```

### 2. Importar en Vercel

1. Entrá a [vercel.com](https://vercel.com), login con GitHub.
2. Click **"Add New… → Project"**.
3. Importá el repo `elprofetymo-web`.
4. Vercel detecta Next.js automáticamente. Click **Deploy**.
5. En 1-2 minutos tenés el sitio andando en `algo.vercel.app`.

### 3. Configurar el dominio raíz `elprofetymo.com.ar`

En **Vercel → tu proyecto → Settings → Domains**:

1. Agregá `elprofetymo.com.ar`.
2. Agregá también `www.elprofetymo.com.ar` (Vercel hace el redirect).
3. Vercel te muestra los registros DNS que necesita.

En **Cloudflare → Tu zona elprofetymo.com.ar → DNS**:

- Para el apex (`@`) → registro `A` apuntando a `76.76.21.21`
  (Vercel lo confirma en la pantalla anterior).
- Para `www` → registro `CNAME` apuntando a `cname.vercel-dns.com`.

> ⚠️ Importante: para el registro del apex, en Cloudflare **desactivá el
> proxy** (la nube naranja en gris). Vercel necesita ver la IP real para
> emitir el certificado SSL. Una vez emitido, podés volver a activar el
> proxy si querés (o dejarlo en DNS-only que también está bien).

### 4. Mantener `aula.elprofetymo.com.ar` apuntando a Hostinger

En tu zona Cloudflare, no toques el registro existente de `aula`. Sigue
apuntando a Hostinger. Ambos subdominios coexisten sin problema porque
están en zonas DNS distintas.

---

## 🔄 Workflow del día a día

```
1. abrís VS Code en la carpeta del proyecto
2. npm run dev  →  trabajás en localhost:3000
3. cambios + git commit -m "feat: nueva sección"
4. git push origin main
5. Vercel deploya automático en ~30 segundos
```

Cada commit en `main` es un deploy a producción. Si hacés un branch
distinto, Vercel te genera una preview con su propia URL — útil para
revisar antes de mergear.

---

## 📋 TODO / próximos pasos

- [ ] Reemplazar emails y redes en `Footer.tsx` y `app/contacto/page.tsx`.
- [ ] Agregar foto de perfil/avatar en `app/sobre-mi/page.tsx` (poner en `public/avatar.jpg`).
- [ ] Sumar tus proyectos reales en `app/proyectos/page.tsx`.
- [ ] Escribir el segundo post.
- [ ] Configurar Open Graph image (`opengraph-image.png` en `app/`).
- [ ] (Opcional) Sync automático de repos públicos via GitHub API.
- [ ] (Opcional) Newsletter con Resend / Buttondown.

---

## 📜 Licencia

MIT — el código fuente del sitio es libre. El contenido (posts, fotos)
me pertenece.
