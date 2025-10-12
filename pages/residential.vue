<template>
  <div>
    <TheHeader />

    <!-- Page Hero - Mini Version -->
    <section class="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-12 sm:py-16 overflow-hidden">
      <!-- Mountain Pattern Background -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1200 400" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#10B981" d="M0,400 L0,180 L250,80 L500,220 L750,40 L1000,160 L1200,100 L1200,400 Z"/>
        </svg>
      </div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" class="text-emerald-100/70 text-xs sm:text-sm mb-6">
          <ol class="flex items-center gap-1.5 sm:gap-2">
            <li><NuxtLink to="/#home" class="hover:text-emerald-200 transition">Home</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></li>
            <li><NuxtLink to="/#services" class="hover:text-emerald-200 transition">Services</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></li>
            <li class="text-emerald-300 font-medium">Residential Moving</li>
          </ol>
        </nav>

        <div class="text-center max-w-4xl mx-auto">
          <!-- Map Pin Icon -->
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#10B981" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
              <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
            </svg>
          </div>
          
          <h1 class="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-extrabold tracking-tight text-white font-display mb-4">
            Residential Moving <span class="text-emerald-300">Made Simple</span>
          </h1>
          <p class="text-base sm:text-lg text-emerald-50 leading-relaxed mb-8">
            Professional moving services for apartments, condos, and family homes across Denver. Licensed, insured, and trusted by 1,000+ families.
          </p>
          <div class="flex flex-row flex-wrap justify-center gap-3">
            <a href="/#sms-quote" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white hover:from-emerald-700 hover:to-emerald-600 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-105">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Get Instant Pricing
            </a>
            <a href="/#quote" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white border-2 border-emerald-400/30 hover:bg-white/20 hover:border-emerald-400/50 transition-all">
              Request Quote
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
              <img src="/assets/Opek.png" alt="Professional moving services" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-4 -right-4 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-xl p-4 shadow-lg">
              <div class="text-2xl font-bold">4.9★</div>
              <div class="text-xs font-medium">Rating</div>
            </div>
          </div>

          <div>
            <!-- Map Pin Icon -->
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-xl"></div>
              <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-10 h-10">
                  <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
                  <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
                </svg>
              </div>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-display mb-4">
              <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Our Moving Services</span>
            </h2>
            <p class="text-base text-gray-600 leading-relaxed mb-8">From labor-only help to full-service moves—we handle it all.</p>

            <div class="grid gap-4">
              <!-- Card 1 -->
              <article class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center border border-white/30">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-white mb-2 font-display">Labor-Only Moves</h3>
                    <p class="text-sm text-emerald-50 leading-relaxed">Loading help without the truck. Perfect for PODs and DIY moves.</p>
                  </div>
                </div>
              </article>

              <!-- Card 2 -->
              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-gray-900 mb-2 font-display">Apartments & Small Homes</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Studios to 2-bedroom moves with full protection.</p>
                  </div>
                </div>
              </article>

              <!-- Card 3 -->
              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-gray-900 mb-2 font-display">Full-Service Homes</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">3+ bedroom homes with larger crews.</p>
                  </div>
                </div>
              </article>

              <!-- Card 4 -->
              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-gray-900 mb-2 font-display">Packing & Specialty</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Packing services, pianos, safes, and heavy items.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Areas Section -->
    <ServiceAreasSection />

    <!-- FAQ -->
    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <div class="text-center mb-12">
            <!-- Map Pin Icon -->
            <div class="inline-flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
                <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
                <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
              </svg>
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4">
              <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h2>
            <p class="mt-4 text-sm sm:text-base md:text-lg text-gray-600">Everything you need to know about our residential moving services</p>
          </div>
          
          <div class="mb-12 relative rounded-2xl overflow-hidden">
            <div class="aspect-[21/9] relative">
              <img src="/assets/Opek.png" alt="Customer service and support" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/40 to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <p class="text-base sm:text-lg md:text-xl font-bold">Have questions? We're here to help!</p>
                <p class="text-xs sm:text-sm text-white/90 mt-2">Our team is available to answer all your moving questions</p>
              </div>
            </div>
          </div>
          
          <ResidentialFAQ />
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'Residential Moving | Opek Moving',
  meta: [
    { name: 'description', content: 'Residential moving in Denver by Opek Moving. From labor-only help to full-service moves for apartments, condos, and family homes. Floor and door protection, trained crews, and fast quotes.' }
  ]
})
</script>
