<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          VIP Membership Programs
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Exclusive membership benefits for regular wellness maintenance. Save money while prioritizing your health with our premium membership tiers.
        </p>
      </section>

```
  <!-- Membership Tiers -->
  <section class="py-16">
    <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
      <div v-for="(membership, index) in membershipTiers" :key="membership.name" 
           :class="[
             'bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl relative',
             membership.popular ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'
           ]">
        
        <!-- Popular Badge -->
        <div v-if="membership.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
        </div>

        <!-- Membership Header -->
        <div class="text-center mb-8">
          <div class="text-4xl mb-4">{{ membership.icon }}</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ membership.name }}</h3>
          <div class="text-3xl font-bold text-blue-600 mb-2">${{ membership.price }}</div>
          <p class="text-gray-500">{{ membership.billing }}</p>
          <p class="text-sm text-gray-600 mt-2">{{ membership.description }}</p>
        </div>

        <!-- Benefits -->
        <div class="mb-8">
          <h4 class="font-semibold text-gray-900 mb-4">Membership Benefits:</h4>
          <ul class="space-y-3">
            <li v-for="benefit in membership.benefits" :key="benefit" class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">{{ benefit }}</span>
            </li>
          </ul>
        </div>

        <!-- CTA Button -->
        <button 
          @click="selectMembership(membership.name)"
          :class="[
            'w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300',
            membership.popular 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          ]"
        >
          {{ membership.popular ? 'Start Free Trial' : 'Select Plan' }}
        </button>
      </div>
    </div>
  </section>

  <!-- Membership Features Comparison -->
  <section class="py-16 bg-gray-50 -mx-5 px-5">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Membership Comparison</h2>
      
      <div class="overflow-x-auto">
        <table class="w-full bg-white rounded-xl shadow-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="text-left p-6 font-semibold text-gray-900">Features</th>
              <th class="text-center p-6 font-semibold text-gray-900">Wellness</th>
              <th class="text-center p-6 font-semibold text-gray-900 bg-blue-50">Elite</th>
              <th class="text-center p-6 font-semibold text-gray-900">Platinum</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(feature, index) in comparisonFeatures" :key="feature.name" 
                :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'">
              <td class="p-6 font-medium text-gray-900">{{ feature.name }}</td>
              <td class="p-6 text-center">
                <span v-if="feature.wellness === true" class="text-green-500">✓</span>
                <span v-else-if="feature.wellness === false" class="text-gray-300">-</span>
                <span v-else class="text-gray-700">{{ feature.wellness }}</span>
              </td>
              <td class="p-6 text-center bg-blue-50">
                <span v-if="feature.elite === true" class="text-green-500">✓</span>
                <span v-else-if="feature.elite === false" class="text-gray-300">-</span>
                <span v-else class="text-gray-700 font-semibold">{{ feature.elite }}</span>
              </td>
              <td class="p-6 text-center">
                <span v-if="feature.platinum === true" class="text-green-500">✓</span>
                <span v-else-if="feature.platinum === false" class="text-gray-300">-</span>
                <span v-else class="text-gray-700">{{ feature.platinum }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Membership FAQ -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Membership FAQ</h2>
      
      <div class="space-y-6">
        <div v-for="faq in membershipFAQ" :key="faq.question" class="bg-white rounded-xl p-6 shadow-lg">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ faq.question }}</h3>
          <p class="text-gray-600">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Corporate Memberships -->
  <section class="py-16 bg-blue-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Corporate Wellness Programs</h2>
      <p class="text-xl text-gray-600 mb-8">
        Boost employee health and productivity with our corporate wellness memberships.
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Small Business (5-25 employees)</h3>
          <div class="text-2xl font-bold text-blue-600 mb-4">Custom Pricing</div>
          <ul class="text-left space-y-2 text-gray-700">
            <li>• On-site wellness services</li>
            <li>• Employee health screenings</li>
            <li>• Group IV therapy sessions</li>
            <li>• Wellness education programs</li>
          </ul>
        </div>
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Enterprise (25+ employees)</h3>
          <div class="text-2xl font-bold text-blue-600 mb-4">Custom Pricing</div>
          <ul class="text-left space-y-2 text-gray-700">
            <li>• Comprehensive wellness programs</li>
            <li>• Executive health packages</li>
            <li>• Quarterly health assessments</li>
            <li>• Dedicated account management</li>
          </ul>
        </div>
      </div>

      <button 
        @click="openCorporateInquiry"
        class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        💼 Request Corporate Quote
      </button>
    </div>
  </section>

  <!-- Payment Options -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Flexible Payment Options</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="text-3xl mb-4">💳</div>
          <h3 class="font-semibold text-gray-900 mb-2">Credit/Debit Cards</h3>
          <p class="text-gray-600">Visa, Mastercard, American Express, Discover</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="text-3xl mb-4">📱</div>
          <h3 class="font-semibold text-gray-900 mb-2">Digital Payments</h3>
          <p class="text-gray-600">PayPal, Apple Pay, Google Pay, Venmo</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="text-3xl mb-4">🏦</div>
          <h3 class="font-semibold text-gray-900 mb-2">Auto-Pay</h3>
          <p class="text-gray-600">Automatic monthly billing with member discounts</p>
        </div>
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
  title: 'VIP Membership Programs | Stay Dripped IV',
  meta: [
    { name: 'description', content: 'Exclusive VIP membership programs for regular wellness maintenance. Save money with our premium membership tiers offering discounts and priority booking.' }
  ]
})

// Membership tiers
const membershipTiers = [
  {
    name: 'Wellness Member',
    price: 99,
    billing: 'per month',
    icon: '🌟',
    description: 'Perfect for monthly wellness maintenance',
    popular: false,
    benefits: [
      '15% discount on all IV treatments',
      '10% discount on IM injections',
      'Priority booking windows',
      'Free monthly wellness consultation',
      'Member-only treatment options',
      'No setup fees for mobile service'
    ]
  },
  {
    name: 'Elite Member',
    price: 199,
    billing: 'per month',
    icon: '💎',
    description: 'Most popular for regular wellness optimization',
    popular: true,
    benefits: [
      '25% discount on all IV treatments',
      '20% discount on IM injections',
      '15% discount on aesthetic treatments',
      'Priority booking & same-day availability',
      'Free monthly IV treatment (up to $250 value)',
      'Complimentary health assessments',
      'Member-exclusive treatment protocols',
      '24/7 nurse consultation line'
    ]
  },
  {
    name: 'Platinum Member',
    price: 399,
    billing: 'per month',
    icon: '👑',
    description: 'Ultimate wellness and aesthetic care',
    popular: false,
    benefits: [
      '35% discount on all services',
      'Free monthly comprehensive treatment package',
      'Quarterly aesthetic treatment included',
      'Personal wellness coordinator',
      'Advanced health monitoring',
      'Concierge-level service',
      'Family member discounts (20%)',
      'Annual wellness retreat invitation'
    ]
  }
]

// Comparison features
const comparisonFeatures = [
  { name: 'IV Treatment Discount', wellness: '15%', elite: '25%', platinum: '35%' },
  { name: 'IM Injection Discount', wellness: '10%', elite: '20%', platinum: '35%' },
  { name: 'Aesthetic Discount', wellness: false, elite: '15%', platinum: '35%' },
  { name: 'Priority Booking', wellness: true, elite: true, platinum: true },
  { name: 'Free Monthly Treatment', wellness: false, elite: 'Up to $250', platinum: 'Comprehensive Package' },
  { name: 'Health Consultations', wellness: 'Monthly', elite: 'Unlimited', platinum: 'Concierge' },
  { name: 'Same-Day Availability', wellness: false, elite: true, platinum: true },
  { name: '24/7 Nurse Line', wellness: false, elite: true, platinum: true },
  { name: 'Family Discounts', wellness: false, elite: false, platinum: '20%' },
  { name: 'Wellness Coordinator', wellness: false, elite: false, platinum: true }
]

// FAQ
const membershipFAQ = [
  {
    question: 'How do membership discounts work?',
    answer: 'Membership discounts are automatically applied to all qualifying services. Your discount percentage is based on your membership tier and is applied at the time of booking.'
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer: 'Yes, memberships can be cancelled with 30 days notice. There are no long-term contracts or cancellation fees.'
  },
  {
    question: 'What happens if I don\'t use my monthly treatment credit?',
    answer: 'Monthly treatment credits expire at the end of each billing cycle and cannot be rolled over. However, you can use partial credits toward larger treatments.'
  },
  {
    question: 'Are there family membership options?',
    answer: 'Platinum members receive 20% family discounts. We also offer custom family plans for households with multiple members interested in regular wellness services.'
  },
  {
    question: 'How does billing work?',
    answer: 'Memberships are billed monthly on your enrollment date. We accept all major credit cards, PayPal, and offer automatic payment options for convenience.'
  },
  {
    question: 'Can I upgrade or downgrade my membership?',
    answer: 'Yes, you can change your membership tier at any time. Changes take effect on your next billing cycle.'
  },
  {
    question: 'Do you offer corporate membership rates?',
    answer: 'Yes! We offer special corporate membership rates for companies with 5+ employees. Contact us for custom corporate wellness packages.'
  },
  {
    question: 'Is there a minimum commitment period?',
    answer: 'No long-term contracts required. All memberships are month-to-month with 30-day cancellation notice.'
  }
]

// Methods
const selectMembership = (membershipName) => {
  // In a real app, this would redirect to payment processing
  try {
    // Create a booking URL with membership selection
    const bookingUrl = `https://Staydripped.intakeq.com/booking?membership=${encodeURIComponent(membershipName)}`
    window.open(bookingUrl, '_blank')
  } catch (error) {
    console.log('Booking error handled:', error)
    window.location.href = 'https://Staydripped.intakeq.com/booking'
  }
}

const openCorporateInquiry = () => {
  navigateTo('/corporate-events')
}
</script>