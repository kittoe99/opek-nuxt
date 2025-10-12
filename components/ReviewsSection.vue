<template>
  <section id="reviews" class="relative py-16 sm:py-20 bg-gradient-to-b from-emerald-50/20 via-white to-emerald-50/20 overflow-hidden">
    <!-- Mountain backdrop -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-56 opacity-[0.03]">
        <svg viewBox="0 0 1200 250" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#059669" d="M0,250 L0,130 L180,60 L360,150 L540,40 L720,110 L900,70 L1080,140 L1200,90 L1200,250 Z"/>
        </svg>
      </div>
      <div class="absolute bottom-10 right-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Stars with Map Pin -->
        <div class="inline-flex items-center justify-center gap-2 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-20 h-20 drop-shadow-xl">
            <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
            <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
          </svg>
          <div class="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-yellow-400">
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-yellow-400">
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-yellow-400">
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
        </div>
        
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-4">
          <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Customers Love Us</span>
        </h2>
        
        <!-- Star pattern underline -->
        <div class="flex justify-center items-center gap-2 mb-6">
          <span class="text-yellow-400 text-2xl">★</span>
          <span class="text-yellow-400 text-xl">★</span>
          <span class="text-yellow-400 text-2xl">★</span>
          <span class="text-yellow-400 text-xl">★</span>
          <span class="text-yellow-400 text-2xl">★</span>
        </div>
        
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          <span class="font-semibold text-emerald-700">Real reviews</span> from real customers
        </p>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article v-for="review in reviews" :key="review.name" class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <figure class="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div class="flex gap-1 mb-3">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
            </div>
            <blockquote class="text-sm text-slate-700">{{ review.quote }}</blockquote>
            <figcaption class="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 font-bold text-xs">
                {{ review.initials }}
              </div>
              <p class="text-sm font-semibold text-slate-900">{{ review.name }}</p>
            </figcaption>
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Jamie R.',
    initials: 'JR',
    quote: '"The crew was on time, super professional, and packed everything perfectly. Best move we\'ve had."'
  },
  {
    name: 'David M.',
    initials: 'DM',
    quote: '"Transparent pricing and no surprises. They worked fast and were careful with our furniture."'
  },
  {
    name: 'Priya S.',
    initials: 'PS',
    quote: '"Made our office relocation a breeze. Clear labeling and zero damage."'
  }
]
</script>
