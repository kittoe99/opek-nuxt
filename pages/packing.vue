<template>
  <div>
    <TheHeader />

    <!-- Hero -->
    <section
      id="packing-hero"
      class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 overflow-hidden"
    >
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1200 400" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#38BDF8" d="M0,320 L0,140 L220,60 L480,200 L760,20 L1040,160 L1200,80 L1200,320 Z" />
        </svg>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" class="text-white/70 text-xs sm:text-sm mb-6">
          <ol class="flex items-center gap-1.5 sm:gap-2">
            <li><NuxtLink to="/#home" class="hover:text-brand-300 transition">Home</NuxtLink></li>
            <li>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li><NuxtLink to="/#services" class="hover:text-brand-300 transition">Services</NuxtLink></li>
            <li>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li class="text-brand-300 font-medium">Packing</li>
          </ol>
        </nav>

        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#0EA5E9" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
              <path fill="#E0F2FE" d="M16 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-3 4h6l2 3-2 3h-6l-2-3 2-3z" />
            </svg>
          </div>
          <h1 class="text-3xl leading-tight sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-4">
            Packing <span class="text-brand-300">Built for Move-In Ready Moves</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Senior packing leads, museum-grade materials, and digital inventories create clearly labeled boxes that unpack in perfect room order and protect every item for transport with our moving crews.
          </p>
          <div class="flex flex-row flex-wrap justify-center gap-3">
            <a
              href="/#sms-quote"
              class="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30 hover:shadow-xl hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Instant Pricing
            </a>
            <a
              href="/#quote"
              class="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Packing Fast Facts -->
    <section id="packing-fast-facts" class="bg-sky-50 py-12">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-sky-100/60 border border-sky-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-sky-600">Boxes Packed</p>
            <p class="mt-3 text-3xl font-extrabold text-slate-900 font-display">32,000+</p>
            <p class="mt-3 text-sm text-slate-700 leading-relaxed">
              Custom packing plans for estates, lofts, and mountain homes using reinforced cartons, wardrobe boxes, and art
              crates.
            </p>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-sky-100/60 border border-sky-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-sky-600">Material Quality</p>
            <p class="mt-3 text-3xl font-extrabold text-slate-900 font-display">Certified grade</p>
            <p class="mt-3 text-sm text-slate-700 leading-relaxed">
              We deploy double-walled cartons, museum-grade wrapping, and reusable eco-totes when requested.
            </p>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-sky-100/60 border border-sky-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-sky-600">Same-Day Unpack</p>
            <p class="mt-3 text-3xl font-extrabold text-slate-900 font-display">87% adoption</p>
            <p class="mt-3 text-sm text-slate-700 leading-relaxed">
              Most clients pair our packing crew with same-day setup, closet resets, and haul-away for used materials.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Packing Programs -->
    <section id="packing-programs" class="py-16 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="relative pt-10">
            <div class="absolute -top-2 left-8 z-20">
              <span
                class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-lg shadow-lg"
              >
                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h11a3 3 0 0 1 3 3v7H6a3 3 0 0 1-3-3V7zm11 0 3.4 4.25a2 2 0 0 1 .42 1.25V17a2 2 0 0 0 2 2h1"
                  />
                </svg>
                Packing Crew
              </span>
            </div>
            <div class="absolute -top-12 -left-10 hidden lg:block h-36 w-36 rounded-full bg-gradient-to-br from-brand-200/50 via-brand-300/50 to-brand-400/50 blur-3xl"></div>
            <div class="absolute -bottom-16 -right-16 hidden md:block h-48 w-48 rounded-[36px] border border-brand-200/60"></div>
            <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-700 p-3 shadow-[0_35px_70px_-25px_rgba(14,160,90,0.7)]">
              <div class="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <img src="/assets/Opek.png" alt="Packing specialists wrapping glassware" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-brand-500/40 mix-blend-multiply"></div>
                <div class="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-lg text-white shadow-xl">
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-brand-50/90">Protection</p>
                    <p class="text-sm font-medium text-brand-50">Fragile collections & wardrobe boxes</p>
                  </div>
                  <div class="flex flex-col items-center">
                    <span class="text-2xl font-extrabold leading-none">4.9★</span>
                    <span class="text-[10px] uppercase tracking-[0.25em] text-brand-50/70">Packing Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-sky-400/20 rounded-2xl blur-xl"></div>
              <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-10 h-10">
                  <path fill="#0EA5E9" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
                  <path fill="#E0F2FE" d="M12 9h8l3 4-3 4h-8l-3-4 3-4zm1 1-2 3 2 3h6l2-3-2-3h-6zm3 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
              </div>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">Packing Programs At-A-Glance</h2>
            <p class="text-base text-slate-600 leading-relaxed mb-8">
              Tell us which rooms, collections, and fixtures matter most. We tailor packing crews, specialty materials, and labeling systems to match your moving timeline and unpacking plan.
            </p>

            <div class="grid gap-4">
              <article class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center border border-white/30">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4v9l8 4 8-4V7z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-white mb-2 font-display">Whole Home Packing</h3>
                    <p class="text-sm text-sky-50 leading-relaxed">Dedicated leads map each room, safeguard furnishings, and deliver color-coded labels for seamless unloading.</p>
                  </div>
                </div>
              </article>

              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-sky-100 p-6 shadow-md hover:shadow-lg hover:border-sky-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l3 3" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-slate-900 mb-2 font-display">Kitchen Reset</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">Specialty dish packs, spice cataloging, and counter setups so the kitchen fires up on day one.</p>
                  </div>
                </div>
              </article>

              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-sky-100 p-6 shadow-md hover:shadow-lg hover:border-sky-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 12h14M5 16h14" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-slate-900 mb-2 font-display">Luxury & Collections</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">Climate-aware wraps, bar-coded photo logs, and white-glove wardrobe transfers for high-value collections.</p>
                  </div>
                </div>
              </article>

              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-sky-100 p-6 shadow-md hover:shadow-lg hover:border-sky-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l2 2m7-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-slate-900 mb-2 font-display">Last-Minute Relief</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">Rapid-response crews for rush timelines, move-out cleaning coordination, and donation drop-offs.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof Points -->
    <section id="packing-proof" class="py-20 bg-slate-950 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 1200 400" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#38BDF8" d="M0,200 L1200,0 L1200,400 L0,400 Z" />
        </svg>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#0EA5E9" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
              <path fill="#E0F2FE" d="M12 8h8l2 3-2 3h-8l-2-3 2-3zm4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mb-4">Why Denver Families Trust Our Packers</h2>
          <p class="text-base sm:text-lg text-slate-200/90 leading-relaxed">We treat every drawer like it’s our own—professionally packed, cataloged, and protected for a stress-free move-in with our moving crews.</p>
        </div>

        <div class="grid lg:grid-cols-4 gap-6">
          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-sky-200/90 font-semibold">Certified Crews</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Trained Pack Pros</h3>
            <p class="text-sm text-slate-100/80 leading-relaxed">Packing-only teams complete 200+ home projects each year with recurring training.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.75l7.5-6 7.5 6v9.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75z" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-sky-200/90 font-semibold">Premium Materials</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Right Box Every Time</h3>
            <p class="text-sm text-slate-100/80 leading-relaxed">Wardrobe cartons, dish packs, and specialty foam ensure fragile items arrive intact.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 0 0-8 0v4m-3 0h14" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-sky-200/90 font-semibold">Detailed Labeling</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Digital Inventory</h3>
            <p class="text-sm text-slate-100/80 leading-relaxed">QR-coded labels map every box to rooms, contents, and unpacking priorities.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-sky-200/90 font-semibold">Flexible Scheduling</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Evening & Weekend Crews</h3>
            <p class="text-sm text-slate-100/80 leading-relaxed">We pack around school drop-offs and work hours, keeping daily life on track.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Packages -->
    <section id="packing-packages" class="py-20 bg-sky-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">Packing Packages</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">Choose the Support That Fits</h2>
          <p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">Every package includes licensed packers, premium materials, home protection, and next-day check-ins from your move coordinator.</p>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article class="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-wider text-sky-500">Essential</p>
            <h3 class="mt-3 text-2xl font-extrabold text-slate-900 font-display">Essentials Bundle</h3>
            <p class="mt-3 text-sm text-slate-600">Perfect for small homes or partial packing projects focused on high-touch areas.</p>
            <ul class="mt-5 space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-sky-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Kitchen & fragile room focus (8-12 hours)
              </li>
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-sky-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Dish packs, glass dividers, wardrobe boxes included
              </li>
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-sky-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Digital labels with first-night essentials callouts
              </li>
            </ul>
          </article>

          <article class="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-600 p-8 text-white shadow-lg">
            <div class="absolute inset-0 opacity-10" aria-hidden="true">
              <svg viewBox="0 0 400 400" class="h-full w-full" fill="none">
                <defs>
                  <linearGradient id="skygrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#BAE6FD" />
                    <stop offset="100%" stop-color="#0EA5E9" />
                  </linearGradient>
                </defs>
                <rect width="400" height="400" fill="url(#skygrad)" />
              </svg>
            </div>
            <div class="relative">
              <p class="text-sm font-semibold uppercase tracking-wider text-sky-200">Most Loved</p>
              <h3 class="mt-3 text-2xl font-extrabold font-display">Signature Kitchen-to-Closet</h3>
              <p class="mt-3 text-sm text-sky-100">Best for households with multiple bedrooms, full kitchens, and decor-heavy living spaces.</p>
              <ul class="mt-5 space-y-3 text-sm text-sky-50">
                <li class="flex items-start gap-2">
                  <svg class="mt-1 h-4 w-4 text-sky-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                  Two-day packing team with lead specialist
                </li>
                <li class="flex items-start gap-2">
                  <svg class="mt-1 h-4 w-4 text-sky-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                  Closet cataloging and hanging garment transfer
                </li>
                <li class="flex items-start gap-2">
                  <svg class="mt-1 h-4 w-4 text-sky-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                  Pantry organization bins and spice inventory sheet
                </li>
              </ul>
            </div>
          </article>

          <article class="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-wider text-sky-500">Premium</p>
            <h3 class="mt-3 text-2xl font-extrabold text-slate-900 font-display">Designer & Collections</h3>
            <p class="mt-3 text-sm text-slate-600">Ideal for estates, art collectors, and high-value inventory requiring specialized packing.</p>
            <ul class="mt-5 space-y-3 text-sm text-slate-700">
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-sky-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Custom crating and foam-in-place options
              </li>
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-sky-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Climate-controlled storage coordination
              </li>
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-sky-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                White-glove unpacking with stylist or designer collaboration
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="packing-process" class="py-20 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#0EA5E9" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
              <path fill="#E0F2FE" d="M16 6a6 6 0 0 1 6 6h-4l6 8 6-8h-4a10 10 0 1 0-10 10v-4a6 6 0 1 1 0-12z" />
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">How Our Packing Service Works</h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">Our coordinators guide every step so you know what to expect before, during, and after packing day.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="relative rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white font-bold">1</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Consultation & Plan</h3>
            <p class="text-sm text-slate-600 leading-relaxed">A packing specialist tours your home (virtual or onsite) and maps rooms, timelines, and specialty care instructions.</p>
          </div>
          <div class="relative rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white font-bold">2</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Supply Delivery</h3>
            <p class="text-sm text-slate-600 leading-relaxed">We drop off cartons, wardrobe boxes, and specialty wraps in advance so you can stage personal items if needed.</p>
          </div>
          <div class="relative rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white font-bold">3</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Packing & Labeling</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Crew leads manage each room, photograph valuables, and label every box to match your unpacking priorities.</p>
          </div>
          <div class="relative rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white font-bold">4</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Arrival & Unpack Options</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Choose day-of delivery staging, white-glove unpacking, or supply pickup once you’re settled.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section id="packing-timeline" class="py-20 bg-slate-900">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl text-white">
          <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">Packing Day Timeline</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display">What Packing Day Looks Like</h2>
          <p class="mt-3 text-base sm:text-lg text-slate-100 leading-relaxed">We communicate at every checkpoint so you always know progress and next steps.</p>
        </div>

        <div class="mt-10 space-y-6">
          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-sky-200">8:00a</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Crew Arrival & Home Walkthrough</h3>
              <p class="mt-1 text-sm text-slate-100">Lead reviews staging plan, confirms priority rooms, and installs floor, door, and banister protection.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-sky-200">10:30a</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Room-by-Room Packing</h3>
              <p class="mt-1 text-sm text-slate-100">Teams label and seal boxes, photograph valuables, and update your digital checklist as rooms close out.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-sky-200">1:30p</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Quality Check & Staging</h3>
              <p class="mt-1 text-sm text-slate-100">Lead confirms labels, ensures essential boxes stay accessible, and stages items for movers or delivery.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-sky-200">3:30p</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Debrief & Next Steps</h3>
              <p class="mt-1 text-sm text-slate-100">We review the inventory, outline unpack options, and schedule supply pickup or day-of unpacking support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Add-On Services -->
    <section id="packing-addons" class="py-20 bg-gradient-to-br from-sky-50 via-white to-sky-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="inline-flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
                <path fill="#0EA5E9" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
                <path fill="#E0F2FE" d="M11 9h10l3 5-3 5H11l-3-5 3-5zm5 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 6h6l1.5 2.5L19 21h-6l-1.5-2.5L13 16z" />
              </svg>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">Add-On Packing Services</h2>
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">Mix and match enhancements for even more support before, during, or after your move.</p>

            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1 font-display">Evening Unpack Parties</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">Crew returns after delivery to set up beds, kitchens, and playrooms so you sleep comfortably night one.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1 font-display">Eco Crate Rentals</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">Reusable crates delivered with rolling dollies, returned once you are unpacked for zero cardboard waste.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 20h14" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1 font-display">Donation & Recycling Runs</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">We sort items for local charities and recycling centers, providing receipts for your records.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5h6l3 8H6l3-8z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1 font-display">Move-Day Snack Kits</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">Stock your crew and family with curated snacks, hydration stations, and kid-friendly activity packs.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <div class="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-10 shadow-xl">
              <div class="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 400" class="h-full w-full" fill="none">
                  <defs>
                    <linearGradient id="packOverlay" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#BAE6FD" />
                      <stop offset="100%" stop-color="#0EA5E9" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="400" fill="url(#packOverlay)" />
                </svg>
              </div>
              <div class="relative space-y-8">
                <div>
                  <p class="text-sm uppercase tracking-widest text-sky-200">Client Love</p>
                  <p class="mt-3 text-lg font-semibold">“Our kitchen was unpacked and labeled before the movers arrived. Dinner that night felt normal thanks to their team.”</p>
                  <p class="mt-3 text-sm text-sky-200">— Hilltop Homeowner</p>
                </div>
                <div class="border-t border-white/20 pt-8">
                  <p class="text-sm uppercase tracking-widest text-sky-200">Designer Partner</p>
                  <p class="mt-3 text-lg font-semibold">“They cataloged every decor piece and worked alongside us to recreate the look in our client’s new home.”</p>
                  <p class="mt-3 text-sm text-sky-200">— Interior Stylist, Cherry Creek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Planning Resources -->
    <section id="packing-resources" class="py-20 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">Planning Resources</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">Helpful Guides & Checklists</h2>
          <p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">Use these planning tools to keep your household organized before the movers arrive.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article class="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 font-display mb-2">Packing Countdown Calendar</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Week-by-week reminders for decluttering, staging, and packing prep.</p>
            <a href="#" class="mt-4 inline-flex items-center gap-2 text-brand-600 font-semibold">Download PDF
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0-4 4m4-4H7" />
              </svg>
            </a>
          </article>

          <article class="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 font-display mb-2">First-Night Essentials List</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Checklist for toiletries, chargers, and snacks so nothing gets buried.</p>
            <a href="#" class="mt-4 inline-flex items-center gap-2 text-brand-600 font-semibold">Share with Family
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0-4 4m4-4H7" />
              </svg>
            </a>
          </article>

          <article class="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 font-display mb-2">Labeling Legend Key</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Color-coded system to align boxes with rooms, priority, and unpack owners.</p>
            <a href="#" class="mt-4 inline-flex items-center gap-2 text-brand-600 font-semibold">Open Template
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0-4 4m4-4H7" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- Service Areas -->
    <ServiceAreasSection />

    <!-- FAQ -->
    <section id="packing-faq" class="py-20 bg-slate-50">
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
            <p class="mt-4 text-sm sm:text-base md:text-lg text-slate-600">Everything you need to know about our packing services</p>
          </div>

          <div class="mb-12 relative rounded-2xl overflow-hidden">
            <div class="aspect-[21/9] relative">
              <img src="/assets/Opek.png" alt="Customer service and support" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <p class="text-base sm:text-lg md:text-xl font-bold">Have questions? We're here to help!</p>
                <p class="text-xs sm:text-sm text-white/90 mt-2">Our team is available to answer all your packing questions</p>
              </div>
            </div>
          </div>

          <PackingFAQ />
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'packing',
  meta: [
    {
      name: 'description',
      content:
        'Denver packing specialists handling whole-home boxing, kitchen organization, luxury collection protection, digital inventories, and same-day unpacking that pair seamlessly with our moving crews.'
    }
  ]
})
</script>
