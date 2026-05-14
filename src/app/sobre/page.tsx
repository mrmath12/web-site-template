import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Star } from 'lucide-react'
import { HeroInterno } from '@/components/sections/HeroInterno'
import { getAllTeamMembers } from '@/lib/team'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about the history, mission, and team of ${siteConfig.name}.`,
  openGraph: { images: [{ url: siteConfig.meta.ogImage }] },
}

// TODO: replace these with your company's real mission, vision, and values
const mvv = [
  {
    icon: Target,
    title: 'Mission',
    content:
      '[Your mission statement — what you exist to do and for whom. Keep it concise and customer-focused.]',
  },
  {
    icon: Eye,
    title: 'Vision',
    content:
      '[Your vision statement — where you aspire to be in the future. Make it ambitious but realistic.]',
  },
  {
    icon: Star,
    title: 'Values',
    list: [
      '[Value 1]',
      '[Value 2]',
      '[Value 3]',
      '[Value 4]',
      '[Value 5]',
      '[Value 6]',
    ],
  },
]

export default function SobrePage() {
  const team = getAllTeamMembers()

  return (
    <main>
      <HeroInterno title="About Us" />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342] mb-8 text-center">
            Our Story
          </h2>
          {/* TODO: replace the paragraphs below with the real company history */}
          <div className="max-w-3xl mx-auto space-y-6 font-sans text-lg text-gray-600 leading-relaxed">
            <p>
              {siteConfig.name} was founded with a vision to deliver high-quality [your services]
              to businesses across [your region]. Since our founding, we have grown into a trusted
              partner for organizations of all sizes, offering comprehensive solutions tailored to
              their specific needs.
            </p>
            <p>
              From day one, we invested in [key infrastructure or capability], positioning
              ourselves to serve our clients with speed and reliability. Our [location or
              headquarters] gives us direct access to [your key market or customer base].
            </p>
            <p>
              Over the years, we have expanded our portfolio of products and services, building
              strong partnerships with leading manufacturers and suppliers worldwide. Today,{' '}
              {siteConfig.name} is recognized for its commitment to quality, reliability, and
              technical excellence in every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342] mb-12 text-center">
            Mission, Vision &amp; Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {mvv.map(({ icon: Icon, title, content, list }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center text-center"
              >
                <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#F0A500]/10">
                  <Icon className="w-7 h-7 text-[#F0A500]" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-semibold text-[#0A2342] text-xl mb-4">{title}</h3>
                {content && (
                  <p className="font-sans text-gray-600 leading-relaxed">{content}</p>
                )}
                {list && (
                  <ul className="font-sans text-gray-600 space-y-1">
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342] mb-12 text-center">
            Our Team
          </h2>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 place-items-center">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <div className="relative w-[120px] h-[120px] mb-4">
                  {/* TODO: replace placeholder with real team member photo (recommended: 120x120px, square, JPG/WebP) */}
                  <Image
                    src={member.image || '/images/placeholder.svg'}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="120px"
                  />
                </div>
                <p className="font-heading font-semibold text-[#0A2342] text-base">{member.name}</p>
                <p className="font-sans text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Photos */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342] mb-12 text-center">
            Our Facilities
          </h2>
          {/* TODO: replace placeholder images with real facility photos (recommended: 4:3 ratio, min 800x600px) */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/placeholder.svg"
                  alt={`Facility ${i}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
