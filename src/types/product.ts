export type ProductCategory =
  | 'manutencao'
  | 'reparacao'
  | 'fornecimento'
  | 'infraestrutura'
  | 'outros'

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  shortDescription: string
  fullDescription: string
  specs: ProductSpec[]
  applications: string[]
  image: string
  youtubeId?: string
  whatsappMessage: string
  featured: boolean
}
