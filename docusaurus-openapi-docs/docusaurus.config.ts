// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import type * as Plugin from '@docusaurus/types/src/plugin'
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs'

const config: Config = {
  title: 'TrastPay API Docs',
  tagline: 'TrastPay guidelines and documents',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'USer', // Usually your GitHub org/user name.
  projectName: 'TrastPay-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docItemComponent: '@theme/ApiItem' // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true
      }
    },
    navbar: {
      title: 'TrastPay',
      logo: {
        alt: 'TrastPay Logo',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs'
        },
        {
          label: 'TrustPay API',
          position: 'left',
          to: '/docs/category/trastpay-api'
        }
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right'
        // }
      ]
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus'
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus'
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog'
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus'
      //       }
      //     ]
      //   }
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} PSJ Global, Inc. Built with Docusaurus.`
    },
    prism: {
      prism: {
        additionalLanguages: [
          'ruby',
          'csharp',
          'php',
          'java',
          'powershell',
          'json',
          'bash'
        ]
      },
      languageTabs: [
        {
          highlight: 'python',
          language: 'python',
          logoClass: 'python'
        },
        {
          highlight: 'bash',
          language: 'curl',
          logoClass: 'bash'
        },
        {
          highlight: 'csharp',
          language: 'csharp',
          logoClass: 'csharp'
        },
        {
          highlight: 'go',
          language: 'go',
          logoClass: 'go'
        },
        {
          highlight: 'javascript',
          language: 'nodejs',
          logoClass: 'nodejs'
        },
        {
          highlight: 'ruby',
          language: 'ruby',
          logoClass: 'ruby'
        },
        {
          highlight: 'php',
          language: 'php',
          logoClass: 'php'
        },
        {
          highlight: 'java',
          language: 'java',
          logoClass: 'java',
          variant: 'unirest'
        },
        {
          highlight: 'powershell',
          language: 'powershell',
          logoClass: 'powershell'
        }
      ]
    }
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          trastpay: {
            specPath: 'examples/trastpay.yaml',
            outputDir: 'docs/trastpay',
            downloadUrl:
                'https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml', // по желанию
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag'
            }
          }
        }
      }
    ]
  ],

  themes: ['docusaurus-theme-openapi-docs']
}

export default async function createConfig() {
  return config
}
