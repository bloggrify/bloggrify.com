const siteUrl = 'https://bloggrify.com'

// Docus ships its own sitemap route, and it resolves the site URL from the environment only
// (`inferSiteURL()`: NUXT_SITE_URL, VERCEL_URL, Netlify's URL...), never from the `site` key
// below. We deploy from GitHub Actions to Bunny, so none of those exist and every <loc> came
// out relative, which the sitemap spec rejects. Seeding the variable here keeps Docus and
// nuxt-site-config on the same value. `||=` so a deploy can still override it.
process.env.NUXT_SITE_URL ||= siteUrl

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
        // OpenPanel. Docus has no analytics composable like the bloggrify engine,
        // so the tracker is wired by hand here. The client ID is a public value
        // shipped to every visitor. Mirrors what `useAnalytics` emits for the blog.
        {
          src: "https://openpanel.dev/op1.js",
          defer: true,
          async: true,
        },
        {
          innerHTML: `
            window.op = window.op || function(...args){(window.op.q = window.op.q || []).push(args);};
            window.op('init', {
              clientId: '914581e8-8064-44c0-b6da-90cc11b560df',
              trackScreenViews: true,
              trackOutgoingLinks: true,
              trackAttributes: true,
            });
          `,
        },
      ],
    },
  },

  // Every SEO module reads its absolute URLs from here. Without it they all fall back to
  // relative ones: a robots.txt with no `Sitemap:` line, `og:image` values social networks
  // cannot resolve, and no canonical at all. `name` also feeds `og:site_name`, which
  // otherwise falls back to the package name.
  site: {
    url: siteUrl,
    name: 'Bloggrify',
  },

  llms: {
    domain: siteUrl,
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