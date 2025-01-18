<template>
  <div class="bg-white rounded-lg p-4 h-full">
    <div class="flex flex-col items-center mb-6">
      <div class="flex items-center space-x-2 mb-1  ">
        <h2 class="text-xl font-bold ">{{ category.title }}</h2>
      </div>
      <div v-if="category.timeLeft" class="flex items-center space-x-1 text-black-500 bg-red-100 p-3 rounded-full">
        <svg fill="#fa0505" viewBox="0 0 1920 1920" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
          <path d="M1377.882 1344 903.53 988.235v-592.94h112.942v536.47l429.176 321.77-67.765 90.465ZM960 0C430.645 0 0 430.645 0 960c0 529.242 430.645 960 960 960 529.242 0 960-430.758 960-960 0-529.355-430.758-960-960-960Z" fill-rule="evenodd" />
        </svg>
        <span class="text-sm">Bitiş:</span>
        <span class="text-sm font-semibold">{{ formatTime }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div v-else class="flex items-center space-x-1 text-black-500 bg-red-100 p-3 rounded-full">
        <span class="text-sm ">{{ category.subtitle }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <!-- Products Carousel -->
    <div class="relative">
      <!-- Previous Button -->
      <button 
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
        :class="{ 'opacity-50 cursor-not-allowed': !canGoPrev }"
        :disabled="!canGoPrev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Products -->
      <div class="overflow-hidden">
        <div 
          class="flex transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 50}%)` }"
        >
          <div 
            v-for="product in category.products" 
            :key="product.id"
            class="w-1/2 flex-shrink-0 px-1.5 cursor-pointer"
            @click="navigateToProduct(product.id)"
          >
            <div class="bg-white rounded-lg border p-3 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <div class="relative pb-[100%] mb-3 overflow-hidden rounded-lg">
                <img 
                  :src="product.image" 
                  :alt="product.title" 
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <h3 class="text-sm text-gray-700 line-clamp-2 mb-2">{{ product.title }}</h3>
              
              <!-- Price Section -->
              <div class="flex items-baseline space-x-2">
                <span class="text-lg font-bold">€{{ product.price.toFixed(2) }}</span>
                <span class="text-sm text-gray-500 line-through">€{{ product.oldPrice.toFixed(2) }}</span>
                <span v-if="product.discount" class="text-red-500 text-sm">-{{ product.discount }}%</span>
              </div>

              <!-- Rating or Save Amount -->
              <div v-if="product.rating" class="mt-2 flex items-center space-x-2">
                <div class="flex items-center text-yellow-400">
                  <span class="text-sm">★ {{ product.rating }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ product.soldCount }}</span>
              </div>
              <div v-if="product.saveAmount" class="mt-2 text-red-500 text-sm">
                Tasarrufunuz: {{ product.saveAmount }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Button -->
      <button 
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
        :class="{ 'opacity-50 cursor-not-allowed': !canGoNext }"
        :disabled="!canGoNext"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Category } from '~/stores/products'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  category: Category
}>()

const router = useRouter()

const navigateToProduct = (productId: number) => {
  router.push(`/product/${productId}`)
}

// Timer for countdown
const timeLeft = ref(0)
let countdownInterval: NodeJS.Timer | null = null

const formatTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

// Carousel state
const currentIndex = ref(0)
let autoSlideInterval: NodeJS.Timer | null = null

const canGoNext = computed(() => {
  return currentIndex.value < props.category.products.length - 2
})

const canGoPrev = computed(() => {
  return currentIndex.value > 0
})

const nextSlide = () => {
  if (canGoNext.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (canGoPrev.value) {
    currentIndex.value--
  }
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 3000)
}

onMounted(() => {
  // Start countdown timer if timeLeft exists
  if (props.category.timeLeft) {
    const [hours, minutes, seconds] = props.category.timeLeft.split(':').map(Number)
    timeLeft.value = hours * 3600 + minutes * 60 + seconds

    countdownInterval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--
      } else {
        if (countdownInterval) {
          clearInterval(countdownInterval)
        }
      }
    }, 1000)
  }

  // Start auto-slide
  startAutoSlide()
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transition for hover effects */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 