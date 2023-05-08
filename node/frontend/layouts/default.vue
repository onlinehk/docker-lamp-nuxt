<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div>
      <header class="bg-slate-300 text-slate-700 p-3 flex justify-between">
        <div>
          <NuxtLink :to="localePath('/')" class="text-slate-700 hover:text-slate-500 text-2xl mr-6 align-middle">Title</NuxtLink>
          <NuxtLink :to="localePath('/test-page')" class="text-slate-700 hover:text-slate-500 text-lg mr-3 align-middle">Test Page</NuxtLink>
        </div>
        <div>
          <NuxtLink v-for="v in locales" :key="'locale_' + v" :to="switchLocalePath(v)" class="text-slate-700 hover:text-slate-500 ml-3 align-middle" to="/test-page">{{ v }}</NuxtLink>
        </div>
      </header>

      <slot />
    </div>

    <footer class="bg-slate-700 text-slate-300 p-3">
      <h4 class="text-2xl">Footer</h4>
    </footer>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { locales } = useI18n();
</script>
