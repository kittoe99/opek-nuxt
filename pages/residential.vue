<template>
  <div>
    <TheHeader />

    <!-- Page Hero - Mini Version -->
    <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16">
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" class="text-white/70 text-xs sm:text-sm mb-6">
          <ol class="flex items-center gap-1.5 sm:gap-2">
            <li><NuxtLink to="/#home" class="hover:text-brand-300 transition">Home</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></li>
            <li><NuxtLink to="/#services" class="hover:text-brand-300 transition">Services</NuxtLink></li>
            <li><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></li>
            <li class="text-brand-300 font-medium">Residential Moving</li>
          </ol>
        </nav>

        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-extrabold tracking-tight text-white font-display mb-4">
            Residential Moving <span class="text-brand-300">Made Simple</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Professional moving services for apartments, condos, and family homes across Denver. Licensed, insured, and trusted by 1,000+ families.
          </p>
          <div class="flex flex-row flex-wrap justify-center gap-3">
            <a href="/#sms-quote" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30 hover:shadow-xl hover:scale-105">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Get Instant Pricing
            </a>
            <a href="/#quote" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all">
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
            <div class="absolute -bottom-4 -right-4 bg-brand-600 text-white rounded-xl p-4 shadow-lg">
              <div class="text-2xl font-bold">4.9★</div>
              <div class="text-xs font-medium">Rating</div>
            </div>
          </div>

          <div>
            <div class="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-100 text-brand-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 sm:w-8 sm:h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-display">Our Moving Services</h2>
            <div class="mt-2 h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-brand-500 to-brand-600"></div>
            <p class="mt-3 text-sm sm:text-base text-slate-600">From labor-only help to full-service moves—we handle it all.</p>

            <div class="mt-8 space-y-3">
              <div class="group relative bg-gradient-to-r from-brand-50 to-white rounded-lg p-4 border-l-4 border-brand-600 hover:shadow-md transition-all duration-300">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-1 font-display">Labor-Only Moves</h3>
                    <p class="text-xs sm:text-sm text-slate-600">Loading help without the truck. Perfect for PODs and DIY moves.</p>
                  </div>
                </div>
              </div>

              <div class="group relative bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-300">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-base font-bold text-slate-900 mb-1 font-display">Apartments & Small Homes</h3>
                    <p class="text-sm text-slate-600">Studios to 2-bedroom moves with full protection.</p>
                  </div>
                </div>
              </div>

              <div class="group relative bg-white rounded-lg p-4 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-300">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-base font-bold text-slate-900 mb-1 font-display">Full-Service Homes</h3>
                    <p class="text-sm text-slate-600">3+ bedroom homes with larger crews.</p>
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
                    <h3 class="text-base font-bold text-slate-900 mb-1 font-display">Packing & Specialty</h3>
                    <p class="text-sm text-slate-600">Packing services, pianos, safes, and heavy items.</p>
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
    <section class="py-20 bg-white">
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
            <p class="mt-4 text-sm sm:text-base md:text-lg text-slate-600">Everything you need to know about our residential moving services</p>
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
