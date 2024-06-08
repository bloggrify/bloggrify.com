export default defineAppConfig({
  docus: {
    title: 'Bloggrify',
    description: 'Start your blog in minutes with Bloggrify, a modern static site generator using Markdown, built on top of Nuxt.js and nuxt-content.',
    image: 'https://bloggrify.com/cover.png',
    socials: {
      twitter: 'hugolassiege',
      github: 'bloggrify/bloggrify',
    },
    github: {
      dir: '',
      branch: 'master',
      repo: 'bloggrify.com',
      owner: 'bloggrify',
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
