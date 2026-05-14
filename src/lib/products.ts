import productsData from '@/data/products.json'
import type { Product } from '@/types/product'

const products: Product[] = productsData as Product[]

export function getAllProducts(): Product[] {
  return products
}

export function getFeaturedProducts(limit = 3): Product[] {
  return products.filter((p) => p.featured).slice(0, limit)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}
