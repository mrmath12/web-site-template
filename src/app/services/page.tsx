import type { Metadata } from 'next'
import { HeroInterno } from '@/components/sections/HeroInterno'
import { CatalogGrid } from '@/components/catalog/CatalogGrid'
import { getAllServices } from '@/lib/services'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Services',
  description: '[Describe your complete service offering and what industries or sectors you serve.]',
  openGraph: { images: [{ url: siteConfig.meta.ogImage }] },
}

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <main>
      <HeroInterno
        title="Services"
        subtitle="[Brief tagline for your services page — what you offer and who it is for]"
      />

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          {/* CatalogFilter desativado na v1 */}
          <CatalogGrid items={services} basePath="/services" />
        </div>
      </section>
    </main>
  )
}
