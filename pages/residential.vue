<template>
  <div>
    <TheHeader />

    <!-- Page Hero - Mini Version -->
    <section
      id="residential-hero"
      class="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-12 sm:py-16 overflow-hidden"
    >
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
            Residential Moving <span class="text-emerald-300">Full-Service Home Moving Crews</span>
          </h1>
          <p class="text-base sm:text-lg text-emerald-50 leading-relaxed mb-8">
            Opek Moving's licensed residential movers handle apartment, condo, and single-family relocations with precision scheduling,
            premium packing materials, and building coordination so moving day stays stress-free.
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

    <!-- Residential Fast Facts -->
    <section id="residential-fast-facts" class="bg-emerald-50 py-12">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-emerald-100/50 border border-emerald-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-emerald-600">Projects Delivered</p>
            <p class="mt-3 text-3xl font-extrabold text-emerald-900 font-display">1,240 homes</p>
            <p class="mt-3 text-sm text-emerald-700 leading-relaxed">
              From historic bungalows in Congress Park to high-rise condos downtown, our teams tailor equipment and building
              protection plans to each home.
            </p>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-emerald-100/50 border border-emerald-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-emerald-600">Average Lead Time</p>
            <p class="mt-3 text-3xl font-extrabold text-emerald-900 font-display">6 days</p>
            <p class="mt-3 text-sm text-emerald-700 leading-relaxed">
              Need a quick move? Our move coordinators confirm elevator reservations and parking permits within 24 hours of booking.
            </p>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-emerald-100/50 border border-emerald-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-emerald-600">Customer Satisfaction</p>
            <p class="mt-3 text-3xl font-extrabold text-emerald-900 font-display">97% 5★ reviews</p>
            <p class="mt-3 text-sm text-emerald-700 leading-relaxed">
              Post-move surveys highlight careful labeling, itemized inventories, and unpacking support as the top reasons
              families recommend Opek.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services spectrum -->
    <section id="residential-services" class="py-16 bg-white">
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
              <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Residential Moving At-A-Glance</span>
            </h2>
            <p class="text-base text-gray-600 leading-relaxed mb-8">Share your move date, origin, destination, and specialty items—our certified home moving consultants assemble the ideal crew, trucks, and protection plan for your household.</p>

            <div class="grid gap-4">
              <!-- Card 1 -->
              <article class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center border border-white/30">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.75l7.5-6 7.5 6v9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5h-3v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V9.75z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-white mb-2 font-display">Apartments &amp; Condos</h3>
                    <p class="text-sm text-emerald-50 leading-relaxed">Reserved freight elevators, certificate of insurance delivery, and arrival windows tuned to your leasing office.</p>
                  </div>
                </div>
              </article>

              <!-- Card 2 -->
              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.75l8.25-6 8.25 6v8.25a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5V12h-4.5v6a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5V9.75z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-gray-900 mb-2 font-display">Family Homes</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Room-by-room packing, appliance disconnects, and bulky storage moves for multi-story homes and garages.</p>
                  </div>
                </div>
              </article>

              <!-- Card 3 -->
              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.7 2.25a.75.75 0 01.6 0l7.5 3.214a.75.75 0 01.45.686V14.3c0 4.745-3.741 7.87-7.677 9.39a.75.75 0 01-.546 0C8.09 22.17 4.35 19.045 4.35 14.3V6.15a.75.75 0 01.45-.686L12.3 2.25z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-gray-900 mb-2 font-display">Long-Distance Prep</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Detailed inventories, staging for line-haul carriers, and last-mile delivery coordination for interstate moves.</p>
                  </div>
                </div>
              </article>

              <!-- Card 4 -->
              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5h4.5a.75.75 0 01.75.75V9a6.75 6.75 0 01-6 6.708V21a.75.75 0 01-.75.75H10.5a.75.75 0 01-.75-.75v-5.292A6.75 6.75 0 013.75 9V5.25a.75.75 0 01.75-.75h4.5z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-gray-900 mb-2 font-display">Special Handling</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">Pianos, safes, gyms, and heirlooms hoisted, padded, and crated by specialty rigging teams.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose Opek -->
    <section id="residential-proof" class="py-20 bg-emerald-950 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1200 400" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#34D399" d="M0,200 L1200,0 L1200,400 L0,400 Z" />
        </svg>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#10B981" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
              <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-2 6h4l-2 4 3 5h-6l3-5-2-4z"></path>
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mb-4">
            Why Denver Families Choose Opek
          </h2>
          <p class="text-base sm:text-lg text-emerald-100/80 leading-relaxed">
            We combine hospitality-level care with organized crews and modern equipment so your home stays protected from first box to final placement.
          </p>
        </div>

        <div class="grid lg:grid-cols-4 gap-6">
          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-emerald-200/90 font-semibold">Trusted Movers</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Certified Crews</h3>
            <p class="text-sm text-emerald-100/80 leading-relaxed">Background-checked team leads with 200+ residential moves completed per year.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-8 7a7 7 0 100-14 7 7 0 000 14z" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-emerald-200/90 font-semibold">Home Protection</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Floor & Door Guards</h3>
            <p class="text-sm text-emerald-100/80 leading-relaxed">Entryways, banisters, and flooring are padded and wrapped before any furniture moves.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 20h14" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-emerald-200/90 font-semibold">Transparent Pricing</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">No Surprise Fees</h3>
            <p class="text-sm text-emerald-100/80 leading-relaxed">Clear, flat-rate or hourly options with detailed arrival windows and crew sizes.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5h2m-1 0v14m4-10a4 4 0 01-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-emerald-200/90 font-semibold">Customer Support</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Move Coordinator</h3>
            <p class="text-sm text-emerald-100/80 leading-relaxed">Dedicated coordinator checks in before, during, and after move day for a smooth experience.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tailored Packages -->
    <section id="residential-packages" class="py-20 bg-emerald-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Move Packages</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900 font-display">Tailored Moving Packages for Every Home</h2>
          <p class="mt-3 text-base sm:text-lg text-emerald-800 leading-relaxed">Pick the level of residential moving support that fits your household. Every package includes vetted movers, floor and door protection, climate-controlled trucks, and proactive updates from your move coordinator.</p>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article class="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-wider text-emerald-500">Essential</p>
            <h3 class="mt-3 text-2xl font-extrabold text-emerald-900 font-display">Apartment Move Essentials</h3>
            <p class="mt-3 text-sm text-emerald-800">Ideal for studios and one-bedroom moves needing the essentials done quickly.</p>
            <ul class="mt-5 space-y-3 text-sm text-emerald-700">
              <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>2-3 movers and a 26' truck</li>
              <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>Disassembly/reassembly of standard furniture</li>
              <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>Padding and shrink-wrap of every piece</li>
            </ul>
          </article>

          <article class="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 p-8 text-white shadow-lg">
            <div class="absolute inset-0 opacity-10" aria-hidden="true">
              <svg viewBox="0 0 400 400" class="h-full w-full" fill="none"><defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#A7F3D0"/><stop offset="100%" stop-color="#10B981"/></linearGradient></defs><rect width="400" height="400" fill="url(#grad)"/></svg>
            </div>
            <div class="relative">
              <p class="text-sm font-semibold uppercase tracking-wider text-emerald-200">Most Popular</p>
              <h3 class="mt-3 text-2xl font-extrabold font-display">Family Home Signature</h3>
              <p class="mt-3 text-sm text-emerald-100">For homes with multiple bedrooms, garages, and specialty furniture that need meticulous packing.</p>
              <ul class="mt-5 space-y-3 text-sm text-emerald-50">
                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>4-6 movers plus a dedicated crew lead</li>
                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>Full kitchen, closet, and fragile packing support</li>
                <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>Home prep with floor runners, door jamb guards, and banister protection</li>
              </ul>
            </div>
          </article>

          <article class="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-wider text-emerald-500">Premium</p>
            <h3 class="mt-3 text-2xl font-extrabold text-emerald-900 font-display">Luxury White-Glove</h3>
            <p class="mt-3 text-sm text-emerald-800">Perfect for estates, art collections, and families relocating with high-touch service expectations.</p>
            <ul class="mt-5 space-y-3 text-sm text-emerald-700">
              <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>On-site project manager on move day</li>
              <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>Custom crating for artwork, pianos, and designer pieces</li>
              <li class="flex items-start gap-2"><svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>Evening unpacking session and donation/dump runs</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Moving Process -->
    <section id="residential-process" class="py-20 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
              <path fill="#ECFDF5" d="M16 6a6 6 0 016 6h-4l6 8 6-8h-4a10 10 0 10-10 10v-4a6 6 0 110-12z"></path>
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-display mb-4">How Our Residential Moves Work</h2>
          <p class="text-base sm:text-lg text-gray-600 leading-relaxed">Every household move follows our proven relocation playbook, covering in-home estimates, packing, loading, transport, and furniture placement so you always know the next step.</p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div class="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">1</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 font-display">Pre-Move Planning</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Virtual or in-home walk-through, checklist review, and customized estimate delivered within hours.</p>
          </div>
          <div class="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">2</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 font-display">Packing & Prep</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Full or partial packing, reusable crates, and labeled boxes ready before moving day.</p>
          </div>
          <div class="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">3</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 font-display">Move Execution</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Crew lead confirms plan, wraps furniture, protects the home, and coordinates load/unload sequence.</p>
          </div>
          <div class="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">4</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 font-display">Settle-In Support</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Placement adjustments, debris haul away, and post-move follow-up to ensure everything feels right.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Move Day Timeline -->
    <section id="residential-timeline" class="py-20 bg-emerald-900">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl text-white">
          <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">What to Expect</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display">Your Move Day Timeline</h2>
          <p class="mt-3 text-base sm:text-lg text-emerald-100 leading-relaxed">We keep you informed at every checkpoint. Here is how a typical residential move flows once our moving trucks and crew members arrive on-site.</p>
        </div>

        <div class="mt-10 space-y-6">
          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">8:00a</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Arrival & Home Walkthrough</h3>
              <p class="mt-1 text-sm text-emerald-100">Crew lead reviews the inventory, confirms fragile items, and lays runners, corner guards, and door pads throughout the home.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">9:30a</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Strategic Loading</h3>
              <p class="mt-1 text-sm text-emerald-100">Furniture and boxes load in a choreographed order to minimize trips and protect high-value pieces. Your coordinator texts ETA updates.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">12:30p</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Transit & Unload Prep</h3>
              <p class="mt-1 text-sm text-emerald-100">We stage the new home with floor protection, confirm room labels, and reset beds or cribs first so family spaces are ready quickly.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">3:00p</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Final Placement & Sign-Off</h3>
              <p class="mt-1 text-sm text-emerald-100">We adjust furniture layout, haul away debris, and capture a quick walkthrough video so you can review and request tweaks after the crew departs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Add-On Services -->
    <section id="residential-addons" class="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="inline-flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
                <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
                <path fill="#ECFDF5" d="M11 9h10l3 5-3 5H11l-3-5 3-5zm5 1a2 2 0 100 4 2 2 0 000-4zm-3 6h6l1.5 2.5L19 21h-6l-1.5-2.5L13 16z"></path>
              </svg>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-display mb-4">Premium Add-Ons & Specialty Care</h2>
            <p class="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Upgrade your residential move with white-glove packing teams, custom crating, storage transfers, and debris removal that protect heirlooms, simplify settling in, and keep every room organized from start to finish.
            </p>

            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 20h14" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-1 font-display">White-Glove Packing</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">Professional packers handle kitchens, closets, and artwork with cataloged inventory sheets.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 20h10M9 8h6l3 8H6l3-8z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-1 font-display">Specialty Item Handling</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">Climate-controlled transport and custom crating for pianos, safes, wine collections, and art.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V5a3 3 0 016 0v2m4 0h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1m3 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-1 font-display">Settling-In Services</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">Furniture assembly, TV mounting, and donation or recycling drop-off once the boxes are unpacked.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2 relative">
            <div class="rounded-[2.5rem] overflow-hidden shadow-2xl border border-emerald-100">
              <img src="/assets/movers-in-denver-min.png" alt="Residential moving crew packing a living room" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white rounded-3xl p-6 shadow-xl border border-emerald-100 w-64">
              <p class="text-sm font-semibold text-gray-900 mb-1">98% Five-Star Reviews</p>
              <p class="text-xs text-gray-500">Based on 250+ post-move surveys completed in 2023.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Denver Neighborhood Expertise -->
    <section id="residential-neighborhoods" class="py-20 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Local Knowledge</span>
            <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-display">Dialed-In Support Across Denver Neighborhoods</h2>
            <p class="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">Every crew is staffed with movers who know the loading rules, parking permits, and quirks of the neighborhoods they service. That means fewer delays and a smoother hand-off in your new home.</p>
            <dl class="mt-8 grid gap-6 sm:grid-cols-2">
              <div class="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
                <dt class="text-sm font-semibold uppercase tracking-wider text-emerald-600">Downtown & LoDo</dt>
                <dd class="mt-2 text-sm text-gray-700">Freight elevator reservations, loading dock scheduling, and after-hours moves to avoid traffic.</dd>
              </div>
              <div class="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <dt class="text-sm font-semibold uppercase tracking-wider text-emerald-600">Park Hill & Stapleton</dt>
                <dd class="mt-2 text-sm text-gray-700">Large crew availability for multi-level homes, plus nursery and playroom setup before bedtime.</dd>
              </div>
              <div class="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <dt class="text-sm font-semibold uppercase tracking-wider text-emerald-600">Highlands & Sunnyside</dt>
                <dd class="mt-2 text-sm text-gray-700">Tight street parking solutions, alley load-ins, and floor protection for historic hardwoods.</dd>
              </div>
              <div class="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <dt class="text-sm font-semibold uppercase tracking-wider text-emerald-600">Suburban Moves</dt>
                <dd class="mt-2 text-sm text-gray-700">Coordinated start times with HOAs, appliance disconnect/reconnect partners, and debris removal.</dd>
              </div>
            </dl>
          </div>
          <div class="relative">
            <div class="overflow-hidden rounded-[2.5rem] border border-emerald-100 shadow-2xl">
              <img src="/assets/packers-and-movers.png" alt="Mover carrying boxes into a Denver home" class="h-full w-full object-cover" />
            </div>
            <div class="absolute -bottom-6 right-0 w-64 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl">
              <p class="text-sm font-semibold text-gray-900">Average 35 minute arrival window</p>
              <p class="mt-1 text-xs text-gray-500">Confirmed through 2023-2024 move data across Denver metro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Areas Section -->
    <ServiceAreasSection />

    <!-- Testimonials -->
    <section id="residential-testimonials" class="py-20 bg-emerald-950 text-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl text-center mx-auto">
          <span class="inline-flex items-center justify-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">Neighbors Love Opek</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display">Residential Stories From Denver Families</h2>
          <p class="mt-3 text-base sm:text-lg text-emerald-100">Five-star service backed by transparency, careful crews, and real support before and after move day.</p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <figure class="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <blockquote class="text-sm text-emerald-100 leading-relaxed">“Opek handled our Wash Park bungalow move in one day, including packing the kitchen. They even reassembled the kids’ bunk beds before dinner.”</blockquote>
            <figcaption class="mt-4 flex items-center gap-3 text-xs text-emerald-200">
              <div class="h-10 w-10 rounded-full bg-emerald-600/40 flex items-center justify-center font-semibold">JR</div>
              <div>
                <p class="font-semibold">Jamie R.</p>
                <p class="text-emerald-200/80">Washington Park</p>
              </div>
            </figcaption>
          </figure>

          <figure class="relative rounded-3xl border border-white/10 bg-emerald-800/40 p-6 shadow-lg">
            <blockquote class="text-sm text-emerald-100 leading-relaxed">“They coordinated a freight elevator in LoDo and wrapped every wall. Zero damage, clear communication, and the crew was genuinely kind.”</blockquote>
            <figcaption class="mt-4 flex items-center gap-3 text-xs text-emerald-200">
              <div class="h-10 w-10 rounded-full bg-emerald-600/40 flex items-center justify-center font-semibold">CL</div>
              <div>
                <p class="font-semibold">Chris L.</p>
                <p class="text-emerald-200/80">Lower Downtown</p>
              </div>
            </figcaption>
          </figure>

          <figure class="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <blockquote class="text-sm text-emerald-100 leading-relaxed">“Our long-distance prep was flawless. Inventory photos, itemized labels, and hand-off notes for our carrier made unpacking a breeze.”</blockquote>
            <figcaption class="mt-4 flex items-center gap-3 text-xs text-emerald-200">
              <div class="h-10 w-10 rounded-full bg-emerald-600/40 flex items-center justify-center font-semibold">MP</div>
              <div>
                <p class="font-semibold">Morgan P.</p>
                <p class="text-emerald-200/80">Greenwood Village</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Planning Resources -->
    <section id="residential-resources" class="py-20 bg-emerald-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl text-center mx-auto">
          <span class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Helpful Guides</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900 font-display">Plan With Confidence</h2>
          <p class="mt-3 text-base sm:text-lg text-emerald-800">Use our moving checklists, packing calculators, and day-of reminders to prepare for every stage of your residential relocation.</p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article class="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h3 class="text-lg font-semibold text-emerald-900 font-display">Move Budget Worksheet</h3>
            <p class="mt-2 text-sm text-emerald-700">Estimate crew size, hours, and specialty add-ons with a downloadable spreadsheet.</p>
            <a href="/#quote" class="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700">Download template
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16M4 12h16M4 20h16" /></svg>
            </a>
          </article>

          <article class="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h3 class="text-lg font-semibold text-emerald-900 font-display">Packing Supply Checklist</h3>
            <p class="mt-2 text-sm text-emerald-700">Know exactly how many boxes, wardrobe cartons, and specialty crates to order.</p>
            <a href="/#sms-quote" class="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700">Text our moving team
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 21l1.8-4A7.944 7.944 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            </a>
          </article>

          <article class="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <h3 class="text-lg font-semibold text-emerald-900 font-display">Move Day Playbook</h3>
            <p class="mt-2 text-sm text-emerald-700">Step-by-step schedule with reminders for pets, utilities, and final walkthroughs.</p>
            <a href="mailto:hello@opekmoving.com" class="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700">Request via email
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l9 6 9-6m-18 8h18V8H3v8z" /></svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="residential-faq" class="py-20 bg-white">
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
  title: 'Residential Moving',
  meta: [
    {
      name: 'description',
      content:
        'Denver residential movers delivering full-service home moving, custom packing, secure loading, specialty handling, storage transfers, and coordinator-led planning for apartments, condos, and single-family homes.'
    }
  ]
})
</script>
