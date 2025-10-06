<template>
  <section id="quote" class="py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span class="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
            </svg>
            Fast response time
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">Get your fast quote</h2>
          <div class="mt-2 h-1 w-16 rounded bg-brand-600"></div>
          <p class="mt-4 text-base text-slate-600">Tell us about your move and we'll follow up quickly with a clear, no-pressure estimate.</p>

          <div class="mt-8 space-y-3">
            <div v-for="item in items" :key="item.title" class="flex items-start gap-3">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
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
          <form @submit.prevent="handleSubmit" class="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 grid gap-5 md:grid-cols-2">
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
