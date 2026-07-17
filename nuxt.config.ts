export default defineNuxtConfig({
  // @nuxt/image et nuxt-llms sont déjà enregistrés par la couche docus.
  modules: ['@nuxt/eslint'],

  extends: "docus",

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          src: "https://tracker.hakanai.io/hakanai.min.js",
          "data-site": "TK-bd37ebcd",
          "data-link-tracking": true,
          defer: true,
          async: true,
        },
      ],
    },
  },

  llms: {
    domain: 'https://bloggrify.com',
    title: 'Bloggrify',
    description: 'Start your blog in minutes with Bloggrify, a modern static site generator using Markdown, built on top of Nuxt.js and nuxt-content.',
  },

  // Reload the page when a chunk fails to load, so visitors on an open tab
  // are not stranded on assets removed by the previous deploy.
  experimental: {
    emitRouteChunkError: 'automatic-immediate'
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: true
    }
  }

})