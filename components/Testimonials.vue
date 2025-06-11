<template>
  <section class="py-16 bg-gray-50">
    <div class="px-5 mx-auto max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ title || 'What Our Clients Say' }}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ description || 'Real reviews from real customers who experienced the Stay Dripped difference' }}
        </p>
        <div class="flex items-center justify-center mt-4 space-x-2">
          <div class="flex text-yellow-400">
            <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <span class="text-gray-600 font-medium">5.0 Stars on Google</span>
        </div>
      </div>

```
  <!-- Testimonials Grid -->
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div 
      v-for="(testimonial, index) in displayedTestimonials" 
      :key="index"
      class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <!-- Quote Icon -->
      <div class="flex items-start justify-between mb-4">
        <svg class="w-8 h-8 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <div class="flex text-yellow-400">
          <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
      </div>

      <!-- Review Text -->
      <p class="text-gray-700 mb-4 leading-relaxed">
        "{{ testimonial.text }}"
      </p>

      <!-- Author Info -->
      <div class="flex items-center justify-between">
        <div>
          <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
          <p class="text-sm text-gray-500">{{ testimonial.timeAgo }}</p>
        </div>
        <div class="flex items-center space-x-1">
          <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span class="text-xs text-gray-500">Google</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Load More Button -->
  <div v-if="showLoadMore && testimonials.length > displayLimit" class="text-center mt-8">
    <button 
      @click="loadMore"
      class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
    >
      Load More Reviews
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
  </div>

  <!-- CTA Section -->
  <div class="text-center mt-12 p-8 bg-blue-50 rounded-2xl">
    <h3 class="text-2xl font-bold text-gray-900 mb-2">Ready to Join Our Happy Clients?</h3>
    <p class="text-gray-600 mb-6">Experience the Stay Dripped difference for yourself</p>
    <button 
      @click="openBooking"
      class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
    >
      💧 Book Your Treatment Now
    </button>
  </div>
</div>
```

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  showLoadMore: {
    type: Boolean,
    default: true
  },
  initialLimit: {
    type: Number,
    default: 6
  }
})

const displayLimit = ref(props.initialLimit)

// Real Google Reviews Data
const testimonials = ref([
  {
    name: "Armand Dragone",
    text: "Just had an amazing experience with Stay Dripped Mobile. Super convenient, professional, and the IV treatment left me feeling refreshed. They came right to my door, explained everything clearly, and made the whole process smooth and comfortable. Highly recommend if you're looking for a boost or just want to feel your best!",
    timeAgo: "a month ago"
  },
  {
    name: "Anthony Saba",
    text: "Most amazing IV experience. I have been sick with the flu for about a week, and the Meyers IV made me feel so much better right away. Nurse was very professional and knowledgeable about the products offered. Scheduling process was super quick and easy. I will definitely use them whenever I need an IV in the future!",
    timeAgo: "3 months ago"
  },
  {
    name: "Cindy Berry",
    text: "Stay Dripped is hands down the best IV experience I've ever had. They are professional, friendly and knowledgeable. I will definitely be a repeat 'dripper' and I highly recommend them for any IV services you may need.",
    timeAgo: "a month ago"
  },
  {
    name: "Chandler Clancy",
    text: "I felt amazing after completing my session! With so much variety to choose from, it is easy to find an IV bag that tailors your specific needs. Staff is all super nice and accommodating. Highly recommend this service, it is worth every penny!",
    timeAgo: "3 months ago"
  },
  {
    name: "Pete Sinapi",
    text: "My self and 6 people took a trip out to scottsdale recently. Stay Dripped IV came highly recommended! I was put in contact with Matt and he made sure to take care of us! Setting up an appointment was seamless and quick. Our Nurse Dezmond was amazing!",
    timeAgo: "3 months ago"
  },
  {
    name: "Rey Sierra",
    text: "Kyle and his team are absolutely top-notch! Their mobile IV service is convenient, professional, and incredibly effective. From booking to treatment, the process was seamless, and the care was outstanding. Kyle is knowledgeable, friendly, and truly cares about his clients.",
    timeAgo: "3 months ago"
  },
  {
    name: "Kong Lee",
    text: "Man, this IV services saved my life forreal. I had way too much to drink the night before. I was throwing up all morning (more than 20 times no joke) So I called the owner from stay dripped mobile IV. He sent me a nurse in less than 1 hour and I felt amazing after!",
    timeAgo: "3 months ago"
  },
  {
    name: "Nick Moccia",
    text: "Was out in Scottsdale for a bachelor party and had Stay Dripped come to the air bnb! Great service and had us ready to go for our golf round! Highly recommend for convenience, price and experience.",
    timeAgo: "a month ago"
  },
  {
    name: "Amber Lotz",
    text: "This was my first IV experience, and it was fantastic! They brought their services to the festival that my team and I were producing, and we all had an incredible experience. The staff was professional, and everything exceeded our expectations. I highly recommend!",
    timeAgo: "2 months ago"
  },
  {
    name: "Walied Harfouche",
    text: "Great experience! The prices are very reasonable, and the service is top-notch. The staff was professional, friendly, and made the whole process quick and easy. I felt refreshed and re-energized afterward. Highly recommend!",
    timeAgo: "4 months ago"
  },
  {
    name: "Athena Burkholder",
    text: "My fiance got sick later in the day yesterday. Kyle answered the first ring and couldn't have been kinder. I'm so grateful that they helped me same day on a Friday night at 8pm. Kyla came as our nurse and truly is an angel.",
    timeAgo: "3 months ago"
  },
  {
    name: "JR Quintero",
    text: "Stay Dripped takes care of me on a weekly basis! They come to my office for my weekly NAD treatment! Highly recommend them for any IV treatments. Their nurses and staff are amazing!",
    timeAgo: "2 months ago"
  },
  {
    name: "Caroline Harms",
    text: "Best IV ever! The nurses + whole team are absolutely amazing. They made the whole experience a lot of fun. Highly recommend!!",
    timeAgo: "2 months ago"
  },
  {
    name: "Jason Baleme",
    text: "Extremely impressed with the professionalism, cleanliness and most of all the price! I highly recommend to anyone looking for a Mobile IV service in the area. 5 stars.",
    timeAgo: "3 months ago"
  },
  {
    name: "Mason King",
    text: "Best IV service in the game. Very professional staff from booking it to the nurses, made it easy to end my weekend feeling good in the comfort of my own home.",
    timeAgo: "3 months ago"
  },
  {
    name: "Shelby Zimbelman",
    text: "Came to our Airbnb and was a great experience!! Will definitely hire them again for my Scottsdale weekends.",
    timeAgo: "a month ago"
  },
  {
    name: "Anneliese Droetti",
    text: "So professional and quick. I'm scared of needles and they made me feel so comfortable and safe in the safety of my girlfriend's home. Will definitely use them again for all future events when I'm in Scottsdale.",
    timeAgo: "4 months ago"
  },
  {
    name: "Payam J",
    text: "This is the best IV service I've ever had. Professional and friendly staff. The Myers cocktail is oh so nice 🙏🏽",
    timeAgo: "3 months ago"
  },
  {
    name: "Cameron Duty",
    text: "They saved my life after a long night!! Easiest IV I've ever done. Great service, easy to work with.",
    timeAgo: "3 months ago"
  },
  {
    name: "Chase Hernandez",
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
