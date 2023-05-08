<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} - My Test App` : 'My Test App'
});
</script>
