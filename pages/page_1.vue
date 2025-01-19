<template>
  <div>
    
    <div class="bg-white shadow-sm">
      
      <div class="container mx-auto px-4 py-2 flex items-center justify-between">
        <div class="flex items-center space-x-4 flex-1">
          <img src="/aliexpress-logo.jpg" alt="AliExpress" class="h-8" />
          <div class="relative flex-1">
            <input
              type="text"
              placeholder="resmi 14c case"
              class="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
            />
            <button class="absolute right-0 top-0 h-full px-4 bg-black rounded-r-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="flex items-center space-x-6 ml-8">
          <div class="flex items-center space-x-2">
            <div class="flex flex-col items-center">
              <div class="flex items-center">
                <img src="https://flagcdn.com/w20/tr.png" alt="TR" class="w-5" />
                <span class="ml-1">TR</span>
              </div>
              <span class="font-semibold">EUR</span>
            </div>
          </div>
          
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm5.5 0v6a.5.5 0 001 0V3h1v6a.5.5 0 001 0V3h1l.5 6a.5.5 0 001 0V3h1v14H4V3h4.5z" clip-rule="evenodd" />
            </svg>
            <a href="#" class="text-sm">AliExpress uygulamasını indir</a>
          </div>
          
          <div class="flex flex-col items-start relative group">
            <span class="text-sm text-gray-500">{{ userStore.isLoggedIn ? 'Hoş geldin!' : 'Hoş geldiniz!' }}</span>
            <button 
              v-if="!userStore.isLoggedIn" 
              @click="showLoginModal = true" 
              class="text-sm hover:text-gray-700"
            >
              Giriş yap / Kayıt ol
            </button>
            <div v-else class="relative">
              <button 
                class="text-sm hover:text-gray-700 flex items-center"
              >
                {{ userStore.currentUser?.name }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            
            
            <div 
              class="absolute hidden group-hover:block right-0 top-full mt-1 w-48 bg-white border rounded-md shadow-lg py-1 z-50"
            >
              <div v-if="!userStore.isLoggedIn">
                <button 
                  @click="showLoginModal = true"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
                >
                  Giriş yap
                </button>
                <button 
                  @click="showLoginModal = true"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mb-2"
                >
                  Kaydol
                </button>
              </div>
              <div v-else>
                <button 
                  @click="handleLogout"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
                >
                  Çıkış yap
                </button>
              </div>

              <div class="border-t border-gray-200">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click.prevent="router.push('/account?section=orders')">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Siparişlerim
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Jetonlarım
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Mesaj Merkezi
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Ödeme
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  İstek Listesi
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  My Coupons
                </a>
              </div>

              <div class="border-t border-gray-200">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AliExpress Business</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DS Center</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">satıcı girişi</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Alıcı Koruması</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Yardım Merkezi</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bir Şikayet Girin</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fikri Mülkiyet Hakkı İhlali Bildir</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ceza bilgileri</a>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="relative cursor-pointer" @click="router.push('/cart')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h2.5l2 10h11l2-7H8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="currentColor"/>
                <path d="M18 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="currentColor"/>
              </svg>
              <span class="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {{ cartStore.displayTotalItems }}
              </span>
            </div>
            <span class="text-sm mt-1">Sepet</span>
          </div>
        </div>
      </div>

      
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-center space-x-8">
          <div class="relative group">
            <button class="flex items-center space-x-2 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span class="font-medium">Tüm Kategoriler</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div class="absolute hidden group-hover:block w-64 bg-white border shadow-lg mt-2 py-2 z-50">
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Elektronik</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Giyim</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Ev & Yaşam</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Spor & Outdoor</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Kozmetik</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Oyuncak & Hobi</a>
            </div>
          </div>
          
          <nav class="flex space-x-6">
            <a href="#" class="text-red-500">Paket teklifler</a>
            <a href="#" class="hover:text-gray-700">Choice</a>
            <a href="#" class="hover:text-gray-700">Süper Fırsatlar</a>
            <a href="#" class="hover:text-gray-700">AliExpress Business</a>
            <a href="#" class="hover:text-gray-700">Ev ve bahçe</a>
            <a href="#" class="hover:text-gray-700">Saç ekleme ve peruk</a>
            <a href="#" class="hover:text-gray-700">Erkek giyim</a>
            <div class="relative group">
              <button class="flex items-center hover:text-gray-700">
                <span>Daha fazla</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div class="absolute hidden group-hover:block w-48 bg-white border shadow-lg mt-2 py-2 right-0 z-50">
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Kadın Giyim</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Ayakkabı</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Aksesuar</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Çanta</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    
    <div class="bg-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-2xl font-bold text-center mb-8">Günün teklifleri</h1>
        
        <div class="grid grid-cols-3 gap-6">
          <ProductCarousel 
            v-for="category in productStore.categories"
            :key="category.id"
            :category="category"
          />
        </div>
      </div>
    </div>

    
    <div class="bg-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-2xl font-bold text-center mb-8">Beğenebileceğiniz Diğer Ürünler</h1>
        <div class="grid grid-cols-6 gap-4">
          <div v-for="product in productStore.recommendedProducts" :key="product.id" 
              class="bg-white rounded-lg border p-3 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
              @click="navigateToProduct(product.id)">
            <div class="relative pb-[100%] mb-3 overflow-hidden rounded-lg">
              <img 
                :src="product.image" 
                :alt="product.title" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              <div class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
            </div>
            <h3 class="text-sm text-gray-700 line-clamp-2 mb-2">{{ product.title }}</h3>
            
            
            <div class="flex items-baseline space-x-2">
              <span class="text-lg font-bold">€{{ product.price.toFixed(2) }}</span>
              <span class="text-sm text-gray-500 line-through">€{{ product.oldPrice.toFixed(2) }}</span>
              <span v-if="product.discount" class="text-red-500 text-sm">-{{ product.discount }}%</span>
            </div>

            
            <div class="mt-2 flex items-center space-x-2">
              <div class="flex items-center text-yellow-400">
                <span class="text-sm">★ {{ product.rating }}</span>
              </div>
              <span class="text-sm text-gray-500">{{ product.soldCount }}</span>
            </div>

            
            <div class="mt-2 flex flex-wrap gap-2">
              <span v-if="product.freeShipping" class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Ücretsiz sevkiyat</span>
              <span v-if="product.choice" class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Choice</span>
            </div>

            
            <div class="mt-3 grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="w-full bg-black text-white px-3 py-1.5 rounded-sm text-xs font-medium hover:bg-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
                Ön izlemeyi görüntüle
              </button>
              <button class="w-full bg-black text-white px-3 py-1.5 rounded-sm text-xs font-medium hover:bg-gray-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                Benzer Ürünler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
  <Footer />
  <LoginModal :is-open="showLoginModal" @close="showLoginModal = false" />
</template>

<script setup lang="ts">
import ProductCarousel from '~/components/ProductCarousel.vue'
import { useProductStore } from '~/stores/products'
import { useUserStore } from '~/stores/user'
import { useCartStore } from '~/stores/cart'
import { useRouter } from 'vue-router'
import LoginModal from '~/components/LoginModal.vue'
import Footer from '~/components/Footer.vue'
import { ref } from 'vue'

const productStore = useProductStore()
const userStore = useUserStore()
const cartStore = useCartStore()
const router = useRouter()
const showLoginModal = ref(false)
const showUserMenu = ref(false)

const navigateToProduct = (productId: number) => {
  router.push(`/product/${productId}`)
}

const handleLogout = () => {
  userStore.logout()
  showUserMenu.value = false
}


onMounted(() => {
  document.addEventListener('click', (e) => {
    if (showUserMenu.value && !(e.target as Element).closest('.relative')) {
      showUserMenu.value = false
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', () => {})
})
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #666;
}
</style> 