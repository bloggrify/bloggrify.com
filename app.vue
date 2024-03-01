<template>
  <div id="nuxtContent">
    <AppLayout>
      <NuxtPage />
    </AppLayout>
  </div>
</template>
<script setup lang="ts">
onMounted(() => {
    useYoutubeTwitterEnhancer("nuxtContent");
});

onMounted(() => {
    const images = document.querySelectorAll(".prose img");

    images.forEach((img) => {
        const captionText = img.alt;
        const captionElement = document.createElement("div");
        captionElement.textContent = captionText;
        captionElement.classList.add(
            "text-sm",
            "text-center",
            "text-gray-600",
            "mt-1",
        );
        img.parentNode?.insertBefore(captionElement, img.nextSibling);
    });
});
</script>
