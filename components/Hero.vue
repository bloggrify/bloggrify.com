<template>
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
      <div class="mt-5 max-w-4xl text-center mx-auto">
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
          Bloggrify is a <strong>static</strong> blog generator
          built on top of Nuxt.js and Nuxt-content providing
          everything you need to start writing your blog
          hassle-free AND <strong>for free</strong>.
        </p>
      </div>

      <!-- Buttons -->
      <div class="mt-8 gap-2 flex justify-center">
        <NuxtLink
          class="inline-flex justify-center items-center text-xl gap-x-3 text-center
              bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600
              border border-transparent text-white
              font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
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
      </div>
      <!-- End Buttons -->
    </div>
  </div>
</template>
