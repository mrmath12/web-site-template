import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { Diferenciais } from '@/components/sections/Diferenciais'
import { FeaturedGrid } from '@/components/sections/FeaturedGrid'
import { getFeaturedProducts } from '@/lib/products'
import { getFeaturedServices } from '@/lib/services'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    images: [{ url: siteConfig.meta.ogImage }],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.tagline,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.contact.addressLocality,
    addressRegion: siteConfig.contact.addressRegion,
    addressCountry: siteConfig.contact.addressCountry,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: siteConfig.contact.email,
  },
}

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const featuredServices = getFeaturedServices()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>
        {/* Hero */}
        <Hero
          title={siteConfig.tagline}
          subtitle={siteConfig.description}
          primaryCta={{ label: 'View Products', href: '/products' }}
          secondaryCta={{ label: 'Contact Us', href: '/contact' }}
        />

        {/* Differentials */}
        <div style={{ backgroundColor: '#F5F7FA' }}>
          <Diferenciais />
        </div>

        {/* About (summary) */}
        <section className="py-20 bg-white" aria-label={`About ${siteConfig.name}`}>
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342] mb-6">
              About {siteConfig.name}
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
              {siteConfig.description}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border-2 border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white font-semibold px-8 py-3 text-base transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <div style={{ backgroundColor: '#F5F7FA' }}>
          <FeaturedGrid
            title="Featured Products"
            items={featuredProducts}
            basePath="/products"
            viewAllHref="/products"
          />
        </div>

        {/* Featured Services */}
        <FeaturedGrid
          title="Featured Services"
          items={featuredServices}
          basePath="/services"
          viewAllHref="/services"
        />

        {/* YouTubeEmbed — hidden in v1 (video to be provided by the client)
        <section className="py-20">
          <YouTubeEmbed youtubeId="REPLACE_WITH_YOUTUBE_ID" title={`Welcome to ${siteConfig.name}`} />
        </section>
        */}
      </main>
    </>
  )
}
