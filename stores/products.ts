import { defineStore } from 'pinia'

interface Product {
  id: number
  title: string
  image: string
  price: number
  oldPrice: number
  discount?: number
  rating?: number
  soldCount?: string
  saveAmount?: string
  freeShipping?: boolean
  choice?: boolean
}

export interface Category {
  id: number
  title: string
  subtitle: string
  icon?: string
  timeLeft?: string
  products: Product[]
}

export const useProductStore = defineStore('products', {
  state: () => ({
    recommendedProducts: [
      {
        id: 101,
        title: 'Erkekler koşu yürüyüş spor ayakkabı gü...',
        image: 'https://ae-pic-a1.aliexpress-media.com/kf/S061dff34fbb840e580d7a2ca30869251x.jpg_480x480.jpg_.webp',
        price: 9.28,
        oldPrice: 28.47,
        rating: 4.8,
        soldCount: '500+ satıldı',
        freeShipping: true
      },
      {
        id: 102,
        title: 'Evrensel Cep Telefonu Standı Ayarlanabilir...',
        image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sf5aab0afc5a748f1b11b5054de08729bB.jpg_480x480.jpg_.webp',
        price: 4.33,
        oldPrice: 6.33,
        rating: 4.7,
        soldCount: '3.000+ satıldı',
        choice: true,
        freeShipping: true
      },
      {
        id: 103,
        title: 'Erkek ayakkabıları rahat spor ayakkabı...',
        image: 'https://ae-pic-a1.aliexpress-media.com/kf/S025b332e338b4a23af258f9f12769a663.jpg_480x480.jpg_.webp',
        price: 3.24,
        oldPrice: 8.06,
        rating: 4.9,
        soldCount: '336 satıldı',
        freeShipping: true
      },
      {
        id: 104,
        title: 'Cep Telefonu Tembel Kişi Standı Başucu...',
        image: 'https://ae-pic-a1.aliexpress-media.com/kf/S71285bf4c90547afa61b97dc80378f713.jpg_480x480.jpg_.webp',
        price: 4.99,
        oldPrice: 20.22,
        rating: 4.6,
        soldCount: '44 satıldı',
        freeShipping: true
      },
      {
        id: 105,
        title: 'Erkek vulkanize yürüyüş koşu ayakkabı...',
        image: 'https://ae-pic-a1.aliexpress-media.com/kf/S6f6384ffc774489bb1ac1ca4393c3416W.jpg_480x480.jpg_.webp',
        price: 10.05,
        oldPrice: 23.44,
        rating: 4.8,
        soldCount: '385 satıldı',
        freeShipping: true
      },
      {
        id: 106,
        title: '360 bir cep telefonu tutucu standı taşı...',
        image: 'https://ae-pic-a1.aliexpress-media.com/kf/S9772417ed1ab4f6ca98f6da07f60fb98v.jpg_480x480.jpg_.webp',
        price: 5.45,
        oldPrice: 14.66,
        rating: 4.9,
        soldCount: '20.000+ satıldı',
        freeShipping: true
      }
    ],
    categories: [
      {
        id: 1,
        title: 'Paket teklifler',
        subtitle: '$4.49\'dan 5+ ürün',
        icon: '📦',
        products: [
          {
            id: 1,
            title: 'Seksi Faux deri elbise Backless kulübü par...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/S2bf29be6cd7c48ee950d41af960625a6I.jpg_480x480.jpg_.webp',
            price: 4.46,
            oldPrice: 9.60,
            rating: 4.6,
            soldCount: '1000+ satıldı'
          },
          {
            id: 2,
            title: 'Dolgu olmadan OTAUTAU pamuk...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/S872f63d6fb6c4218aa7e61d9f95e1b0cJ.jpg_480x480.jpg_.webp',
            price: 5.45,
            oldPrice: 12.26,
            rating: 4.4,
            soldCount: '800+ satıldı'
          },
          {
            id: 7,
            title: 'Kadın Yaz Elbisesi Çiçek Desenli...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sf8db2c8c5f4f4a9b862b3310c6f3c3aeB.jpg_480x480.jpg_.webp',
            price: 6.99,
            oldPrice: 15.99,
            rating: 4.7,
            soldCount: '500+ satıldı'
          },
          {
            id: 8,
            title: 'Erkek Spor Ayakkabı Nefes Alabilen...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/Ud6311adaaf1947e284579732aa1b2f65m.jpg_480x480.jpg_.webp',
            price: 8.99,
            oldPrice: 19.99,
            rating: 4.3,
            soldCount: '300+ satıldı'
          }
        ]
      },
      {
        id: 2,
        title: 'Süper Fırsatlar',
        subtitle: 'Süper Fırsatlar',
        icon: '⏰',
        timeLeft: '00:58:49',
        products: [
          {
            id: 3,
            title: 'Bebek kız tulum 6 adet/grup vücut Suit...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/S3941317c818a49568871cafd501232960.jpg_480x480.jpg_.webp',
            price: 12.68,
            oldPrice: 23.05,
            discount: 45
          },
          {
            id: 4,
            title: 'Polestar 2 için özel otomotiv araba...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/S78d47e9f96ba4816a80f36421070f307w.jpg_480x480.jpg_.webp',
            price: 16.98,
            oldPrice: 25.73,
            discount: 34
          },
          {
            id: 9,
            title: 'Akıllı Bileklik Nabız Ölçer Su Geçirmez...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sf584d87adf4d4dd8b80af91b2fadc8ffI.jpg_480x480.jpg_.webp',
            price: 14.99,
            oldPrice: 29.99,
            discount: 50
          },
          {
            id: 10,
            title: 'Bluetooth Kulaklık Gürültü Önleyici...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/S186531711eca4ab5b6d767f18dd60d8ea.jpg_480x480.jpg_.webp',
            price: 24.99,
            oldPrice: 49.99,
            discount: 50
          }
        ]
      },
      {
        id: 3,
        title: 'Big Save',
        subtitle: '500+ Marka',
        icon: '💰',
        products: [
          {
            id: 5,
            title: 'COLMI R06 akıllı yüzük erkek kadın...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sebe9f4382ab140598ed8046424a31499g.jpg_480x480.jpg_.webp',
            price: 16.92,
            oldPrice: 27.60,
            saveAmount: '€20.68'
          },
          {
            id: 6,
            title: 'QIYIDA X99 anakart D4 LGA 2011 3 M2...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/S89845461cbcf4eb5b2b96566ac71894a0.jpg_480x480.jpg_.webp',
            price: 56.48,
            oldPrice: 156.88,
            saveAmount: '€100.40'
          },
          {
            id: 11,
            title: 'Gaming Laptop 15.6" RTX 3060...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/S27fd43c9115943bf9ca2834b44d4fc72C.jpg_480x480.jpg_.webp',
            price: 899.99,
            oldPrice: 1299.99,
            saveAmount: '€400.00'
          },
          {
            id: 12,
            title: '4K Ultra HD Smart TV 55"...',
            image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sda4f129a702442d18cfc69b084d8b538q.jpg_480x480.jpg_.webp',
            price: 449.99,
            oldPrice: 699.99,
            saveAmount: '€250.00'
          }
        ]
      }
    ] as Category[]
  })
}) 