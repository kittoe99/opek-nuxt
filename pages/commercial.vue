<template>
  <div>
    <TheHeader />

    <!-- Page Hero -->
    <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl"></div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" class="text-white/70 text-xs sm:text-sm mb-6">
          <ol class="flex items-center gap-1.5 sm:gap-2">
            <li><NuxtLink to="/#home" class="hover:text-brand-300 transition">Home</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></li>
            <li><NuxtLink to="/#services" class="hover:text-brand-300 transition">Services</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></li>
            <li class="text-brand-300 font-medium">Commercial Moving</li>
          </ol>
        </nav>

        <div class="max-w-4xl">
          <!-- Icon Badge -->
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-600/20 border-2 border-brand-500/30 backdrop-blur-sm mb-6">
            <svg class="w-8 h-8 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          
          <h1 class="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight font-extrabold tracking-tight text-white font-display mb-5">
            Commercial Moving <span class="text-brand-300">With Minimal Downtime</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Professional office moving services for businesses across Denver. Coordinated scheduling, equipment protection, and weekend moves available.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="/#sms-quote" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30 hover:shadow-xl hover:scale-105">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Get Instant Pricing
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </a>
            <a href="/#quote" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm sm:text-base font-bold text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all">
              Request Full Quote
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services spectrum -->
    <section class="py-16 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="relative">
            <div class="aspect-[4/5] rounded-xl overflow-hidden">
              <img src="/assets/Opek.png" alt="Professional commercial moving services" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-4 -right-4 bg-brand-600 text-white rounded-xl p-4 shadow-lg">
              <div class="text-2xl font-bold">4.9★</div>
              <div class="text-xs font-medium">Rating</div>
            </div>
          </div>

          <div>
            <div class="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-100 text-brand-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 sm:w-8 sm:h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-display">Our Commercial Services</h2>
            <div class="mt-2 h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-brand-500 to-brand-600"></div>
            <p class="mt-3 text-sm sm:text-base text-slate-600">From small offices to large corporate relocations—we handle it all.</p>

            <div class="mt-8 space-y-3">
              <div class="group relative bg-gradient-to-r from-brand-50 to-white rounded-lg p-4 border-l-4 border-brand-600 hover:shadow-md transition-all duration-300">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-1 font-display">Office Relocations</h3>
                    <p class="text-xs sm:text-sm text-slate-600">Complete office moves with labeled packing and coordinated scheduling.</p>
                  </div>
                </div>
              </div>

              <div class="group relative bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-300">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-base font-bold text-slate-900 mb-1 font-display">Retail & Showrooms</h3>
                    <p class="text-sm text-slate-600">Store relocations with fixture and inventory protection.</p>
                  </div>
                </div>
              </div>

              <div class="group relative bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-300">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-base font-bold text-slate-900 mb-1 font-display">Warehouse & Storage</h3>
                    <p class="text-sm text-slate-600">Large-scale equipment and inventory moves.</p>
                  </div>
                </div>
              </div>

              <div class="group relative bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-300">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-base font-bold text-slate-900 mb-1 font-display">After-Hours & Weekends</h3>
                    <p class="text-sm text-slate-600">Evening and weekend moves to minimize business disruption.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Areas Section -->
    <ServiceAreasSection />

    <!-- FAQ -->
    <section class="py-20 bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <div class="text-center mb-12">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display">Frequently Asked Questions</h2>
            <div class="mx-auto mt-3 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-brand-500 to-brand-600"></div>
            <p class="mt-4 text-sm sm:text-base md:text-lg text-slate-600">Everything you need to know about our commercial moving services</p>
          </div>
          
          <div class="mb-12 relative rounded-2xl overflow-hidden">
            <div class="aspect-[21/9] relative">
              <img src="/assets/Opek.png" alt="Customer service and support" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <p class="text-base sm:text-lg md:text-xl font-bold">Have questions? We're here to help!</p>
                <p class="text-xs sm:text-sm text-white/90 mt-2">Our team is available to answer all your moving questions</p>
              </div>
            </div>
          </div>
          
          <CommercialFAQ />
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'Commercial Moving | Opek Moving',
  meta: [
    { name: 'description', content: 'Commercial movers in Denver for offices, retail, and warehouses. Labeled packing, equipment protection, minimal downtime, and coordinated scheduling.' }
  ]
})
</script>
