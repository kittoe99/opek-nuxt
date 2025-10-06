<template>
  <section id="about" class="py-16 sm:py-20 bg-white">
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
          <div class="mt-8 space-y-3">
            <div v-for="feature in features" :key="feature.text" class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white flex-shrink-0">
                  <component :is="feature.icon" />
                </div>
                <p class="text-sm font-semibold text-slate-900">{{ feature.text }}</p>
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
    text: 'Transparent, up-front pricing with no surprises',
    icon: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor', class: 'w-5 h-5' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' })
    ])
  },
  {
    text: 'Clean trucks, pads, and equipment on every job',
    icon: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor', class: 'w-5 h-5' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z' })
    ])
  },
  {
    text: 'Friendly, background-checked pros who care',
    icon: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor', class: 'w-5 h-5' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z' })
    ])
  }
]
</script>
