<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🩺 Good Faith Medical Examination
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Required for all first-time customers to ensure safe, personalized treatment
          </p>
        </div>
      </section>

```
  <!-- What Is It Section -->
  <section class="py-16 bg-blue-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        What is a Good Faith Examination?
      </h2>
      
      <div class="grid gap-8 md:grid-cols-2">
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">🏥 Medical Standard</h3>
          <p class="text-gray-700 leading-relaxed">
            A good faith examination establishes a provider-patient relationship and ensures 
            treatments are medically appropriate for your individual health profile and wellness goals.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">🛡️ Your Safety</h3>
          <p class="text-gray-700 leading-relaxed">
            This comprehensive assessment helps us identify any contraindications, allergies, 
            or medical conditions that could affect your treatment plan.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Steps -->
  <section class="py-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
        Your Examination Process
      </h2>
      
      <div class="grid gap-8 md:grid-cols-3">
        <div 
          v-for="(step, index) in examData.processSteps" 
          :key="step.title"
          class="text-center relative"
        >
          <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
            {{ index + 1 }}
          </div>
          
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ step.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
          
          <div class="mt-4 text-sm text-blue-600 font-medium">
            {{ step.duration }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What We Review -->
  <section class="py-16 bg-gray-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        What We Review
      </h2>
      
      <div class="grid gap-6 md:grid-cols-2">
        <div 
          v-for="category in examData.reviewCategories"
          :key="category.title"
          class="bg-white rounded-xl p-6 shadow-lg"
        >
          <div class="flex items-center mb-4">
            <span class="text-2xl mr-3">{{ category.icon }}</span>
            <h3 class="text-lg font-semibold text-gray-900">{{ category.title }}</h3>
          </div>
          <ul class="space-y-2">
            <li 
              v-for="item in category.items"
              :key="item"
              class="text-gray-600 flex items-center"
            >
              <span class="text-green-500 mr-2">✓</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Qualiphy Widget Section -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">
        Schedule Your Good Faith Examination
      </h2>
      
      <div class="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
        <p class="text-lg text-gray-700 mb-8">
          Complete your required examination to unlock access to all Stay Dripped IV services
        </p>
        
        <!-- Qualiphy Widget Placeholder -->
        <div class="bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-12 mb-8">
          <div class="text-center">
            <div class="text-4xl mb-4">📋</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Qualiphy Scheduling Widget</h3>
            <p class="text-gray-600">
              Interactive scheduling system will be embedded here
            </p>
          </div>
        </div>
        
        <!-- Alternative Booking Methods -->
        <div class="grid gap-4 md:grid-cols-3">
          <a 
            href="tel:+16026889825"
            class="flex items-center justify-center p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors duration-300"
          >
            <span class="text-green-600 mr-2">📞</span>
            <span class="font-semibold text-green-800">Call Us</span>
          </a>
          
          <a 
            href="mailto:Info@staydrippedmobileiv.com"
            class="flex items-center justify-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300"
          >
            <span class="text-blue-600 mr-2">✉️</span>
            <span class="font-semibold text-blue-800">Email Us</span>
          </a>
          
          <a 
            href="https://Staydripped.intakeq.com/booking"
            target="_blank"
            class="flex items-center justify-center p-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors duration-300"
          >
            <span class="text-purple-600 mr-2">🌐</span>
            <span class="font-semibold text-purple-800">Online</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      
      <div class="space-y-6">
        <div 
          v-for="faq in examData.faqs"
          :key="faq.question"
          class="bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ faq.question }}</h3>
          <p class="text-gray-700 leading-relaxed">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</Container>
```

  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'Good Faith Medical Examination | Stay Dripped IV',
  meta: [
    { name: 'description', content: 'Required good faith medical examination for new patients. Ensuring safe, personalized IV therapy and wellness treatments.' }
  ]
})

// Load exam data
const { data: examData } = await $fetch('/data/good-faith-exam.json')
</script>
