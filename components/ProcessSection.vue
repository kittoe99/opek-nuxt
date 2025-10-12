<template>
  <section id="process" class="relative py-16 sm:py-20 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
    <!-- Mountain backdrop -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-48 opacity-[0.04]">
        <svg viewBox="0 0 1200 200" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#059669" d="M0,200 L0,100 L200,50 L400,120 L600,30 L800,90 L1000,60 L1200,130 L1200,200 Z"/>
        </svg>
      </div>
      <div class="absolute bottom-10 left-20 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Map Pin Icon -->
        <div class="inline-flex items-center justify-center mb-8 relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-24 h-24 relative drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
            <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
          </svg>
        </div>
        
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-4">
          <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Our Moving Process</span>
        </h2>
        
        <!-- Mountain-inspired underline -->
        <div class="flex justify-center items-end gap-1 mb-6">
          <div class="w-3 h-1 bg-emerald-400 rounded-full"></div>
          <div class="w-3 h-2 bg-emerald-500 rounded-full"></div>
          <div class="w-3 h-3 bg-emerald-600 rounded-full"></div>
          <div class="w-3 h-4 bg-emerald-600 rounded-full"></div>
          <div class="w-3 h-3 bg-emerald-600 rounded-full"></div>
          <div class="w-3 h-2 bg-emerald-500 rounded-full"></div>
          <div class="w-3 h-1 bg-emerald-400 rounded-full"></div>
        </div>
        
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          <span class="font-semibold text-emerald-700">Three simple steps</span> to a stress-free move
        </p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <!-- Left: Image -->
        <div class="order-last lg:order-first">
          <div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <img src="/assets/packers-and-movers.png" alt="Professional packers and movers at work" class="h-80 w-full object-cover sm:h-96" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
              <p class="text-white text-xs font-semibold">Professional crew • Protected floors • On-time arrivals</p>
            </div>
          </div>
        </div>

        <!-- Right: Steps -->
        <div class="space-y-4">
          <!-- Step 1 -->
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative rounded-2xl border border-slate-200 bg-white p-5">
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white text-xl font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-extrabold text-slate-900">Request a quote</h3>
                  <p class="mt-1 text-sm text-slate-600">Tell us about your move and timeline. We'll respond with transparent pricing within hours.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative rounded-2xl border border-slate-200 bg-white p-5">
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white text-xl font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-extrabold text-slate-900">Plan your move</h3>
                  <p class="mt-1 text-sm text-slate-600">We confirm details, protect your home, and assign a professional crew with the right equipment.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative rounded-2xl border border-slate-200 bg-white p-5">
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white text-xl font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-extrabold text-slate-900">Moving day</h3>
                  <p class="mt-1 text-sm text-slate-600">On-time arrival, careful handling, and real-time updates. We treat your belongings like our own.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
