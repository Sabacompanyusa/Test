<template>
  <footer class="bg-zinc-800 text-white">
    <div class="px-5 mx-auto max-w-7xl py-12">
      <!-- Main Footer Content -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <h3 class="text-2xl font-bold text-blue-400 mb-4">Stay Dripped IV</h3>
          <p class="text-zinc-300 mb-4 max-w-md">
            Premium mobile IV therapy and wellness services delivered straight to your door. 
            Trusted by top performers, athletes, and everyday warriors across Arizona.
          </p>
          <div class="flex space-x-4">
            <a href="https://instagram.com/officialstaydrippediv" 
               target="_blank" 
               class="text-zinc-400 hover:text-blue-400 transition-colors duration-300">
              📱 Instagram
            </a>
          </div>
        </div>

```
    <!-- Quick Links -->
    <div>
      <h4 class="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
      <ul class="space-y-2">
        <li><a href="#home" class="text-zinc-300 hover:text-white transition-colors duration-300">Home</a></li>
        <li><a href="#" @click="openMenu" class="text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer">Menu</a></li>
        <li><a href="#" @click="openBooking" class="text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer">Book Now</a></li>
        <li><a href="#" @click="openMembership" class="text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer">Membership</a></li>
        <li><a href="#contact" class="text-zinc-300 hover:text-white transition-colors duration-300">Contact</a></li>
      </ul>
    </div>

    <!-- Contact Info -->
    <div>
      <h4 class="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
      <ul class="space-y-2 text-zinc-300">
        <li>
          <a href="tel:+16026889825" class="hover:text-white transition-colors duration-300">
            📞 (602) 688-9825
          </a>
        </li>
        <li>
          <a href="mailto:Info@staydrippedmobileiv.com" class="hover:text-white transition-colors duration-300">
            ✉️ Info@staydrippedmobileiv.com
          </a>
        </li>
        <li class="text-zinc-400">
          📍 Scottsdale & Greater Phoenix, AZ
        </li>
      </ul>
    </div>
  </div>

  <!-- Divider -->
  <div class="border-t border-zinc-700 mt-8 pt-8">
    <!-- Bottom Footer -->
    <div class="flex flex-col md:flex-row justify-between items-center">
      <p class="text-zinc-400 text-sm">
        © 2025 Stay Dripped IV | All rights reserved | Licensed Medical Professionals
      </p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" @click="openEvents" class="text-zinc-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm">
          Event Inquiry
        </a>
        <a href="#" @click="openSponsor" class="text-zinc-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm">
          Partner With Us
        </a>
      </div>
    </div>
  </div>
</div>
```

  </footer>
</template>

<script setup>
// Navigation functions
const openBooking = () => {
  try {
    window.open('https://Staydripped.intakeq.com/booking', '_blank');
  } catch (error) {
    console.log('Booking error handled:', error);
    window.location.href = 'https://Staydripped.intakeq.com/booking';
  }
};

const openMenu = () => {
  try {
    alert('Opening full treatment menu...\n\nBrowse our complete selection of IV therapy treatments including:\n• Basic Hydration Treatments\n• Standard Wellness IVs\n• Specialty Cocktails\n• Premium NAD+ Therapy');
  } catch (error) {
    console.log('Menu error handled:', error);
  }
};

const openMembership = () => {
  try {
    alert('💎 VIP Membership Program\n\nJoin our exclusive membership for:\n• 20% off all treatments\n• Priority booking\n• Free monthly wellness consultation\n• Special member-only treatments\n\nContact us for more details!');
  } catch (error) {
    console.log('Membership error handled:', error);
  }
};

const openSponsor = () => {
  try {
    alert('🚀 Influencer Partnership Program\n\nJoin our brand ambassador program:\n• Competitive commissions\n• Free treatments for content\n• Marketing support\n• Flexible partnership terms\n\nApply today to start earning!');
  } catch (error) {
    console.log('Sponsor error handled:', error);
  }
};

const openEvents = () => {
  try {
    alert('🎉 Corporate & Event Services\n\nWe provide IV therapy for:\n• Corporate wellness events\n• Private parties\n• Athletic events\n• Wedding parties\n• Group bookings\n\nContact us for custom packages!');
  } catch (error) {
    console.log('Events error handled:', error);
  }
};
</script>
