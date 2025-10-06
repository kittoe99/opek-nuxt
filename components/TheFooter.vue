<template>
  <footer id="contact" class="bg-slate-900 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Main footer content -->
      <div class="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <a href="#home" class="inline-block mb-4">
            <img src="/assets/opek-logo.png" alt="Opek Moving LLC logo" class="h-16 w-auto object-contain" />
          </a>
          <p class="text-sm text-slate-400 mb-6 max-w-md">
            Professional moving services in the Denver metro area. Licensed, insured, and trusted by 1,000+ happy customers.
          </p>
          <div class="flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-400">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
            </svg>
            <span class="text-slate-300 font-semibold">4.9/5 rating</span>
            <span class="text-slate-500">•</span>
            <span class="text-slate-400">1,000+ moves</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
          <nav aria-label="Footer">
            <ul class="space-y-3">
              <li><a href="#home" class="text-sm text-slate-400 hover:text-brand-300 transition">Home</a></li>
              <li><a href="#services" class="text-sm text-slate-400 hover:text-brand-300 transition">Services</a></li>
              <li><a href="#about" class="text-sm text-slate-400 hover:text-brand-300 transition">About</a></li>
              <li><a href="#reviews" class="text-sm text-slate-400 hover:text-brand-300 transition">Reviews</a></li>
              <li><a href="#process" class="text-sm text-slate-400 hover:text-brand-300 transition">How It Works</a></li>
              <li><a href="#faq" class="text-sm text-slate-400 hover:text-brand-300 transition">FAQ</a></li>
            </ul>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h3>
          <ul class="space-y-3">
            <li>
              <a href="tel:+1234567890" class="text-sm text-slate-400 hover:text-brand-300 transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (123) 456-7890
              </a>
            </li>
            <li>
              <a href="mailto:info@opekmoving.com" class="text-sm text-slate-400 hover:text-brand-300 transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@opekmoving.com
              </a>
            </li>
            <li class="text-sm text-slate-400 flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mt-0.5 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Denver Metro Area
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-slate-800 py-8">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p class="text-sm text-slate-500">© {{ currentYear }} Opek Moving LLC. All rights reserved.</p>
          <div class="flex items-center gap-6">
            <a href="#" class="text-sm text-slate-500 hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" class="text-sm text-slate-500 hover:text-slate-300 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
