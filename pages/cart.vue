<template>
  <div class="bg-gray-100 min-h-screen py-8">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-2xl font-bold mb-8">Alışveriş Sepeti ({{ cartStore.totalItems }})</h1>
      
      <div class="flex gap-8">
        
        <div class="flex-1 bg-white rounded-lg shadow p-6">
      
          <div class="flex items-center mb-6 pb-6 border-b">
            <input type="checkbox" class="mr-2" />
            <span class="text-sm">Tüm ürünleri seç</span>
            <button class="text-sm text-gray-500 ml-4">Seçili ürünleri sil</button>
          </div>

         
          <div v-if="cartStore.items.length > 0">
            <div v-for="item in cartStore.items" :key="item.id" class="flex gap-4 py-4 border-b">
              <input 
                type="checkbox" 
                :checked="item.selected"
                @change="cartStore.toggleSelected(item.id)"
                class="mt-4"
              />
              
              <div class="w-24 h-24">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover rounded" />
              </div>
              
              <div class="flex-1">
                <h3 class="text-sm mb-2">{{ item.title }}</h3>
                <div class="text-xs text-gray-500 mb-4">
                  <span>{{ item.store.name }}</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-baseline space-x-2">
                    <span class="text-lg font-bold">€{{ item.price.toFixed(2) }}</span>
                    <span class="text-sm text-gray-500 line-through">€{{ item.oldPrice.toFixed(2) }}</span>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <button 
                      @click="cartStore.updateQuantity(item.id, Math.max(1, item.quantity - 1))"
                      class="px-2 py-1 border rounded"
                    >-</button>
                    <span class="w-8 text-center">{{ item.quantity }}</span>
                    <button 
                      @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                      class="px-2 py-1 border rounded"
                    >+</button>
                    <button 
                      @click="cartStore.removeFromCart(item.id)"
                      class="ml-4 text-gray-500 hover:text-red-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center py-8 text-gray-500">
            Sepetiniz boş
          </div>
        </div>

        
        <div class="w-80">
          <div class="bg-white rounded-lg shadow p-6 sticky top-8">
            <h2 class="text-lg font-semibold mb-4">Sipariş Özeti</h2>
            
            <div class="space-y-2 mb-4">
              <div class="flex justify-between">
                <span>Ara Toplam</span>
                <span>€{{ cartStore.cartTotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-green-600">
                <span>Kargo</span>
                <span>Ücretsiz</span>
              </div>
            </div>
            
            <div class="border-t pt-4 mb-6">
              <div class="flex justify-between font-semibold">
                <span>Toplam</span>
                <span>€{{ cartStore.cartTotal.toFixed(2) }}</span>
              </div>
            </div>
            
            <button class="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">
              Satın Al ({{ cartStore.selectedItems.length }})
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const cartStore = useCartStore()
const userStore = useUserStore()
const router = useRouter()

onMounted(() => {
  if (!userStore.isLoggedIn) {
    router.push('/')
  }
})
</script> 