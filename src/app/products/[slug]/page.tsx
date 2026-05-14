import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import { getAllProductSlugs, getProductBySlug } from '@/lib/products'
import { SpecTable } from '@/components/catalog/SpecTable'
import { YouTubeEmbed } from '@/components/sections/YouTubeEmbed'
import { siteConfig } from '@/config/site'

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Produto não encontrado' }
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: [
        {
          url: `/og?type=item&name=${encodeURIComponent(product.name)}&category=${product.category}`,
        },
      ],
    },
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(product.whatsappMessage)}`

  return (
    <main className="pt-28 pb-20 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm text-[#0A2342] hover:text-[#F0A500] transition-colors mb-8"
        >
          ← Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-[#F0A500] text-[#0A2342]">
              {product.category}
            </span>

            <h1 className="font-heading font-bold text-3xl text-[#0A2342]">{product.name}</h1>

            <p className="text-text-muted leading-relaxed">{product.fullDescription}</p>

            <SpecTable specs={product.specs} />

            <div>
              <h2 className="font-heading font-semibold text-lg text-[#0A2342] mb-3">
                Applications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-text-muted">
                {product.applications.map((app) => (
                  <li key={app}>{app}</li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
            >
              <MessageCircle size={20} />
              Contact via WhatsApp
            </a>

            {product.youtubeId && <YouTubeEmbed youtubeId={product.youtubeId} />}
          </div>
        </div>
      </div>
    </main>
  )
}
