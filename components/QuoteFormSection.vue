<template>
  <section id="quote" class="relative py-16 sm:py-20 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
    <!-- Mountain backdrop -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -bottom-20 left-0 right-0 h-80 opacity-[0.03]">
        <svg viewBox="0 0 1200 300" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#059669" d="M0,300 L0,140 L200,70 L400,160 L600,30 L800,110 L1000,80 L1200,180 L1200,300 Z"/>
        </svg>
      </div>
      <div class="absolute top-20 left-10 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <!-- Badge with map pin -->
          <span class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-100 mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-4 h-4">
              <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
              <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
            </svg>
            Fast response time
          </span>
          
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-4">
            <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Get Your Fast Quote</span>
          </h2>
          
          <!-- Mountain-inspired underline -->
          <div class="flex items-end gap-1 mb-6">
            <div class="w-3 h-1 bg-emerald-400 rounded-full"></div>
            <div class="w-3 h-2 bg-emerald-500 rounded-full"></div>
            <div class="w-3 h-3 bg-emerald-600 rounded-full"></div>
            <div class="w-3 h-4 bg-emerald-600 rounded-full"></div>
            <div class="w-3 h-3 bg-emerald-600 rounded-full"></div>
            <div class="w-3 h-2 bg-emerald-500 rounded-full"></div>
            <div class="w-3 h-1 bg-emerald-400 rounded-full"></div>
          </div>
          
          <p class="text-lg text-gray-600 leading-relaxed">Tell us about your move and we'll follow up quickly with a <span class="font-semibold text-emerald-700">clear, no-pressure estimate</span>.</p>

          <div class="mt-8 space-y-3">
            <div v-for="item in items" :key="item.title" class="flex items-start gap-3">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">{{ item.title }}</p>
                <p class="text-xs text-slate-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <form @submit.prevent="handleSubmit" class="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 grid gap-5 md:grid-cols-2 shadow-xl">
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-900" for="name">Name</label>
              <input v-model="form.name" id="name" type="text" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-base hover:border-slate-300 focus:border-brand-600 focus:ring-0 transition" placeholder="Your name" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-semibold text-slate-900" for="email">Email</label>
              <input v-model="form.email" id="email" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-base hover:border-slate-300 focus:border-brand-600 focus:ring-0 transition" placeholder="you@example.com" />
            </div>
            <div class="space-y-2 md:col-span-2">
              <label class="text-sm font-semibold text-slate-900" for="details">Move details</label>
              <textarea v-model="form.details" id="details" rows="4" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-base hover:border-slate-300 focus:border-brand-600 focus:ring-0 transition" placeholder="From / To, date, size, special items…"></textarea>
            </div>
            <div class="md:col-span-2 space-y-3">
              <button type="submit" :disabled="isSubmitting" class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition disabled:opacity-70 disabled:cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                Submit Request
              </button>
              <p class="text-xs text-slate-500 text-center">We'll respond fast. No spam—ever.</p>
              <p v-if="feedback" :class="['text-sm font-semibold text-center', feedbackClass]" role="status" aria-live="polite">
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
