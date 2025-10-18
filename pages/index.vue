<template>
  <div>
    <TheHeader />
    <MobileFAB />

    <!-- Hero -->
    <section
      id="home"
      class="relative isolate min-h-[90vh] md:min-h-[105vh] grid place-items-center overflow-hidden bg-slate-950"
    >
      <!-- Background image -->
      <div class="absolute inset-0 -z-10">
        <img
          src="/assets/Opek.png"
          alt="Opek Moving team with moving truck"
          class="h-full w-full object-cover object-center lg:object-left"
          @error="onHeroImageError"
        />
      </div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/55 -z-10"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div class="max-w-3xl text-white">
          <div class="inline-flex items-center gap-2 rounded-full bg-black/50 border border-white/40 px-4 py-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-400">
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-sm font-semibold text-white">4.9/5 rating • 1,000+ happy moves</span>
          </div>

          <h1
            class="reveal text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-tight bg-gradient-to-r from-white via-white to-brand-200 bg-clip-text text-transparent"
          >
            Move without the stress. We handle the rest.
          </h1>

          <p class="reveal delay-1 mt-6 text-lg sm:text-xl text-white/90 leading-relaxed">
            Careful packing, on-time arrivals, and friendly pros—every move.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="#sms-quote"
              class="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-bold text-white hover:bg-brand-700 transition reveal delay-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"
                />
              </svg>
              Get instant pricing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#process"
              class="group inline-flex items-center gap-2 rounded-xl bg-black/40 border border-white/50 px-8 py-4 text-base font-bold text-white hover:bg-black/60 transition reveal delay-2"
            >
              How it works
            </a>
          </div>

          <div class="mt-12 grid grid-cols-1 sm:flex sm:flex-wrap sm:items-center gap-4 sm:gap-8 text-white/80 text-sm">
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-brand-300 flex-shrink-0"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Licensed & insured</span>
            </div>
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-brand-300 flex-shrink-0"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Same-day available</span>
            </div>
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-brand-300 flex-shrink-0"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>No hidden fees</span>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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

const onHeroImageError = (event) => {
  const section = document.getElementById('home')
  if (section) {
    section.classList.add('bg-gradient-to-b', 'from-slate-900', 'via-slate-900', 'to-black')
  }

  if (event?.target?.remove) {
    event.target.remove()
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
