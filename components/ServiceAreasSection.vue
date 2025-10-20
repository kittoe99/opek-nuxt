<template>
  <section id="areas" class="py-16 sm:py-20 bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
          Service areas
        </h2>

        <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-500"></div>

        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Serving the <span class="font-semibold text-slate-900">greater Denver metro area</span> within a 50-mile radius
        </p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <!-- Left: Featured area card -->
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div class="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg flex flex-col gap-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Primary hub</p>
                <h3 class="mt-2 text-3xl font-extrabold text-slate-900">Denver Metro Area</h3>
              </div>
              <div class="inline-flex items-center gap-2 rounded-2xl border border-brand-100 bg-brand-50 px-4 py-2 text-brand-700 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span class="text-sm font-semibold">50-mile service radius</span>
              </div>
            </div>

            <p class="text-sm text-slate-600 leading-relaxed">
              We proudly serve all communities in the greater Denver area. From downtown high-rises to foothill neighborhoods, our professional moving teams are ready to help.
            </p>

            <div class="space-y-6">
              <div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
                <p class="text-sm font-semibold text-slate-900">Neighborhood coverage</p>
                <p class="mt-2 text-sm text-slate-600 leading-relaxed">
                  Coordinators manage building access, parking logistics, and timing so your crew arrives prepared for your exact block.
                </p>
              </div>

              <div class="rounded-2xl border border-brand-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-wide text-brand-700">Popular cities</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span
                    v-for="city in featuredCities"
                    :key="city"
                    class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4 text-brand-600">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75" />
                    </svg>
                    {{ city }}
                  </span>
                </div>
                <p class="mt-4 text-xs text-slate-500">+ {{ additionalCitiesCount }} more communities across the Front Range</p>
                <a
                  href="#quote"
                  class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  Request coverage details
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div class="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-sm text-slate-500">Need to confirm your neighborhood? Share your ZIP and we'll respond fast.</p>
              <a href="#quote" class="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Check your ZIP code</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Static coverage image -->
        <div class="relative w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <img src="/assets/denver-service-area.svg" alt="Stylized map showing the Denver metro service radius" class="h-full w-full object-cover" />
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/50 to-transparent">
            <div class="p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">50-mile coverage</p>
              <p class="mt-2 text-lg font-bold text-white">From Boulder down to Castle Rock and everywhere between.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredCities = ['Denver', 'Aurora', 'Lakewood', 'Boulder', 'Arvada', 'Littleton', 'Thornton', 'Westminster']
const additionalCitiesCount = 12
</script>
