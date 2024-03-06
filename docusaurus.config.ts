import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Knowledge Base',
  tagline: 'Hier dokumentiere ich all das Wissen, das ich mir im Verlauf meiner Karriere als Entwickler aneigne.',
  favicon: 'img/favicon.png',
  url: 'https://wiki.mathias-vogel.ch',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Sprachkonfiguration
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/logo-512x512.png',
    algolia: {
      apiKey:'d08bf873f25dce658539c15e144c25e2',
      indexName: 'mathias-vogel',
      appId: 'EPUTRR9NEG',
      contextualSearch: false,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-192x192.png',
      },
      items: [
        {
          type: 'dropdown',
          position: 'left',
          label: 'Informatik',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'osSidebar',
              label: 'Betriebssysteme',
            },
            {
              type: 'docSidebar',
              sidebarId: 'langSidebar',
              label: 'Programmiersprachen',
            },
            {
              type: 'docSidebar',
              sidebarId: 'devprinciplesSidebar',
              label: 'Softwareentwicklungsprinzipien',
            },
            {
              type: 'docSidebar',
              sidebarId: 'toolsSidebar',
              label: 'Tools und Anwendungen',
            },
            {
              type: 'docSidebar',
              sidebarId: 'webdevSidebar',
              label: 'Webentwicklung',
            },
            // Füge hier weitere Links zu anderen Kategorien oder Sidebars hinzu...
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'schoolSidebar',
          position: 'left',
          label: 'Bachelor Module',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
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
              to: 'https://stackoverflow.com/questions/tagged/docusaurus',
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
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
