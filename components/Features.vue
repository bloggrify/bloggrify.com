<template>
  <div class="mx-auto max-w-[85rem] md:p-4 mt-20 md:mt-40">
    <div class="flex items-center justify-center ml-4 sm:ml-0">
      <span
        class="block font-bold text-gray-600 text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"
      >
        Include powerful features
      </span>
    </div>
    <!-- Icon Blocks -->
    <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div
        class="grid sm:grid-cols-1 lg:grid-cols-3 items-center gap-6 md:gap-10"
      >
        <!-- Card -->
        <div
          class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900"
        >
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"
                />
                <path
                  d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"
                />
                <path
                  d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"
                />
                <path
                  d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"
                />
              </svg>
            </div>
            <div class="flex-shrink-0">
              <h2
                class="block text-lg font-semibold text-gray-800 dark:text-white"
              >
                Built-in integrations
              </h2>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Save time with pre-configured integrations for analytics
            (<NuxtLink to="https://pulse.hakanai.io" class="link">
              Hakanai
            </NuxtLink>, Google Analytics, Plausible, and more),
            newsletters (<NuxtLink to="https://broadcast.hakanai.io" class="link">
              Hakanai
            </NuxtLink>, MailerLite),
            comments (Hyvor Talk), and static search. 
          </p>
        </div>
        <!-- End Card -->


        <!-- Card -->
        <div
          class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900"
        >
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 3h20" />
                <path
                  d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
                />
                <path d="m7 21 5-5 5 5" />
              </svg>
            </div>
            <div class="flex-shrink-0">
              <h2
                class="block text-lg font-semibold text-gray-800 dark:text-white"
              >
                Discoverability
              </h2>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Optimize your blog's reach with SEO (open graph, twitter cards, sitemap),
            RSS feed generation, and automated metadata management.
          </p>
          <NuxtLink class="link" to="/reference/seo">
            Read more
          </NuxtLink>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900"
        >
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
                />
                <path
                  d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                />
                <path
                  d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
                />
                <path d="M2 7h20" />
                <path
                  d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"
                />
              </svg>
            </div>
            <div class="flex-shrink-0">
              <h2
                class="block text-lg font-semibold text-gray-800 dark:text-white"
              >
                Markdown with components
              </h2>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Write your articles in
            markdown, including graphs, math functions and custom components to enhance your content.
          </p>
          <NuxtLink class="link" to="/content/markdown">
            Read more
          </NuxtLink>
        </div>
        <!-- End Card -->



        <!-- Card -->
        <div
          class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900"
        >
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
              </svg>
            </div>
            <div class="flex-shrink-0">
              <h2
                class="block text-lg font-semibold text-gray-800 dark:text-white"
              >
                CLI Tools
              </h2>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Manage your blog efficiently with built-in commands. Create posts, manage drafts,
            validate content, and view statistics—all from your terminal.
          </p>
          <NuxtLink class="link" to="/introduction/cli">
            Read more
          </NuxtLink>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900"
        >
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                />
                <circle cx="17.5" cy="17.5" r="3.5" />
              </svg>
            </div>
            <div class="flex-shrink-0">
              <h2
                class="block text-lg font-semibold text-gray-800 dark:text-white"
              >
                Themes
              </h2>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            Choose from a variety of themes to start your blog
            with a beautiful design or <NuxtLink class="link" to="/reference/theming">
              build your own
            </NuxtLink>.
          </p>
        </div>
        <!-- End Card -->
        <!-- Card -->
        <div
          class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900"
        >
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" />
                <circle cx="17.5" cy="10.5" r=".5" />
                <circle cx="8.5" cy="7.5" r=".5" />
                <circle cx="6.5" cy="12.5" r=".5" />
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                />
              </svg>
            </div>
            <div class="flex-shrink-0">
              <h2
                class="block text-lg font-semibold text-gray-800 dark:text-white"
              >
                Free hosting
              </h2>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            You can host your blog for free on Vercel, Netlify, Cloudflare-pages or GitHub
            Pages.
          </p>
          <NuxtLink class="link" to="/introduction/deployment">
            Read more
          </NuxtLink>
        </div>
        <!-- End Card -->
      </div>
    </div>
    <!-- End Icon Blocks -->
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.link {
    @apply underline decoration-dashed decoration-2 underline-offset-2 decoration-slate-600;
}
</style>
