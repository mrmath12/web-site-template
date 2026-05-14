import servicesData from '@/data/services.json'
import type { Service } from '@/types/service'

const services: Service[] = servicesData as Service[]

export function getAllServices(): Service[] {
  return services
}

export function getFeaturedServices(limit = 3): Service[] {
  return services.filter((s) => s.featured).slice(0, limit)
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
