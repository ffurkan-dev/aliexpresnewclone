<template>
  <div class="flex min-h-screen">
    <Sidebar @item-selected="handleItemSelected" :default-selected="selectedSection" />
    <div class="flex-1 p-8">
      <div v-if="selectedSection === 'Siparişlerim'">
        <div class="mb-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
              <img :src="user.avatar" alt="User avatar" class="w-full h-full object-cover" />
            </div>
            <h2 class="text-2xl font-bold">{{ user.name }}</h2>
          </div>
          <div class="grid grid-cols-5 gap-4">
            <div class="flex flex-col items-center">
              <div class="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span class="text-sm mt-1">İstek listesi</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span class="text-sm mt-1">Takip edilenler</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="text-sm mt-1">Bakılanlar</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <span class="text-sm mt-1">Kuponlar</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span class="text-sm mt-1">Alışveriş kredisi</span>
            </div>
          </div>
        </div>
        <h1 class="text-2xl font-bold mb-4">Siparişlerim</h1>
        <ListOfOrders />
      </div>
      <div v-else>
        <h1 class="text-2xl font-bold mb-4">{{ selectedSection }}</h1>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ListOfOrders from '~/components/ListOfOrders.vue'

const route = useRoute()
const selectedSection = ref('Genel Bakış')
const orders = ref([])
const user = ref({
  name: 'John Doe', 
  avatar: '/images/no-photo.png'
})

onMounted(() => {
  
  if (route.query.section === 'orders') {
    selectedSection.value = 'Siparişlerim'
  }
})

const handleItemSelected = (item) => {
  selectedSection.value = item
}
</script> 