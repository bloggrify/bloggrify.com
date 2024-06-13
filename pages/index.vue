<template>
  <main class="mt-28">
    <div class="mx-auto max-w-[85rem] md:p-4">
      <Hero />
    </div>

    <BuiltWith />

    <Features />

    <Templates />

    <Support />
  </main>
</template>
<script setup lang="ts">
import BuiltWith from "~/components/BuiltWith.vue";
import Features from "~/components/Features.vue";
import Templates from "~/components/Templates.vue";
import Support from "~/components/Support.vue";

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
