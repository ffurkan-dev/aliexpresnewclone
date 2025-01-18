import { auth, db } from './firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const checkUserCredentials = async (email: string, password: string) => {
    try {
      const usersRef = collection(db, 'users')
      const q = query(usersRef, where('email', '==', email), where('password', '==', password))
      const querySnapshot = await getDocs(q)
      
      if (!querySnapshot.empty) {
        // Kullanıcı bulundu
        const userData = querySnapshot.docs[0].data()
        return { success: true, user: userData }
      } else {
        // Kullanıcı bulunamadı
        return { success: false, error: 'Kullanıcı bulunamadı veya şifre hatalı' }
      }
    } catch (error) {
      console.error('Giriş hatası:', error)
      return { success: false, error: 'Giriş yapılırken bir hata oluştu' }
    }
  }

  return {
    provide: {
      auth,
      checkUserCredentials
    }
  }
}) 