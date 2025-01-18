import { defineStore } from 'pinia'
import { useUserStore } from './user'

interface CartItem {
  id: number
  title: string
  image: string
  price: number
  oldPrice: number
  quantity: number
  selected: boolean
  store: {
    name: string
    id: string
  }
}

interface CartState {
  items: CartItem[]
  totalItems: number
  userCarts: Record<string, { items: CartItem[], totalItems: number }>
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    totalItems: 0,
    userCarts: {}
  }),
  
  getters: {
    cartTotal: (state) => {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn) return 0
      
      return state.items.reduce((total, item) => {
        if (item.selected) {
          return total + (item.price * item.quantity)
        }
        return total
      }, 0)
    },
    
    selectedItems: (state) => {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn) return []
      
      return state.items.filter(item => item.selected)
    },

    displayTotalItems(): number {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn) return 0
      
      return this.totalItems
    }
  },
  
  actions: {
    // Kullanıcının sepetini kaydet
    saveUserCart() {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn || !userStore.currentUser) return
      
      this.userCarts[userStore.currentUser.email] = {
        items: [...this.items],
        totalItems: this.totalItems
      }
    },

    // Kullanıcının sepetini yükle
    loadUserCart() {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn || !userStore.currentUser) return
      
      const userCart = this.userCarts[userStore.currentUser.email]
      if (userCart) {
        this.items = [...userCart.items]
        this.totalItems = userCart.totalItems
      } else {
        this.items = []
        this.totalItems = 0
      }
    },

    addToCart(product: any) {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn) return
      
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          oldPrice: product.oldPrice,
          quantity: 1,
          selected: true,
          store: {
            name: product.store?.name || 'AliExpress Store',
            id: product.store?.id || '1'
          }
        })
      }
      
      this.totalItems++
      this.saveUserCart() // Sepeti güncellediğimizde kaydedelim
    },
    
    removeFromCart(productId: number) {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn) return
      
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        const item = this.items[index]
        this.totalItems -= item.quantity
        this.items.splice(index, 1)
        this.saveUserCart() // Sepeti güncellediğimizde kaydedelim
      }
    },
    
    updateQuantity(productId: number, quantity: number) {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn) return
      
      const item = this.items.find(item => item.id === productId)
      if (item) {
        const diff = quantity - item.quantity
        item.quantity = quantity
        this.totalItems += diff
        this.saveUserCart() // Sepeti güncellediğimizde kaydedelim
      }
    },
    
    toggleSelected(productId: number) {
      const userStore = useUserStore()
      if (!userStore.isLoggedIn) return
      
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.selected = !item.selected
        this.saveUserCart() // Sepeti güncellediğimizde kaydedelim
      }
    },
    
    clearCart() {
      this.items = []
      this.totalItems = 0
      
      const userStore = useUserStore()
      if (userStore.isLoggedIn && userStore.currentUser) {
        // Kullanıcının sepetini tamamen silmek istiyorsak
        delete this.userCarts[userStore.currentUser.email]
      }
    }
  }
}) 