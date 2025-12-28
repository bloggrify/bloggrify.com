export default defineNuxtConfig({
  modules: ["@nuxt/image"],

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
      autoSubfolderIndex: true
    }
  }

})