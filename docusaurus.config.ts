// @ts-check
import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'


// @ts-ignore
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
        // {
        //   label: 'TrustPay API',
        //   position: 'left',
        //   to: '/docs/category/trastpay-api'
        // }
        {
          type: "dropdown",
          label: "TrustPay",
          position: "left",
          items: [
            {
              label: "TrustPay API",
              to: "/docs/category/trastpay-api",
            },
            // {
            //   label: "Petstore (versioned)",
            //   to: "/category/petstore-versioned-api",
            // },
            {
              label: "Petstore",
              to: "/docs/category/petstore-api",
            },
            {
              label: "HTTPBin",
              to: "/docs/category/httpbin-api",
            },
          ],
        },
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
          petstore: {
            specPath: 'examples/petstore.yaml',
            outputDir: 'docs/petstore',
            downloadUrl: 'https://raw.githubusercontent.com/SamadbekDev/docusaurus-swagger-openapi-docs/main/examples/petstore.yaml',
            sidebarOptions: {
              groupPathsBy: 'tag'
            }
          },
          httpbin: {
            specPath: 'examples/httpbin.yaml',
            outputDir: 'docs/httpbin',
            downloadUrl: 'https://raw.githubusercontent.com/SamadbekDev/docusaurus-swagger-openapi-docs/main/examples/httpbin.yaml',
            sidebarOptions: {
              groupPathsBy: 'tag'
            }
          },
          trastpay: {
            specPath: 'examples/trastpay.yaml',
            outputDir: 'docs/trastpay',
            downloadUrl: 'https://raw.githubusercontent.com/SamadbekDev/docusaurus-swagger-openapi-docs/main/examples/trastpay.yaml',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag'
            }
          }
        }
      }
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: 'openapi-yaml',
        sourceBaseUrl: 'https://raw.githubusercontent.com/SamadbekDev/docusaurus-swagger-openapi-docs/main/examples/',
        outDir: 'examples',
        documents: ['petstore.yaml', 'trastpay.yaml'],
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs']
}

export default async function createConfig() {
  return config
}
