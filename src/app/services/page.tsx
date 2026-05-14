import type { Metadata } from 'next'
import { HeroInterno } from '@/components/sections/HeroInterno'
import { CatalogGrid } from '@/components/catalog/CatalogGrid'
import { getAllServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Soluções completas de manutenção, inspeção e logística para o setor offshore.',
  openGraph: { images: [{ url: '/og?type=generic' }] },
}

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <>
      <HeroInterno
        title="Services"
        subtitle="Soluções completas de manutenção, inspeção e logística para o setor offshore"
      />

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          {/* CatalogFilter desativado na v1 */}
          <CatalogGrid items={services} basePath="/services" />
        </div>
      </section>
    </>
  )
}
