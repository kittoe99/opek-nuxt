<template>
  <header
    id="site-header"
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-black/80 shadow-lg ring-1 ring-black/10' : 'bg-transparent'
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Brand -->
        <a href="#" class="group inline-flex items-center">
          <img
            src="/assets/opek-logo.png"
            alt="Opek Moving LLC logo"
            class="h-20 lg:h-24 w-auto object-contain"
          />
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:block">
          <ul class="flex items-center gap-8">
            <li><a href="#home" class="nav-link text-[15px] font-semibold transition text-white hover:text-brand-100">Home</a></li>
            <li><a href="#services" class="nav-link text-[15px] font-semibold transition text-white hover:text-brand-100">Services</a></li>
            <li><a href="#about" class="nav-link text-[15px] font-semibold transition text-white hover:text-brand-100">About</a></li>
            <li><a href="#reviews" class="nav-link text-[15px] font-semibold transition text-white hover:text-brand-100">Reviews</a></li>
            <li><a href="#process" class="nav-link text-[15px] font-semibold transition text-white hover:text-brand-100">Process</a></li>
            <li><a href="#contact" class="nav-link text-[15px] font-semibold transition text-white hover:text-brand-100">Contact</a></li>
          </ul>
        </nav>

        <!-- CTAs -->
        <div class="hidden lg:flex items-center gap-4">
          <a href="#contact" class="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white hover:text-brand-100 transition">
            <span>Call us</span>
          </a>
          <a href="#quote" class="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition">
            Get a Quote
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          class="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-nav"
        >
          <span class="sr-only">Open menu</span>
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Nav Panel -->
    <div
      id="mobile-nav"
      :class="[
        'lg:hidden transition-all duration-300 absolute left-0 right-0 top-full z-40',
        mobileMenuOpen ? 'visible opacity-100' : 'hidden invisible opacity-0 pointer-events-none'
      ]"
    >
      <div class="mx-4 mt-2 rounded-2xl bg-slate-900 border border-slate-700">
        <nav class="p-2" aria-label="Mobile">
          <ul class="space-y-1">
            <li>
              <a @click="closeMenu" class="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition" href="#home">
                <span class="inline-flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-white/80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5 12 3l9 7.5M4.5 9.75V21h6v-6h3v6h6V9.75" />
                  </svg>
                  <span>Home</span>
                </span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition" href="#services">
                <span class="inline-flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-white/80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 7.5h6.75V3.75H3.75V7.5zm9.75 0h6.75V3.75H13.5V7.5zM3.75 20.25h6.75V9.75H3.75v10.5zm9.75 0h6.75V12.75H13.5V20.25z" />
                  </svg>
                  <span>Services</span>
                </span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition" href="#about">
                <span class="inline-flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-white/80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM10.5 9h3v8.25h-3V9z" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  <span>About</span>
                </span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition" href="#reviews">
                <span class="inline-flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-white/80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-4.33 2.277.828-4.827-3.5-3.41 4.84-.703L12 6l2.162 4.587 4.84.703-3.5 3.41.828 4.827z" />
                  </svg>
                  <span>Reviews</span>
                </span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition" href="#process">
                <span class="inline-flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-white/80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.5h15M6 12h12M7.5 16.5H18" />
                  </svg>
                  <span>Process</span>
                </span>
              </a>
            </li>
            <li class="pt-2 border-t border-white/10">
              <a @click="closeMenu" class="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition" href="#contact">
                <span class="inline-flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-white/80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h3.133c.51 0 .985.287 1.22.74l1.2 2.4a1.35 1.35 0 0 1-.298 1.566l-1.38 1.38a12.04 12.04 0 0 0 5.837 5.837l1.38-1.38a1.35 1.35 0 0 1 1.566-.298l2.4 1.2c.453.235.74.71.74 1.22V19.5a2.25 2.25 0 0 1-2.25 2.25H18A15.75 15.75 0 0 1 2.25 6.75z" />
                  </svg>
                  <span>Contact</span>
                </span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="block rounded-xl bg-brand-600 px-3 py-2.5 text-center text-[15px] font-semibold text-white hover:bg-brand-700 transition" href="#quote">
                <span class="inline-flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-white/80">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 4.5h13.5v9H12L8.25 16.5V13.5H5.25z" />
                  </svg>
                  <span>Get a Quote</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
  document.addEventListener('keydown', handleKeydown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
})
</script>
