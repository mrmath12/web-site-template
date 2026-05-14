import type { Metadata } from 'next'
import { HeroInterno } from '@/components/sections/HeroInterno'
import { CertificacoesGrid } from '@/components/sections/CertificacoesGrid'
import { getAllCertifications } from '@/lib/certifications'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Certifications',
  description: `Certifications and compliance standards maintained by ${siteConfig.name}.`,
  openGraph: { locale: 'pt_BR', images: [{ url: siteConfig.meta.ogImage }] },
}

export default function CertificacoesPage() {
  const certifications = getAllCertifications()

  return (
    <main>
      <HeroInterno
        title="Certifications"
        subtitle="Our commitment to quality and compliance"
      />

      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CertificacoesGrid certifications={certifications} />
        </div>
      </section>
    </main>
  )
}
