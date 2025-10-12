<template>
  <section id="sms-quote" class="relative z-20 -mt-20 sm:-mt-32 lg:-mt-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Enhanced bar with mountain theme -->
      <form @submit.prevent="handleSubmit" class="relative w-full lg:max-w-4xl xl:max-w-3xl 2xl:max-w-4xl mx-auto rounded-2xl border-2 border-emerald-200 bg-white shadow-2xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 overflow-hidden" novalidate>
        <!-- Subtle mountain pattern background -->
        <div class="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg viewBox="0 0 400 100" class="w-full h-full" preserveAspectRatio="none">
            <path fill="#059669" d="M0,100 L0,50 L100,20 L200,60 L300,15 L400,45 L400,100 Z"/>
          </svg>
        </div>
        
        <!-- Left: icon + text -->
        <div class="flex items-center gap-2 sm:gap-3 sm:w-auto flex-shrink-0 relative z-10">
          <!-- Map pin icon -->
          <div class="relative flex-shrink-0">
            <div class="absolute inset-0 bg-emerald-100 rounded-lg blur-md opacity-50"></div>
            <div class="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-6 h-6 sm:w-7 sm:h-7">
                <path fill="currentColor" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
                <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
              </svg>
            </div>
          </div>
          <div class="block">
            <h3 class="text-base sm:text-lg font-extrabold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent leading-tight">Get Instant Pricing</h3>
            <p class="text-xs text-gray-600">Quick SMS estimate in seconds</p>
          </div>
        </div>

        <!-- Input + Button Row -->
        <div class="w-full flex flex-row items-stretch gap-3 sm:gap-4 sm:flex-1">
          <!-- Middle: input expands -->
          <div class="flex-auto min-w-0">
            <label for="phone" class="sr-only">Mobile number</label>
            <input
              id="phone"
              v-model="phone"
              name="phone"
              type="tel"
              inputmode="tel"
              autocomplete="tel"
              placeholder="(555) 123-4567"
              class="w-full rounded-xl border border-slate-200 px-4 py-3 text-base hover:border-slate-300 focus:border-brand-600 focus:ring-0 transition"
              pattern="^[0-9()+\-\s]{7,}$"
              aria-describedby="sms-help"
              required
            />
          </div>

          <!-- Right: button -->
          <div class="w-auto relative z-10">
            <button type="submit" :disabled="isSubmitting" aria-label="Text me pricing" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-3 sm:px-6 py-3 text-base font-semibold text-white hover:from-emerald-700 hover:to-emerald-600 transition-all shadow-lg shadow-emerald-600/30 disabled:opacity-70 disabled:cursor-not-allowed shrink-0 whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="hidden sm:inline h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span class="ml-0 sm:ml-2">Text me pricing</span>
            </button>
          </div>
        </div>

        <!-- Feedback under bar -->
      </form>
      <div class="mt-2 w-full lg:max-w-4xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
        <p id="sms-help" class="text-xs text-slate-500 text-center sm:text-left">By submitting, you agree to receive a one-time SMS with pricing. No spam.</p>
        <p v-if="feedback" :class="['text-sm font-semibold', feedbackClass]" role="status" aria-live="polite">
          {{ feedback }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const phone = ref('')
const feedback = ref('')
const feedbackClass = ref('')
const isSubmitting = ref(false)

const handleSubmit = () => {
  const raw = phone.value.trim()
  const digits = raw.replace(/[^0-9]/g, '')

  if (digits.length < 10) {
    feedback.value = 'Please enter a valid mobile number.'
    feedbackClass.value = 'text-red-600'
    return
  }

  isSubmitting.value = true

  // Simulate async request
  setTimeout(() => {
    feedback.value = "Thanks! We'll text you pricing shortly."
    feedbackClass.value = 'text-brand-700'
    isSubmitting.value = false
    phone.value = ''
  }, 800)
}
</script>
