export default defineAppConfig({
  docus: {
    title: 'Bloggrify',
    description: 'Start your blog in minutes with Bloggrify, a modern static site generator using Markdown, built on top of Nuxt.js and nuxt-content.',
    image: 'https://bloggrify.com/cover.png',
    socials: {
      twitter: 'hugolassiege',
      github: 'hlassiege/bloggrify',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      textLinks: [
        { text: 'See also: RssFeedPulse', href: 'https://rssfeedpulse.com' },
      ],
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: false
    }
  }
})
