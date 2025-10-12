<template>
  <div>
    <TheHeader />
    <MobileFAB />

    <!-- Hero -->
    <section id="home" class="relative isolate min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-white">
      <!-- Light gradient overlay for texture -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Content -->
          <div class="text-gray-900 text-left">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-2 mb-6 mt-8 sm:mt-12 lg:mt-16 text-brand-700 border border-brand-500/20 backdrop-blur-sm shadow-sm">
              <span class="inline-block w-2 h-2 rounded-full bg-brand-600"></span>
              <span class="text-xs sm:text-sm font-semibold">Denver's Trusted Movers</span>
            </div>

            <h1 class="reveal text-5xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-extrabold tracking-tight font-display mb-4">
              Move without the stress. <span class="text-brand-600">We handle the rest.</span>
            </h1>
            
            <p class="reveal delay-1 text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Professional local movers in Denver for homes and offices—on-time arrivals, careful protection, and friendly, background-checked pros.
            </p>

            <!-- CTA Card -->
            <div class="mb-6">
              <div class="mx-0 max-w-xl rounded-2xl border border-gray-200 bg-gray-50/50 backdrop-blur-sm shadow-lg p-4 sm:p-5">
                <div class="flex flex-wrap gap-3">
                  <a href="#sms-quote" class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 text-sm font-bold shadow-md">
                    Get a Quote
                  </a>
                  <a href="#process" class="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm font-bold border border-gray-300 shadow-sm hover:bg-gray-50">
                    How It Works
                  </a>
                </div>
                <div class="mt-4 flex items-center justify-start gap-2 text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-yellow-400">
                    <path d="M10 15.27 16.18 18l-1.64-7.03L20 6.24l-7.19-.61L10 0 7.19 5.63 0 6.24l5.46 4.73L3.82 18 10 15.27z"/>
                  </svg>
                  <span class="font-semibold">4.9</span>
                  <span class="mx-1">|</span>
                  <span>1,200+ satisfied customers</span>
                </div>
              </div>
            </div>

            <!-- Mobile Image (bottom) -->
            <div class="mt-6 lg:hidden">
              <div class="relative rounded-3xl overflow-hidden">
                <div class="aspect-[21/9] relative">
                  <img src="/assets/Opek.png" alt="Opek Moving team at work" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent"></div>
                  <div class="absolute bottom-4 left-4 right-4 text-white">
                    <p class="text-lg font-bold">Professional Moving Services</p>
                    <p class="text-xs text-white/90 mt-1">Denver's most trusted moving company</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Removed old feature grid and mobile badge in new design -->
          </div>

          <!-- Right: Circular Image -->
          <div class="hidden lg:flex items-center justify-center">
            <div class="relative">
              <div class="rounded-full overflow-hidden w-[520px] h-[520px] shadow-2xl ring-8 ring-gray-200">
                <img src="/assets/Opek.png" alt="Opek Moving team with moving truck" class="w-full h-full object-cover" />
              </div>
              <div class="absolute -top-3 -left-3 w-[540px] h-[540px] rounded-full border border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
