// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/theme.scss'],
  modules: ['@nuxt/content', '@nuxt/image', '@nuxthq/studio']
});
