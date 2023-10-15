export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: Category
  thumbnail: string
  images: string[]
}

const categories = [
  "fragrances",
  "groceries",
  "home-decoration",
  "laptops",
  "skincare",
  "smartphones",
] as const

export type Category = (typeof categories)[number]
