<template>
  <section id="reviews" class="py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">Customers love us</h2>
        <div class="mx-auto mt-2 h-1 w-16 rounded bg-brand-600"></div>
        <p class="mt-4 text-base text-slate-600">Real reviews from real customers</p>
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
