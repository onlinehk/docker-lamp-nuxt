import messages from './i18n/i18n.js';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'My Test App',
      // meta: [
      //   { name: 'description', content: 'Site description' }
      // ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    }
  },
  watchers: {
    webpack: {
        aggregateTimeout: 300,
        poll: 1000
    }
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['tc', 'en'],
    strategy: 'prefix',
    defaultLocale: 'tc',
    vueI18n: {
      legacy: false,
      locale: 'tc',
      messages,
    }
  },
  css: ['~/assets/css/global.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/css/_variables.scss";
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
          `.trim(),
        }
      }
    },
  },
  nitro: {
    output: {
      publicDir: '.output/public',
    },
  },
});
