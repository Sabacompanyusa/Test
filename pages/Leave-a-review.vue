<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Share Your Experience
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Help others discover the Stay Dripped IV difference by sharing your wellness journey. Your feedback helps us continue providing exceptional mobile medical services.
        </p>
      </section>

```
  <!-- Review Platforms -->
  <section class="py-16">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Leave a Review on Your Preferred Platform</h2>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      <div v-for="platform in reviewPlatforms" :key="platform.name" 
           class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
        <div class="text-6xl mb-6">{{ platform.icon }}</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ platform.name }}</h3>
        <p class="text-gray-600 mb-6">{{ platform.description }}</p>
        <div class="mb-6">
          <div class="flex justify-center text-yellow-400 mb-2">
            <span v-for="i in 5" :key="i" class="text-2xl">⭐</span>
          </div>
          <p class="text-sm text-gray-500">{{ platform.currentRating }} average rating</p>
        </div>
        <a :href="platform.url" target="_blank" 
           class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors group-hover:transform group-hover:scale-105">
          Leave Review
        </a>
      </div>
    </div>
  </section>

  <!-- Featured Reviews -->
  <section class="py-16 bg-gray-50 -mx-5 px-5">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Client Reviews</h2>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="review in featuredReviews" :key="review.name" 
             class="bg-white rounded-xl p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400 mr-3">
              <span v-for="i in review.rating" :key="i">⭐</span>
            </div>
            <span class="text-sm text-gray-500">{{ review.platform }}</span>
          </div>
          <p class="text-gray-700 mb-4 italic">"{{ review.text }}"</p>
          <div class="border-t pt-4">
            <div class="font-semibold text-gray-900">{{ review.name }}</div>
            <div class="text-gray-500 text-sm">{{ review.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Review Incentive -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <div class="text-6xl mb-6">🎁</div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Thank You Reward</h2>
        <p class="text-xl text-gray-600 mb-8">
          Leave a review on Google or Yelp and receive a $25 credit toward your next treatment!
        </p>
        <div class="bg-white rounded-xl p-6 max-w-md mx-auto">
          <h3 class="font-semibold text-gray-900 mb-4">How to Get Your Credit:</h3>
          <ol class="text-left space-y-2 text-gray-700">
            <li>1. Leave an honest review on Google or Yelp</li>
            <li>2. Take a screenshot of your review</li>
            <li>3. Email the screenshot to reviews@staydrippedmobileiv.com</li>
            <li>4. Receive your $25 credit within 24 hours</li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <!-- Review Guidelines -->
  <section class="py-16 bg-blue-50 -mx-5 px-5">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Review Guidelines</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <h3 class="text-xl font-semibold text-green-600 mb-4">✅ What to Include</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Your specific treatment experience</li>
            <li>• Quality of service and professionalism</li>
            <li>• How you felt after treatment</li>
            <li>• Convenience of mobile service</li>
            <li>• Staff knowledge and care</li>
            <li>• Overall wellness improvement</li>
          </ul>
        </div>
        
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <h3 class="text-xl font-semibold text-red-600 mb-4">❌ Please Avoid</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Specific medical details or conditions</li>
            <li>• Names of staff members</li>
            <li>• Pricing information</li>
            <li>• Personal health information</li>
            <li>• Comparison to other providers</li>
            <li>• Promotional language</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 bg-white rounded-xl p-6 shadow-lg">
        <h3 class="text-xl font-semibold text-blue-600 mb-4 text-center">💡 Review Tips</h3>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="text-3xl mb-2">📝</div>
            <h4 class="font-medium mb-2">Be Specific</h4>
            <p class="text-sm text-gray-600">Mention specific treatments and how they helped you</p>
          </div>
          <div>
            <div class="text-3xl mb-2">❤️</div>
            <h4 class="font-medium mb-2">Be Honest</h4>
            <p class="text-sm text-gray-600">Share your genuine experience, both positive aspects</p>
          </div>
          <div>
            <div class="text-3xl mb-2">🎯</div>
            <h4 class="font-medium mb-2">Be Helpful</h4>
            <p class="text-sm text-gray-600">Help others understand what to expect</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact for Issues -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Had an Issue?</h2>
      <p class="text-xl text-gray-600 mb-8">
        We're committed to exceptional service. If your experience wasn't perfect, please contact us directly so we can make it right.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:support@staydrippedmobileiv.com" 
           class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
          📧 support@staydrippedmobileiv.com
        </a>
        <a href="tel:+16026889825" 
           class="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors">
          📞 (602) 688-9825
        </a>
      </div>
      <p class="text-sm text-gray-500 mt-4">
        We respond to all concerns within 24 hours and work to resolve any issues immediately.
      </p>
    </div>
  </section>
</Container>
```

  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Leave a Review | Stay Dripped IV',
  meta: [
    { name: 'description', content: 'Share your Stay Dripped IV experience by leaving a review on Google, Yelp, or Facebook. Help others discover our mobile wellness services.' }
  ]
})

// Review platforms
const reviewPlatforms = [
  {
    name: 'Google Reviews',
    icon: '🔍',
    description: 'Help us maintain our 5-star Google rating',
    currentRating: '5.0 stars',
    url: 'https://g.page/r/CdQd5HjGkjQgEBM/review'
  },
  {
    name: 'Yelp',
    icon: '🌟',
    description: 'Share your experience on Yelp',
    currentRating: '5.0 stars',
    url: 'https://www.yelp.com/writeareview/biz/stay-dripped-iv-scottsdale'
  },
  {
    name: 'Facebook',
    icon: '📘',
    description: 'Rate us on our Facebook page',
    currentRating: '5.0 stars',
    url: 'https://www.facebook.com/staydrippediv/reviews'
  }
]

// Real Google Reviews Data
const testimonials = ref([
  {
    name: "Armand D.",
    text: "Just had an amazing experience with Stay Dripped Mobile IV. Super convenient, professional, and the IV treatment left me feeling refreshed. They came right to my door, explained everything clearly, and made the whole process smooth and comfortable. Highly recommend if you're looking for a boost or just want to feel your best!",
    timeAgo: "a month ago"
  },
  {
    name: "Anthony S.",
    text: "Most amazing IV experience. I have been sick with the flu for about a week, and the Meyers IV made me feel so much better right away. Nurse was very professional and knowledgeable about the products offered. Scheduling process was super quick and easy. I will definitely use them whenever I need an IV in the future!",
    timeAgo: "3 months ago"
  },
  {
    name: "Cindy B.",
    text: "Stay Dripped is hands down the best IV experience I've ever had. They are professional, friendly and knowledgeable. I will definitely be a repeat 'dripper' and I highly recommend them for any IV services you may need.",
    timeAgo: "a month ago"
  },
  {
    name: "Chandler C.",
    text: "I felt amazing after completing my session! With so much variety to choose from, it is easy to find an IV bag that tailors your specific needs. Matt & the Staff are all super nice and accommodating. Highly recommend this service, it is worth every penny!",
    timeAgo: "3 months ago"
  },
  {
    name: "Pete S.",
    text: "My self and 6 people took a trip out to scottsdale recently. Stay Dripped IV came highly recommended! I was put in contact with Matt and he made sure to take care of us! Setting up an appointment was seamless and quick. Our Nurse Dezmond was amazing!",
    timeAgo: "3 months ago"
  },
  {
    name: "Rey S.",
    text: "Matt and his team are absolutely top-notch! Their mobile IV service is convenient, professional, and incredibly effective. From booking to treatment, the process was seamless, and the care was outstanding. Kyle is knowledgeable, friendly, and truly cares about his clients.",
    timeAgo: "3 months ago"
  },
  {
    name: "Kong L.",
    text: "Man, this IV services saved my life forreal. I had way too much to drink the night before. I was throwing up all morning (more than 20 times no joke) So I called the owner Matt, from stay dripped mobile IV. He sent me a nurse in less than 1 hour and I felt amazing after!",
    timeAgo: "3 months ago"
  },
  {
    name: "Nick M.",
    text: "Was out in Scottsdale for a bachelor party and had Stay Dripped come to the air bnb! Great service and had us ready to go for our golf round! Highly recommend for convenience, price and experience.",
    timeAgo: "a month ago"
  },
  {
    name: "Amber L.",
    text: "This was my first IV experience, and it was fantastic! They brought their services to the festival that my team and I were producing, and we all had an incredible experience. The staff was professional, and everything exceeded our expectations. I highly recommend!",
    timeAgo: "2 months ago"
  },
  {
    name: "Walied H.",
    text: "Great experience! The prices are very reasonable, and the service is top-notch. The staff was professional, friendly, and made the whole process quick and easy. I felt refreshed and re-energized afterward. Highly recommend!",
    timeAgo: "4 months ago"
  },
  {
    name: "Athena B.",
    text: "My fiance got sick later in the day yesterday. Matt answered the first ring and couldn't have been kinder. I'm so grateful that they helped me same day on a Friday night at 8pm. Kyla came as our nurse and truly is an angel.",
    timeAgo: "3 months ago"
  },
  {
    name: "JR Q.",
    text: "Stay Dripped takes care of me on a weekly basis! They come to my office for my weekly NAD treatment! Highly recommend them for any IV treatments. Matt and his nurses  are amazing!",
    timeAgo: "2 months ago"
  },
  {
    name: "Caroline H.",
    text: "Best IV ever! The nurses + whole team are absolutely amazing. They made the whole experience a lot of fun. Highly recommend!!",
    timeAgo: "2 months ago"
  },
  {
    name: "Jason B.",
    text: "Extremely impressed with the professionalism, cleanliness and most of all the price! I highly recommend to anyone looking for a Mobile IV service in the area. 5 stars.",
    timeAgo: "3 months ago"
  },
  {
    name: "Mason K.",
    text: "Best IV service in the game. Very professional staff from booking it to the nurses, made it easy to end my weekend feeling good in the comfort of my own home.",
    timeAgo: "3 months ago"
  },
  {
    name: "Shelby Z.",
    text: "Came to our Airbnb and was a great experience!! Will definitely hire them again for my Scottsdale weekends.",
    timeAgo: "a month ago"
  },
  {
    name: "Anneliese D.",
    text: "So professional and quick. I'm scared of needles and they made me feel so comfortable and safe in the safety of my girlfriend's home. Will definitely use them again for all future events when I'm in Scottsdale.",
    timeAgo: "4 months ago"
  },
  {
    name: "Payam J",
    text: "This is the best IV service I've ever had. Professional and friendly staff. The Myers cocktail is oh so nice 🙏🏽",
    timeAgo: "3 months ago"
  },
  {
    name: "Cameron D.",
    text: "They saved my life after a long night!! Easiest IV I've ever done. Great service, easy to work with.",
    timeAgo: "3 months ago"
  },
  {
    name: "Chase H.",
    text: "I think they actually might have saved my life after the waste management open weekend. Couldn't recommend them enough!",
    timeAgo: "3 months ago"
  }
])

const displayedTestimonials = computed(() => {
  return testimonials.value.slice(0, displayLimit.value)
})

const loadMore = () => {
  displayLimit.value += 6
}

const openBooking = () => {
  try {
    window.open('https://Staydripped.intakeq.com/booking', '_blank');
  } catch (error) {
    console.log('Booking error handled:', error);
    window.location.href = 'https://Staydripped.intakeq.com/booking';
  }
}
</script>