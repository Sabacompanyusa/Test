<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Stay Dripped IV
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Arizona's premier mobile medical wellness service, dedicated to bringing professional IV therapy, aesthetics, and comprehensive health solutions directly to you.
        </p>
      </section>

```
  <!-- Mission Statement -->
  <section class="py-16 bg-blue-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
      <div class="bg-white rounded-2xl p-8 shadow-lg">
        <div class="text-6xl mb-6">🎯</div>
        <blockquote class="text-xl text-gray-700 italic leading-relaxed">
          "To revolutionize healthcare accessibility by providing professional, convenient, and personalized medical wellness services that enhance lives and optimize health outcomes for every client we serve."
        </blockquote>
      </div>
    </div>
  </section>

  <!-- Our Story -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
      <div class="prose prose-lg mx-auto text-gray-700">
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <p class="text-lg leading-relaxed mb-6">
            Stay Dripped IV was founded with a simple yet powerful vision: make professional medical wellness services accessible to everyone, wherever they are. Born in the heart of Arizona, our company emerged from the recognition that busy lifestyles and traditional healthcare limitations often prevent people from prioritizing their wellness.
          </p>
          <p class="text-lg leading-relaxed mb-6">
            Our founders, experienced healthcare professionals, witnessed firsthand how IV therapy and wellness treatments could transform lives. However, they also saw the barriers that prevented many from accessing these beneficial services – time constraints, transportation issues, and the impersonal nature of traditional clinical settings.
          </p>
          <p class="text-lg leading-relaxed mb-6">
            This led to the creation of Stay Dripped IV: a mobile medical wellness service that brings the clinic to you. We've carefully assembled a team of licensed medical professionals who share our commitment to exceptional care, safety, and personalized service.
          </p>
          <p class="text-lg leading-relaxed">
            Today, we're proud to serve hundreds of clients across Arizona, from professional athletes and busy executives to wellness enthusiasts and anyone seeking to optimize their health. Our comprehensive services have expanded to include not just IV therapy, but aesthetics, weight management, testing services, and specialized treatments like NAD+ therapy.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Values -->
  <section class="py-16 bg-gray-50 -mx-5 px-5">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="value in coreValues" :key="value.title" class="bg-white rounded-xl p-8 shadow-lg text-center">
          <div class="text-5xl mb-6">{{ value.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ value.title }}</h3>
          <p class="text-gray-600">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-16">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="member in teamMembers" :key="member.name" class="bg-white rounded-xl p-6 shadow-lg text-center">
          <div class="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
            {{ member.avatar }}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
          <p class="text-blue-600 font-medium mb-3">{{ member.title }}</p>
          <p class="text-gray-600 text-sm">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Certifications & Compliance -->
  <section class="py-16 bg-blue-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications & Compliance</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="cert in certifications" :key="cert.title" class="bg-white rounded-xl p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <div class="text-3xl mr-4">{{ cert.icon }}</div>
            <h3 class="text-lg font-semibold text-gray-900">{{ cert.title }}</h3>
          </div>
          <p class="text-gray-600">{{ cert.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Service Areas -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Where We Serve</h2>
      <p class="text-xl text-gray-600 mb-12">
        Proudly serving the greater Phoenix metropolitan area with plans for expansion across Arizona.
      </p>
      <div class="grid gap-6 md:grid-cols-3">
        <div v-for="area in serviceAreas" :key="area.name" class="bg-white rounded-xl p-6 shadow-lg">
          <div class="text-4xl mb-4">{{ area.icon }}</div>
          <h3 class="font-semibold text-gray-900 mb-2">{{ area.name }}</h3>
          <p class="text-gray-600 text-sm">{{ area.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-16 bg-gradient-to-r from-blue-500 to-blue-600 -mx-5 px-5">
    <div class="max-w-4xl mx-auto text-center text-white">
      <h2 class="text-3xl font-bold mb-6">Ready to Experience the Stay Dripped Difference?</h2>
      <p class="text-xl mb-8 opacity-90">
        Join hundreds of satisfied clients who trust us for their wellness needs.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/good-faith-exam" class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors">
          📋 Schedule Consultation
        </NuxtLink>
        <a href="tel:+16026889825" class="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors">
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
  title: 'About Stay Dripped IV | Arizona Mobile Wellness',
  meta: [
    { name: 'description', content: 'Learn about Stay Dripped IV, Arizona\'s premier mobile medical wellness service. Our mission, team, and commitment to exceptional healthcare.' }
  ]
})

// Core values
const coreValues = [
  {
    title: 'Excellence',
    icon: '🏆',
    description: 'We maintain the highest standards in medical care, using only pharmaceutical-grade products and evidence-based treatments.'
  },
  {
    title: 'Convenience',
    icon: '🚗',
    description: 'Your time is valuable. We bring professional medical services directly to your location, fitting seamlessly into your schedule.'
  },
  {
    title: 'Safety',
    icon: '🛡️',
    description: 'Patient safety is our top priority. All treatments are administered by licensed medical professionals following strict protocols.'
  },
  {
    title: 'Personalization',
    icon: '🎯',
    description: 'Every client receives customized care based on their unique health needs, goals, and medical history.'
  },
  {
    title: 'Innovation',
    icon: '🔬',
    description: 'We stay at the forefront of wellness medicine, offering cutting-edge treatments like NAD+ therapy and advanced aesthetics.'
  },
  {
    title: 'Integrity',
    icon: '❤️',
    description: 'We build trust through transparency, honest communication, and always putting our clients\' best interests first.'
  }
]

// Team members
const teamMembers = [
  {
    name: 'Kyle Johnson',
    title: 'Founder & CEO',
    avatar: '👨‍💼',
    bio: 'Healthcare entrepreneur with 10+ years of experience in mobile medical services and patient care innovation.'
  },
  {
    name: 'Dr. Sarah Martinez',
    title: 'Medical Director',
    avatar: '👩‍⚕️',
    bio: 'Board-certified physician specializing in integrative medicine and wellness optimization with 15 years of clinical experience.'
  },
  {
    name: 'Jessica Chen, RN',
    title: 'Lead Nurse Practitioner',
    avatar: '👩‍⚕️',
    bio: 'Registered Nurse with specialized training in IV therapy, aesthetics, and emergency medicine. 8 years of nursing experience.'
  },
  {
    name: 'Michael Rodriguez',
    title: 'Operations Manager',
    avatar: '👨‍💻',
    bio: 'Healthcare operations specialist ensuring seamless service delivery and exceptional client experiences across Arizona.'
  },
  {
    name: 'Amanda Foster, RN',
    title: 'Senior Clinical Nurse',
    avatar: '👩‍⚕️',
    bio: 'Experienced ICU nurse with expertise in critical care and wellness medicine. Passionate about preventive healthcare.'
  },
  {
    name: 'David Kim',
    title: 'Client Relations Director',
    avatar: '👨‍💼',
    bio: 'Customer service expert dedicated to ensuring every client receives personalized attention and outstanding care.'
  }
]

// Certifications
const certifications = [
  {
    title: 'Licensed Medical Professionals',
    icon: '🏥',
    description: 'All our medical staff are licensed RNs, NPs, or physicians in good standing with the Arizona Board of Nursing and Medicine.'
  },
  {
    title: 'HIPAA Compliance',
    icon: '🔒',
    description: 'We maintain strict HIPAA compliance to protect your personal health information and ensure complete privacy.'
  },
  {
    title: 'DEA Registration',
    icon: '📋',
    description: 'Proper DEA registration and controlled substance protocols for all applicable medical treatments and procedures.'
  },
  {
    title: 'Insurance & Bonding',
    icon: '🛡️',
    description: 'Fully insured and bonded practice with comprehensive malpractice coverage for your protection and peace of mind.'
  },
  {
    title: 'State Medical Board Oversight',
    icon: '⚖️',
    description: 'Operating under Arizona State Medical Board oversight with regular compliance audits and quality assurance reviews.'
  },
  {
    title: 'Pharmaceutical Standards',
    icon: '💊',
    description: 'All medications and supplies sourced from FDA-approved pharmacies and medical suppliers with proper storage protocols.'
  }
]

// Service areas
const serviceAreas = [
  {
    name: 'Scottsdale',
    icon: '🏜️',
    description: 'Our headquarters location with fastest response times and full service availability'
  },
  {
    name: 'Phoenix',
    icon: '🌵',
    description: 'Comprehensive coverage throughout the Phoenix metropolitan area'
  },
  {
    name: 'Paradise Valley',
    icon: '⛰️',
    description: 'Luxury communities with premium concierge-level mobile services'
  },
  {
    name: 'Tempe',
    icon: '🎓',
    description: 'ASU area and surrounding communities with flexible scheduling'
  },
  {
    name: 'Fountain Hills',
    icon: '⛲',
    description: 'Beautiful Fountain Hills area with personalized mobile wellness'
  },
  {
    name: 'Cave Creek',
    icon: '🌵',
    description: 'Cave Creek and North Phoenix areas with reliable service'
  }
]
</script>