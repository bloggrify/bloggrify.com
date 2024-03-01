<template>
    <div class="flex flex-row">
    <NuxtImg
            v-if="config.public.logo"
            :src="config.public.logo"
            class="h-12 mt-auto rounded-full mr-2"
            alt="logo"
    />
        <span class="text-3xl mt-1">{{ config.public.name }}</span>
    </div>
</template>
<script setup lang="ts">
    const config = useRuntimeConfig();
</script>
