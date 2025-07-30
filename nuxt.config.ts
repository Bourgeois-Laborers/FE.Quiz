import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  // Disable auto imports for components
  components: false,

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      socketBaseUrl: process.env.NUXT_PUBLIC_SOCKET_URL,
    },
  },

  modules: ["@pinia/nuxt", "shadcn-nuxt"],

  app: {
    head: {
      title: "Quiz",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/assets/styles/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  shadcn: {
    prefix: "",
    componentDir: "~/components/base",
  },
});
