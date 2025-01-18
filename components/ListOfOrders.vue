<template>
    <div class="bg-white p-4 rounded-lg shadow-sm">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Siparişler</h2>
        <a href="#" class="text-sm text-gray-500 hover:text-gray-700">Tümünü gör</a>
      </div>
  
      <div class="grid grid-cols-4 gap-4 text-center mb-4">
        <div
          v-for="(item, index) in icons"
          :key="index"
          class="flex flex-col items-center cursor-pointer hover:text-red-500"
        >
          <img
            :src="item.icon"
            :alt="item.name"
            class="w-10 h-10 mb-2"
          />
          <span class="text-sm">{{ item.name }}</span>
        </div>
      </div>
  
      <div>
        <ul class="divide-y divide-gray-200">
          <li
            v-for="(item, index) in listItems"
            :key="index"
            class="flex items-center justify-between py-2 px-2 hover:bg-gray-50 cursor-pointer"
          >
            <div class="flex items-center space-x-2">
              <img
                :src="item.icon"
                :alt="item.name"
                class="w-5 h-5"
              />
              <span class="text-sm">{{ item.name }}</span>
            </div>
            <span class="text-gray-400 text-sm">&gt;</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        icons: [
          { name: "Ödenmemiş", icon: "https://ae01.alicdn.com/kf/H349adf833fca48ab82998712df5ba125c.png" },
          { name: "Gönderilecekler", icon: "https://ae01.alicdn.com/kf/H23cba674f64e4821ae38b40ed17f7b42F.png" },
          { name: "Gönderilen", icon: "https://ae01.alicdn.com/kf/Hec4afd05f61648a3831e2e35bcf05ba3X.png" },
          { name: "İncelenecekler", icon: "https://ae01.alicdn.com/kf/H6b216a31f4fa4b72884778014e6c407d0.png" },
        ],
        listItems: [
          { name: "İtirazlar", icon: "data:image/jpeg;base64,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" },
          { name: "Ürün ve para iadesi", icon: "data:image/png;base64,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" },
        ],
      };
    },
  };
  </script>
  
  <style>
  </style>
  