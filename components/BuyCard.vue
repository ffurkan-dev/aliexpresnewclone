<template>
    <div class="bg-white p-4 rounded-lg shadow-md w-80">
      <div class="mb-4">
        <p class="text-sm font-medium">Satıcı:</p>
        <p class="text-sm text-gray-700 font-semibold">GK Global Choice Store (Tüccar)</p>
      </div>
  
      <div class="mb-4 flex items-center">
        <p class="text-sm font-medium">Şuraya gönderiyor:</p>
        <div class="flex items-center ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <p class="text-sm text-gray-700 ml-1">Turkey</p>
        </div>
      </div>
  
      <div class="flex items-center mb-4">
        <button class="bg-yellow-300 text-black text-sm font-medium px-3 py-1 rounded-md">
          Choice
        </button>
        <span class="ml-2 text-sm font-normal text-gray-700">Aliexpress taahhüt</span>
      </div>
  
      <div class="flex items-center mb-4">
        <img src="https://ae01.alicdn.com/kf/Sda4e3004cce04df59c03b833a9e26165f/64x64.png" width="30" alt="" srcset="">
        <div class="ml-2">
          <p class="text-sm font-medium">Ücretsiz Sevkiyat</p>
          <p class="text-sm text-gray-700">Teslimat: <span class="font-semibold">18 Ara</span></p>
        </div>
      </div>
  
      <div class="flex items-start mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
  
        <div class="ml-2 text-sm">
          <p class="font-medium">Güvenlik ve gizlilik</p>
          <p class="text-gray-700">
            Güvenli ödemeler: Kişisel bilgilerinizi izniniz olmadan üçüncü taraflarla paylaşmayız.
          </p>
          <p class="text-gray-500 mt-1 text-xs">
            We protect your privacy and keep your personal details safe and secure.
          </p>
        </div>
      </div>
  
      <div class="flex flex-col gap-2 mb-4">
        <button class="bg-red-500 text-white text-sm font-semibold py-2  hover:bg-red-600">
          Şimdi Satın Al
        </button>
        <button 
          @click="handleAddToCart"
          class="border border-gray-300 text-gray-700 text-sm font-semibold py-2  hover:bg-gray-100"
        >
          Sepete ekleyin
        </button>
      </div>
  
      <div class="flex justify-between items-center text-gray-700 text-sm">
        <div class="flex items-center cursor-pointer hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          <span class="ml-1">Paylaş</span>
        </div>
        <div class="flex items-center cursor-pointer hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <span class="ml-1">339</span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useUserStore } from '~/stores/user'
import { ref } from 'vue'

const props = defineProps<{
  product: any
}>()

const cartStore = useCartStore()
const userStore = useUserStore()
const showLoginModal = ref(false)

const handleAddToCart = () => {
  if (!userStore.isLoggedIn) {
    showLoginModal.value = true
    return
  }
  
  cartStore.addToCart(props.product)
}
</script> 