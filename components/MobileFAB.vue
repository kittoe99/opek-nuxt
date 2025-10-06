<template>
  <!-- Mobile floating actions: Expandable FAB for Call and Book Online -->
  <div class="fixed bottom-2 right-2 z-50 md:hidden flex flex-col items-end">
    <div
      :class="[
        'mb-3 flex flex-col gap-3 transition-all duration-200',
        fabOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      ]"
    >
      <a
        href="tel:+1234567890"
        aria-label="Call Opek Moving"
        class="inline-flex items-center justify-center gap-2 rounded-full bg-black/90 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h3.133c.51 0 .985.287 1.22.74l1.2 2.4a1.35 1.35 0 0 1-.298 1.566l-1.38 1.38a12.04 12.04 0 0 0 5.837 5.837l1.38-1.38a1.35 1.35 0 0 1 1.566-.298l2.4 1.2c.453.235.74.71.74 1.22V19.5A2.25 2.25 0 0 1 18 21.75h-.75A15.75 15.75 0 0 1 1.5 6.75" />
        </svg>
        <span>(123) 456-7890</span>
      </a>
      <a
        href="#quote"
        aria-label="Book online"
        class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white ring-1 ring-brand-500/40 hover:bg-brand-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8M8 11h8M8 15h5" />
        </svg>
        <span>Book online</span>
      </a>
    </div>
    <button
      @click="fabOpen = !fabOpen"
      :aria-label="fabOpen ? 'Close quick actions' : 'Open quick actions'"
      :aria-expanded="fabOpen"
      class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/90 text-white ring-1 ring-white/20 hover:bg-black transition"
    >
      <svg v-if="!fabOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fabOpen = ref(false)
</script>
