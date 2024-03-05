export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        ...(process.env.PIRSCH_CODE
            ? [
              {
                src: "https://api.pirsch.io/pirsch.js",
                id: "pirschjs",
                defer: true,
                "data-code": process.env.PIRSCH_CODE,
                type: "text/javascript",
              },
            ]
            : []),
      ],
    },
  },

  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["~/assets/css/main.scss"],

  runtimeConfig: {
    public: {
      url: "https://bloggr.eventuallycoding.com/",
      logo: "/images/logo.svg",

      // If you only have one author, you can set the author here
      // It will be used as the default author for all posts AND as the general logo/description/socials for the website
      name: "Bloggr",

      socials: {
        twitter: "https://twitter.com/hugolassiege",
        github: "https://github.com/hlassiege",
      },

      table_of_contents: false,

      // if you have multiple authors, you can set them here
      authors: [],

      menu: [
        { name: "Home", path: "/" },
        { name: "Documentation", path: "/documentation" },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

})
