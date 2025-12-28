export default defineAppConfig({
    ui: {
        colors: {
            primary: 'blue',
            secondary: 'purple',
            neutral: 'zinc'
        }
    },
    seo: {
        // Default to `%s - ${site.name}`
        titleTemplate: '%s - Bloggrify',
        // Default to package.json name
        title: 'Bloggrify',
        // Default to package.json description
        description: 'Start your blog in minutes with Bloggrify, a modern static site generator using Markdown, built on top of Nuxt.js and nuxt-content.'
    },
    socials: {
        github: 'https://github.com/bloggrify/bloggrify',
    },
    github: {
        url: 'https://github.com/bloggrify/bloggrify.com',
        branch: 'main',
    }
})