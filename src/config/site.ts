// Site configuration
// Update this file with your actual domain after deployment

export const siteConfig = {
  name: 'Jorge Olive',
  description: 'Diseño web personalizado para negocios que quieren destacar',
  url: 'https://jorgeolive.com',
  ogImage: 'https://jorgeolive.com/opengraph-image',
  links: {
    twitter: 'https://twitter.com/jorgeolive', // TODO: Update with your actual Twitter
    github: 'https://github.com/jorgeOps', // TODO: Update if needed
    linkedin: 'https://linkedin.com/in/jorgeolive', // TODO: Update with your actual LinkedIn
  },
  creator: {
    name: 'Jorge Olive',
    twitter: '@jorgeolive', // TODO: Update with your actual Twitter handle
  },
};

export type SiteConfig = typeof siteConfig;
