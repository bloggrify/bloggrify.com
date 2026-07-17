<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const links: NavigationMenuItem[] = [
  {
    label: 'Blog',
    icon: 'i-lucide-rss',
    to: 'https://minimalist.bloggrify.com',
    target: '_blank',
  },
]
</script>

<template>
  <UFooter>
    <template #left>
      <AppFooterLeft />
    </template>

    <UNavigationMenu
      :items="links"
      variant="link"
    />

    <template #right>
      <AppFooterRight />
    </template>
  </UFooter>
</template>
