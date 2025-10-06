<template>
  <section id="areas" class="relative py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">Service Areas</h2>
        <div class="mx-auto mt-2 h-1 w-16 rounded bg-brand-600"></div>
        <p class="mt-4 text-base text-slate-600">Serving the greater Denver metro area within a 50-mile radius</p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <!-- Left: Featured area card -->
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div class="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-extrabold text-slate-900">Denver Metro Area</h3>
                <p class="text-sm text-slate-600">50-mile service radius</p>
              </div>
            </div>
            <p class="text-sm text-slate-600 mb-6">We proudly serve all communities in the greater Denver area. From downtown to the suburbs, our professional moving teams are ready to help.</p>

            <div class="border-t border-slate-200 pt-6">
              <h4 class="text-sm font-bold text-slate-900 mb-3">Popular cities we serve:</h4>
              <div class="grid grid-cols-2 gap-2">
                <div v-for="city in cities" :key="city" class="flex items-center gap-2 text-sm text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-brand-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {{ city }}
                </div>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-slate-200">
              <a href="#quote" class="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Check your ZIP code</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Image -->
        <div>
          <div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white h-full min-h-[400px] shadow-lg">
            <img src="/assets/Opek.png" alt="Denver metro area service coverage" class="h-full w-full object-cover" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
              <div class="flex items-end justify-between">
                <div class="text-white">
                  <p class="text-sm text-white/90 font-semibold">Coverage Area</p>
                  <p class="text-2xl font-extrabold">50-mile radius from Denver</p>
                </div>
                <div class="inline-flex items-center gap-2 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Fast ETA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cities = [
  'Denver',
  'Aurora',
  'Lakewood',
  'Boulder',
  'Arvada',
  'Littleton',
  'Thornton',
  '+ 12 more cities'
]
</script>
