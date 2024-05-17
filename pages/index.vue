<template>
  <main class="mt-28">
    <div class="mx-auto max-w-[85rem] md:p-4">
      <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <!-- Announcement Banner -->
          <div class="flex justify-center">
            <a
              class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-900 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#templates"
            >
              <span class="font-bold text-pink-600">PRO</span>
              templates available
              <span
                class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400"
              >
                <svg
                  class="flex-shrink-0 size-4"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          <!-- End Announcement Banner -->

          <!-- Title -->
          <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1
              class="block font-bold text-gray-800 text-5xl md:text-6xl lg:text-7xl dark:text-gray-200"
            >
              Start your blog in
              <span
                class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
              >minutes</span>
            </h1>
          </div>
          <!-- End Title -->

          <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Bloggrify is a <strong>static</strong> blogging platform
              built on top of Nuxt.js and Nuxt-content providing
              everything you need to start writing your blog
              hassle-free AND <strong>for free</strong>.
            </p>
          </div>

          <!-- Buttons -->
          <div class="mt-8 gap-8 flex justify-center">
            <NuxtLink
              class="inline-flex justify-center items-center text-xl gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              to="/introduction/introduction"
            >
              Get Started
              <svg
                class="flex-shrink-0 size-4"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </NuxtLink>

            <a
              target="_blank"
              href="https://mistral.bloggrify.com"
              class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-lg font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Demo
              <span
                class="flex justify-center items-center size-7"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="transition-transform hover:scale-110 w-6 h-6" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
              </span>
            </a>
            <a
              target="_blank"
              href="https://github.com/hlassiege/bloggrify"
              class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-lg font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Github
              <span
                class="flex justify-center items-center size-7"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="transition-transform hover:scale-110 w-6 h-6" fill="currentColor" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </span>
            </a>
          </div>
          <!-- End Buttons -->
        </div>
      </div>
      <!-- End Hero -->
    </div>

    <div class="mx-auto max-w-[85rem] md:p-4 mt-6 md:mt-20">
      <section class="gap-6 flex flex-col justify-center items-center">
        <p class="w-auto flex items-center flex-col text-black">
          <span class="text-lg text-gray-500">Built with</span>
        </p>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-8 justify-center items-center opacity-60 dark:opacity-80 dark:contrast-[0.1]"
        >
          <img
            src="/images/landing/nuxt.png"
            alt="Nuxt"
            class="h-12 w-auto mx-auto"
          >
          <img
            src="/images/landing/nuxt-content.png"
            alt="Nuxt Content"
            class="h-12 w-auto mx-auto"
          >
          <img
            src="/images/landing/tailwind.png"
            alt="Tailwind CSS"
            class="h-12 w-auto mx-auto"
          >
          <img
            src="/images/landing/markdown.png"
            alt="Markdown"
            class="h-12 w-auto mx-auto"
          >
          <img
            src="/images/landing/hyvor.png"
            alt="Description"
            class="h-12 w-auto mx-auto"
          >
        </div>
      </section>
    </div>

    <div class="mx-auto max-w-[85rem] md:p-4 mt-20 md:mt-40">
      <div class="flex items-center justify-center">
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
              This is a static blogging platform, you can host it for
              free on Vercel, Netlify, Cloudflare-pages or GitHub
              Pages.
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
                  SEO friendly
                </h2>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              Manage everything for you, open graph meta tags,
              twitter cards, and sitemap
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
              Thanks to nuxt-content, write your articles in
              markdown and use components to enhance your content.
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
              Hyvor Talk for comments, Pirsch for analytics,
              <NuxtLink to="https://rssfeedpulse.com" class="font-bold underline">
                RssFeedPulse
              </NuxtLink> for newsletter, static search.
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
                  <path
                    d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
                  />
                  <path
                    d="m15.194 13.707 3.814 1.86-1.86 3.814"
                  />
                  <path
                    d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
                  />
                </svg>
              </div>
              <div class="flex-shrink-0">
                <h2
                  class="block text-lg font-semibold text-gray-800 dark:text-white"
                >
                  RSS
                </h2>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              Generate your RSS feed and let your readers follow
              your blog.
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
                  Secure & Fast
                </h2>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              No database, no server, no backend, no attack
              surface.
            </p>
          </div>
          <!-- End Card -->
        </div>
      </div>
      <!-- End Icon Blocks -->
    </div>

    <div class="mx-auto max-w-[85rem] md:p-4 mt-20 md:mt-40 mb-20">
      <div class="flex mb-14 ml-10 md:ml-0">
        <span
          id="templates"
          class="block font-bold text-gray-600 text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"
        >
          Templates
        </span>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="template in templates"
          :key="template.name"
          class="shadow-lg mx-20 md:mx-0 rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
        >
          <div class="h-48 overflow-hidden">
            <img
              :src="template.image"
              width="280"
              height="140"
              :alt="template.name"
              class="object-cover object-top w-full h-full"
            >
          </div>
          <div class="flex-1 px-4 py-5 sm:p-6 !p-4">
            <p
              class="text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5"
            >
              <span class="flex-1 truncate">{{
                template.name
              }}</span>
            </p>
            <div
              class="inline-flex -space-x-px rounded-md shadow-sm mt-3 w-full"
            >
              <a
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-s-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center w-1/2 justify-center"
                :href="template.demo"
                rel="noopener noreferrer"
                target="_blank"
              ><span
                class="i-ph-desktop-duotone flex-shrink-0 w-4 h-4"
                aria-hidden="true"
              /><span class="">Demo</span></a>
              <a
                v-if="template.repository"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-e-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center w-1/2 justify-center"
                :href="template.repository"
                rel="noopener noreferrer"
                target="_blank"
              ><span class="">GitHub</span></a>
              <a
                v-if="template.shop"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-e-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center w-1/2 justify-center"
                :href="template.shop"
                rel="noopener noreferrer"
                target="_blank"
              ><span class="">Buy</span></a>
              <span
                v-if="!template.shop && !template.repository"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-e-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center w-1/2 justify-center"
                rel="noopener noreferrer"
              >Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import templates from "~/data/templates";
const config = useRuntimeConfig();

useHead({
    title: config.public.name,
    meta: [
        {
            key: "canonical",
            name: "canonical",
            content: config.public.url,
        },
        {
            key: "description",
            name: "description",
            content: config.public.description,
        },
        {
            key: "og:description",
            name: "og:description",
            content: config.public.description,
        },
        { key: "og:type", name: "og:type", content: "website" },
        { key: "og:url", name: "og:url", content: config.public.url },
        {
            key: "twitter:title",
            name: "twitter:title",
            content: config.public.name,
        },
    ],
});
</script>
