<template>
  <div>
    <TheHeader />
    <MobileFAB />

    <!-- Hero -->
    <section id="home" class="relative isolate min-h-[85vh] sm:min-h-screen md:min-h-[110vh] grid place-items-center overflow-hidden">
      <!-- Background image -->
      <div class="absolute inset-0 -z-10">
        <img
          src="/assets/Opek.png?v=3"
          alt="Opek Moving team with moving truck"
          class="h-full w-full object-cover object-center lg:object-left"
          @error="onHeroImageError"
        />
      </div>

      <!-- Black overlay -->
      <div class="absolute inset-0 bg-black/40 -z-10"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div class="max-w-3xl text-white">
          <h1 class="reveal text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight font-display bg-gradient-to-r from-white to-brand-300 bg-clip-text text-transparent leading-tight">
            Move without the stress. We handle the rest.
          </h1>
          <p class="reveal delay-1 mt-3 sm:mt-5 lg:mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Careful packing, on-time arrivals, and friendly pros—every move.
          </p>

          <div class="mt-5 sm:mt-7 lg:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            <a href="#sms-quote" class="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white hover:bg-brand-700 transition reveal delay-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
              </svg>
              Get instant pricing
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#process" class="group inline-flex items-center gap-2 rounded-xl bg-black/40 border border-white/50 px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white hover:bg-black/60 transition reveal delay-2">
              How it works
            </a>
          </div>

          <div class="mt-6 sm:mt-8 hidden sm:flex sm:flex-wrap sm:items-center gap-3 sm:gap-8 text-white/80 text-xs sm:text-sm">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-brand-300 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Licensed & insured</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-brand-300 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Same-day available</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-brand-300 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>No hidden fees</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Intersection sentinel -->
      <div id="hero-sentinel" class="absolute bottom-0 left-0 right-0 h-1"></div>
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
