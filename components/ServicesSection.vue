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
        <article class="relative group overflow-hidden rounded-3xl bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
          <!-- Mountain Pattern Background -->
          <div class="absolute inset-0 opacity-5">
            <svg viewBox="0 0 400 300" class="w-full h-full" preserveAspectRatio="none">
              <path fill="#059669" d="M0,300 L0,150 L100,80 L200,180 L300,60 L400,140 L400,300 Z"/>
            </svg>
          </div>
          
          <!-- Content -->
          <div class="relative p-6 sm:p-8">
            <!-- Icon with map pin -->
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-emerald-100 rounded-2xl blur-xl opacity-50"></div>
              <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
            </div>
            
            <h3 class="text-2xl font-extrabold text-gray-900 mb-3">Residential Moving</h3>
            <p class="text-gray-600 leading-relaxed mb-6">Careful handling, clean pads, and efficient loading—from studios to family homes.</p>
            
            <NuxtLink to="/residential" class="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 group/link">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 group-hover/link:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Card 2: Commercial -->
        <article class="relative group overflow-hidden rounded-3xl bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
          <!-- Mountain Pattern Background -->
          <div class="absolute inset-0 opacity-5">
            <svg viewBox="0 0 400 300" class="w-full h-full" preserveAspectRatio="none">
              <path fill="#059669" d="M0,300 L0,120 L120,50 L240,150 L360,30 L400,100 L400,300 Z"/>
            </svg>
          </div>
          
          <!-- Content -->
          <div class="relative p-6 sm:p-8">
            <!-- Icon with map pin -->
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-emerald-100 rounded-2xl blur-xl opacity-50"></div>
              <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
            </div>
            
            <h3 class="text-2xl font-extrabold text-gray-900 mb-3">Commercial Moving</h3>
            <p class="text-gray-600 leading-relaxed mb-6">Minimal downtime, organized labeling, and protective materials for equipment.</p>
            
            <NuxtLink to="/commercial" class="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 group/link">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 group-hover/link:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- Card 3: Packing -->
        <article class="relative group overflow-hidden rounded-3xl bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
          <!-- Mountain Pattern Background -->
          <div class="absolute inset-0 opacity-5">
            <svg viewBox="0 0 400 300" class="w-full h-full" preserveAspectRatio="none">
              <path fill="#059669" d="M0,300 L0,160 L80,100 L160,190 L240,70 L320,140 L400,90 L400,300 Z"/>
            </svg>
          </div>
          
          <!-- Content -->
          <div class="relative p-6 sm:p-8">
            <!-- Icon with map pin -->
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-emerald-100 rounded-2xl blur-xl opacity-50"></div>
              <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
              </div>
            </div>
            
            <h3 class="text-2xl font-extrabold text-gray-900 mb-3">Packing Services</h3>
            <p class="text-gray-600 leading-relaxed mb-6">Full and partial packing with sturdy boxes and eco-friendly materials.</p>
            
            <NuxtLink to="/packing" class="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 group/link">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 group-hover/link:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
