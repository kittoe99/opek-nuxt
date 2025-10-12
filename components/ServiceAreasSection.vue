<template>
  <section id="areas" class="relative py-16 sm:py-20 bg-gradient-to-b from-emerald-50/30 via-white to-emerald-50/30 overflow-hidden">
    <!-- Mountain backdrop -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -bottom-10 left-0 right-0 h-64 opacity-[0.03]">
        <svg viewBox="0 0 1200 300" class="w-full h-full" preserveAspectRatio="none">
          <path fill="#059669" d="M0,300 L0,150 L150,80 L300,180 L450,40 L600,120 L750,90 L900,160 L1050,100 L1200,200 L1200,300 Z"/>
        </svg>
      </div>
      <div class="absolute top-10 right-20 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Large Single Map Pin with Pulse Effect -->
        <div class="inline-flex items-center justify-center mb-8 relative">
          <!-- Pulse rings -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-32 rounded-full bg-emerald-500/20 animate-ping"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-28 h-28 rounded-full bg-emerald-500/30 animate-pulse"></div>
          </div>
          <!-- Main pin -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-32 h-32 relative drop-shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
            <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
          </svg>
        </div>
        
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-4">
          <span class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">Service Areas</span>
        </h2>
        
        <!-- Wave underline instead of mountains -->
        <div class="flex justify-center mb-6">
          <svg width="120" height="8" viewBox="0 0 120 8" class="text-emerald-500">
            <path d="M0,4 Q15,0 30,4 T60,4 T90,4 T120,4" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
          </svg>
        </div>
        
        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Serving the <span class="font-semibold text-emerald-700">greater Denver metro area</span> within a 50-mile radius
        </p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <!-- Left: Featured area card -->
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div class="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div class="flex items-center gap-3 mb-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-extrabold text-slate-900">Denver Metro Area</h3>
                <p class="text-sm text-slate-600">50-mile service radius</p>
              </div>
            </div>
            <p class="text-sm text-slate-600 mb-6">We proudly serve all communities in the greater Denver area. From downtown to the suburbs, our professional moving teams are ready to help.</p>

            <div class="border-t border-slate-200 pt-6">
              <h4 class="text-sm font-bold text-slate-900 mb-3">Popular cities we serve:</h4>
              <div class="grid grid-cols-2 gap-2">
                <div v-for="city in cities" :key="city" class="flex items-center gap-2 text-sm text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-brand-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {{ city }}
                </div>
              </div>
            </div>

            <!-- Mobile/smaller screens map inside the card -->
            <ClientOnly>
              <div id="denver-map-component-mobile" class="block lg:hidden relative left-1/2 -translate-x-1/2 w-[calc(100%+3rem)] rounded-3xl shadow-xl overflow-hidden border border-gray-200 mt-6">
                <div id="map-container-mobile"></div>
              </div>
            </ClientOnly>

            <div class="mt-6 pt-6 border-t border-slate-200">
              <a href="#quote" class="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Check your ZIP code</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Denver Map -->
        <ClientOnly>
          <div id="denver-map-component" class="hidden lg:block w-full rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div id="map-container"></div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

// Load Leaflet CSS and JS
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
      integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=',
      crossorigin: ''
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
    }
  ],
  script: [
    {
      src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
      integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=',
      crossorigin: '',
      defer: true
    }
  ]
})

const cities = [
  'Denver',
  'Aurora',
  'Lakewood',
  'Boulder',
  'Arvada',
  'Littleton',
  'Thornton',
  '+ 12 more cities'
]

const mapCities = [
  { lat: 39.7392, lng: -104.9903, name: "Denver" },
  { lat: 39.7294, lng: -104.8319, name: "Aurora" },
  { lat: 39.7047, lng: -105.0814, name: "Lakewood" },
  { lat: 39.6139, lng: -105.0166, name: "Littleton" },
  { lat: 39.5792, lng: -104.8553, name: "Centennial" },
  { lat: 39.8028, lng: -105.0875, name: "Arvada" },
  { lat: 39.8392, lng: -105.0783, name: "Westminster" },
  { lat: 39.9142, lng: -104.8058, name: "Thornton" },
  { lat: 39.9228, lng: -105.1511, name: "Broomfield" },
  { lat: 40.0150, lng: -105.2705, name: "Boulder" },
  { lat: 39.6547, lng: -104.9658, name: "Englewood" },
  { lat: 40.0992, lng: -105.1228, name: "Lafayette" },
  { lat: 40.1672, lng: -105.1019, name: "Longmont" },
  { lat: 39.3722, lng: -104.8561, name: "Castle Rock" },
  { lat: 39.8147, lng: -104.8522, name: "Commerce City" },
  { lat: 39.5186, lng: -104.7614, name: "Parker" },
  { lat: 39.7667, lng: -105.0747, name: "Wheat Ridge" },
  { lat: 39.8661, lng: -104.9847, name: "Northglenn" },
  { lat: 39.9858, lng: -104.8205, name: "Brighton" },
  { lat: 39.7555, lng: -105.2211, name: "Golden" },
  { lat: 39.9778, lng: -105.1319, name: "Louisville" },
  { lat: 40.0503, lng: -105.0492, name: "Erie" },
  { lat: 39.9328, lng: -105.1611, name: "Superior" },
  { lat: 39.8450, lng: -105.0119, name: "Federal Heights" },
  { lat: 39.6192, lng: -104.9125, name: "Greenwood Village" }
]

onMounted(async () => {
  await nextTick()
  // Wait for Leaflet to load
  const initMap = () => {
    if (typeof window.L === 'undefined') {
      setTimeout(initMap, 100)
      return
    }

    const desktopContainer = document.querySelector('#denver-map-component #map-container')
    const mobileContainer = document.querySelector('#denver-map-component-mobile #map-container-mobile')

    // Helper to init a map for a given container
    const setupMap = (el) => {
      if (!el || el._leaflet_id) return null

      // Responsive initial zoom: zoom out on mobile/smaller screens
      const isSmallScreen = typeof window.matchMedia === 'function' && window.matchMedia('(max-width: 640px)').matches
      const initialZoom = isSmallScreen ? 10 : 11

      let map
      try {
        map = window.L.map(el).setView([39.7392, -104.9903], initialZoom)
      } catch (e) {
        console.error('Denver map: failed to initialize Leaflet map', e)
        return null
      }

      try {
        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          maxZoom: 19
        }).addTo(map)
      } catch (e) {
        console.error('Denver map: failed to add tile layer', e)
        return null
      }

      const customGreenIconSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 7.47 10.9 19.35 11.43 19.92a.75.75 0 0 0 1.14 0C17.1 31.35 28 19.47 28 12 28 5.37 22.63 0 16 0z"></path>
          <path fill="#ECFDF5" d="M16 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-3.5 7.5l2 3 2.5-4 2.5 4h-9l2.5-3z"></path>
        </svg>
      `

      const customIcon = window.L.divIcon({
        html: customGreenIconSVG,
        className: '',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      })

      mapCities.forEach(city => {
        const marker = window.L.marker([city.lat, city.lng], { icon: customIcon }).addTo(map)
        marker.bindPopup(`<b>${city.name}</b>`)
      })

      if ('ResizeObserver' in window) {
        new ResizeObserver(() => {
          map.invalidateSize()
        }).observe(el)
      }

      return map
    }

    // Initialize maps for available containers
    if (desktopContainer) setupMap(desktopContainer)
    if (mobileContainer) setupMap(mobileContainer)
  }

  // slight delay to ensure layout is stable before initializing
  setTimeout(initMap, 0)
})
</script>

<style>
/* Scoped styles for the map component */
#denver-map-component {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
}

#denver-map-component #map-container {
  height: 180px; /* much shorter base height */
  width: 100%;
  z-index: 10;
  position: relative;
}

@media (min-width: 640px) { /* sm */
  #denver-map-component #map-container {
    height: 200px;
  }
}

@media (min-width: 768px) { /* md */
  #denver-map-component #map-container {
    height: 220px;
  }
}

@media (min-width: 1024px) { /* lg */
  #denver-map-component #map-container {
    height: 100%; /* match the height of the Denver Metro Area card */
    min-height: 500px; /* ensure minimum height */
  }
}

@media (min-width: 1280px) { /* xl */
  #denver-map-component #map-container {
    height: 100%; /* match the height of the Denver Metro Area card */
    min-height: 550px; /* ensure minimum height on larger screens */
  }
}

/* Filter to make the map greener */
#denver-map-component .leaflet-tile-pane {
  filter: sepia(30%) saturate(120%) grayscale(10%) contrast(100%) brightness(95%) hue-rotate(80deg);
}

#denver-map-component .leaflet-popup-content-wrapper {
  background-color: #ECFDF5;
  color: #10B981;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  animation: fadeInPopup 0.3s ease-out;
}

#denver-map-component .leaflet-popup-content {
  font-size: 16px;
  font-weight: 600;
  padding: 12px 18px;
  margin: 0;
}

#denver-map-component .leaflet-popup-tip {
  background: #ECFDF5;
}

#denver-map-component .leaflet-control-zoom-in, 
#denver-map-component .leaflet-control-zoom-out {
  background-color: #10B981 !important; /* Vibrant Green */
  color: white !important;
  border-radius: 8px !important;
  border: none !important;
  box-shadow: none !important;
  font-size: 24px; /* Larger icon */
  width: 38px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  transition: background-color 0.2s ease;
}

#denver-map-component .leaflet-control-zoom-in:hover, 
#denver-map-component .leaflet-control-zoom-out:hover {
  background-color: #059669 !important;
}

#denver-map-component .leaflet-container a {
  color: #059669;
}

/* Remove gray container/background around the zoom control bar */
#denver-map-component .leaflet-bar,
#denver-map-component .leaflet-control-zoom {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Ensure individual zoom buttons have no default borders */
#denver-map-component .leaflet-control-zoom a {
  background-color: #10B981 !important;
  color: #ffffff !important;
  border: none !important;
  box-shadow: none !important;
}

/* Make zoom controls smaller on mobile */
@media (max-width: 640px) {
  #denver-map-component .leaflet-control-zoom-in,
  #denver-map-component .leaflet-control-zoom-out {
    width: 22px;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    border-radius: 5px !important;
  }
  /* Add more spacing between the + and - buttons */
  #denver-map-component .leaflet-control-zoom a {
    margin: 0; /* reset */
  }
  #denver-map-component .leaflet-control-zoom a + a {
    margin-top: 8px;
  }
}

/* Hide default Leaflet attribution control (backup, JS also disables it) */
#denver-map-component .leaflet-control-attribution {
  display: none !important;
}

/* ===================== */
/* Mobile in-card map IDs*/
/* ===================== */

/* Typography for mobile map wrapper */
#denver-map-component-mobile {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
}

/* Mobile map container height (visible < lg) */
#denver-map-component-mobile #map-container-mobile {
  height: 180px;
  width: 100%;
  z-index: 10;
  position: relative;
}

@media (min-width: 640px) { /* sm */
  #denver-map-component-mobile #map-container-mobile { height: 200px; }
}

@media (min-width: 768px) { /* md */
  #denver-map-component-mobile #map-container-mobile { height: 220px; }
}

/* Apply same visual styles to mobile map */
#denver-map-component-mobile .leaflet-tile-pane {
  filter: sepia(30%) saturate(120%) grayscale(10%) contrast(100%) brightness(95%) hue-rotate(80deg);
}

#denver-map-component-mobile .leaflet-popup-content-wrapper {
  background-color: #ECFDF5;
  color: #10B981;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  animation: fadeInPopup 0.3s ease-out;
}

#denver-map-component-mobile .leaflet-popup-content {
  font-size: 16px;
  font-weight: 600;
  padding: 12px 18px;
  margin: 0;
}

#denver-map-component-mobile .leaflet-popup-tip {
  background: #ECFDF5;
}

#denver-map-component-mobile .leaflet-control-zoom-in,
#denver-map-component-mobile .leaflet-control-zoom-out {
  background-color: #10B981 !important;
  color: #ffffff !important;
  border-radius: 8px !important;
  border: none !important;
  box-shadow: none !important;
  font-size: 24px;
  width: 38px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  transition: background-color 0.2s ease;
}

#denver-map-component-mobile .leaflet-control-zoom-in:hover,
#denver-map-component-mobile .leaflet-control-zoom-out:hover {
  background-color: #059669 !important;
}

#denver-map-component-mobile .leaflet-container a { color: #059669; }

/* Remove gray bar around zoom control on mobile card map */
#denver-map-component-mobile .leaflet-bar,
#denver-map-component-mobile .leaflet-control-zoom {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Ensure individual zoom buttons have no default borders */
#denver-map-component-mobile .leaflet-control-zoom a {
  background-color: #10B981 !important;
  color: #ffffff !important;
  border: none !important;
  box-shadow: none !important;
}

/* Make zoom controls smaller on mobile screens */
@media (max-width: 640px) {
  #denver-map-component-mobile .leaflet-control-zoom-in,
  #denver-map-component-mobile .leaflet-control-zoom-out {
    width: 22px;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    border-radius: 5px !important;
  }
  #denver-map-component-mobile .leaflet-control-zoom a { margin: 0; }
  #denver-map-component-mobile .leaflet-control-zoom a + a { margin-top: 8px; }
}

/* Hide attribution on mobile map too */
#denver-map-component-mobile .leaflet-control-attribution {
  display: none !important;
}

/* Keyframe for popup animation */
@keyframes fadeInPopup {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
