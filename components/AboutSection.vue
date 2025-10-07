<template>
  <section id="about" v-if="false" class="py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <!-- Left: Copy -->
        <div>
          <span class="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Trusted local movers
          </span>
          <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">Move Better With Opek</h2>
          <div class="mt-2 h-1 w-16 rounded bg-brand-600"></div>
          <p class="mt-4 text-base text-slate-600">We believe moving day should feel calm and organized. Our trained team arrives on time with the right tools, protects your home, and communicates every step so you always know what's next.</p>

          <!-- Feature cards -->
          <div class="mt-8 grid gap-4 sm:grid-cols-1">
            <div v-for="(feature, index) in features" :key="feature.title" class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-300 hover:-translate-y-1">
              <!-- Decorative gradient -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-transparent rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div class="relative flex items-start gap-4">
                <!-- Icon -->
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-600/30 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <component :is="feature.icon" class="w-7 h-7" />
                </div>
                
                <!-- Content -->
                <div class="flex-1 pt-1">
                  <h3 class="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {{ feature.title }}
                  </h3>
                  <p class="text-sm text-slate-600 leading-relaxed">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
              
              <!-- Number badge -->
              <div class="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold text-brand-600 shadow-sm">
                {{ index + 1 }}
              </div>
            </div>
          </div>

          <!-- Stats grid -->
          <div class="mt-8 grid grid-cols-3 gap-4">
            <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <p class="text-2xl font-extrabold text-slate-900">1k+</p>
              <p class="text-xs text-slate-600 mt-1">Moves completed</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <p class="text-2xl font-extrabold text-slate-900">4.9★</p>
              <p class="text-xs text-slate-600 mt-1">Average rating</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <p class="text-2xl font-extrabold text-slate-900">On-time</p>
              <p class="text-xs text-slate-600 mt-1">Scheduling</p>
            </div>
          </div>

          <div class="mt-8 flex items-center gap-3">
            <a href="#quote" class="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition">
              Get A Quote
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#reviews" class="text-sm font-semibold text-slate-700 hover:text-brand-600 transition">Read reviews →</a>
          </div>
        </div>

        <!-- Right: Image -->
        <div>
          <div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white h-full min-h-[500px] shadow-lg">
            <img src="/assets/Opek.png" alt="Professional moving crew" class="h-full w-full object-cover" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
              <p class="text-white text-sm font-semibold">Professional team • Clean equipment • On-time service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const features = [
  {
    title: 'Transparent Pricing',
    description: 'Up-front, honest pricing with no hidden fees or surprise charges. You know exactly what you\'re paying before we start.',
    icon: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' })
    ])
  },
  {
    title: 'Professional Equipment',
    description: 'Clean, well-maintained trucks and premium moving supplies. We protect your belongings with quality pads, straps, and tools.',
    icon: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z' })
    ])
  },
  {
    title: 'Trusted Professionals',
    description: 'Friendly, background-checked movers who treat your home with respect and your belongings with care.',
    icon: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z' })
    ])
  }
]
</script>
