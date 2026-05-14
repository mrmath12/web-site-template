import type { Metadata } from 'next'
import Image from 'next/image'
import { HeroInterno } from '@/components/sections/HeroInterno'
import { StatsBlock } from '@/components/sections/StatsBlock'
import { MapEmbed } from '@/components/sections/MapEmbed'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Location',
  description: `Find ${siteConfig.name} — our infrastructure and location details.`,
  openGraph: { locale: 'pt_BR', images: [{ url: siteConfig.meta.ogImage }] },
}

// TODO: replace these rows with your company's real facility and infrastructure data
const infraItems = [
  { label: '[Facility Spec 1]', value: '[Value 1]' },
  { label: '[Facility Spec 2]', value: '[Value 2]' },
  { label: '[Facility Spec 3]', value: '[Value 3]' },
  { label: '[Facility Spec 4]', value: '[Value 4]' },
  { label: '[Facility Spec 5]', value: '[Value 5]' },
  { label: '[Facility Spec 6]', value: '[Value 6]' },
  { label: '[Facility Spec 7]', value: '[Value 7]' },
  { label: '[Facility Spec 8]', value: '[Value 8]' },
]

export default function LocalizacaoPage() {
  return (
    <main>
      <HeroInterno title="Location" subtitle={siteConfig.contact.address} />

      <StatsBlock />

      {/* Infrastructure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342] mb-12 text-center">
            Our Infrastructure
          </h2>
          {/* TODO: confirm all values with the client before launch */}
          <div className="max-w-3xl mx-auto overflow-hidden rounded-xl shadow-md border border-gray-100">
            <table className="w-full font-sans text-sm">
              <tbody>
                {infraItems.map((item, idx) => (
                  <tr
                    key={item.label}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]'}
                  >
                    <td className="px-6 py-4 font-semibold text-[#0A2342] w-1/2">{item.label}</td>
                    <td className="px-6 py-4 text-gray-600">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Facility / Aerial Photos */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342] mb-12 text-center">
            Aerial View
          </h2>
          {/* TODO: replace placeholder images with real aerial or facility photos (recommended: 4:3 ratio, min 800x600px) */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/facility/facility-placeholder.svg"
                  alt={`Facility view ${i}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapEmbed title="How to Find Us" />
    </main>
  )
}
