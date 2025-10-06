<template>
  <div>
    <TheHeader />
    <MobileFAB />

    <!-- Hero -->
    <section id="home" class="relative isolate min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <!-- Background Pattern -->
      <div class="absolute inset-0 -z-10 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -z-10"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Content -->
          <div class="text-white">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 rounded-full bg-brand-600/20 border border-brand-500/30 backdrop-blur-sm px-4 py-2 mb-6">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span class="text-xs sm:text-sm font-semibold text-brand-200">Denver's Trusted Movers</span>
            </div>

            <h1 class="reveal text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight font-extrabold tracking-tight font-display text-white mb-4">
              Move without the stress. <span class="text-brand-300">We handle the rest.</span>
            </h1>
            
            <p class="reveal delay-1 text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Professional moving services with careful packing, on-time arrivals, and friendly pros for every move.
            </p>

            <!-- Features Grid -->
            <div class="grid grid-cols-2 gap-3 mb-8">
              <div class="flex items-center gap-2 text-sm text-slate-300">
                <svg class="w-5 h-5 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Licensed & Insured</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-slate-300">
                <svg class="w-5 h-5 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Same-Day Available</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-slate-300">
                <svg class="w-5 h-5 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>No Hidden Fees</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-slate-300">
                <svg class="w-5 h-5 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>4.9★ Rating</span>
              </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="#sms-quote" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 hover:scale-105">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Get Instant Pricing
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
              </a>
              <a href="#process" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm sm:text-base font-bold text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all">
                How It Works
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right: Image -->
          <div class="hidden lg:block">
            <div class="relative">
              <!-- Main Image -->
              <div class="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img src="/assets/Opek.png" alt="Opek Moving team with moving truck" class="w-full h-[500px] object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              
              <!-- Floating Badge -->
              <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
                <div class="flex items-center gap-3">
                  <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                    <svg class="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-slate-900">1,000+</div>
                    <div class="text-xs font-medium text-slate-600">Happy Moves</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- SMS Instant Pricing Form -->
    <SMSQuoteForm />

    <!-- Our moving process -->
    <ProcessSection />

    <!-- Service Areas -->
    <ServiceAreasSection />

    <!-- Services -->
    <ServicesSection />

    <!-- About -->
    <AboutSection />

    <!-- Reviews -->
    <ReviewsSection />

    <!-- FAQ -->
    <FAQSection />

    <!-- Quote Form -->
    <QuoteFormSection />

    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const onHeroImageError = (e) => {
  const section = document.getElementById('home')
  if (section) {
    section.classList.add('bg-gradient-to-b', 'from-brand-50', 'to-white')
  }
}

onMounted(() => {
  // Reveal-on-scroll animations
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReduced) {
    const reveals = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            obs.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    reveals.forEach((el) => revealObserver.observe(el))
  }
})
</script>
