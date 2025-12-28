<script setup lang="ts">
defineProps<{
  title: string
  image: string
  demoUrl: string
  repoUrl?: string
  buyUrl?: string
}>()
</script>

<template>
  <UPageCard :title="title">
    <img :src="image" :alt="title" class="w-full rounded" />

    <template #footer>
      <div class="flex gap-2 w-full">
        <UButton :to="demoUrl" variant="outline" color="neutral" block>
          Demo
        </UButton>
        <UButton v-if="repoUrl" :to="repoUrl" variant="outline" color="neutral" block>
          GitHub
        </UButton>
        <UButton v-if="buyUrl" :to="buyUrl" variant="outline" color="neutral" block>
          Buy
        </UButton>
      </div>
    </template>
  </UPageCard>
</template>