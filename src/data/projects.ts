export interface Project {
  id: string;
  title: string;
  url: string;
  description: {
    es: string;
    en: string;
  };
  status: 'active' | 'legacy';
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'olive-sauret',
    title: 'Olivé Sauret Arquitectura',
    url: 'https://www.olivesauretarquitectura.com',
    description: {
      es: 'Portfolio web para un estudio de arquitectura que necesitaba mostrar sus proyectos de una manera elegante. Cabe destacar su sistema de filtrado, 100% personalizado por y para el cliente. Web avanzada, con base de datos e interfaz de administrador para subir proyectos sin depender de un desarrollador.',
      en: 'An elegant portfolio designed for an architecture firm to showcase their work with style. The standout feature is a 100% custom filtering system built specifically for their needs. It’s a high-end site featuring a dedicated database and admin panel, allowing the client to manage and upload projects independently.',
    },
    status: 'active',
    tags: ['Architecture', 'Portfolio'],
  },
  {
    id: 'cbs-portfolio',
    title: 'CBS Portfolio',
    url: 'https://cbs-twch-portfolio.vercel.app/',
    description: {
      es: 'Web minimalista, desarrollada para una agencia inmobiliaria, para mostrar sus proyectos de una manera elegante. El cliente pidió un diseño limpio y muy sencillo, que se asemejara con fichas de proyectos en lugar de páginas web tradicionales.',
      en: 'A minimalist site crafted for a real estate agency to showcase their properties with elegance. The client wanted a clean, stripped-back aesthetic where each listing feels more like a curated project file than a traditional web page.',
    },
    status: 'active',
    tags: ['Streaming', 'Real-time'],
  },
  {
    id: 'vet-home',
    title: 'Vet Home Web',
    url: 'https://vet-home-web-hazel.vercel.app/',
    description: {
      es: 'Una clínica veterinaria a domicilio que necesitaba transmitir cercanía y profesionalidad a partes iguales. Web diseñada para que los dueños de mascotas entiendan los servicios en segundos, sin menús confusos ni textos técnicos innecesarios.',
      en: 'A home veterinary clinic that needed to convey closeness and professionalism in equal parts. We designed the web so pet owners understand the services in seconds, without confusing menus or unnecessary technical text.',
    },
    status: 'active',
    tags: ['Healthcare', 'Services'],
  },
  {
    id: 'mwr-4x4',
    title: 'MWR 4x4',
    url: 'https://mwr4x4.com',
    description: {
      es: 'E-commerce de accesorios 4x4 desarrollado en una etapa anterior. Actualmente archivado, pero con previsión de reapertura en un futuro. Web con catálogo de productos, gestión de stock y proceso de compra (gestionando absolutamente todo: desde la creación de anuncios, hasta la integración de pasarelas de pago o el proceso de envíos)',
      en: 'A specialized E-commerce 4x4 shop I developed a while back. It’s currently archived but slated for a relaunch soon. This was a massive undertaking where I managed the entire ecosystem: the product catalog, seamless payment integrations, and even the marketing strategy to get it off the ground.',
    },
    status: 'legacy',
    tags: ['E-commerce', 'Archive'],
  },
  {
    id: 'anammtrips',
    title: 'Anammtrips',
    url: 'https://anammtrips.lemonsqueezy.com/',
    description: {
      es: 'Landing page sencilla para la venta de una guía de viajes a través de Lemon Squeezy. Integración de pasarela de pago, sistema de confirmación de emails, dashboard de gestión de ventas y clientes, etc. Todo lo necesario para vender un producto digital sin complicaciones.',
      en: 'A streamlined landing page built to sell a digital travel guide via Lemon Squeezy. I handled the full setup: from payment integration and automated email confirmations to a sales dashboard. Everything needed to launch and sell a digital product without the tech headaches.',
    },
    status: 'active',
    tags: ['Travel', 'Conversion'],
  },
];
