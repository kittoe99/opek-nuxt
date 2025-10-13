<template>
  <div>
    <TheHeader />

    <!-- Hero -->
    <section
      id="commercial-hero"
      class="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-12 sm:py-16 overflow-hidden"
    >
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1200 400" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#10B981" d="M0,400 L0,180 L250,80 L500,220 L750,40 L1000,160 L1200,100 L1200,400 Z" />
        </svg>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" class="text-emerald-100/70 text-xs sm:text-sm mb-6">
          <ol class="flex items-center gap-1.5 sm:gap-2">
            <li><NuxtLink to="/#home" class="hover:text-emerald-200 transition">Home</NuxtLink></li>
            <li>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li><NuxtLink to="/#services" class="hover:text-emerald-200 transition">Services</NuxtLink></li>
            <li>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li class="text-emerald-300 font-medium">Commercial Moving</li>
          </ol>
        </nav>

        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#10B981" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
              <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm4 5h-8l-2 3 6 7 6-7-2-3z" />
            </svg>
          </div>

          <h1 class="text-3xl leading-tight sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-4">
            Commercial Moving <span class="text-emerald-300">Engineered for Continuity</span>
          </h1>
          <p class="text-base sm:text-lg text-emerald-50 leading-relaxed mb-8">
            Opek Moving's commercial relocation specialists coordinate project managers, union-compliant crews, IT disconnects,
            and freight elevator access so your office, lab, or studio keeps working while we execute overnight or weekend moves.
          </p>
          <div class="flex flex-row flex-wrap justify-center gap-3">
            <a
              href="/#sms-quote"
              class="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white hover:from-emerald-700 hover:to-emerald-600 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Instant Pricing
            </a>
            <a
              href="/#quote"
              class="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white border-2 border-emerald-400/30 hover:bg-white/20 hover:border-emerald-400/50 transition-all"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Commercial Fast Facts -->
    <section id="commercial-fast-facts" class="bg-emerald-50 py-12">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-emerald-100/50 border border-emerald-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-emerald-600">Workstations Relocated</p>
            <p class="mt-3 text-3xl font-extrabold text-emerald-900 font-display">18,500+</p>
            <p class="mt-3 text-sm text-emerald-700 leading-relaxed">
              Sequenced overnight moves with IT disconnect / reconnect services for SaaS, finance, and healthcare teams across
              the Front Range.
            </p>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-emerald-100/50 border border-emerald-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-emerald-600">Compliance Ready</p>
            <p class="mt-3 text-3xl font-extrabold text-emerald-900 font-display">42 buildings</p>
            <p class="mt-3 text-sm text-emerald-700 leading-relaxed">
              Vendor approvals, COI management, and dock scheduling already in place with Denver Tech Center and downtown
              property managers.
            </p>
          </div>
          <div class="rounded-2xl bg-white p-6 shadow-md shadow-emerald-100/50 border border-emerald-100">
            <p class="text-sm font-semibold uppercase tracking-wide text-emerald-600">Team Availability</p>
            <p class="mt-3 text-3xl font-extrabold text-emerald-900 font-display">24/7 command</p>
            <p class="mt-3 text-sm text-emerald-700 leading-relaxed">
              A dedicated move captain manages status updates, issue resolution, and post-move punch lists with your facilities
              lead in real time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Commercial Programs -->
    <section id="commercial-programs" class="py-16 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="relative">
            <div class="aspect-[4/5] rounded-xl overflow-hidden">
              <img src="/assets/Opek.png" alt="Commercial movers protecting equipment" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-4 -right-4 bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-xl p-4 shadow-lg">
              <div class="text-2xl font-bold">4.9★</div>
              <div class="text-xs font-medium">Business Rating</div>
            </div>
          </div>

          <div>
            <div class="relative inline-flex mb-6">
              <div class="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-xl"></div>
              <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-10 h-10">
                  <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
                  <path fill="#ECFDF5" d="M12 9h8l3 4-3 4h-8l-3-4 3-4zm1 1-2 3 2 3h6l2-3-2-3h-6zm3 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
              </div>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">
              Commercial Programs At-A-Glance
            </h2>
            <p class="text-base text-slate-600 leading-relaxed mb-8">
              Our business moving consultants map every dock schedule, elevator reservation, and IT dependency so your teams stay productive while we relocate furniture, servers, and inventory.
            </p>

            <div class="grid gap-4">
              <article class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center border border-white/30">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M5 7v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7m-5 0V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-white mb-2 font-display">Corporate HQ &amp; Multi-Floor</h3>
                    <p class="text-sm text-emerald-50 leading-relaxed">Dedicated floor captains, marble lobby protection, and load plans timed to IT cutovers for each department.</p>
                  </div>
                </div>
              </article>

              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16l-1 12H5L4 6zm6 0V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-slate-900 mb-2 font-display">Professional Offices</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">Law firms, finance teams, and studios supported with digitized file tracking, packing, and next-day workstation setups.</p>
                  </div>
                </div>
              </article>

              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5h15v9h-15zm3 9V20m9-6v5.5m-6-5.5V20" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-slate-900 mb-2 font-display">Industrial & Logistics</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">Racking breakdown, pallet redesign, and machinery transport led by certified rigging partners.</p>
                  </div>
                </div>
              </article>

              <article class="group relative overflow-hidden rounded-2xl bg-white border-2 border-emerald-100 p-6 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6a3 3 0 0 1 6 0v2h1a1 1 0 0 1 1 1v9H4V9a1 1 0 0 1 1-1h1V6a3 3 0 0 1 6 0v2h0V6z" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-extrabold text-slate-900 mb-2 font-display">Healthcare & Labs</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">Chain-of-custody documentation, temperature-controlled transport, and HIPAA-conscious packing.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof Points -->
    <section id="commercial-proof" class="py-20 bg-emerald-950 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1200 400" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#34D399" d="M0,200 L1200,0 L1200,400 L0,400 Z" />
        </svg>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#10B981" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
              <path fill="#ECFDF5" d="M13 8h6l2 3-2 3h-6l-2-3 2-3zm3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mb-4">Why Denver Companies Choose Opek</h2>
          <p class="text-base sm:text-lg text-emerald-100/80 leading-relaxed">
            Your facilities and people stay protected while our commercial moving company manages every vendor, hallway, dock schedule, and data closet tied to the relocation.
          </p>
        </div>

        <div class="grid lg:grid-cols-4 gap-6">
          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-emerald-200/90 font-semibold">Project Control</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Dedicated PMs</h3>
            <p class="text-sm text-emerald-100/80 leading-relaxed">Certified move managers create runbooks, coordinate vendors, and lead daily briefings.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.75l7.5-6 7.5 6v9.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75z" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-emerald-200/90 font-semibold">Facility Protection</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Building-Friendly Crews</h3>
            <p class="text-sm text-emerald-100/80 leading-relaxed">Masonite, corner guards, and elevator pads installed before the first cart rolls in.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-emerald-200/90 font-semibold">Zero Downtime</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Shift & Weekend Teams</h3>
            <p class="text-sm text-emerald-100/80 leading-relaxed">Evening and overnight crews minimize disruption and keep your revenue work uninterrupted.</p>
          </div>

          <div class="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-lg p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h.01M15 12h.01M4 16h16M3 8h18" />
                </svg>
              </span>
              <p class="text-sm uppercase tracking-wider text-emerald-200/90 font-semibold">Transparency</p>
            </div>
            <h3 class="text-2xl font-bold mb-2">Clear Reporting</h3>
            <p class="text-sm text-emerald-100/80 leading-relaxed">Dashboards summarize labor hours, assets moved, and punch list completion in real time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Playbooks -->
    <section id="commercial-packages" class="py-20 bg-emerald-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Project Playbooks</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-900 font-display">Tailored Commercial Move Packages</h2>
          <p class="mt-3 text-base sm:text-lg text-emerald-800 leading-relaxed">
            Each business moving package includes a dedicated project manager, building protection materials, detailed labeling systems, asset tracking, and post-move QA walk-throughs.
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article class="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-wider text-emerald-500">Launch Ready</p>
            <h3 class="mt-3 text-2xl font-extrabold text-emerald-900 font-display">Startup Sprint</h3>
            <p class="mt-3 text-sm text-emerald-800">Ideal for <span class="font-semibold">teams up to 50</span> needing fast mobilization and next-day productivity.</p>
            <ul class="mt-5 space-y-3 text-sm text-emerald-700">
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Color-coded crate delivery and pickup
              </li>
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                IT disconnect/reconnect with patch panel photos
              </li>
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Day-after desk adjustments & trash haul-away
              </li>
            </ul>
          </article>

          <article class="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 p-8 text-white shadow-lg">
            <div class="absolute inset-0 opacity-10" aria-hidden="true">
              <svg viewBox="0 0 400 400" class="h-full w-full" fill="none">
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#A7F3D0" />
                    <stop offset="100%" stop-color="#10B981" />
                  </linearGradient>
                </defs>
                <rect width="400" height="400" fill="url(#grad)" />
              </svg>
            </div>
            <div class="relative">
              <p class="text-sm font-semibold uppercase tracking-wider text-emerald-200">Most Requested</p>
              <h3 class="mt-3 text-2xl font-extrabold font-display">Enterprise Continuity</h3>
              <p class="mt-3 text-sm text-emerald-100">For <span class="font-semibold">multi-floor moves</span> with staged phases and complex compliance requirements.</p>
              <ul class="mt-5 space-y-3 text-sm text-emerald-50">
                <li class="flex items-start gap-2">
                  <svg class="mt-1 h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                  Move command center with live communications dashboard
                </li>
                <li class="flex items-start gap-2">
                  <svg class="mt-1 h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                  Certificate of insurance management & landlord liaison
                </li>
                <li class="flex items-start gap-2">
                  <svg class="mt-1 h-4 w-4 text-emerald-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                  Sensitive file & server chain-of-custody logs
                </li>
              </ul>
            </div>
          </article>

          <article class="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-wider text-emerald-500">Specialized</p>
            <h3 class="mt-3 text-2xl font-extrabold text-emerald-900 font-display">Facility Transformation</h3>
            <p class="mt-3 text-sm text-emerald-800">Perfect for labs, manufacturing, and education campuses with sensitive assets.</p>
            <ul class="mt-5 space-y-3 text-sm text-emerald-700">
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Vendor coordination for rigging, electricians, and decommissioning
              </li>
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Asset barcoding with condition photo documentation
              </li>
              <li class="flex items-start gap-2">
                <svg class="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                Temporary warehousing & staged deliveries
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="commercial-process" class="py-20 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
              <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
              <path fill="#ECFDF5" d="M16 6a6 6 0 0 1 6 6h-4l6 8 6-8h-4a10 10 0 1 0-10 10v-4a6 6 0 1 1 0-12z" />
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">How Our Commercial Moves Work</h2>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed">From discovery to reopen, we choreograph every milestone with your facilities, HR, and IT teams.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">1</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Discovery & Site Walks</h3>
            <p class="text-sm text-slate-600 leading-relaxed">We audit furniture, tech, dock routes, and compliance paperwork, then build a phased plan with milestones and dependencies.</p>
          </div>
          <div class="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">2</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Pre-Move Preparation</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Packing workshops, labeling systems, crate delivery, and weekly status calls keep staff informed and assets organized.</p>
          </div>
          <div class="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">3</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Move Execution</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Crew leads coordinate load plans, update dashboards every hour, and sign off on building protection checklists.</p>
          </div>
          <div class="relative rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div class="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold">4</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Reopen & Support</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Desk resets, punch list resolution, asset disposal, and occupancy checks ensure teams return to a ready-to-work space.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section id="commercial-weekend" class="py-20 bg-emerald-900">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl text-white">
          <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">Weekend Timeline</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-display">Your Zero-Downtime Move Weekend</h2>
          <p class="mt-3 text-base sm:text-lg text-emerald-100 leading-relaxed">We align shift work with your critical systems so Monday morning feels seamless for every department.</p>
        </div>

        <div class="mt-10 space-y-6">
          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">Fri 4p</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Command Center Kickoff</h3>
              <p class="mt-1 text-sm text-emerald-100">Final tenant walkthrough, IT cutover checkpoints, and building protection installed across all access points.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">Sat 8a</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Sequenced Load-Out</h3>
              <p class="mt-1 text-sm text-emerald-100">Departments load in priority order with asset tags scanned at dock and arrival, while PMs push status texts hourly.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">Sun 11a</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Installation & QA</h3>
              <p class="mt-1 text-sm text-emerald-100">Furniture reassembly, workstation cabling, and signage placed with department leads signing off by zone.</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-emerald-200">Sun 5p</div>
            <div class="text-white">
              <h3 class="text-xl font-semibold font-display">Ready-for-Monday Handoff</h3>
              <p class="mt-1 text-sm text-emerald-100">Cleaning, debris removal, and punch list review wrap up so leadership can send the “all clear” to staff.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Solutions -->
    <section id="commercial-specialized" class="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="inline-flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-16 h-16 drop-shadow-2xl">
                <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z" />
                <path fill="#ECFDF5" d="M11 9h10l3 5-3 5H11l-3-5 3-5zm5 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 6h6l1.5 2.5L19 21h-6l-1.5-2.5L13 16z" />
              </svg>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display mb-4">Specialized Commercial Solutions</h2>
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Extend your project with services that keep staff focused, protect sensitive assets, and simplify complex transitions.
            </p>

            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 10-8 0v3M5 10h14l1 9H4l1-9zm4 5h6" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1 font-display">IT & Technology Transition</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">Server rack packing, secure transport, workstation cabling, and go-live support with certified technicians.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-3-3v6m9 3H3m0-3h18M4.5 7.5h15v9h-15z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1 font-display">Storage & Asset Management</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">Short-term warehousing, furniture liquidation, and inventory tracking with photo documentation.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1 font-display">Change Management Support</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">Staff orientation packets, signage, and move champions keep employees informed and confident.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5h10l-2 14H7L5 5h6zm1 0V3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 mb-1 font-display">Building Closeout Services</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">Wall repair, touch-up cleaning, and landlord punch list completion so leases end on a high note.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <div class="relative overflow-hidden rounded-3xl bg-emerald-900 text-white p-10 shadow-xl">
              <div class="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 400" class="h-full w-full" fill="none">
                  <defs>
                    <linearGradient id="overlay" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#A7F3D0" />
                      <stop offset="100%" stop-color="#10B981" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="400" fill="url(#overlay)" />
                </svg>
              </div>
              <div class="relative space-y-8">
                <div>
                  <p class="text-sm uppercase tracking-widest text-emerald-200">Client Spotlight</p>
                  <p class="mt-3 text-lg font-semibold">“Opek moved 300 of our engineers over a single weekend. We logged in Monday to ready-to-work desks, clean break rooms, and no missing equipment.”</p>
                  <p class="mt-3 text-sm text-emerald-200">— Director of Operations, SaaS Company</p>
                </div>
                <div class="border-t border-white/20 pt-8">
                  <p class="text-sm uppercase tracking-widest text-emerald-200">Facilities Feedback</p>
                  <p class="mt-3 text-lg font-semibold">“Their project manager coordinated flawlessly with our building security and returned every certificate ahead of schedule.”</p>
                  <p class="mt-3 text-sm text-emerald-200">— Property Manager, Downtown Denver Tower</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section id="commercial-resources" class="py-20 bg-white">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Planning Resources</span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">Tools to Prep Your Team</h2>
          <p class="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">Share these resources with stakeholders to streamline approvals and keep move communications on point.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article class="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 font-display mb-2">Executive Brief Template</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Outline budget, timeline, and risk mitigation for leadership signoff in minutes.</p>
            <a href="#" class="mt-4 inline-flex items-center gap-2 text-emerald-600 font-semibold">Download PDF
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0-4 4m4-4H7" />
              </svg>
            </a>
          </article>

          <article class="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 font-display mb-2">Employee Move Guide</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Step-by-step staff checklist covering packing expectations, parking, and security badges.</p>
            <a href="#" class="mt-4 inline-flex items-center gap-2 text-emerald-600 font-semibold">Share with Team
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0-4 4m4-4H7" />
              </svg>
            </a>
          </article>

          <article class="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 font-display mb-2">Facilities Punch List</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Track utilities, vendor disconnects, and building closeout tasks in a single shared sheet.</p>
            <a href="#" class="mt-4 inline-flex items-center gap-2 text-emerald-600 font-semibold">Open Checklist
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
    <section id="commercial-faq" class="py-20 bg-slate-50">
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
  title: 'commercial moving',
  meta: [
    {
      name: 'description',
      content:
        'Denver commercial moving company providing office relocation, industrial moving, lab transport, IT disconnect/reconnect, union crews, facility protection, and 24/7 command center support.'
    }
  ]
})
</script>
