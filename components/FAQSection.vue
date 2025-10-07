<template>
  <section id="faq" class="py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">Questions, answered</h2>
        <div class="mx-auto mt-2 h-1 w-16 rounded bg-brand-600"></div>
        <p class="mt-4 text-base text-slate-600">Quick info about pricing, timing, protection, and what's included.</p>
      </div>

      <!-- FAQ Image -->
      <div class="mx-auto max-w-3xl mt-12 mb-12 relative rounded-3xl overflow-hidden">
        <div class="aspect-[21/9] relative">
          <img src="/assets/Opek.png" alt="Customer service and support" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <p class="text-xl font-bold">Have questions? We're here to help!</p>
            <p class="text-sm text-white/90 mt-2">Our team is available to answer all your moving questions</p>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-3xl">
        <div class="rounded-3xl border border-slate-200 bg-white divide-y divide-slate-200 overflow-hidden shadow-lg">
          <details v-for="(faq, index) in faqs" :key="index" class="group">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 p-6 hover:bg-slate-50 transition">
              <h3 class="text-base sm:text-lg font-bold text-slate-900">{{ faq.question }}</h3>
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-open:bg-brand-600 group-open:text-white transition flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 group-open:rotate-45 transition">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </summary>
            <div class="px-6 pb-6">
              <p class="text-sm text-slate-600 leading-relaxed">{{ faq.answer }}</p>
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
