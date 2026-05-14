import type { Metadata } from 'next'
import { HeroInterno } from '@/components/sections/HeroInterno'
import { CatalogGrid } from '@/components/catalog/CatalogGrid'
import { getAllProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Catálogo completo de produtos [Company Name] para o setor offshore.',
  openGraph: { images: [{ url: '/og?type=generic' }] },
}

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <>
      <HeroInterno
        title="Produtos"
        subtitle="Catálogo completo de equipamentos e soluções para o setor offshore"
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
