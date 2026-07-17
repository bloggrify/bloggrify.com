<script setup lang="ts">
// Surcharge du composant Docus, qui rend une icône par entrée de `socials` puis en ajoute
// une seconde pour `github.url`. Les deux sortent avec la même icône GitHub, d'où un doublon :
// `socials.github` pointe sur le moteur, `github.url` sur les sources de ce site. On ne garde
// que `socials`. `github.url` reste utilisé par les liens « Edit this page ».
const appConfig = useAppConfig()
const { forced: forcedColorMode } = useDocusColorMode()

interface FooterLink {
  'icon': string
  'to': string
  'target': '_blank'
  'aria-label': string
}

const links = computed<FooterLink[]>(() =>
  Object.entries(appConfig.socials || {}).flatMap(([key, url]) => {
    if (typeof url !== 'string' || !url) {
      return []
    }

    return [{
      'icon': `i-simple-icons-${key}`,
      'to': url,
      'target': '_blank' as const,
      'aria-label': `${key} social link`,
    }]
  }),
)
</script>

<template>
  <template v-if="links.length">
    <UButton
      v-for="(link, index) of links"
      :key="index"
      size="sm"
      v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
    />
  </template>
  <UColorModeButton v-if="!forcedColorMode" />
</template>
