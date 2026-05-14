import type { Metadata } from 'next'
import { HeroInterno } from '@/components/sections/HeroInterno'
import { CatalogGrid } from '@/components/catalog/CatalogGrid'
import { getAllProducts } from '@/lib/products'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Products',
  description: '[Describe your full product catalog and what industries or sectors you serve.]',
  openGraph: { images: [{ url: siteConfig.meta.ogImage }] },
}

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <>
      <HeroInterno
        title="Products"
        subtitle="[Brief tagline for your products page — what you offer and who it is for]"
      />

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          {/* CatalogFilter desativado na v1 */}
          <CatalogGrid items={products} basePath="/products" />
        </div>
      </section>
    </>
  )
}
