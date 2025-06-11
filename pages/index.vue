<template>
  <div>
    <!-- Hero Section -->
    <Hero 
      title="Stay Dripped IV"
      tagline="Premium Mobile IV Therapy & Wellness"
      description="Arizona's premier mobile wellness service. From IV therapy to aesthetics, we bring medical-grade treatments to your location."
    />

```
<!-- Main Content Container -->
<Container>
  <!-- Quick Service Links -->
  <section class="py-16 animate-on-scroll">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Services
      </h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Comprehensive wellness solutions delivered to your door by licensed medical professionals
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <NuxtLink 
        v-for="service in homeData.quickServices" 
        :key="service.title"
        :to="service.link"
        class="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border-2 border-transparent hover:border-blue-500"
      >
        <div class="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
          {{ service.icon }}
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2 text-center">{{ service.title }}</h3>
        <p class="text-gray-600 text-center text-sm">{{ service.description }}</p>
        <div class="text-center mt-3">
          <span class="text-blue-600 font-semibold">{{ service.priceRange }}</span>
        </div>
      </NuxtLink>
    </div>
  </section>

  <!-- First Time Customer Notice -->
  <section class="py-16 bg-blue-50 -mx-5 px-5 animate-on-scroll">
    <div class="max-w-4xl mx-auto text-center">
      <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          🩺 First Time Customers
        </h3>
        <p class="text-lg text-gray-700 mb-6">
          Required Good Faith Medical Exam - Ensuring safe, personalized treatment for every client
        </p>
        <NuxtLink 
          to="/good-faith-exam"
          class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          📋 Learn More About Your Exam
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Featured Treatments -->
  <section class="py-16 animate-on-scroll">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured Treatments
      </h2>
      <p class="text-lg text-gray-600">
        Our most popular wellness solutions
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="treatment in homeData.featuredTreatments" 
        :key="treatment.name"
        class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div class="text-3xl mb-4">{{ treatment.icon }}</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ treatment.name }}</h3>
        <p class="text-gray-600 mb-4">{{ treatment.description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-2xl font-bold text-blue-600">{{ treatment.price }}</span>
          <span class="text-sm text-gray-500">{{ treatment.duration }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Stay Dripped -->
  <Features 
    title="Why Choose Stay Dripped IV?"
    description="Arizona's most trusted mobile wellness provider with comprehensive medical services"
    :items="homeData.whyChooseUs"
  />

  <!-- Service Areas -->
  <section class="py-16 bg-gray-50 -mx-5 px-5 animate-on-scroll">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Service Areas
      </h2>
      <p class="text-lg text-gray-600">
        Professional mobile wellness throughout the Valley
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
      <div 
        v-for="area in homeData.serviceAreas" 
        :key="area.name"
        class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div class="text-3xl mb-3">{{ area.icon }}</div>
        <h3 class="font-semibold text-gray-900 mb-2">{{ area.name }}</h3>
        <p class="text-sm text-gray-600">{{ area.description }}</p>
      </div>
    </div>
  </section>
</Container>

<!-- Testimonials -->
<Testimonials 
  title="What Our Clients Say"
  description="Real reviews from satisfied customers across Arizona"
  :initialLimit="6"
/>

<!-- Final CTA -->
<Cta 
  title="Ready to Feel Your Best?"
  description="Join thousands of satisfied clients who trust Stay Dripped IV for their wellness needs"
  :buttons="[
    { label: '💧 Book Treatment Now', url: 'https://Staydripped.intakeq.com/booking' },
    { label: '📞 Call Us Today', url: 'tel:+16026889825' }
  ]"
/>
```

  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'Stay Dripped IV - Premium Mobile Wellness Arizona',
  meta: [
    { name: 'description', content: 'Arizona\'s premier mobile wellness service. IV therapy, aesthetics, weight management, and more delivered to your location by licensed medical professionals.' }
  ]
})

// Load home page data
const { data: homeData } = await $fetch('/data/index.json')
</script>