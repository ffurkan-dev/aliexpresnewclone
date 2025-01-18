import { defineStore } from 'pinia'
import { useCartStore } from './cart'

export interface User {
  name: string
  email: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null,
    isLoggedIn: false
  }),
  
  actions: {
    setUser(user: User) {
      this.currentUser = user
      this.isLoggedIn = true
      
      // Kullanıcı giriş yaptığında sepetini yükle
      const cartStore = useCartStore()
      cartStore.loadUserCart()
    },
    
    logout() {
      // Çıkış yapmadan önce mevcut sepeti kaydet
      const cartStore = useCartStore()
      cartStore.saveUserCart()
      
      this.currentUser = null
      this.isLoggedIn = false
      
      // Aktif sepeti temizle
      cartStore.items = []
      cartStore.totalItems = 0
    }
  }
}) 