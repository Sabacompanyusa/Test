<template>
  <section class="relative bg-gradient-to-br from-blue-500 to-blue-700 text-white overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="animate-float absolute inset-0"
           style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><defs><pattern id=&quot;waves&quot; width=&quot;20&quot; height=&quot;20&quot; patternUnits=&quot;userSpaceOnUse&quot;><path d=&quot;M0 10 Q 5 0 10 10 T 20 10&quot; stroke=&quot;white&quot; stroke-width=&quot;0.5&quot; fill=&quot;none&quot; opacity=&quot;0.3&quot;/></pattern></defs><rect width=&quot;100&quot; height=&quot;100&quot; fill=&quot;url(%23waves)&quot;/></svg>');">
      </div>
    </div>

```
<div class="relative z-10 px-5 mx-auto max-w-7xl py-20 lg:py-32">
  <div class="text-center">
    <!-- Main Heading -->
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slideInDown">
      {{ title || 'Stay Dripped IV' }}
    </h1>
    
    <!-- Tagline -->
    <p class="text-xl md:text-2xl lg:text-3xl font-light mb-8 opacity-90 animate-slideInUp animation-delay-300">
      {{ tagline || 'Premium Mobile IV Therapy & Wellness' }}
    </p>
    
    <!-- Description -->
    <p class="text-lg md:text-xl max-w-3xl mx-auto mb-12 opacity-80 animate-slideInUp animation-delay-600">
      {{ description || 'Hydration, wellness, and recovery delivered straight to your door. Trusted by top performers, athletes, and everyday warriors across the Valley.' }}
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInUp animation-delay-900">
      <button 
        @click="openBooking"
        class="inline-flex items-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
      >
        💧 Book Your Treatment Now
      </button>
      
      <button 
        @click="openMenu"
        class="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
      >
        📋 View Our Menu
      </button>
    </div>

    <!-- Trust Indicators -->
    <div class="mt-16 pt-8 border-t border-blue-400 border-opacity-30">
      <p class="text-sm uppercase tracking-wider text-blue-200 mb-4">Trusted by</p>
      <div class="flex flex-wrap justify-center items-center gap-8 text-blue-100">
        <span class="text-sm">🏆 Top Athletes</span>
        <span class="text-sm">💼 Business Professionals</span>
        <span class="text-sm">🎯 Health Enthusiasts</span>
        <span class="text-sm">🌟 Wellness Warriors</span>
      </div>
    </div>
  </div>
</div>

<!-- Scroll Indicator -->
<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
    <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
  </div>
</div>
```

  </section>
</template>

<script setup>
// Props for customization
const props = defineProps({
  title: {
    type: String,
    default: 'Stay Dripped IV'
  },
  tagline: {
    type: String,
    default: 'Premium Mobile IV Therapy & Wellness'
  },
  description: {
    type: String,
    default: 'Hydration, wellness, and recovery delivered straight to your door. Trusted by top performers, athletes, and everyday warriors across the Valley.'
  }
});

// Navigation functions
const openBooking = () => {
  try {
    window.open('https://Staydripped.intakeq.com/booking', '_blank');
  } catch (error) {
    console.log('Booking error handled:', error);
    window.location.href = 'https://Staydripped.intakeq.com/booking';
  }
};

const openMenu = () => {
  try {
    alert('Stay Dripped IV - Complete Treatment Menu\n\n💧 HYDRATION & WELLNESS:\n• Basic Rehydrate - $145\n• Myers Cocktail - $205\n• Mega Myers Cocktail - $235\n\n🍺 RECOVERY & RELIEF:\n• Day After The Dale (Hangover) - $195\n• Platinum Ultimate Recovery - $355\n• Gold Ultimate Recovery - $325\n\n🏅 PERFORMANCE & ENERGY:\n• D-Book Athletic Performance - $215\n• Sun Devil Energy Boost - $225\n• Mental Clarity - $225\n\n✨ BEAUTY & ANTI-AGING:\n• Scottsdale 10 Beauty - $245\n• Fountain of Youth - $425\n• NAD+ Therapy - $400-$525\n\n🛡️ IMMUNE & WELLNESS:\n• Diamondback Immune Booster - $225\n• Arizona Detox & Cleanse - $265\n• Anti-Inflammatory - $235\n\n📞 Call (602) 688-9825 to book!')
  } catch (error) {
    console.log('Menu error handled:', error);
  }
};
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateX(0px) translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateX(30px) translateY(-30px) rotate(120deg);
  }
  66% {
    transform: translateX(-20px) translateY(20px) rotate(240deg);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-slideInDown {
  animation: slideInDown 1s ease-out;
}

.animate-slideInUp {
  animation: slideInUp 1s ease-out;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  animation-fill-mode: both;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  animation-fill-mode: both;
}

.animation-delay-900 {
  animation-delay: 0.9s;
  animation-fill-mode: both;
}
</style>
