<template>
  <header
    id="site-header"
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-black/80 shadow-lg ring-1 ring-black/10' : 'bg-gray-900/70 backdrop-blur-sm'
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

    <!-- Mobile Nav Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        @click="closeMenu"
        class="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />
    </Transition>

    <!-- Mobile Nav Sidebar -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      leave-active-class="transition-transform duration-200 ease-in"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="mobileMenuOpen"
        id="mobile-nav"
        class="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 shadow-2xl overflow-hidden"
      >
        <!-- Decorative Background Elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-brand-500/5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
        
        <!-- Sidebar Header -->
        <div class="relative flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
          <div class="flex items-center gap-3">
            <img
              src="/assets/opek-logo.png"
              alt="Opek Moving LLC"
              class="h-16 w-auto object-contain"
            />
          </div>
          <button
            @click="closeMenu"
            class="h-11 w-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Sidebar Navigation -->
        <nav class="relative flex-1 overflow-y-auto p-6" aria-label="Mobile">
          <ul class="space-y-2">
            <li>
              <a @click="closeMenu" class="group relative flex items-center gap-4 rounded-2xl px-4 py-4 text-[15px] font-semibold text-slate-200 hover:bg-gradient-to-r hover:from-brand-600/20 hover:to-brand-500/10 hover:text-white transition-all overflow-hidden" href="#home">
                <div class="absolute inset-0 bg-gradient-to-r from-brand-600/0 to-brand-500/0 group-hover:from-brand-600/10 group-hover:to-brand-500/5 transition-all"></div>
                <div class="relative h-11 w-11 rounded-xl bg-white/5 group-hover:bg-brand-600 group-hover:shadow-lg group-hover:shadow-brand-600/30 flex items-center justify-center transition-all group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5 12 3l9 7.5M4.5 9.75V21h6v-6h3v6h6V9.75" />
                  </svg>
                </div>
                <span class="relative">Home</span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="group relative flex items-center gap-4 rounded-2xl px-4 py-4 text-[15px] font-semibold text-slate-200 hover:bg-gradient-to-r hover:from-brand-600/20 hover:to-brand-500/10 hover:text-white transition-all overflow-hidden" href="#services">
                <div class="absolute inset-0 bg-gradient-to-r from-brand-600/0 to-brand-500/0 group-hover:from-brand-600/10 group-hover:to-brand-500/5 transition-all"></div>
                <div class="relative h-11 w-11 rounded-xl bg-white/5 group-hover:bg-brand-600 group-hover:shadow-lg group-hover:shadow-brand-600/30 flex items-center justify-center transition-all group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <rect x="3" y="9" width="11" height="6" rx="1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 11h3l2 2v2h-5v-4z" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="7.5" cy="17.5" r="1.5" />
                    <circle cx="16.5" cy="17.5" r="1.5" />
                  </svg>
                </div>
                <span class="relative">Services</span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="group relative flex items-center gap-4 rounded-2xl px-4 py-4 text-[15px] font-semibold text-slate-200 hover:bg-gradient-to-r hover:from-brand-600/20 hover:to-brand-500/10 hover:text-white transition-all overflow-hidden" href="#about">
                <div class="absolute inset-0 bg-gradient-to-r from-brand-600/0 to-brand-500/0 group-hover:from-brand-600/10 group-hover:to-brand-500/5 transition-all"></div>
                <div class="relative h-11 w-11 rounded-xl bg-white/5 group-hover:bg-brand-600 group-hover:shadow-lg group-hover:shadow-brand-600/30 flex items-center justify-center transition-all group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM10.5 9h3v8.25h-3V9z" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <span class="relative">About</span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="group relative flex items-center gap-4 rounded-2xl px-4 py-4 text-[15px] font-semibold text-slate-200 hover:bg-gradient-to-r hover:from-brand-600/20 hover:to-brand-500/10 hover:text-white transition-all overflow-hidden" href="#reviews">
                <div class="absolute inset-0 bg-gradient-to-r from-brand-600/0 to-brand-500/0 group-hover:from-brand-600/10 group-hover:to-brand-500/5 transition-all"></div>
                <div class="relative h-11 w-11 rounded-xl bg-white/5 group-hover:bg-brand-600 group-hover:shadow-lg group-hover:shadow-brand-600/30 flex items-center justify-center transition-all group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.25l-4.33 2.277.828-4.827-3.5-3.41 4.84-.703L12 6l2.162 4.587 4.84.703-3.5 3.41.828 4.827z" />
                  </svg>
                </div>
                <span class="relative">Reviews</span>
              </a>
            </li>
            <li>
              <a @click="closeMenu" class="group relative flex items-center gap-4 rounded-2xl px-4 py-4 text-[15px] font-semibold text-slate-200 hover:bg-gradient-to-r hover:from-brand-600/20 hover:to-brand-500/10 hover:text-white transition-all overflow-hidden" href="#process">
                <div class="absolute inset-0 bg-gradient-to-r from-brand-600/0 to-brand-500/0 group-hover:from-brand-600/10 group-hover:to-brand-500/5 transition-all"></div>
                <div class="relative h-11 w-11 rounded-xl bg-white/5 group-hover:bg-brand-600 group-hover:shadow-lg group-hover:shadow-brand-600/30 flex items-center justify-center transition-all group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <span class="relative">Process</span>
              </a>
            </li>
            <li class="pt-4 mt-4 border-t border-white/10">
              <a @click="closeMenu" class="group relative flex items-center gap-4 rounded-2xl px-4 py-4 text-[15px] font-semibold text-slate-200 hover:bg-gradient-to-r hover:from-brand-600/20 hover:to-brand-500/10 hover:text-white transition-all overflow-hidden" href="#contact">
                <div class="absolute inset-0 bg-gradient-to-r from-brand-600/0 to-brand-500/0 group-hover:from-brand-600/10 group-hover:to-brand-500/5 transition-all"></div>
                <div class="relative h-11 w-11 rounded-xl bg-white/5 group-hover:bg-brand-600 group-hover:shadow-lg group-hover:shadow-brand-600/30 flex items-center justify-center transition-all group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h3.133c.51 0 .985.287 1.22.74l1.2 2.4a1.35 1.35 0 0 1-.298 1.566l-1.38 1.38a12.04 12.04 0 0 0 5.837 5.837l1.38-1.38a1.35 1.35 0 0 1 1.566-.298l2.4 1.2c.453.235.74.71.74 1.22V19.5a2.25 2.25 0 0 1-2.25 2.25H18A15.75 15.75 0 0 1 2.25 6.75z" />
                  </svg>
                </div>
                <span class="relative">Contact</span>
              </a>
            </li>
          </ul>

          <!-- CTA Button -->
          <div class="mt-8 pt-6 border-t border-white/10">
            <a @click="closeMenu" class="group relative flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-5 text-center text-base font-bold text-white hover:from-brand-700 hover:to-brand-800 transition-all shadow-xl shadow-brand-600/40 hover:shadow-2xl hover:shadow-brand-600/50 hover:scale-105 active:scale-95 overflow-hidden" href="#quote">
              <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-5 w-5 relative">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 4.5h13.5v9H12L8.25 16.5V13.5H5.25z" />
              </svg>
              <span class="relative">Get a Free Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4 relative group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </nav>

        <!-- Sidebar Footer -->
        <div class="relative p-6 border-t border-white/10 bg-gradient-to-b from-white/5 to-white/10">
          <div class="flex items-center justify-center gap-4 mb-3">
            <a href="#" class="h-9 w-9 rounded-lg bg-white/5 hover:bg-brand-600 border border-white/10 flex items-center justify-center transition-all hover:scale-110">
              <svg class="h-4 w-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-lg bg-white/5 hover:bg-brand-600 border border-white/10 flex items-center justify-center transition-all hover:scale-110">
              <svg class="h-4 w-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-lg bg-white/5 hover:bg-brand-600 border border-white/10 flex items-center justify-center transition-all hover:scale-110">
              <svg class="h-4 w-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p class="text-xs text-slate-400 text-center font-medium">© 2024 Opek Moving LLC</p>
          <p class="text-xs text-slate-500 text-center mt-1">Professional Moving Services</p>
        </div>
      </div>
    </Transition>
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
