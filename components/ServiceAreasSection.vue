<template>
  <section id="areas" class="relative py-16 sm:py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">Service Areas</h2>
        <div class="mx-auto mt-2 h-1 w-16 rounded bg-brand-600"></div>
        <p class="mt-4 text-base text-slate-600">Serving the greater Denver metro area within a 50-mile radius</p>
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
          <div id="denver-map-component" class="w-full rounded-3xl shadow-xl overflow-hidden border border-gray-200">
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

    const mapContainer = document.querySelector('#denver-map-component #map-container')
    if (!mapContainer) {
      console.error('Denver map: container not found')
      return
    }
    
    // Prevent re-initialization if the script is loaded multiple times
    if (mapContainer && mapContainer._leaflet_id) {
      return
    }

    // Initialize the map and set its view
    let map
    try {
      map = window.L.map(mapContainer).setView([39.7392, -104.9903], 9)
    } catch (e) {
      console.error('Denver map: failed to initialize Leaflet map', e)
      return
    }

    // Add tile layer
    try {
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
      }).addTo(map)
    } catch (e) {
      console.error('Denver map: failed to add tile layer', e)
      return
    }

    // Custom green marker icon using an inline SVG
    const customGreenIconSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
        <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>
        <path fill="#059669" d="M16 0C9.37 0 4 5.37 4 12c0 1.552.28 3.043.81 4.43l.09.24.01.03a11.95 11.95 0 0 0 3.23 4.41c2.25 2.2 4.88 3.78 5.7 6.48.23.78.23 1.62 0 2.4l-.01.06c-.23.77-1.13 1.46-2.02 1.45-1.12-.02-2.18-.7-2.6-1.7-.02-.05-.04-.1-.05-.15-.42-1-.96-1.92-1.58-2.77-.14-.19-.36-.3-.58-.3-.22 0-.44.11-.58.3-.62.85-1.16 1.77-1.58 2.77-.01.05-.03.1-.05.15-.42 1-1.48 1.68-2.6 1.7-.9.01-1.79-.68-2.02-1.45l-.01-.06c-.23-.78-.23-1.62 0-2.4.82-2.7 3.45-4.28 5.7-6.48A11.95 11.95 0 0 0 11.1 16.67l.01-.03.09-.24C11.72 15.043 12 13.552 12 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.552-.28 3.043-.81 4.43l-.09.24-.01.03a11.95 11.95 0 0 0-3.23 4.41c-2.25 2.2-4.88 3.78-5.7 6.48-.23.78-.23 1.62 0 2.4l.01.06c.23.77 1.13 1.46 2.02 1.45 1.12.02 2.18-.7 2.6-1.7.02-.05.04-.1.05-.15.42-1 .96-1.92 1.58-2.77.14-.19.36-.3.58-.3.22 0 .44.11.58.3.62.85 1.16 1.77 1.58 2.77.01.05.03.1.05.15.42 1 1.48 1.68 2.6 1.7.9.01 1.79-.68 2.02-1.45l.01-.06c.23-.78.23-1.62 0-2.4-.82-2.7-3.45-4.28-5.7-6.48a11.95 11.95 0 0 0-2.86-4.17l-.01-.03-.09-.24C20.28 15.043 20 13.552 20 12c0-6.63-5.37-12-12-12zm0 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
        <path fill="#fff" d="M16 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
        <path fill="#10B981" d="M16 4.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/>
        <path fill="#fff" d="M16.5 10h-1v3h-3v1h3v3h1v-3h3v-1h-3z"/>
      </svg>
    `

    const customIcon = window.L.divIcon({
      html: customGreenIconSVG,
      className: '',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    })

    // Add markers to the map
    mapCities.forEach(city => {
      const marker = window.L.marker([city.lat, city.lng], { icon: customIcon }).addTo(map)
      marker.bindPopup(`<b>${city.name}</b>`)
    })

    // Ensure map resizes correctly if the component's container resizes
    if ('ResizeObserver' in window) {
      new ResizeObserver(() => {
        map.invalidateSize()
      }).observe(mapContainer)
    }
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
  height: 550px; 
  width: 100%;
  z-index: 10;
  position: relative;
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
  background-color: #10B981 !important;
  color: white !important;
  border-radius: 8px !important;
  border: none !important;
  font-size: 24px;
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

/* Hide default Leaflet attribution control (backup, JS also disables it) */
#denver-map-component .leaflet-control-attribution {
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
