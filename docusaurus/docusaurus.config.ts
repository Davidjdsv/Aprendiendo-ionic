import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Configuración principal del sitio de documentación
// NOTA: Ajusta los valores de url/baseUrl según dónde vayas a publicar.
// - Para desarrollo local, url puede ser 'http://localhost' y baseUrl '/'
// - Para GitHub Pages bajo org/user: url 'https://<tu_usuario>.github.io' y baseUrl '/<tu_repo>/'
// - Para un dominio propio: url 'https://docs.tu-dominio.com' y baseUrl '/'
const config: Config = {
  title: 'IonicProyect Docs',
  tagline: 'Documentación técnica del proyecto Ionic + Angular',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // URL del sitio (ajústalo según tu entorno de despliegue)
  url: 'http://localhost',
  // Subruta donde se sirve el sitio (para GH Pages puede ser '/<repo>/' )
  baseUrl: '/',

  // Config de despliegue en GitHub Pages (opcional)
  // Si no usas GH Pages, puedes ignorar o ajustar estos valores.
  organizationName: 'webcloster', // <TU_ORG/USUARIO> en GitHub
  projectName: 'IonicProyect', // <NOMBRE_DEL_REPO>

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    // Si deseas traducir el sitio, puedes añadir 'es' aquí.
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IonicProyect',
      logo: {
        alt: 'IonicProyect Logo',
        src: 'img/logo.svg',
      },
      items: [
        // Enlace a la documentación (sidebar autogenerada)
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // Acceso directo a la página "Project Overview"
        { type: 'doc', docId: 'project-overview', label: 'Project Overview', position: 'left' },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/webcloster/IonicProyect',
          label: 'Repo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
