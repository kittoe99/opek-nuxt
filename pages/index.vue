<template>
  <div>
    <TheHeader />
    <MobileFAB />

    <!-- Hero -->
    <section
      id="home"
      class="relative isolate min-h-[55vh] sm:min-h-[90vh] md:min-h-[105vh] grid place-items-center overflow-hidden bg-slate-950 text-white"
    >
      <div class="absolute inset-0 -z-20 bg-slate-950"></div>
      <div class="hero-animated-gradient"></div>

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
      <div class="absolute inset-0 z-[-5] bg-gradient-to-br from-slate-950/70 via-slate-900/55 to-brand-900/40 mix-blend-multiply"></div>

      <!-- Accent glows -->
      <div class="hero-soft-glow -top-24 -left-24 hidden lg:block z-[-2]"></div>
      <div class="hero-soft-glow float-diagonal -bottom-40 right-[-140px] hidden xl:block z-[-2]"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4 sm:pt-24 sm:pb-20">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/40 px-4 py-1.5 mb-1 sm:py-2 sm:mb-6 backdrop-blur"
          >
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
            class="reveal text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-tight bg-gradient-to-r from-white via-white to-brand-100 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(14,138,76,0.35)]"
          >
            Move without the stress. We handle the rest.
          </h1>

          <p class="reveal delay-1 mt-1.5 sm:mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
            Careful packing, on-time arrivals, and friendly pros—every move.
          </p>

          <div class="mt-3 sm:mt-8 flex flex-wrap gap-4">
            <a
              href="#sms-quote"
              class="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-400 px-8 py-4 text-base font-bold text-white shadow-brand-lg hover:shadow-brand transition duration-300 reveal delay-2"
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
              class="group inline-flex items-center gap-2 rounded-2xl bg-white/10 border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/15 hover:border-white/40 transition backdrop-blur reveal delay-2"
            >
              How it works
            </a>
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
    section.classList.add('bg-gradient-to-br', 'from-slate-950', 'via-slate-900', 'to-brand-900')
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
