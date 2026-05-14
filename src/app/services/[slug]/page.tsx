import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/services'
import { SpecTable } from '@/components/catalog/SpecTable'
import { YouTubeEmbed } from '@/components/sections/YouTubeEmbed'
import { siteConfig } from '@/config/site'

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: 'Service not found' }
  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      images: [
        {
          url: `/og?type=item&name=${encodeURIComponent(service.name)}&category=${service.category}`,
        },
      ],
    },
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(service.whatsappMessage)}`

  return (
    <main className="pt-28 pb-20 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm text-[#0A2342] hover:text-[#F0A500] transition-colors mb-8"
        >
          ← Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full rounded-lg shadow-md overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-[#F0A500] text-[#0A2342]">
              {service.category}
            </span>

            <h1 className="font-heading font-bold text-3xl text-[#0A2342]">{service.name}</h1>

            <p className="text-text-muted leading-relaxed">{service.fullDescription}</p>

            <SpecTable specs={service.specs} />

            <div>
              <h2 className="font-heading font-semibold text-lg text-[#0A2342] mb-3">
                Applications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-text-muted">
                {service.applications.map((app) => (
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

            {service.youtubeId && <YouTubeEmbed youtubeId={service.youtubeId} />}
          </div>
        </div>
      </div>
    </main>
  )
}
