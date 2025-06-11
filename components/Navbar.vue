<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <div class="px-5 mx-auto max-w-7xl">
      <div class="flex items-center justify-between h-16 lg:h-20">

```
    <!-- Logo -->
    <div class="flex-shrink-0">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img 
          src="https://staydrippediv.com/wp-content/uploads/2024/05/Stay-Dripped-IV-Logo.png" 
          alt="Stay Dripped IV Logo" 
          class="h-8 w-auto lg:h-10"
        >
        <span class="text-xl lg:text-2xl font-bold text-blue-600">Stay Dripped IV</span>
      </NuxtLink>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center space-x-8">
      <NuxtLink 
        to="/" 
        class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
      >
        Home
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </NuxtLink>
      
      <button 
        @click="openMenu"
        class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
      >
        Menu
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      <button 
        @click="openMembership"
        class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
      >
        Membership
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      <button 
        @click="openSponsor"
        class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
      >
        Partner
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      <button 
        @click="openEvents"
        class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
      >
        Events
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      <NuxtLink 
        to="#contact" 
        class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
      >
        Contact
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </NuxtLink>
    </div>

    <!-- Desktop CTA Button -->
    <div class="hidden lg:flex">
      <button 
        @click="openBooking"
        class="inline-flex items-center px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        💧 Book Now
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <div class="lg:hidden">
      <button 
        @click="toggleMobileMenu"
        class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  <div 
    v-show="isMobileMenuOpen"
    class="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
  >
    <div class="px-2 pt-2 pb-3 space-y-1">
      <NuxtLink 
        to="/" 
        @click="closeMobileMenu"
        class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-300"
      >
        🏠 Home
      </NuxtLink>
      
      <button 
        @click="handleMobileClick(openMenu)"
        class="w-full text-left block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-300"
      >
        📋 Menu
      </button>
      
      <button 
        @click="handleMobileClick(openMembership)"
        class="w-full text-left block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-300"
      >
        💎 Membership
      </button>
      
      <button 
        @click="handleMobileClick(openSponsor)"
        class="w-full text-left block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-300"
      >
        🚀 Partner
      </button>
      
      <button 
        @click="handleMobileClick(openEvents)"
        class="w-full text-left block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-300"
      >
        🎉 Events
      </button>
      
      <NuxtLink 
        to="#contact" 
        @click="closeMobileMenu"
        class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-300"
      >
        📞 Contact
      </NuxtLink>
      
      <!-- Mobile CTA Button -->
      <div class="pt-4">
        <button 
          @click="handleMobileClick(openBooking)"
          class="w-full inline-flex items-center justify-center px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
        >
          💧 Book Your Treatment
        </button>
      </div>
    </div>
  </div>
</div>
```

  </nav>
</template>

<script setup>
import { ref } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleMobileClick = (callback) => {
  closeMobileMenu()
  callback()
}

// Navigation functions
const openBooking = () => {
  try {
    window.open('https://Staydripped.intakeq.com/booking', '_blank');
  } catch (error) {
    console.log('Booking error handled:', error);
    window.location.href = 'https://Staydripped.intakeq.com/booking';
  }
}

const openMenu = () => {
  try {
    alert('Opening full treatment menu...\n\nBrowse our complete selection of IV therapy treatments including:\n• Basic Hydration Treatments\n• Standard Wellness IVs\n• Specialty Cocktails\n• Premium NAD+ Therapy');
  } catch (error) {
    console.log('Menu error handled:', error);
  }
}

const openMembership = () => {
  try {
    alert('💎 VIP Membership Program\n\nJoin our exclusive membership for:\n• 20% off all treatments\n• Priority booking\n• Free monthly wellness consultation\n• Special member-only treatments\n\nContact us for more details!');
  } catch (error) {
    console.log('Membership error handled:', error);
  }
}

const openSponsor = () => {
  try {
    alert('🚀 Influencer Partnership Program\n\nJoin our brand ambassador program:\n• Competitive commissions\n• Free treatments for content\n• Marketing support\n• Flexible partnership terms\n\nApply today to start earning!');
  } catch (error) {
    console.log('Sponsor error handled:', error);
  }
}

const openEvents = () => {
  try {
    alert('🎉 Corporate & Event Services\n\nWe provide IV therapy for:\n• Corporate wellness events\n• Private parties\n• Athletic events\n• Wedding parties\n• Group bookings\n\nContact us for custom packages!');
  } catch (error) {
    console.log('Events error handled:', error);
  }
}
</script>
