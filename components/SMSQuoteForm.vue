<template>
  <section id="sms-quote" class="relative mt-6 md:mt-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative group max-w-xl sm:max-w-2xl mx-auto">
        <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
        <div class="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-extrabold text-slate-900">Get Instant Pricing</h3>
              <p class="text-sm text-slate-600">Quick SMS estimate in seconds</p>
            </div>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
            <div>
              <label for="phone" class="block text-sm font-semibold text-slate-900 mb-2">Mobile number</label>
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
            <button type="submit" :disabled="isSubmitting" class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition disabled:opacity-70 disabled:cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
              </svg>
              Text me pricing
            </button>
            <p id="sms-help" class="text-xs text-slate-500 text-center">By submitting, you agree to receive a one-time SMS with pricing. No spam.</p>
            <p v-if="feedback" :class="['text-sm font-semibold text-center', feedbackClass]" role="status" aria-live="polite">
              {{ feedback }}
            </p>
          </form>
        </div>
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
