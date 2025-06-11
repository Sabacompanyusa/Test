<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Complete Medical Wellness Services
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive mobile medical services including IV therapy, aesthetics, weight management, and specialty treatments delivered to your location.
        </p>
      </section>

```
  <!-- Service Navigation Tabs -->
  <section class="py-8">
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button 
        v-for="tab in serviceTabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-6 py-3 rounded-full font-semibold transition-all duration-300',
          activeTab === tab.id 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        ]"
      >
        {{ tab.icon }} {{ tab.name }}
      </button>
    </div>
  </section>

  <!-- IV Therapy Section -->
  <section v-show="activeTab === 'iv-therapy'" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">💉 IV Cocktail Menu & Treatments</h2>
      <p class="text-lg text-gray-600">Professional IV therapy treatments for hydration, recovery, wellness, and performance.</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="treatment in ivTreatments" :key="treatment.name" class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-semibold text-gray-900">{{ treatment.name }}</h3>
          <span class="text-xl font-bold text-blue-600">${{ treatment.price }}</span>
        </div>
        <p class="text-gray-600 mb-4">{{ treatment.description }}</p>
        <div class="mb-4">
          <h4 class="font-medium text-gray-900 mb-2">Ingredients:</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li v-for="ingredient in treatment.ingredients" :key="ingredient">• {{ ingredient }}</li>
          </ul>
        </div>
        <button @click="bookTreatment(treatment.name)" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  </section>

  <!-- IM Injections Section -->
  <section v-show="activeTab === 'im-injections'" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">💊 IM Injection Shots</h2>
      <p class="text-lg text-gray-600">Intramuscular injections for targeted wellness, energy, and health optimization.</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="injection in imInjections" :key="injection.name" class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="text-center mb-4">
          <div class="text-3xl mb-2">{{ injection.icon }}</div>
          <h3 class="text-lg font-semibold text-gray-900">{{ injection.name }}</h3>
          <span class="text-xl font-bold text-blue-600">${{ injection.price }}</span>
        </div>
        <p class="text-gray-600 text-center mb-4">{{ injection.description }}</p>
        <button @click="bookTreatment(injection.name)" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  </section>

  <!-- NAD+ & Peptides Section -->
  <section v-show="activeTab === 'nad-peptides'" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">🧬 NAD+ & Peptide Therapy</h2>
      <p class="text-lg text-gray-600">Advanced anti-aging and regenerative medicine treatments for optimal cellular health.</p>
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="treatment in nadPeptides" :key="treatment.name" class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="flex justify-between items-start mb-6">
          <h3 class="text-xl font-semibold text-gray-900">{{ treatment.name }}</h3>
          <span class="text-2xl font-bold text-blue-600">${{ treatment.price }}</span>
        </div>
        <p class="text-gray-600 mb-6">{{ treatment.description }}</p>
        <div class="mb-6">
          <h4 class="font-medium text-gray-900 mb-3">Benefits:</h4>
          <ul class="text-gray-600 space-y-2">
            <li v-for="benefit in treatment.benefits" :key="benefit">✓ {{ benefit }}</li>
          </ul>
        </div>
        <button @click="bookTreatment(treatment.name)" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          Book Consultation
        </button>
      </div>
    </div>
  </section>

  <!-- Aesthetics Section -->
  <section v-show="activeTab === 'aesthetics'" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">✨ Botox, Fillers & Aesthetic Treatments</h2>
      <p class="text-lg text-gray-600">Professional cosmetic treatments to enhance your natural beauty and confidence.</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="treatment in aestheticTreatments" :key="treatment.name" class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="text-center mb-4">
          <div class="text-4xl mb-3">{{ treatment.icon }}</div>
          <h3 class="text-lg font-semibold text-gray-900">{{ treatment.name }}</h3>
          <span class="text-lg font-bold text-blue-600">{{ treatment.price }}</span>
        </div>
        <p class="text-gray-600 text-center mb-4">{{ treatment.description }}</p>
        <div class="text-center mb-4">
          <span class="text-sm text-gray-500">{{ treatment.duration }}</span>
        </div>
        <button @click="bookTreatment(treatment.name)" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Book Consultation
        </button>
      </div>
    </div>
  </section>

  <!-- Weight Management Section -->
  <section v-show="activeTab === 'weight-management'" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">⚖️ Weight Management & Hormone Replacement</h2>
      <p class="text-lg text-gray-600">Medically supervised weight loss and hormone optimization programs.</p>
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="program in weightPrograms" :key="program.name" class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ program.name }}</h3>
        <p class="text-gray-600 mb-6">{{ program.description }}</p>
        <div class="mb-6">
          <h4 class="font-medium text-gray-900 mb-3">Program Includes:</h4>
          <ul class="text-gray-600 space-y-2">
            <li v-for="item in program.includes" :key="item">✓ {{ item }}</li>
          </ul>
        </div>
        <div class="text-center mb-6">
          <span class="text-2xl font-bold text-blue-600">{{ program.price }}</span>
        </div>
        <button @click="bookTreatment(program.name)" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          Start Program
        </button>
      </div>
    </div>
  </section>

  <!-- Allergy/Blood Testing Section -->
  <section v-show="activeTab === 'testing'" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">🔬 Allergy & Blood Testing Services</h2>
      <p class="text-lg text-gray-600">Comprehensive testing services to optimize your health and identify sensitivities.</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="test in testingServices" :key="test.name" class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="text-center mb-4">
          <div class="text-4xl mb-3">{{ test.icon }}</div>
          <h3 class="text-lg font-semibold text-gray-900">{{ test.name }}</h3>
          <span class="text-lg font-bold text-blue-600">${{ test.price }}</span>
        </div>
        <p class="text-gray-600 text-center mb-4">{{ test.description }}</p>
        <div class="mb-4">
          <h4 class="font-medium text-gray-900 mb-2 text-center">Tests Include:</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li v-for="item in test.includes" :key="item">• {{ item }}</li>
          </ul>
        </div>
        <button @click="bookTreatment(test.name)" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Order Test Kit
        </button>
      </div>
    </div>
  </section>

  <!-- Cold Plunge Section -->
  <section v-show="activeTab === 'cold-plunge'" class="py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">🧊 Mobile Cold Plunge Service</h2>
      <p class="text-lg text-gray-600">Professional cold water therapy brought directly to your location for recovery and wellness.</p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">❄️</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Professional Cold Water Therapy</h3>
          <p class="text-lg text-gray-600">Experience the benefits of cold plunge therapy in the comfort of your own space.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 class="font-semibold text-blue-600 mb-4">Service Includes:</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• Professional-grade cold plunge tub setup</li>
              <li>• Temperature monitoring and control</li>
              <li>• Safety supervision by trained staff</li>
              <li>• Pre and post-session health assessment</li>
              <li>• Complete setup and breakdown</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-blue-600 mb-4">Health Benefits:</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• Enhanced muscle recovery</li>
              <li>• Improved circulation</li>
              <li>• Reduced inflammation</li>
              <li>• Increased mental clarity</li>
              <li>• Boosted immune system</li>
            </ul>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div v-for="package in coldPlungePackages" :key="package.name" class="bg-white rounded-xl p-6 text-center shadow-lg">
            <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ package.name }}</h4>
            <div class="text-2xl font-bold text-blue-600 mb-2">${{ package.price }}</div>
            <p class="text-gray-600 mb-4">{{ package.description }}</p>
            <ul class="text-sm text-gray-600 space-y-1 mb-4">
              <li v-for="feature in package.features" :key="feature">• {{ feature }}</li>
            </ul>
            <button @click="bookTreatment(package.name)" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-blue-50 -mx-5 px-5">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Wellness Journey?</h2>
      <p class="text-xl text-gray-600 mb-8">Contact us to discuss which services are right for you.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          @click="openBooking"
          class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          📅 Book Consultation
        </button>
        <a 
          href="tel:+16026889825"
          class="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          📞 Call (602) 688-9825
        </a>
      </div>
    </div>
  </section>
</Container>
```

  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Complete Medical Wellness Services | Stay Dripped IV',
  meta: [
    { name: 'description', content: 'Comprehensive mobile medical services including IV therapy, aesthetics, weight management, NAD+ therapy, and specialty treatments in Arizona.' }
  ]
})

// Reactive data
const activeTab = ref('iv-therapy')

// Service tabs
const serviceTabs = [
  { id: 'iv-therapy', name: 'IV Therapy', icon: '💉' },
  { id: 'im-injections', name: 'IM Injections', icon: '💊' },
  { id: 'nad-peptides', name: 'NAD+ & Peptides', icon: '🧬' },
  { id: 'aesthetics', name: 'Aesthetics', icon: '✨' },
  { id: 'weight-management', name: 'Weight Management', icon: '⚖️' },
  { id: 'testing', name: 'Testing Services', icon: '🔬' },
  { id: 'cold-plunge', name: 'Cold Plunge', icon: '🧊' }
]

// IV Treatments (from your actual menu)
const ivTreatments = [
  {
    name: 'Basic Rehydrate',
    price: 145,
    description: 'Essential hydration with vitamin B-Complex',
    ingredients: ['Sodium Chloride 0.9% (500mL)', 'Vitamin B Complex']
  },
  {
    name: 'Myers Cocktail',
    price: 205,
    description: 'Comprehensive vitamin and mineral blend',
    ingredients: ['Sodium Chloride 0.9%', 'Vitamin B-12', 'Zinc Sulfate', 'Magnesium Chloride', 'Glutathione', 'Vitamin C', 'Vitamin B-Complex']
  },
  {
    name: 'Day After The Dale (Hangover Relief)',
    price: 195,
    description: 'Ultimate hangover recovery treatment',
    ingredients: ['Sodium Chloride 0.9%', 'Vitamin B Complex', 'Vitamin B-12', 'Ondansetron HCl (Anti-Nausea)']
  },
  {
    name: 'Platinum Ultimate Recovery',
    price: 355,
    description: 'Premium recovery and hydration blend',
    ingredients: ['Lactated Ringers', 'Vitamin C', 'Vitamin B Complex', 'Zinc Sulfate', 'Glutathione', 'Vitamin B-12', 'Magnesium Chloride']
  },
  {
    name: 'D-Book Athletic Performance',
    price: 215,
    description: 'Optimized for athletic performance and recovery',
    ingredients: ['Sodium Chloride 0.9%', 'Vitamin C', 'Amino Blend', 'Magnesium Chloride', 'Glutathione', 'L-Carnitine', 'Vitamin B Complex']
  },
  {
    name: 'Scottsdale 10 Beauty',
    price: 245,
    description: 'Beauty and anti-aging IV treatment',
    ingredients: ['Vitamin C', 'Vitamin B Complex', 'Biotin', 'Zinc Sulfate', 'Glutathione', 'Sodium Chloride 0.9%']
  }
]

// IM Injections
const imInjections = [
  {
    name: 'B-12 Energy',
    price: 35,
    icon: '⚡',
    description: 'Boost energy and metabolism'
  },
  {
    name: 'Glutathione',
    price: 45,
    icon: '✨',
    description: 'Master antioxidant for detox and glow'
  },
  {
    name: 'Vitamin D3',
    price: 40,
    icon: '☀️',
    description: 'Essential vitamin for immune support'
  },
  {
    name: 'MIC (Lipotropic)',
    price: 50,
    icon: '🔥',
    description: 'Fat burning and metabolism support'
  }
]

// NAD+ & Peptides
const nadPeptides = [
  {
    name: 'NAD+ Therapy (50mg)',
    price: 400,
    description: 'Anti-aging and cellular repair treatment',
    benefits: ['Enhanced cellular energy', 'Improved cognitive function', 'Better sleep quality', 'Increased metabolism', 'DNA repair support']
  },
  {
    name: 'Fountain of Youth (NAD+ 50mg + Vitamins)',
    price: 425,
    description: 'Complete anti-aging treatment with vitamins',
    benefits: ['NAD+ cellular repair', 'Antioxidant protection', 'Skin health support', 'Energy enhancement', 'Overall wellness boost']
  }
]

// Aesthetic Treatments
const aestheticTreatments = [
  {
    name: 'Botox',
    price: 'Starting at $12/unit',
    icon: '💉',
    description: 'Reduce fine lines and wrinkles',
    duration: '15-30 minutes'
  },
  {
    name: 'Dermal Fillers',
    price: 'Starting at $600',
    icon: '✨',
    description: 'Restore volume and smooth lines',
    duration: '30-60 minutes'
  },
  {
    name: 'Lip Enhancement',
    price: 'Starting at $550',
    icon: '💋',
    description: 'Fuller, more defined lips',
    duration: '30-45 minutes'
  }
]

// Weight Management Programs
const weightPrograms = [
  {
    name: 'Medical Weight Loss Program',
    price: 'Starting at $200/month',
    description: 'Comprehensive medically supervised weight loss program',
    includes: ['Initial medical consultation', 'Customized meal plans', 'Prescription medications (if appropriate)', 'Monthly follow-ups', 'Body composition analysis']
  },
  {
    name: 'Hormone Replacement Therapy',
    price: 'Starting at $250/month',
    description: 'Optimize hormones for better health and wellness',
    includes: ['Comprehensive hormone testing', 'Personalized treatment plan', 'Bio-identical hormone therapy', 'Regular monitoring', 'Lifestyle coaching']
  }
]

// Testing Services
const testingServices = [
  {
    name: 'Comprehensive Food Sensitivity',
    price: 199,
    icon: '🥗',
    description: 'Test for 96 common food sensitivities',
    includes: ['96 food items tested', 'Detailed results report', 'Elimination diet guidance', 'Follow-up consultation']
  },
  {
    name: 'Environmental Allergy Panel',
    price: 149,
    icon: '🌿',
    description: 'Test for environmental allergens',
    includes: ['Pollen, dust, mold testing', 'Pet dander analysis', 'Chemical sensitivity screening', 'Avoidance recommendations']
  },
  {
    name: 'Comprehensive Wellness Panel',
    price: 299,
    icon: '🔬',
    description: 'Complete health and wellness blood work',
    includes: ['Complete blood count', 'Comprehensive metabolic panel', 'Lipid profile', 'Thyroid function', 'Vitamin levels']
  }
]

// Cold Plunge Packages
const coldPlungePackages = [
  {
    name: 'Single Session',
    price: 150,
    description: '45-minute session',
    features: ['Professional setup', 'Safety supervision', 'Health assessment']
  },
  {
    name: 'Recovery Package',
    price: 400,
    description: '3 sessions',
    features: ['Multiple sessions', 'Progress tracking', 'Personalized protocol']
  },
  {
    name: 'Group Session',
    price: 300,
    description: 'Up to 4 people',
    features: ['Group rates', 'Team building', 'Shared experience']
  }
]

// Methods
const bookTreatment = (treatmentName) => {
  try {
    window.open('https://Staydripped.intakeq.com/booking', '_blank')
  } catch (error) {
    console.log('Booking error handled:', error)
    window.location.href = 'https://Staydripped.intakeq.com/booking'
  }
}

const openBooking = () => {
  try {
    window.open('https://Staydripped.intakeq.com/booking', '_blank')
  } catch (error) {
    console.log('Booking error handled:', error)
    window.location.href = 'https://Staydripped.intakeq.com/booking'
  }
}
</script>