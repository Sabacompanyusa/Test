<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Corporate & Private Event Services
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Elevate your corporate events, private parties, and team building activities with professional mobile wellness services. Perfect for employee appreciation, client entertainment, and special occasions.
        </p>
      </section>

```
  <!-- Event Types -->
  <section class="py-16">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Event Services We Provide</h2>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="eventType in eventTypes" :key="eventType.title" class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="text-center mb-6">
          <div class="text-5xl mb-4">{{ eventType.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900">{{ eventType.title }}</h3>
        </div>
        <p class="text-gray-600 mb-6">{{ eventType.description }}</p>
        <ul class="space-y-2 text-gray-700">
          <li v-for="feature in eventType.features" :key="feature">• {{ feature }}</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Packages -->
  <section class="py-16 bg-blue-50 -mx-5 px-5">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Event Packages</h2>
      
      <div class="grid gap-8 md:grid-cols-3">
        <div v-for="package in eventPackages" :key="package.name" class="bg-white rounded-xl p-8 shadow-lg">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ package.name }}</h3>
            <div class="text-3xl font-bold text-blue-600">${{ package.price }}</div>
            <p class="text-gray-500">{{ package.duration }}</p>
          </div>
          <div class="mb-6">
            <h4 class="font-semibold text-gray-900 mb-3">Package Includes:</h4>
            <ul class="space-y-2 text-gray-700">
              <li v-for="item in package.includes" :key="item">✓ {{ item }}</li>
            </ul>
          </div>
          <div class="text-center mb-4">
            <p class="text-sm text-gray-600">{{ package.guestCount }}</p>
          </div>
          <button 
            @click="requestQuote(package.name)"
            class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Custom Event Planning -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Custom Event Planning</h2>
      
      <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">🎯</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Tailored to Your Needs</h3>
          <p class="text-lg text-gray-600">Every event is unique. We work with you to create the perfect wellness experience for your group.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-semibold text-blue-600 mb-4">Services Available:</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• IV hydration stations</li>
              <li>• Vitamin injection boosters</li>
              <li>• Health screenings</li>
              <li>• Wellness consultations</li>
              <li>• Recovery treatments</li>
              <li>• Beauty enhancement services</li>
              <li>• Cold plunge experiences</li>
              <li>• Educational wellness talks</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-blue-600 mb-4">Event Add-Ons:</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• Professional setup and breakdown</li>
              <li>• Branded wellness stations</li>
              <li>• Take-home wellness kits</li>
              <li>• Photography documentation</li>
              <li>• Wellness education materials</li>
              <li>• Follow-up health consultations</li>
              <li>• Corporate wellness reports</li>
              <li>• Certificate of participation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Event Inquiry Form -->
  <section class="py-16 bg-gray-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Request Event Quote</h2>
      
      <div class="bg-white rounded-xl p-8 shadow-lg">
        <form @submit.prevent="submitEventInquiry" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Contact Name *</label>
              <input v-model="form.contactName" type="text" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Company/Organization</label>
              <input v-model="form.company" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input v-model="form.email" type="email" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
              <input v-model="form.phone" type="tel" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Event Type</label>
              <select v-model="form.eventType" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select Event Type</option>
                <option value="corporate">Corporate Event</option>
                <option value="private">Private Party</option>
                <option value="wedding">Wedding/Celebration</option>
                <option value="wellness">Wellness Retreat</option>
                <option value="sports">Sports Event</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Expected Guests</label>
              <select v-model="form.guestCount" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select Guest Count</option>
                <option value="1-10">1-10 guests</option>
                <option value="11-25">11-25 guests</option>
                <option value="26-50">26-50 guests</option>
                <option value="51-100">51-100 guests</option>
                <option value="100+">100+ guests</option>
              </select>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Event Date</label>
              <input v-model="form.eventDate" type="date" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
              <select v-model="form.budget" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select Budget Range</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="over-10000">Over $10,000</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Event Location/Address</label>
            <input v-model="form.location" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Street address, city, state">
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Services Interested In</label>
            <div class="grid md:grid-cols-2 gap-3">
              <label class="flex items-center">
                <input v-model="form.services" type="checkbox" value="iv-therapy" class="mr-3">
                IV Therapy Treatments
              </label>
              <label class="flex items-center">
                <input v-model="form.services" type="checkbox" value="im-injections" class="mr-3">
                IM Vitamin Injections
              </label>
              <label class="flex items-center">
                <input v-model="form.services" type="checkbox" value="aesthetics" class="mr-3">
                Aesthetic Services
              </label>
              <label class="flex items-center">
                <input v-model="form.services" type="checkbox" value="wellness" class="mr-3">
                Wellness Consultations
              </label>
              <label class="flex items-center">
                <input v-model="form.services" type="checkbox" value="cold-plunge" class="mr-3">
                Cold Plunge Experience
              </label>
              <label class="flex items-center">
                <input v-model="form.services" type="checkbox" value="testing" class="mr-3">
                Health Testing Services
              </label>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
            <textarea v-model="form.details" rows="4" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us more about your event, special requirements, or questions..."></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              🎯 Submit Event Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Event Success Stories</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="testimonial in eventTestimonials" :key="testimonial.name" class="bg-white rounded-xl p-6 shadow-lg">
          <div class="mb-4">
            <div class="flex text-yellow-400 mb-2">
              <span v-for="i in 5" :key="i">⭐</span>
            </div>
            <p class="text-gray-700 italic">"{{ testimonial.quote }}"</p>
          </div>
          <div class="border-t pt-4">
            <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
            <div class="text-gray-600">{{ testimonial.title }}</div>
            <div class="text-gray-500 text-sm">{{ testimonial.company }}</div>
          </div>
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
  title: 'Corporate & Private Event Services | Stay Dripped IV',
  meta: [
    { name: 'description', content: 'Professional mobile wellness services for corporate events, private parties, and special occasions. IV therapy, health screenings, and wellness consultations for groups.' }
  ]
})

// Form data
const form = reactive({
  contactName: '',
  company: '',
  email: '',
  phone: '',
  eventType: '',
  guestCount: '',
  eventDate: '',
  budget: '',
  location: '',
  services: [],
  details: ''
})

// Event types
const eventTypes = [
  {
    title: 'Corporate Events',
    icon: '🏢',
    description: 'Employee wellness programs, company retreats, and corporate health fairs.',
    features: ['Team building wellness activities', 'Executive health screenings', 'Employee appreciation events', 'Productivity enhancement programs']
  },
  {
    title: 'Private Parties',
    icon: '🎉',
    description: 'Birthday parties, anniversaries, and special celebrations with wellness focus.',
    features: ['Birthday wellness parties', 'Bachelorette/Bachelor parties', 'Anniversary celebrations', 'Holiday gatherings']
  },
  {
    title: 'Weddings & Celebrations',
    icon: '💒',
    description: 'Pre-wedding wellness prep and post-celebration recovery services.',
    features: ['Bridal party preparation', 'Groomsmen recovery sessions', 'Wedding day morning prep', 'Post-celebration recovery']
  },
  {
    title: 'Sports Events',
    icon: '🏆',
    description: 'Athletic events, tournaments, and sports team wellness support.',
    features: ['Pre-competition preparation', 'Post-game recovery', 'Tournament support', 'Team wellness programs']
  },
  {
    title: 'Wellness Retreats',
    icon: '🧘‍♀️',
    description: 'Comprehensive wellness experiences and retreat support services.',
    features: ['Multi-day wellness programs', 'Detox and cleanse support', 'Mindfulness and recovery', 'Group wellness education']
  },
  {
    title: 'Special Occasions',
    icon: '🌟',
    description: 'Any special event or gathering that could benefit from wellness services.',
    features: ['Custom event planning', 'Flexible service options', 'Tailored wellness programs', 'Group discounts available']
  }
]

// Event packages
const eventPackages = [
  {
    name: 'Wellness Boost',
    price: 1500,
    duration: '2-3 hours',
    guestCount: 'Up to 15 guests',
    includes: [
      'Mobile IV hydration station',
      'Choice of 3 IV treatment options',
      'Licensed nurse supervision',
      'Basic health consultations',
      'Setup and breakdown',
      'Take-home wellness guides'
    ]
  },
  {
    name: 'Corporate Wellness',
    price: 3500,
    duration: '4-6 hours',
    guestCount: 'Up to 40 guests',
    includes: [
      'Multiple IV therapy stations',
      'IM vitamin injection bar',
      'Health screening services',
      'Wellness education presentations',
      'Professional setup with branding',
      'Follow-up wellness reports',
      'Certificate of participation'
    ]
  },
  {
    name: 'Premium Experience',
    price: 6000,
    duration: 'Full day',
    guestCount: 'Up to 75 guests',
    includes: [
      'Complete wellness center setup',
      'Full range of IV and injection services',
      'Aesthetic treatment options',
      'Cold plunge experiences',
      'Comprehensive health assessments',
      'Wellness coordinator',
      'Photography documentation',
      'Custom wellness kits'
    ]
  }
]

// Event testimonials
const eventTestimonials = [
  {
    name: 'Sarah Johnson',
    title: 'HR Director',
    company: 'Tech Solutions Inc.',
    quote: 'Our employees loved the corporate wellness event! The IV therapy stations were a huge hit and really boosted morale. Stay Dripped made everything seamless.'
  },
  {
    name: 'Michael Rodriguez',
    title: 'Event Planner',
    company: 'Elite Celebrations',
    quote: 'I\'ve worked with Stay Dripped on multiple high-end events. Their professionalism and quality of service is unmatched. Clients always rave about the experience.'
  },
  {
    name: 'Amanda Chen',
    title: 'Bride',
    company: 'Personal Client',
    quote: 'Having Stay Dripped at my bachelorette party was the best decision! We all felt amazing and looked great in our photos. It was such a unique and healthy way to celebrate.'
  },
  {
    name: 'David Thompson',
    title: 'Athletic Director',
    company: 'Phoenix Sports Club',
    quote: 'The recovery services after our tournament were incredible. Our athletes felt rejuvenated and ready for the next competition. Professional service all around.'
  }
]

// Methods
const requestQuote = (packageName) => {
  form.details = `Interested in the ${packageName} package. Please provide detailed pricing and availability.`
  // Scroll to form
  document.querySelector('form').scrollIntoView({ behavior: 'smooth' })
}

const submitEventInquiry = async () => {
  try {
    // Here you would normally submit to your backend API
    // For now, we'll create a Google Form URL with pre-filled data
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform'
    
    // In a real implementation, you'd submit the form data to your backend
    // which would then send it to Google Forms or your preferred form handler
    
    alert('Thank you for your event inquiry! We will contact you within 24 hours to discuss your event details and provide a custom quote.')
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (Array.isArray(form[key])) {
        form[key] = []
      } else {
        form[key] = ''
      }
    })
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error submitting your inquiry. Please call us directly at (602) 688-9825.')
  }
}
</script>
