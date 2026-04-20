# Guía de Personalización

Esta guía te ayudará a personalizar el portfolio para tus necesidades.

## 📝 Añadir Nuevos Proyectos

### 1. Edita el archivo de proyectos

Archivo: [`src/data/projects.ts`](src/data/projects.ts)

```typescript
{
  id: 'mi-proyecto',  // ID único
  title: 'Mi Proyecto Nuevo',
  url: 'https://mi-proyecto.com',
  description: {
    es: 'Descripción completa del proyecto en español. Explica qué hace, qué tecnologías usa, etc.',
    en: 'Full project description in English. Explain what it does, technologies used, etc.',
  },
  status: 'active',  // 'active' o 'legacy'
  tags: ['Tag1', 'Tag2', 'Tag3'],  // Categorías del proyecto
}
```

### 2. Status del Proyecto

- **`active`**: Proyecto funcional y en línea
  - Mostrará vista previa con Microlink
  - Botón "Ver Sitio" habilitado
  
- **`legacy`**: Proyecto archivado u offline
  - Mostrará badge "Legacy/Archive"
  - Sin botón de visitar

## 🌐 Modificar Traducciones

### Español

Archivo: [`src/locales/es.json`](src/locales/es.json)

### Inglés

Archivo: [`src/locales/en.json`](src/locales/en.json)

### Estructura de Traducciones

```json
{
  "nav": {
    "home": "Inicio",
    "services": "Servicios",
    "contact": "Contacto"
  },
  "home": {
    "hero": {
      "title": "Tu título aquí",
      "subtitle": "Tu subtítulo",
      "cta": "Texto del botón"
    }
  }
}
```

## 🎨 Personalizar Colores

Archivo: [`tailwind.config.ts`](tailwind.config.ts)

```typescript
colors: {
  primary: {
    DEFAULT: '#5f5e5c',      // Color principal
    container: '#e5e2df',    // Fondo del contenedor
  },
  // Personaliza más colores aquí
}
```

### Paleta de Colores Predefinida

El design system usa tonos cálidos y neutros:

- **Surface**: Fondos y contenedores
- **Primary**: Acentos y elementos importantes
- **Secondary**: Elementos secundarios
- **On-X**: Colores de texto sobre superficies

## ✏️ Cambiar Tipografía

Archivo: [`src/app/layout.tsx`](src/app/layout.tsx)

```typescript
import { Tu_Fuente_Serif, Tu_Fuente_Sans } from 'next/font/google';

const serif = Tu_Fuente_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
});

const sans = Tu_Fuente_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});
```

Luego actualiza en [`tailwind.config.ts`](tailwind.config.ts):

```typescript
fontFamily: {
  serif: ['Tu Fuente Serif', 'serif'],
  sans: ['Tu Fuente Sans', 'sans-serif'],
}
```

## 📧 Configurar Formulario de Contacto

Actualmente el formulario es solo demo. Para hacerlo funcional:

### Opción 1: Formspree

1. Regístrate en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario
3. Obtén tu endpoint

Edita [`src/components/ContactForm.tsx`](src/components/ContactForm.tsx):

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  const response = await fetch('https://formspree.io/f/TU_ID_AQUI', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    setStatus('success');
  }
};
```

### Opción 2: EmailJS

Similar pero usando el SDK de EmailJS.

### Opción 3: API Route de Next.js

Crea `/app/api/contact/route.ts` con tu lógica de envío.

## 🏠 Personalizar Página de Inicio

Archivo: [`src/app/es/page.tsx`](src/app/es/page.tsx) (y versión EN)

### Modificar Hero Section

```typescript
<h1 className="font-serif text-display-lg text-primary mb-6">
  Tu nuevo título aquí
</h1>
```

### Añadir Secciones

Puedes añadir nuevas secciones después de los proyectos:

```typescript
<section className="max-w-7xl mx-auto mb-32">
  <h2 className="font-serif text-display-md text-primary mb-16 text-center">
    Nueva Sección
  </h2>
  {/* Tu contenido */}
</section>
```

## 💼 Personalizar Servicios

Archivo: [`src/app/es/services/page.tsx`](src/app/es/services/page.tsx)

### Añadir Nuevo Servicio

```typescript
<Card elevation="high" className="p-8 lg:p-10">
  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
    {/* Tu icono SVG */}
  </div>
  <h2 className="font-serif text-headline-lg text-primary mb-4">
    Nombre del Servicio
  </h2>
  <p className="font-sans text-body-lg text-on-surface/70 mb-8">
    Descripción
  </p>
  {/* Features, ideal para, etc. */}
</Card>
```

## 📱 Modificar Footer

Archivo: [`src/components/Footer.tsx`](src/components/Footer.tsx)

Añade links de redes sociales, más información, etc.

```typescript
<footer className="bg-surface-container-low border-t border-outline-variant/15 mt-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Columna 1: Info */}
      {/* Columna 2: Links */}
      {/* Columna 3: Redes sociales */}
    </div>
  </div>
</footer>
```

## 🎭 Cambiar Animaciones

Las animaciones usan Framer Motion. Para modificarlas:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {/* Tu contenido */}
</motion.div>
```

### Velocidades de Transición

En [`tailwind.config.ts`](tailwind.config.ts):

```typescript
transitionDuration: {
  '400': '400ms',
  '500': '500ms',
  '600': '600ms',
}
```

## 🔍 SEO Avanzado

### Metadata por Página

En cada `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Título de la página',
  description: 'Descripción',
  openGraph: {
    title: 'Título OG',
    description: 'Descripción OG',
    images: ['https://tu-dominio.com/og-image.jpg'],
  },
};
```

### Sitemap

Crea [`app/sitemap.ts`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap):

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://tu-dominio.com',
      lastModified: new Date(),
    },
    // Más URLs
  ];
}
```

## 🖼️ Añadir Favicon

Coloca tus archivos en `/public`:

- `favicon.ico`
- `apple-touch-icon.png`
- `icon.png` (192x192 y 512x512)

Next.js los detectará automáticamente.

## 📊 Analytics

### Google Analytics

1. Instala el paquete:
   ```bash
   npm install @next/third-parties
   ```

2. Añade en [`src/app/layout.tsx`](src/app/layout.tsx):
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   // Dentro del body
   <GoogleAnalytics gaId="G-TU_ID_AQUI" />
   ```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

En `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

<Analytics />
```

## 🎨 Componentes Personalizados

Crea nuevos componentes en `/src/components/`:

```typescript
// src/components/MiComponente.tsx
'use client';

export function MiComponente() {
  return (
    <div className="...">
      {/* Tu código */}
    </div>
  );
}
```

## 🔧 Variables de Entorno

Crea `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
NEXT_PUBLIC_ANALYTICS_ID=tu-id
```

Úsalas:

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 📦 Añadir Dependencias

```bash
npm install nombre-paquete
```

Algunas útiles:
- `react-icons` - Iconos
- `@vercel/analytics` - Analytics de Vercel
- `next-themes` - Modo oscuro
- `react-hook-form` - Formularios avanzados

---

¿Necesitas más ayuda? Consulta:
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind](https://tailwindcss.com/docs)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
