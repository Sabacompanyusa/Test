export default defineNuxtConfig({
// Application configuration
app: {
head: {
title: ‘Stay Dripped IV - Premium Mobile IV Therapy Arizona’,
meta: [
{ charset: ‘utf-8’ },
{ name: ‘viewport’, content: ‘width=device-width, initial-scale=1’ },
{ name: ‘description’, content: ‘Premium mobile IV therapy services in Arizona. Professional hydration, recovery, and wellness treatments delivered to your door.’ }
],
link: [
{ rel: ‘icon’, type: ‘image/png’, href: ‘/favicon.png’ }
]
}
},

// CSS configuration
css: [’~/assets/css/main.css’],

// Development server
devtools: { enabled: true },

// SSR and generation
ssr: true,
nitro: {
preset: ‘netlify’
},

// Runtime config for environment variables
runtimeConfig: {
// Private keys (only available on server-side)
googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || ‘G-T9V90Q7G0M’,

```
// Public keys (exposed to client-side)
public: {
  siteUrl: process.env.SITE_URL || 'https://staydrippediv.com',
  bookingUrl: process.env.BOOKING_URL || 'https://Staydripped.intakeq.com/booking',
  phone: process.env.PHONE || '(602) 688-9825',
  email: process.env.EMAIL || 'Info@staydrippedmobileiv.com',
  businessName: 'Stay Dripped IV',
  serviceArea: 'Scottsdale & Greater Phoenix, AZ'
}
```

},

// SEO and social sharing
site: {
url: ‘https://staydrippediv.com’,
name: ‘Stay Dripped IV’,
description: ‘Premium mobile IV therapy services in Arizona’,
defaultLocale: ‘en’
},

// Build configuration
build: {
transpile: []
},

// Modules
modules: [
‘@nuxtjs/tailwindcss’,
‘@nuxtjs/google-fonts’,
‘@nuxt/image’,
‘@pinia/nuxt’
],

// Google Fonts
googleFonts: {
families: {
Inter: [300, 400, 500, 600, 700, 800, 900]
},
display: ‘swap’,
preload: true
},

// Image optimization
image: {
cloudinary: {
baseURL: ‘https://res.cloudinary.com/stay-dripped-iv/image/upload/’
},
domains: [‘staydrippediv.com’]
},

// Route rules for performance
routeRules: {
‘/’: { prerender: true },
‘/booking’: { ssr: false },
‘/api/**’: { cors: true }
},

// Tailwind CSS
tailwindcss: {
cssPath: ‘~/assets/css/main.css’,
configPath: ‘tailwind.config.js’
},

// Experimental features
experimental: {
payloadExtraction: false
},

// Vite configuration
vite: {
optimizeDeps: {
include: [‘vue’, ‘@vue/runtime-core’]
}
},

// Hooks for build optimization
hooks: {
‘build:before’: () => {
console.log(‘🏥 Building Stay Dripped IV website…’)
},
‘build:done’: () => {
console.log(‘✅ Stay Dripped IV build complete!’)
}
}
})
