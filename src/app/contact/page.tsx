import type { Metadata } from 'next'
import { MessageCircle, Mail, Phone, Clock, MapPin } from 'lucide-react'
import { HeroInterno } from '@/components/sections/HeroInterno'
import { MapEmbed } from '@/components/sections/MapEmbed'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.name}. We are here to help.`,
  openGraph: { locale: 'pt_BR', images: [{ url: siteConfig.meta.ogImage }] },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.addressStreet,
    addressLocality: siteConfig.contact.addressLocality,
    addressRegion: siteConfig.contact.addressRegion,
    addressCountry: siteConfig.contact.addressCountry,
  },
  openingHours: siteConfig.contact.hoursJsonLd,
}

const contactCards = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    label: 'Send a message',
    href: `${siteConfig.contact.whatsapp.url}?text=${encodeURIComponent(siteConfig.contact.whatsapp.greeting)}`,
    external: true,
  },
  {
    icon: Mail,
    title: 'Email',
    label: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
  },
  {
    icon: Phone,
    title: 'Phone',
    label: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
    external: false,
  },
]

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main>
        <HeroInterno title="Contact" subtitle="Get in touch with our team" />

        {/* Contact Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {contactCards.map(({ icon: Icon, title, label, href, external }) => (
                <a
                  key={title}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex flex-col items-center text-center bg-[#F5F7FA] rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-200 group"
                >
                  <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#F0A500]/10 group-hover:bg-[#F0A500]/20 transition-colors duration-200">
                    <Icon className="w-7 h-7 text-[#F0A500]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading font-semibold text-[#0A2342] text-lg mb-2">
                    {title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm break-all">{label}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Hours & Address */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center text-center">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#1E6FA8]/10">
                  <Clock className="w-6 h-6 text-[#1E6FA8]" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-semibold text-[#0A2342] text-lg mb-2">
                  Business Hours
                </h3>
                <p className="font-sans text-gray-600">{siteConfig.contact.hours}</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center text-center">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#1E6FA8]/10">
                  <MapPin className="w-6 h-6 text-[#1E6FA8]" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-semibold text-[#0A2342] text-lg mb-2">
                  Address
                </h3>
                <p className="font-sans text-gray-600">{siteConfig.contact.address}</p>
              </div>
            </div>
          </div>
        </section>

        <MapEmbed title="Our Location" />
      </main>
    </>
  )
}
