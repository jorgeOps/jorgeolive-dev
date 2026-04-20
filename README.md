# Portfolio Web - Jorge Olive

Portfolio profesional de diseño web construido con Next.js 14, TypeScript y Tailwind CSS.

## 🎨 Características

- **Design System "The Curated Gallery"**: Sistema de diseño sofisticado con paleta "quiet luxury"
- **Multiidioma**: Soporte completo para Español e Inglés
- **Previsualizaciones Dinámicas**: Integración con Microlink API para screenshots de proyectos
- **Glassmorphism**: Efectos de vidrio y profundidad tonal
- **Animaciones Suaves**: Transiciones de 400-600ms con framer-motion
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **SEO Optimizado**: Meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
portfolio-web/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── es/              # Rutas en español
│   │   ├── en/              # Rutas en inglés
│   │   └── globals.css      # Estilos globales
│   ├── components/           # Componentes React
│   │   ├── ui/              # Componentes base (Button, Card, Input)
│   │   ├── Navigation.tsx   # Navegación con glassmorphism
│   │   ├── Footer.tsx       # Footer
│   │   └── ProjectCard.tsx  # Tarjeta de proyecto
│   ├── data/                # Datos de proyectos
│   ├── lib/                 # Utilidades y helpers
│   └── locales/             # Traducciones (ES/EN)
├── public/                   # Archivos estáticos
└── tailwind.config.ts       # Configuración del design system
```

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
npm start
```

## 🎨 Design System

El proyecto utiliza el design system "The Curated Gallery" con:

### Colores

- **Surface**: `#faf9f6` (base)
- **Primary**: `#5f5e5c` (warm grey)
- **Secondary**: `#6f6d6b`
- **On-Surface**: `#2f3430` (texto principal)

### Tipografía

- **Serif (Noto Serif)**: Títulos y headlines
- **Sans (Manrope)**: Cuerpo de texto y labels

### Principios

- No usar bordes de 1px para secciones
- Usar tonal layering en lugar de sombras tradicionales
- Glassmorphism para navegación
- Transiciones lentas (400-600ms)
- Generoso espacio en blanco

## 📦 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Fuentes**: Google Fonts (Noto Serif, Manrope)
- **Previews**: Microlink API
- **Deploy**: Vercel

## 🌐 Despliegue en Vercel

### Opción 1: Desde la CLI

```bash
npm install -g vercel
vercel
```

### Opción 2: Desde GitHub

1. Sube el repositorio a GitHub
2. Conecta tu cuenta de Vercel
3. Importa el repositorio
4. Vercel detectará automáticamente Next.js
5. Click en "Deploy"

### Variables de Entorno

No se requieren variables de entorno para la funcionalidad básica.

## 📝 Proyectos Incluidos

1. **Olive Saurét Arquitectura** - Portfolio de arquitectura
2. **CBS Portfolio** - Portfolio de streaming
3. **Vet Home Web** - Clínica veterinaria a domicilio
4. **MWR 4x4** - E-commerce (Legacy)
5. **Anammtrips** - Servicios de viajes

## 🔧 Personalización

### Añadir un Nuevo Proyecto

Edita `src/data/projects.ts`:

```typescript
{
  id: 'mi-proyecto',
  title: 'Mi Proyecto',
  url: 'https://ejemplo.com',
  description: {
    es: 'Descripción en español',
    en: 'English description',
  },
  status: 'active',
  tags: ['Tag1', 'Tag2'],
}
```

### Cambiar Traducciones

Edita `src/locales/es.json` o `src/locales/en.json`.

## 📄 Licencia

© 2026 Jorge Olive. Todos los derechos reservados.
