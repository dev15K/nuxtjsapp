// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devServer: {
    port: Number(process.env.NUXT_PORT) || 3000
  },
  devtools: { enabled: false }
})
