<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contact Stay Dripped IV
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Ready to start your wellness journey? Contact our team of medical professionals for consultations, appointments, or any questions about our mobile IV therapy and wellness services.
        </p>
      </section>

```
  <!-- Quick Contact Options -->
  <section class="py-16">
    <div class="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
      <a href="tel:+16026889825" class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
        <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">📞</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
        <p class="text-2xl font-bold text-blue-600 mb-2">(602) 688-9825</p>
        <p class="text-gray-600">Available 24/7 for appointments</p>
      </a>

      <a href="mailto:Info@staydrippedmobileiv.com" class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
        <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
        <p class="text-lg font-semibold text-blue-600 mb-2">Info@staydrippedmobileiv.com</p>
        <p class="text-gray-600">We respond within 2 hours</p>
      </a>

      <NuxtLink to="/good-faith-exam" class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
        <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">📋</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Book Online</h3>
        <p class="text-lg font-semibold text-blue-600 mb-2">Schedule Consultation</p>
        <p class="text-gray-600">Start with Good Faith Exam</p>
      </NuxtLink>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="py-16 bg-gray-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
      
      <div class="bg-white rounded-xl p-8 shadow-lg">
        <form @submit.prevent="submitContactForm" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
              <input v-model="contactForm.firstName" type="text" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
              <input v-model="contactForm.lastName" type="text" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input v-model="contactForm.email" type="email" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
              <input v-model="contactForm.phone" type="tel" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
            <select v-model="contactForm.inquiryType" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select Inquiry Type</option>
              <option value="appointment">Schedule Appointment</option>
              <option value="services">Service Information</option>
              <option value="membership">Membership Questions</option>
              <option value="corporate">Corporate Services</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="support">Customer Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
            <div class="flex space-x-6">
              <label class="flex items-center">
                <input v-model="contactForm.contactMethod" type="radio" value="phone" class="mr-2">
                Phone Call
              </label>
              <label class="flex items-center">
                <input v-model="contactForm.contactMethod" type="radio" value="email" class="mr-2">
                Email
              </label>
              <label class="flex items-center">
                <input v-model="contactForm.contactMethod" type="radio" value="text" class="mr-2">
                Text Message
              </label>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
            <textarea v-model="contactForm.message" required rows="5" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about your wellness goals, questions, or how we can help you..."></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              📨 Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Business Hours & Location -->
  <section class="py-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Business Information</h2>
      
      <div class="grid gap-8 md:grid-cols-2">
        <!-- Business Hours -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <span class="text-3xl mr-3">🕐</span>
            Business Hours
          </h3>
          <div class="space-y-3">
            <div v-for="hours in businessHours" :key="hours.day" class="flex justify-between">
              <span class="font-medium text-gray-700">{{ hours.day }}</span>
              <span class="text-gray-600">{{ hours.hours }}</span>
            </div>
          </div>
          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              <strong>Emergency Services:</strong> Available 24/7 for urgent wellness needs. Additional fees may apply for after-hours service.
            </p>
          </div>
        </div>

        <!-- Service Area -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <span class="text-3xl mr-3">🗺️</span>
            Service Area
          </h3>
          <div class="space-y-4">
            <div v-for="area in serviceAreas" :key="area.name" class="flex items-center">
              <span class="text-2xl mr-3">{{ area.icon }}</span>
              <div>
                <div class="font-medium text-gray-700">{{ area.name }}</div>
                <div class="text-sm text-gray-600">{{ area.description }}</div>
              </div>
            </div>
          </div>
          <div class="mt-6 p-4 bg-green-50 rounded-lg">
            <p class="text-sm text-green-800">
              <strong>Expanding Soon:</strong> We're planning to expand our services to additional Arizona cities. Contact us if you're outside our current area.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="py-16 bg-gray-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
      
      <div class="space-y-6">
        <div v-for="faq in frequentlyAsked" :key="faq.question" class="bg-white rounded-xl p-6 shadow-lg">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ faq.question }}</h3>
          <p class="text-gray-600">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Emergency Contact -->
  <section class="py-16 bg-red-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto text-center">
      <div class="bg-white rounded-xl p-8 shadow-lg">
        <div class="text-6xl mb-6">🚨</div>
        <h2 class="text-3xl font-bold text-red-600 mb-4">Medical Emergency?</h2>
        <p class="text-xl text-gray-700 mb-6">
          For life-threatening emergencies, always call 911 immediately.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          For urgent but non-life-threatening wellness needs, contact our 24/7 emergency line:
        </p>
        <a href="tel:+16026889825" class="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors text-lg">
          📞 (602) 688-9825
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
  title: 'Contact Stay Dripped IV | Mobile IV Therapy Arizona',
  meta: [
    { name: 'description', content: 'Contact Stay Dripped IV for mobile IV therapy, wellness consultations, and medical services in Arizona. Available 24/7 for your convenience.' }
  ]
})

// Contact form
const contactForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiryType: '',
  contactMethod: 'phone',
  message: ''
})

// Business hours
const businessHours = [
  { day: 'Monday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Thursday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 5:00 PM' }
]

// Service areas
const serviceAreas = [
  { name: 'Scottsdale', icon: '🏜️', description: 'Primary service area with fastest response' },
  { name: 'Phoenix', icon: '🌵', description: 'Complete metropolitan coverage' },
  { name: 'Paradise Valley', icon: '⛰️', description: 'Luxury community service' },
  { name: 'Tempe', icon: '🎓', description: 'ASU area and surroundings' },
  { name: 'Fountain Hills', icon: '⛲', description: 'Extended service area' },
  { name: 'Cave Creek', icon: '🌵', description: 'North Phoenix coverage' }
]

// FAQ
const frequentlyAsked = [
  {
    question: 'How quickly can you arrive for service?',
    answer: 'We typically arrive within 45-90 minutes of booking confirmation, depending on your location and our current schedule. Same-day appointments are often available.'
  },
  {
    question: 'Do I need a Good Faith Medical Examination?',
    answer: 'Yes, Arizona law requires a Good Faith Medical Examination for all new clients before any medical treatments. This can often be done during your first appointment.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, Venmo, Apple Pay, Google Pay, and medical payment plans through PracticeQ. Cash payments are also accepted.'
  },
  {
    question: 'Are your services covered by insurance?',
    answer: 'Most IV therapy and wellness services are not covered by insurance as they are considered elective. However, some HSA/FSA accounts may cover certain treatments. We can provide receipts for reimbursement attempts.'
  },
  {
    question: 'Do you service hotels and events?',
    answer: 'Yes! We frequently provide services at hotels, private events, corporate functions, and special occasions. Contact us for group rates and event packages.'
  },
  {
    question: 'What safety protocols do you follow?',
    answer: 'All treatments are administered by licensed medical professionals using sterile techniques, pharmaceutical-grade products, and strict safety protocols. We follow all state medical board guidelines.'
  }
]

// Methods
const submitContactForm = async () => {
  try {
    // Here you would normally submit to your backend
    // For now, we'll simulate the submission
    alert('Thank you for contacting Stay Dripped IV! We will respond to your inquiry within 2 hours during business hours.')
    
    // Reset form
    Object.keys(contactForm).forEach(key => {
      if (key === 'contactMethod') {
        contactForm[key] = 'phone'
      } else {
        contactForm[key] = ''
      }
    })
  } catch (error) {
    console.error('Contact form submission error:', error)
    alert('There was an error sending your message. Please call us directly at (602) 688-9825.')
  }
}
</script>