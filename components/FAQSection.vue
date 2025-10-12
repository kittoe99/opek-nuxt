<template>
  <section id="faq" class="relative py-16 sm:py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
    <!-- Mountain backdrop -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -bottom-20 left-0 right-0 h-72 opacity-[0.03]">
        <svg viewBox="0 0 1200 300" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#059669" d="M0,300 L0,140 L160,70 L320,170 L480,50 L640,130 L800,80 L960,150 L1120,100 L1200,180 L1200,300 Z"/>
        </svg>
      </div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Question Mark with Map Pins -->
        <div class="inline-flex items-center justify-center gap-3 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 opacity-60 drop-shadow-lg">
            <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
            <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
          </svg>
          <div class="relative">
            <div class="absolute inset-0 bg-emerald-100 rounded-full blur-xl opacity-50"></div>
            <div class="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 opacity-60 drop-shadow-lg">
            <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
            <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
          </svg>
        </div>
        
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-4">
          <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Questions, Answered</span>
        </h2>
        
        <!-- Question mark pattern underline -->
        <div class="flex justify-center items-center gap-2 mb-6">
          <span class="text-emerald-500 text-2xl font-bold">?</span>
          <span class="text-emerald-400 text-xl font-bold">?</span>
          <span class="text-emerald-600 text-3xl font-bold">?</span>
          <span class="text-emerald-400 text-xl font-bold">?</span>
          <span class="text-emerald-500 text-2xl font-bold">?</span>
        </div>
        
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Quick info about <span class="font-semibold text-emerald-700">pricing, timing, protection</span>, and what's included
        </p>
      </div>

      <!-- FAQ Image -->
      <div class="mx-auto max-w-3xl mt-12 mb-12 relative rounded-3xl overflow-hidden">
        <div class="aspect-[21/9] relative">
          <img src="/assets/movers-in-denver-min.png" alt="Movers in Denver" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <p class="text-xl font-bold">Have questions? We're here to help!</p>
            <p class="text-sm text-white/90 mt-2">Our team is available to answer all your moving questions</p>
          </div>
        </div>
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
