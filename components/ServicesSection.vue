<template>
  <section id="services" class="relative py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <div class="mx-auto mb-6 h-1 w-24 rounded-full bg-emerald-200"></div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6">
          <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Our Services</span>
        </h2>

        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Professional moving solutions across <span class="font-semibold text-emerald-700">Denver's landscape</span>, delivered with care and precision
        </p>
      </div>

      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1: Residential -->
        <article class="group flex flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div class="relative h-48 overflow-hidden">
            <img src="/assets/Opek.png" alt="Residential Moving" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <div class="flex flex-1 flex-col justify-between gap-8 p-8">
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="h-6 w-6">
                    <path fill="currentColor" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
                    <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-slate-900">Residential Moving</h3>
              </div>
              <p class="text-sm leading-relaxed text-slate-600">Careful handling, clean pads, and efficient loading—from studios to family homes.</p>
            </div>

            <NuxtLink to="/residential" class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Card 2: Commercial -->
        <article class="group flex flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div class="relative h-48 overflow-hidden">
            <img src="/assets/Opek.png" alt="Commercial Moving" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <div class="flex flex-1 flex-col justify-between gap-8 p-8">
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="h-6 w-6">
                    <path fill="currentColor" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
                    <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-slate-900">Commercial Moving</h3>
              </div>
              <p class="text-sm leading-relaxed text-slate-600">Minimal downtime, organized labeling, and protective materials for equipment.</p>
            </div>

            <NuxtLink to="/commercial" class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Card 3: Packing -->
        <article class="group flex flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div class="relative h-48 overflow-hidden">
            <img src="/assets/Opek.png" alt="Packing Services" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>

          <div class="flex flex-1 flex-col justify-between gap-8 p-8">
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="h-6 w-6">
                    <path fill="currentColor" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
                    <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-semibold text-slate-900">Packing Services</h3>
              </div>
              <p class="text-sm leading-relaxed text-slate-600">Full and partial packing with sturdy boxes and eco-friendly materials.</p>
            </div>

            <NuxtLink to="/packing" class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
