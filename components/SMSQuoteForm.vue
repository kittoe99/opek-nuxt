<template>
  <section id="sms-quote" class="relative z-20 -mt-20 sm:-mt-32 lg:-mt-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Long horizontal bar -->
      <form @submit.prevent="handleSubmit" class="w-full lg:max-w-4xl xl:max-w-3xl 2xl:max-w-4xl mx-auto rounded-2xl border-2 border-emerald-200 bg-white shadow-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4" novalidate>
        <!-- Left: icon + text -->
        <div class="flex items-center gap-2 sm:gap-3 sm:w-auto flex-shrink-0">
          <div class="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex-shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          </div>
          <div class="block">
            <h3 class="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">Get Instant Pricing</h3>
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
              class="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
              pattern="^[0-9()+\-\s]{7,}$"
              aria-describedby="sms-help"
              required
            />
          </div>

          <!-- Right: button -->
          <div class="w-auto">
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
        <p id="sms-help" class="text-xs text-gray-500 text-center sm:text-left">By submitting, you agree to receive a one-time SMS with pricing. No spam.</p>
        <p v-if="feedback" :class="['text-sm font-bold', feedbackClass]" role="status" aria-live="polite">
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
    feedbackClass.value = 'text-emerald-700'
    isSubmitting.value = false
    phone.value = ''
  }, 800)
}
</script>
