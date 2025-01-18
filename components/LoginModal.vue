<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white  w-[400px] relative">
      <!-- Close Button -->
      <button @click="close" class="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <!-- Modal Content -->
      <div class="p-6">
        <h2 class="text-xl font-semibold text-center mb-2">Kayıt/Kaydol</h2>
        <div class="text-center text-sm text-green-600 mb-2">
          <span class="inline-block w-2 h-2 bg-green-600 rounded-full mr-1"></span>
          Bilgileriniz korunur
        </div>
        <div class="bg-pink-100 text-sm p-2 rounded mb-4 text-center text-rose-600">
          Yeni müşteriler %70'e varan indirim kazanıyor
        </div>

        <input 
          v-model="email"
          type="email" 
          placeholder="E-posta" 
          class="w-full border rounded p-2 mb-4"
        >

        <input 
          v-model="password"
          type="password" 
          placeholder="Şifre" 
          class="w-full border rounded p-2 mb-4"
        >

        <div v-if="error" class="text-red-500 text-sm mb-4 text-center">
          {{ error }}
        </div>

        <button 
          @click="handleLogin" 
          class="w-full bg-pink-300 text-white py-2 mb-4 hover:bg-pink-400 disabled:opacity-50"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Giriş yapılıyor...' : 'Giriş yap' }}
        </button>

        <div class="text-center text-sm text-gray-500 mb-4">
          Giriş yaparken sorun mu yaşıyorsunuz?
          <a href="#" class="text-gray-700 hover:underline">Hızlı giriş</a>
        </div>

        <div class="flex justify-center space-x-4 mb-4">
          <button class="p-2 rounded-full hover:bg-gray-100">
            <!-- Google Icon -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
          <button class="p-2 rounded-full hover:bg-gray-100">
            <!-- Facebook Icon -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button class="p-2 rounded-full hover:bg-gray-100">
            <!-- Twitter Icon -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          <button class="p-2 rounded-full hover:bg-gray-100">
            <!-- Apple Icon -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.94 5.19A4.38 4.38 0 0016 2a4.38 4.38 0 00-3 1.52 4.09 4.09 0 00-1 3 3.62 3.62 0 002.94-1.33zm2 3.03a4.51 4.51 0 012.16 3.78 4.47 4.47 0 01-2.64 4.08 9.49 9.49 0 01.48 2.92 10.89 10.89 0 01-1.43 5h-.25a3.15 3.15 0 01-1.27-.27 3.83 3.83 0 00-1.58-.27 3.53 3.53 0 00-1.53.27 3.67 3.67 0 01-1.37.27h-.25a10.93 10.93 0 01-1.43-5 9.49 9.49 0 01.48-2.92 4.47 4.47 0 01-2.64-4.08 4.51 4.51 0 012.16-3.78 4.19 4.19 0 012.1-.57 5 5 0 011.75.34 4.1 4.1 0 001.63.34 4.59 4.59 0 001.69-.34 5.28 5.28 0 011.78-.34 4.23 4.23 0 012.16.57z"/>
            </svg>
          </button>
        </div>

        <div class="text-center text-xs text-gray-500">
          Konum: <span class="font-medium">Ireland</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>

        <div class="text-center text-[10px] text-gray-500 mt-4">
          Devam ederek, yetişkin olduğunuzu ve şunları okuyup kabul ettiğinizi doğrulamış olursunuz:
          <a href="#" class="text-gray-700">AliExpress Üyelik ve Gizlilik Sözleşmesi</a> ve
          <a href="#" class="text-gray-700">Politikası</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '~/plugins/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useUserStore } from '~/stores/user'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const email = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)
const userStore = useUserStore()

const handleLogin = async () => {
  if (!email.value || !password.value) {
    error.value = 'Lütfen e-posta ve şifre giriniz.'
    return
  }

  try {
    isLoading.value = true
    error.value = ''
    
    const { $checkUserCredentials } = useNuxtApp()
    const result = await $checkUserCredentials(email.value, password.value)
    
    if (result.success) {
      userStore.setUser({
        name: result.user.name,
        email: result.user.email
      })
      console.log('Giriş başarılı:', result.user)
      emit('close')
    } else {
      error.value = result.error
    }
  } catch (err: any) {
    error.value = 'Giriş yapılırken bir hata oluştu.'
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
}

const close = () => {
  email.value = ''
  password.value = ''
  error.value = ''
  emit('close')
}
</script> 