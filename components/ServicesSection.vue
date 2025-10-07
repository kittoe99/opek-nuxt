<template>
  <section id="services" class="relative py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <rect x="3" y="9" width="11" height="6" rx="1" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 11h3l2 2v2h-5v-4z" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="7.5" cy="17.5" r="1.5" />
            <circle cx="16.5" cy="17.5" r="1.5" />
          </svg>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">Our Services</h2>
        <div class="mx-auto mt-2 h-1 w-16 rounded bg-brand-600"></div>
        <p class="mt-4 text-base text-slate-600">Professional moving solutions tailored to your needs</p>
      </div>
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1: Residential -->
        <article class="relative group overflow-hidden rounded-3xl h-[220px] sm:h-[280px] lg:h-[340px]">
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img src="/assets/Opek.png" alt="Residential Moving" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900/95"></div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-30 transition duration-300 blur-xl"></div>
          
          <!-- Content -->
          <div class="relative h-full p-4 sm:p-6 flex flex-col justify-between border border-white/10 rounded-3xl">
            <div>
              <div class="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-white mb-3 sm:mb-4 border border-white/20 group-hover:bg-brand-600 group-hover:border-brand-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white mb-2 sm:mb-3">Residential Moving</h3>
              <p class="text-sm text-slate-200 leading-relaxed">Careful handling, clean pads, and efficient loading—from studios to family homes.</p>
            </div>
            
            <NuxtLink to="/residential" class="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl transition-all group-hover:scale-105 shadow-lg shadow-brand-600/30 w-fit">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Card 2: Commercial -->
        <article class="relative group overflow-hidden rounded-3xl h-[220px] sm:h-[280px] lg:h-[340px]">
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img src="/assets/Opek.png" alt="Commercial Moving" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900/95"></div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-30 transition duration-300 blur-xl"></div>
          
          <!-- Content -->
          <div class="relative h-full p-4 sm:p-6 flex flex-col justify-between border border-white/10 rounded-3xl">
            <div>
              <div class="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-white mb-3 sm:mb-4 border border-white/20 group-hover:bg-brand-600 group-hover:border-brand-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 class="text-2xl font-extrabold text-white mb-3">Commercial Moving</h3>
              <p class="text-sm text-slate-200 leading-relaxed">Minimal downtime, organized labeling, and protective materials for equipment.</p>
            </div>
            
            <NuxtLink to="/commercial" class="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl transition-all group-hover:scale-105 shadow-lg shadow-brand-600/30 w-fit">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Card 3: Packing -->
        <article class="relative group overflow-hidden rounded-3xl h-[220px] sm:h-[280px] lg:h-[340px]">
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img src="/assets/Opek.png" alt="Packing Services" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900/95"></div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-30 transition duration-300 blur-xl"></div>
          
          <!-- Content -->
          <div class="relative h-full p-4 sm:p-6 flex flex-col justify-between border border-white/10 rounded-3xl">
            <div>
              <div class="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-white mb-3 sm:mb-4 border border-white/20 group-hover:bg-brand-600 group-hover:border-brand-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white mb-2 sm:mb-3">Packing Services</h3>
              <p class="text-sm text-slate-200 leading-relaxed">Full and partial packing with sturdy boxes and eco-friendly materials.</p>
            </div>
            
            <NuxtLink to="/packing" class="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl transition-all group-hover:scale-105 shadow-lg shadow-brand-600/30 w-fit">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
