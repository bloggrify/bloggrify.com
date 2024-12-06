<template>
  <main class="mt-20">
    <div class="mx-auto max-w-[85rem] md:p-4 mb-20">
      <div class="flex flex-col mb-14 ml-10 md:ml-0 gap-4">
        <div
          class="block font-bold text-gray-600 text-3xl md:text-4xl lg:text-5xl dark:text-gray-200"
        >
          Templates
        </div>
        <div>
          <span
            class="block text-gray-500 text-sm md:text-base dark:text-gray-200"
          >
            A collection of templates for your next blog.
          </span>
          <span
            class="text-gray-500 text-xs dark:text-gray-200"
          >
            Add your own template by following the <a
              class="font-bold underline decoration-dashed underline-offset-4"
              href="/recipes/sharing-theme"
            >official guide</a>
          </span>
        </div>
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
            content: config.public.url + "/templates",
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
        { key: "og:url", name: "og:url", content: config.public.url + "/templates" },
        {
            key: "twitter:title",
            name: "twitter:title",
            content: config.public.name,
        },
    ],
});
</script>
