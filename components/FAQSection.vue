<template>
  <section id="faq" class="py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
          Questions, answered
        </h2>

        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-500"></div>

        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Quick info about <span class="font-semibold text-slate-900">pricing, timing, protection</span>, and what's included
        </p>
      </div>

      <div class="mx-auto max-w-3xl">
        <div class="grid gap-4">
          <details v-for="(faq, index) in faqs" :key="index" class="group">
            <summary class="flex cursor-pointer list-none items-start justify-between gap-4 p-6 rounded-2xl bg-white border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start gap-4 flex-1">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-open:bg-emerald-600 group-open:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <h3 class="text-lg font-extrabold text-gray-900 pt-2">{{ faq.question }}</h3>
              </div>
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 group-open:bg-emerald-600 group-open:text-white transition-all flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 group-open:rotate-45 transition-transform">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </summary>
            <div class="px-6 pb-6 pt-2 ml-16">
              <p class="text-sm text-gray-600 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    question: 'How do you price moves?',
    answer: 'Local moves are typically hourly based on crew size; larger or longer moves can be quoted flat-rate. Use "Get Instant Pricing" for a quick estimate and we\'ll confirm the best option.'
  },
  {
    question: 'How soon should I book?',
    answer: 'We recommend 2–3 weeks in advance for best availability. If you\'re moving sooner, text us pricing and we\'ll try to fit you in.'
  },
  {
    question: 'Do you protect floors, doors, and furniture?',
    answer: 'Yes—floor runners, door jamb guards, clean pads, wrap, and straps are standard on every move. We also label and place items by room.'
  },
  {
    question: 'Can you help with packing and heavy items?',
    answer: 'We offer full or partial packing, plus handling for pianos, safes, and gym equipment. Tell us in advance so we bring the right gear.'
  },
  {
    question: 'What areas do you cover?',
    answer: 'We serve the Denver metro and surrounding cities within roughly 50 miles. If you\'re unsure, send us your ZIP and we\'ll confirm.'
  }
]
</script>
