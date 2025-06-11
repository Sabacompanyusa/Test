<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Brand Ambassadors & Sponsorship Program
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Join the Stay Dripped IV family as a brand ambassador or explore sponsorship opportunities. We partner with influencers, athletes, and wellness enthusiasts who share our passion for health and wellness.
        </p>
      </section>

```
  <!-- Program Types -->
  <section class="py-16">
    <div class="grid gap-8 md:grid-cols-2">
      <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
        <div class="text-center mb-6">
          <div class="text-6xl mb-4">🌟</div>
          <h2 class="text-3xl font-bold text-gray-900">Brand Ambassador Program</h2>
        </div>
        <div class="space-y-4">
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Exclusive discount codes for your audience</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Commission on referral sales</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Free monthly treatments for content creation</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Social media marketing support</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Early access to new treatments</span>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
        <div class="text-center mb-6">
          <div class="text-6xl mb-4">🤝</div>
          <h2 class="text-3xl font-bold text-gray-900">Sponsorship Opportunities</h2>
        </div>
        <div class="space-y-4">
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Event wellness services sponsorship</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Athlete recovery program partnerships</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Corporate wellness program collaborations</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Cross-promotional marketing opportunities</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <span>Custom partnership packages</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Ideal Candidates -->
  <section class="py-16 bg-gray-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Who We're Looking For</h2>
      
      <div class="grid gap-8 md:grid-cols-3">
        <div v-for="candidate in idealCandidates" :key="candidate.title" class="bg-white rounded-xl p-6 shadow-lg text-center">
          <div class="text-4xl mb-4">{{ candidate.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ candidate.title }}</h3>
          <p class="text-gray-600 mb-4">{{ candidate.description }}</p>
          <ul class="text-sm text-gray-700 space-y-1">
            <li v-for="requirement in candidate.requirements" :key="requirement">• {{ requirement }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Partnership Benefits</h2>
      
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="benefit in partnershipBenefits" :key="benefit.title" class="bg-white rounded-xl p-6 shadow-lg">
          <div class="flex items-start">
            <div class="text-3xl mr-4">{{ benefit.icon }}</div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
              <p class="text-gray-600">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Application Form -->
  <section class="py-16 bg-blue-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Apply for Partnership</h2>
      
      <div class="bg-white rounded-xl p-8 shadow-lg">
        <form @submit.prevent="submitApplication" class="space-y-6">
          <!-- Personal Information -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <input v-model="form.fullName" type="text" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input v-model="form.email" type="email" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
              <input v-model="form.phone" type="tel" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Location/City</label>
              <input v-model="form.location" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
          </div>

          <!-- Program Type -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Program Interest *</label>
            <select v-model="form.programType" required class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
              <option value="">Select Program Type</option>
              <option value="brand-ambassador">Brand Ambassador</option>
              <option value="sponsorship">Sponsorship Opportunity</option>
              <option value="both">Both Programs</option>
            </select>
          </div>

          <!-- Social Media -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-4">Social Media Platforms</label>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm text-gray-600 mb-1">Instagram Handle</label>
                <input v-model="form.instagram" type="text" placeholder="@yourusername" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">Instagram Followers</label>
                <select v-model="form.instagramFollowers" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Range</option>
                  <option value="under-1k">Under 1K</option>
                  <option value="1k-5k">1K - 5K</option>
                  <option value="5k-10k">5K - 10K</option>
                  <option value="10k-50k">10K - 50K</option>
                  <option value="50k-100k">50K - 100K</option>
                  <option value="over-100k">Over 100K</option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">TikTok Handle</label>
                <input v-model="form.tiktok" type="text" placeholder="@yourusername" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-1">YouTube Channel</label>
                <input v-model="form.youtube" type="text" placeholder="Channel Name" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
              </div>
            </div>
          </div>

          <!-- Content Focus -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Content Focus Areas</label>
            <div class="grid md:grid-cols-3 gap-3">
              <label class="flex items-center">
                <input v-model="form.contentFocus" type="checkbox" value="fitness" class="mr-3">
                Fitness & Wellness
              </label>
              <label class="flex items-center">
                <input v-model="form.contentFocus" type="checkbox" value="lifestyle" class="mr-3">
                Lifestyle & Beauty
              </label>
              <label class="flex items-center">
                <input v-model="form.contentFocus" type="checkbox" value="health" class="mr-3">
                Health & Nutrition
              </label>
              <label class="flex items-center">
                <input v-model="form.contentFocus" type="checkbox" value="sports" class="mr-3">
                Sports & Athletics
              </label>
              <label class="flex items-center">
                <input v-model="form.contentFocus" type="checkbox" value="business" class="mr-3">
                Business & Entrepreneurship
              </label>
              <label class="flex items-center">
                <input v-model="form.contentFocus" type="checkbox" value="other" class="mr-3">
                Other
              </label>
            </div>
          </div>

          <!-- Experience -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Experience with IV Therapy</label>
            <select v-model="form.ivExperience" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
              <option value="">Select Experience Level</option>
              <option value="never">Never tried IV therapy</option>
              <option value="once">Tried once or twice</option>
              <option value="regular">Regular IV therapy user</option>
              <option value="advocate">Strong advocate for IV therapy</option>
            </select>
          </div>

          <!-- Why Partner -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Why do you want to partner with Stay Dripped IV? *</label>
            <textarea v-model="form.whyPartner" required rows="4" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your passion for wellness and why you'd be a great partner..."></textarea>
          </div>

          <!-- Previous Partnerships -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Previous Brand Partnerships</label>
            <textarea v-model="form.previousPartnerships" rows="3" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="List any previous brand partnerships or collaborations..."></textarea>
          </div>

          <!-- Links -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Portfolio/Media Kit Link</label>
            <input v-model="form.portfolioLink" type="url" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="https://your-portfolio.com">
          </div>

          <div class="text-center">
            <button type="submit" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              🚀 Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Questions About Our Programs?</h2>
      <p class="text-xl text-gray-600 mb-8">
        Our partnership team is here to help you find the perfect collaboration opportunity.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:partnerships@staydrippedmobileiv.com" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
          📧 partnerships@staydrippedmobileiv.com
        </a>
        <a href="tel:+16026889825" class="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors">
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
  title: 'Brand Ambassadors & Sponsorships | Stay Dripped IV',
  meta: [
    { name: 'description', content: 'Join the Stay Dripped IV brand ambassador program or explore sponsorship opportunities. Partner with Arizona\'s premier mobile wellness service.' }
  ]
})

// Form data
const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  location: '',
  programType: '',
  instagram: '',
  instagramFollowers: '',
  tiktok: '',
  youtube: '',
  contentFocus: [],
  ivExperience: '',
  whyPartner: '',
  previousPartnerships: '',
  portfolioLink: ''
})

// Ideal candidates
const idealCandidates = [
  {
    title: 'Fitness Influencers',
    icon: '💪',
    description: 'Athletes and fitness enthusiasts who promote wellness',
    requirements: ['5K+ engaged followers', 'Regular fitness content', 'Authentic engagement', 'Arizona-based preferred']
  },
  {
    title: 'Wellness Advocates',
    icon: '🧘‍♀️',
    description: 'Health and wellness content creators',
    requirements: ['Health-focused content', 'Wellness lifestyle', 'Educational content', 'Positive community impact']
  },
  {
    title: 'Local Celebrities',
    icon: '⭐',
    description: 'Arizona-based public figures and personalities',
    requirements: ['Local Arizona presence', 'Public following', 'Professional reputation', 'Community involvement']
  }
]

// Partnership benefits
const partnershipBenefits = [
  {
    title: 'Competitive Commissions',
    icon: '💰',
    description: 'Earn attractive commissions on every referral with performance-based bonuses and incentives.'
  },
  {
    title: 'Free Treatments',
    icon: '💉',
    description: 'Receive complimentary monthly treatments for authentic content creation and personal experience.'
  },
  {
    title: 'Marketing Support',
    icon: '📱',
    description: 'Professional photography, content templates, and marketing materials to enhance your promotions.'
  },
  {
    title: 'Exclusive Access',
    icon: '🎯',
    description: 'Early access to new treatments, special events, and behind-the-scenes content opportunities.'
  },
  {
    title: 'Personal Discount Codes',
    icon: '🏷️',
    description: 'Custom discount codes for your audience with tracking and performance analytics.'
  },
  {
    title: 'Professional Network',
    icon: '🤝',
    description: 'Connect with other ambassadors, health professionals, and wellness industry leaders.'
  }
]

// Methods
const submitApplication = async () => {
  try {
    // Here you would normally submit to Google Forms or your backend
    alert('Thank you for your application! Our partnership team will review your submission and contact you within 3-5 business days.')
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (Array.isArray(form[key])) {
        form[key] = []
      } else {
        form[key] = ''
      }
    })
  } catch (error) {
    console.error('Application submission error:', error)
    alert('There was an error submitting your application. Please email us directly at partnerships@staydrippedmobileiv.com')
  }
}
</script>