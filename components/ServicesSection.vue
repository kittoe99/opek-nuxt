<template>
  <section id="services" class="relative py-16 sm:py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
    <!-- Decorative Elements with Mountain Theme -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Subtle mountain shapes in background -->
      <div class="absolute -bottom-20 left-0 right-0 h-96 opacity-5">
        <svg viewBox="0 0 1200 400" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#059669" d="M0,400 L0,200 L200,100 L400,250 L600,50 L800,200 L1000,150 L1200,300 L1200,400 Z"/>
        </svg>
      </div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Three Map Pins in a Row -->
        <div class="flex justify-center items-center gap-4 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 opacity-40 transform -rotate-12 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
            <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-24 h-24 drop-shadow-2xl transform hover:scale-110 transition-all duration-300">
            <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
            <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 opacity-40 transform rotate-12 hover:opacity-100 hover:scale-110 transition-all duration-300">
            <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
            <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
          </svg>
        </div>
        
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6">
          <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Our Services</span>
        </h2>
        
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Professional moving solutions across <span class="font-semibold text-emerald-700">Denver's landscape</span>, delivered with care and precision
        </p>
      </div>
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1: Residential -->
        <article class="relative group overflow-hidden rounded-3xl h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300">
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img src="/assets/Opek.png" alt="Residential Moving" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-900/80 to-emerald-950/95"></div>
          
          <!-- Content -->
          <div class="relative h-full p-8 flex flex-col justify-between">
            <div>
              <!-- Map Pin Icon -->
              <div class="relative inline-flex mb-5">
                <div class="absolute inset-0 bg-emerald-400/30 rounded-2xl blur-xl"></div>
                <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-9 h-9">
                    <path fill="#10B981" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
                    <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-2xl font-extrabold text-white mb-3">Residential Moving</h3>
              <p class="text-emerald-50 text-sm leading-relaxed">Careful handling, clean pads, and efficient loading—from studios to family homes.</p>
            </div>
            
            <NuxtLink to="/residential" class="inline-flex items-center gap-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-xl transition-all group-hover:scale-105 shadow-lg shadow-emerald-600/30 w-fit">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Card 2: Commercial -->
        <article class="relative group overflow-hidden rounded-3xl h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300">
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img src="/assets/Opek.png" alt="Commercial Moving" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-900/80 to-emerald-950/95"></div>
          
          <!-- Content -->
          <div class="relative h-full p-8 flex flex-col justify-between">
            <div>
              <!-- Map Pin Icon -->
              <div class="relative inline-flex mb-5">
                <div class="absolute inset-0 bg-emerald-400/30 rounded-2xl blur-xl"></div>
                <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-9 h-9">
                    <path fill="#10B981" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
                    <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-2xl font-extrabold text-white mb-3">Commercial Moving</h3>
              <p class="text-emerald-50 text-sm leading-relaxed">Minimal downtime, organized labeling, and protective materials for equipment.</p>
            </div>
            
            <NuxtLink to="/commercial" class="inline-flex items-center gap-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-xl transition-all group-hover:scale-105 shadow-lg shadow-emerald-600/30 w-fit">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Card 3: Packing -->
        <article class="relative group overflow-hidden rounded-3xl h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300">
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img src="/assets/Opek.png" alt="Packing Services" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-900/80 to-emerald-950/95"></div>
          
          <!-- Content -->
          <div class="relative h-full p-8 flex flex-col justify-between">
            <div>
              <!-- Map Pin Icon -->
              <div class="relative inline-flex mb-5">
                <div class="absolute inset-0 bg-emerald-400/30 rounded-2xl blur-xl"></div>
                <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-9 h-9">
                    <path fill="#10B981" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
                    <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-2xl font-extrabold text-white mb-3">Packing Services</h3>
              <p class="text-emerald-50 text-sm leading-relaxed">Full and partial packing with sturdy boxes and eco-friendly materials.</p>
            </div>
            
            <NuxtLink to="/packing" class="inline-flex items-center gap-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-xl transition-all group-hover:scale-105 shadow-lg shadow-emerald-600/30 w-fit">
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
