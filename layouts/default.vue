<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <Navbar />

```
<!-- Main Content -->
<main>
  <slot />
</main>

<!-- Footer -->
<Footer />

<!-- Global Scripts & Analytics -->
<ClientOnly>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-T9V90Q7G0M"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-T9V90Q7G0M');
  </script>
  
  <!-- Scroll to Top Button -->
  <Transition name="fade">
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>
  </Transition>
  
  <!-- Loading Indicator -->
  <Transition name="fade">
    <div
      v-if="$nuxt.isLoading"
      class="fixed top-0 left-0 w-full h-1 bg-blue-600 z-50"
      style="animation: loading 2s linear infinite;"
    ></div>
  </Transition>
</ClientOnly>
```

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// SEO and Meta
useHead({
  titleTemplate: '%s | Stay Dripped IV - Mobile IV Therapy Arizona',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Premium mobile IV therapy services in Arizona. Hydration, wellness, recovery, and anti-aging treatments delivered to your door by licensed medical professionals.' },
    { name: 'keywords', content: 'mobile IV therapy, IV drip, hydration therapy, hangover cure, vitamin therapy, Arizona, Scottsdale, Phoenix, wellness, recovery' },
    { name: 'author', content: 'Stay Dripped IV' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Stay Dripped IV' },
    { property: 'og:title', content: 'Stay Dripped IV - Premium Mobile IV Therapy Arizona' },
    { property: 'og:description', content: 'Professional mobile IV therapy services delivered to your door. Hydration, recovery, wellness treatments by licensed medical professionals.' },
    { property: 'og:image', content: 'https://staydrippediv.com/wp-content/uploads/2024/05/Stay-Dripped-IV-Logo.png' },
    { property: 'og:url', content: 'https://staydrippediv.com' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Stay Dripped IV - Mobile IV Therapy Arizona' },
    { name: 'twitter:description', content: 'Premium mobile IV therapy delivered to your door in Arizona' },
    { name: 'twitter:image', content: 'https://staydrippediv.com/wp-content/uploads/2024/05/Stay-Dripped-IV-Logo.png' },
    
    // Local Business Schema
    { name: 'geo.region', content: 'US-AZ' },
    { name: 'geo.placename', content: 'Scottsdale, Arizona' },
    { name: 'geo.position', content: '33.4942,-111.9261' },
    
    // Theme
    { name: 'theme-color', content: '#00c6ff' },
    { name: 'msapplication-TileColor', content: '#00c6ff' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: 'https://staydrippediv.com/wp-content/uploads/2024/05/Stay-Dripped-IV-Logo.png' },
    { rel: 'canonical', href: 'https://staydrippediv.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Stay Dripped IV",
        "description": "Premium mobile IV therapy and wellness services",
        "url": "https://staydrippediv.com",
        "logo": "https://staydrippediv.com/wp-content/uploads/2024/05/Stay-Dripped-IV-Logo.png",
        "image": "https://staydrippediv.com/wp-content/uploads/2024/05/Stay-Dripped-IV-Logo.png",
        "telephone": "+1-602-688-9825",
        "email": "Info@staydrippedmobileiv.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Scottsdale",
          "addressRegion": "AZ",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.4942",
          "longitude": "-111.9261"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Scottsdale"
          },
          {
            "@type": "City", 
            "name": "Phoenix"
          },
          {
            "@type": "State",
            "name": "Arizona"
          }
        ],
        "serviceType": [
          "Mobile IV Therapy",
          "Hydration Therapy", 
          "Vitamin Therapy",
          "Recovery Treatment",
          "Wellness Services"
        ],
        "priceRange": "$$",
        "openingHours": "Mo-Su 08:00-20:00",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "50+"
        },
        "sameAs": [
          "https://instagram.com/officialstaydrippediv"
        ]
      })
    }
  ]
})

// Scroll to top functionality
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Smooth scroll for anchor links
const handleAnchorClick = (event) => {
  const target = event.target
  if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
    event.preventDefault()
    const id = target.getAttribute('href').substring(1)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}

// Performance optimizations
const observeImages = () => {
  const images = document.querySelectorAll('img[data-src]')
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach(img => imageObserver.observe(img))
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleAnchorClick)
  
  // Initialize lazy loading for images
  observeImages()
  
  // Add scroll reveal animations
  const revealElements = document.querySelectorAll('.animate-on-scroll')
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
      }
    })
  }, { threshold: 0.1 })
  
  revealElements.forEach(el => revealObserver.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleAnchorClick)
})

// Error handling
const onError = (error) => {
  console.error('Layout error:', error)
  // You could add error reporting here
}

// Provide global methods
provide('scrollToTop', scrollToTop)
provide('onError', onError)
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Scroll animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.animate-on-scroll.animated {
  opacity: 1;
  transform: translateY(0);
}

/* Loading animation */
@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
}

/* Lazy loading images */
img.lazy {
  opacity: 0;
  transition: opacity 0.3s;
}

img:not(.lazy) {
  opacity: 1;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Focus styles for accessibility */
button:focus,
a:focus {
  outline: 2px solid #00c6ff;
  outline-offset: 2px;
}

/* Smooth page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  * {
    border-color: currentColor;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}
</style>
