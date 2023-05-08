<template>
  <div class="m-3">
    <div class="mb-3">pages/test-page.vue</div>

    <div class="text-primary mb-3">Test SCSS</div>

    <div class="mb-3">{{ $t('welcome') }}</div>
  </div>
</template>

<script setup>
useHead({
  title: 'Test Page',
});
</script>
