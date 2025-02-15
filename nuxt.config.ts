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
      url: "https://bloggrify.com/",
      logo: "/images/logo.svg",
      logo_white: "/images/logo-white.svg",

      // If you only have one author, you can set the author here
      // It will be used as the default author for all posts AND as the general logo/description/socials for the website
      name: "Bloggrify",

      socials: {
        twitter: "https://x.com/hugolassiege",
        github: "https://github.com/bloggrify",
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
