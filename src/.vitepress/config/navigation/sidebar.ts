import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/download/': defaultSidebar(),
  '/extensions/': defaultSidebar(),
  '/docs/': defaultSidebar(),
  '/forks/': defaultSidebar(),
  '/changelogs/': defaultSidebar(),
  '/news/': defaultSidebar(),
  '/sandbox/': defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: 'Download',
          link: '/download/',
        },
        {
          text: 'Contribute',
          link: '/docs/contribute',
        },
      ],
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Getting started',
          link: '/docs/guides/getting-started',
        },
        {
          text: 'Troubleshooting',
          link: '/docs/guides/troubleshooting/',
          collapsed: true,
          items: [
            {
              text: 'Common issues',
              link: '/docs/guides/troubleshooting/common-issues',
            },
            {
              text: 'Diagnosis',
              link: '/docs/guides/troubleshooting/diagnosis',
            },
          ],
        },
        {
          text: 'Source migration',
          link: '/docs/guides/source-migration',
        },
        { text: 'Backups', link: '/docs/guides/backups' },
        { text: 'Tracking', link: '/docs/guides/tracking' },
        { text: 'Categories', link: '/docs/guides/categories' },
        {
          text: 'Local anime source',
          link: '/docs/guides/local-anime-source/',
          collapsed: true,
          items: [
            {
              text: 'Advanced editing',
              link: '/docs/guides/local-anime-source/advanced',
            },
          ],
        },
        {
          text: 'Player settings',
          link: '/docs/guides/player-settings/',
          collapsed: true,
          items: [
            {
              text: 'Advanced player settings',
              link: '/docs/guides/player-settings/advanced-player-settings',
            },
          ],
        },
        {
          text: 'Video player',
          link: '/docs/guides/video-player/',
          collapsed: true,
          items: [
            {
              text: 'Audio and subtitle settings',
              link: '/docs/guides/video-player/audio-and-subtitle-settings',
            },
          ],
        },
      ],
    },
  ]
}

export default sidebar
