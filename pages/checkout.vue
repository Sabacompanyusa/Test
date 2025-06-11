<template>
  <div>
    <Container>
      <!-- Header -->
      <section class="py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Secure Checkout
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete your booking with our secure payment system. We accept multiple payment methods for your convenience.
        </p>
      </section>

```
  <!-- Cart Summary -->
  <section class="py-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
        
        <!-- Cart Items -->
        <div class="space-y-4 mb-6">
          <div v-for="item in cartItems" :key="item.id" class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900">{{ item.name }}</h3>
              <p class="text-gray-600 text-sm">{{ item.description }}</p>
              <div class="flex items-center mt-2">
                <span class="text-sm text-gray-500">Quantity: </span>
                <button @click="updateQuantity(item.id, item.quantity - 1)" class="ml-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">-</button>
                <span class="mx-3 font-medium">{{ item.quantity }}</span>
                <button @click="updateQuantity(item.id, item.quantity + 1)" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">+</button>
              </div>
            </div>
            <div class="text-right">
              <div class="font-bold text-lg">${{ item.price * item.quantity }}</div>
              <button @click="removeItem(item.id)" class="text-red-500 text-sm hover:underline">Remove</button>
            </div>
          </div>
        </div>

        <!-- Membership Discount -->
        <div v-if="membershipDiscount > 0" class="border-t pt-4 mb-4">
          <div class="flex justify-between items-center text-green-600">
            <span class="font-medium">Membership Discount ({{ membershipLevel }})</span>
            <span class="font-bold">-${{ membershipDiscount.toFixed(2) }}</span>
          </div>
        </div>

        <!-- Totals -->
        <div class="border-t pt-4">
          <div class="flex justify-between items-center mb-2">
            <span class="text-gray-600">Subtotal:</span>
            <span class="font-medium">${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between items-center mb-2">
            <span class="text-gray-600">Service Fee:</span>
            <span class="font-medium">${{ serviceFee.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span class="text-blue-600">${{ total.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Payment Methods -->
  <section class="py-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
        
        <!-- Payment Options -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="space-y-4">
            <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50" :class="paymentMethod === 'stripe' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
              <input v-model="paymentMethod" type="radio" value="stripe" class="mr-4">
              <div class="flex items-center">
                <span class="font-medium mr-3">Credit/Debit Card</span>
                <div class="flex space-x-2">
                  <span class="text-blue-600">💳</span>
                  <span class="text-sm text-gray-500">Visa, Mastercard, Amex</span>
                </div>
              </div>
            </label>

            <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50" :class="paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
              <input v-model="paymentMethod" type="radio" value="paypal" class="mr-4">
              <div class="flex items-center">
                <span class="font-medium mr-3">PayPal</span>
                <span class="text-blue-600 text-xl">📱</span>
              </div>
            </label>

            <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50" :class="paymentMethod === 'square' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
              <input v-model="paymentMethod" type="radio" value="square" class="mr-4">
              <div class="flex items-center">
                <span class="font-medium mr-3">Square</span>
                <span class="text-green-600 text-xl">⬜</span>
              </div>
            </label>

            <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50" :class="paymentMethod === 'practiceq' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'">
              <input v-model="paymentMethod" type="radio" value="practiceq" class="mr-4">
              <div class="flex items-center">
                <span class="font-medium mr-3">PracticeQ Payment</span>
                <span class="text-purple-600 text-xl">🏥</span>
              </div>
            </label>
          </div>

          <!-- Payment Form -->
          <div class="space-y-4">
            <!-- Credit Card Form -->
            <div v-if="paymentMethod === 'stripe'" class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                <input v-model="cardInfo.number" type="text" placeholder="1234 5678 9012 3456" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Expiry</label>
                  <input v-model="cardInfo.expiry" type="text" placeholder="MM/YY" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">CVC</label>
                  <input v-model="cardInfo.cvc" type="text" placeholder="123" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name</label>
                <input v-model="cardInfo.name" type="text" placeholder="John Doe" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
              </div>
            </div>

            <!-- PayPal Button -->
            <div v-if="paymentMethod === 'paypal'" class="text-center py-8">
              <div class="bg-yellow-50 rounded-lg p-6">
                <div class="text-4xl mb-4">💙</div>
                <p class="text-gray-600 mb-4">You'll be redirected to PayPal to complete your payment securely.</p>
                <button class="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                  Continue with PayPal
                </button>
              </div>
            </div>

            <!-- Square Payment -->
            <div v-if="paymentMethod === 'square'" class="text-center py-8">
              <div class="bg-green-50 rounded-lg p-6">
                <div class="text-4xl mb-4">⬜</div>
                <p class="text-gray-600 mb-4">Secure payment processing through Square.</p>
                <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Pay with Square
                </button>
              </div>
            </div>

            <!-- PracticeQ Payment -->
            <div v-if="paymentMethod === 'practiceq'" class="text-center py-8">
              <div class="bg-purple-50 rounded-lg p-6">
                <div class="text-4xl mb-4">🏥</div>
                <p class="text-gray-600 mb-4">Medical billing through our practice management system.</p>
                <button class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Process Medical Payment
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Billing Information -->
        <div class="border-t pt-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Billing Information</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
              <input v-model="billingInfo.firstName" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
              <input v-model="billingInfo.lastName" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input v-model="billingInfo.email" type="email" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input v-model="billingInfo.phone" type="tel" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Address</label>
              <input v-model="billingInfo.address" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">City</label>
              <input v-model="billingInfo.city" type="text" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">State</label>
              <select v-model="billingInfo.state" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="NV">Nevada</option>
                <option value="UT">Utah</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Security Notice -->
        <div class="bg-blue-50 rounded-lg p-6 mt-8">
          <div class="flex items-center">
            <div class="text-2xl mr-4">🔒</div>
            <div>
              <h4 class="font-semibold text-gray-900">Secure Payment</h4>
              <p class="text-gray-600">Your payment information is encrypted and secure. We never store your payment details.</p>
            </div>
          </div>
        </div>

        <!-- Complete Payment Button -->
        <div class="text-center mt-8">
          <button 
            @click="processPayment"
            :disabled="!canProcessPayment"
            class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            💳 Complete Payment - ${{ total.toFixed(2) }}
          </button>
          <p class="text-sm text-gray-500 mt-4">
            By completing this payment, you agree to our Terms of Service and Privacy Policy.
          </p>
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
  title: 'Secure Checkout | Stay Dripped IV',
  meta: [
    { name: 'description', content: 'Complete your Stay Dripped IV booking with secure payment processing. Multiple payment options available.' }
  ]
})

// Reactive data
const paymentMethod = ref('stripe')
const membershipLevel = ref('Elite Member')
const membershipDiscount = ref(0)

// Sample cart items (in real app, this would come from a store)
const cartItems = ref([
  {
    id: 1,
    name: 'Myers Cocktail IV',
    description: 'Comprehensive vitamin and mineral blend',
    price: 205,
    quantity: 1
  },
  {
    id: 2,
    name: 'B-12 Energy Shot',
    description: 'Intramuscular B-12 injection',
    price: 35,
    quantity: 1
  }
])

// Form data
const cardInfo = reactive({
  number: '',
  expiry: '',
  cvc: '',
  name: ''
})

const billingInfo = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: 'AZ'
})

// Computed values
const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const serviceFee = computed(() => {
  return subtotal.value * 0.03 // 3% service fee
})

const total = computed(() => {
  return subtotal.value + serviceFee.value - membershipDiscount.value
})

const canProcessPayment = computed(() => {
  const hasItems = cartItems.value.length > 0
  const hasPaymentMethod = paymentMethod.value !== ''
  const hasBillingInfo = billingInfo.firstName && billingInfo.lastName && billingInfo.email
  
  if (paymentMethod.value === 'stripe') {
    return hasItems && hasPaymentMethod && hasBillingInfo && cardInfo.number && cardInfo.expiry && cardInfo.cvc
  }
  
  return hasItems && hasPaymentMethod && hasBillingInfo
})

// Methods
const updateQuantity = (itemId, newQuantity) => {
  if (newQuantity < 1) return
  const item = cartItems.value.find(item => item.id === itemId)
  if (item) {
    item.quantity = newQuantity
  }
}

const removeItem = (itemId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== itemId)
}

const processPayment = async () => {
  try {
    // Show loading state
    const loadingAlert = alert('Processing payment...')
    
    // In a real app, you would integrate with actual payment processors
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate successful payment
    alert('Payment successful! You will receive a confirmation email shortly.')
    
    // Redirect to confirmation page
    navigateTo('/confirmation')
  } catch (error) {
    console.error('Payment error:', error)
    alert('Payment failed. Please try again or contact support.')
  }
}

// Calculate membership discount if applicable
onMounted(() => {
  if (membershipLevel.value === 'Elite Member') {
    membershipDiscount.value = subtotal.value * 0.25 // 25% discount
  }
})
</script>