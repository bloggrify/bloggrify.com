export default defineAppConfig({
  docus: {
    title: 'Bloggr',
    description: 'Start your blog in minutes with Bloggr, a modern static site generator using Markdown, built on top of Nuxt.js and nuxt-content.',
    image: 'https://bloggr.eventuallycoding.com/cover.png',
    socials: {
      twitter: 'hugolassiege',
      github: 'hlassiege/bloggr',
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
