import data from '@/data/certifications.json'
import type { Certification } from '@/types/certification'

export function getAllCertifications(): Certification[] {
  return data as Certification[]
}
