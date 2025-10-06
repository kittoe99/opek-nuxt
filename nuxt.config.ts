// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Opek Moving LLC — Stress-free Moving Services',
      meta: [
        { name: 'description', content: 'Opek Moving LLC provides reliable residential and commercial moving services. Get a fast, transparent quote and move with confidence.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Poppins:wght@600;700;800;900&display=swap' },
        { rel: 'icon', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🚚</text></svg>" }
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'h-full scroll-smooth'
      },
      bodyAttrs: {
        class: 'min-h-full bg-white text-slate-800 selection:bg-brand-200/60'
      }
    }
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  }
})
