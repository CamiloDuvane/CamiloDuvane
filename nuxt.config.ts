// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxt/icon",
    "nuxt-zod-i18n",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],
  colorMode: {
    preference: "light",
  },
  plugins: ["~/plugins/vueuse-motion.js", "~/plugins/vue-the-mask.js"],
});