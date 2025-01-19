<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex gap-8">
        <div class="flex-1 bg-white rounded-lg shadow-sm p-6">
          <div class="flex gap-8">
           
            <div class="w-1/2">
              <div class="flex gap-4">
                
                <div class="flex flex-col gap-2 w-20">
                  <div v-for="i in 6" :key="i" 
                       class="relative pb-[100%] border rounded-lg overflow-hidden cursor-pointer hover:border-gray-400"
                       :class="{ 'border-blue-500': i === 1 }">
                    <img :src="product?.image" :alt="product?.title" class="absolute inset-0 w-full h-full object-contain" />
                  </div>
                </div>
                
                <div class="flex-1">
                  <div class="relative pb-[100%] border rounded-lg overflow-hidden">
                    <img :src="product?.image" :alt="product?.title" class="absolute inset-0 w-full h-full object-contain" />
                    <span v-if="isNew" class="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs rounded">2023 New upgrade</span>
                  </div>
                </div>
              </div>
            </div>

           
            <div class="w-1/2">
              
              <div class="mb-6">
                <div class="text-3xl font-bold mb-2">€{{ product?.price.toFixed(2) }}</div>
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                  <span class="line-through">€{{ product?.oldPrice.toFixed(2) }}</span>
                  <span v-if="product?.discount" class="text-red-500">-{{ product?.discount }}%</span>
                </div>
                <div class="text-xs text-red-500 mt-1">Fiyatlara KDV dahildir</div>
              </div>

              
              <h1 class="text-xl mb-4">{{ product?.title }}</h1>

              
              <div class="flex items-center space-x-4 mb-6">
                <div class="flex items-center">
                  <div class="flex text-yellow-400">
                    <span v-for="i in 5" :key="i" class="text-lg">
                      <span v-if="product?.rating && i <= Math.floor(product.rating)">★</span>
                      <span v-else-if="product?.rating && i - 0.5 <= product.rating">★</span>
                      <span v-else>☆</span>
                    </span>
                  </div>
                  <span class="font-medium ml-2">{{ product?.rating }}</span>
                </div>
                <div class="text-gray-500">{{ product?.soldCount }}</div>
              </div>

              
              <div class="mb-6">
                <h3 class="font-medium mb-2">Color: blue</h3>
                <div class="grid grid-cols-6 gap-2">
                  <div v-for="color in ['blue', 'black', 'white', 'gray', 'pink', 'silver']" :key="color" 
                       class="relative pb-[100%] border rounded-lg overflow-hidden cursor-pointer hover:border-gray-400">
                    <img :src="product?.image" :alt="color" class="absolute inset-0 w-full h-full object-contain" />
                  </div>
                </div>
              </div>

             
              <div class="mb-6">
                <div v-if="product?.freeShipping" class="flex items-center text-sm text-red-500">
                  <span class="mr-2">✓</span>
                  <span>Ücretsiz Kargo</span>
                </div>
              </div>

              
              <button 
                @click="handleAddToCart"
                class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 mb-4"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>

       
        <div class="w-80 sticky top-8">
          <BuyCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/products'
import BuyCard from '~/components/BuyCard.vue'
import { computed, ref } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useUserStore } from '~/stores/user'

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()
const userStore = useUserStore()
const showLoginModal = ref(false)


const product = computed(() => {
  const productId = Number(route.params.id)
  return productStore.recommendedProducts.find(p => p.id === productId) ||
         productStore.categories.flatMap(c => c.products).find(p => p.id === productId)
})

const isNew = computed(() => {
  return true 
})

const handleAddToCart = () => {
  if (!userStore.isLoggedIn) {
    showLoginModal.value = true
    return
  }
  
  cartStore.addToCart(product.value)
}
</script> 