<template>
  <section id="quote" class="relative py-16 sm:py-20 bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <!-- Badge with map pin -->
          <span
            class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 border border-brand-100 mb-6 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-4 h-4">
              <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
              <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
            </svg>
            Fast response time
          </span>

          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-4">
            <span class="text-slate-900">Get Your Fast Quote</span>
          </h2>

          <div class="h-1 w-16 bg-brand-100 rounded-full mb-6"></div>

          <p class="text-lg text-gray-600 leading-relaxed">Tell us about your move and we'll follow up quickly with a <span class="font-semibold text-brand-700">clear, no-pressure estimate</span>.</p>

          <div class="mt-8 space-y-3">
            <div v-for="item in items" :key="item.title" class="flex items-start gap-3">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-brand-600 border border-brand-100 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-bold text-gray-900">{{ item.title }}</p>
                <p class="text-xs text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <form
            @submit.prevent="handleSubmit"
            class="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 grid gap-5 md:grid-cols-2 shadow-md"
          >
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-900" for="name">Name</label>
              <input
                v-model="form.name"
                id="name"
                type="text"
                class="w-full rounded-xl border border-slate-200 px-4 py-3 text-base hover:border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-900" for="email">Email</label>
              <input
                v-model="form.email"
                id="email"
                type="email"
                class="w-full rounded-xl border border-slate-200 px-4 py-3 text-base hover:border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div class="space-y-2 md:col-span-2">
              <label class="text-sm font-bold text-gray-900" for="details">Move details</label>
              <textarea
                v-model="form.details"
                id="details"
                rows="4"
                class="w-full rounded-xl border border-slate-200 px-4 py-3 text-base hover:border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-colors resize-none"
                placeholder="From / To, date, size, special items…"
              ></textarea>
            </div>
            <div class="md:col-span-2 space-y-3">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-base font-bold text-white hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                Submit Request
              </button>
              <p class="text-xs text-gray-500 text-center">We'll respond fast. No spam—ever.</p>
              <p v-if="feedback" :class="['text-sm font-bold text-center', feedbackClass]" role="status" aria-live="polite">
                {{ feedback }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  details: ''
})

const feedback = ref('')
const feedbackClass = ref('')
const isSubmitting = ref(false)

const items = [
  { title: 'Date & locations', description: 'When and where you\'re moving' },
  { title: 'Size of home or office', description: 'Help us estimate crew & truck size' },
  { title: 'Any special items', description: 'Pianos, safes, or fragile items' }
]

const handleSubmit = () => {
  isSubmitting.value = true

  // Simulate async request
  setTimeout(() => {
    feedback.value = 'Thanks! We\'ll get back to you shortly.'
    feedbackClass.value = 'text-brand-700'
    isSubmitting.value = false
    form.name = ''
    form.email = ''
    form.details = ''
  }, 800)
}
</script>
