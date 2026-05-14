export type ServiceCategory =
  | 'manutencao'
  | 'reparacao'
  | 'inspecao'
  | 'logistica'
  | 'outros'

export interface ServiceSpec {
  label: string
  value: string
}

export interface Service {
  id: string
  slug: string
  name: string
  category: ServiceCategory
  shortDescription: string
  fullDescription: string
  specs: ServiceSpec[]
  applications: string[]
  image: string
  youtubeId?: string
  whatsappMessage: string
  featured: boolean
}
