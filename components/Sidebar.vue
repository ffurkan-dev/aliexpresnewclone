<template>
  <div class="w-64 bg-gray-100 h-full p-4">
    <h2 class="font-semibold text-lg mb-4">Hesabım</h2>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(index)"
        class="flex items-center cursor-pointer py-2 px-4 hover:bg-gray-200"
        :class="{
          'bg-gray-200 border-l-4 border-red-500': selectedItem === index,
        }"
      >
        <span class="flex-1">{{ item }}</span>
      </li>
    </ul>

    <div class="mt-8">
      <h3 class="text-gray-500 text-sm font-medium">AliExpress Mobile App</h3>
      <p class="text-gray-400 text-xs mt-1">Her zaman, Her yerde!</p>
      <div class="mt-2">
        <img
          src="https://ae01.alicdn.com/kf/Seb2e514b03de4710b33686c401d4d34dH/120x120.png"
          alt="QR Code"
          class="w-24 h-24"
        />
      </div>
      <p class="text-gray-400 text-xs mt-2">
        Tarama veya indirmek için tıklayın
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  defaultSelected: {
    type: String,
    default: 'Genel Bakış'
  }
})

const emit = defineEmits(['item-selected'])

const items = [
  "Genel Bakış",
  "Siparişlerim",
  "Ödemeler",
  "İade ve Geri Ödemeler",
  "Değerlendirmelerim",
  "Hesap Ayarları",
  "Adres Bilgilerim",
  "Mesajlarım",
  "Arkadaşını Davet Et",
  "Yardım Merkezi",
  "Raporlarım",
  "Öneriler",
  "Dropshipping Merkezi",
  "Bildirimler",
]

const selectedItem = ref(items.indexOf(props.defaultSelected))

watch(() => props.defaultSelected, (newValue) => {
  selectedItem.value = items.indexOf(newValue)
})

const selectItem = (index) => {
  selectedItem.value = index
  emit('item-selected', items[index])
}
</script> 