'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTABannerProps {
  title: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTABanner({ title, primaryCta, secondaryCta }: CTABannerProps) {
  return (
    <section className="bg-[#0A2342] py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-3xl md:text-4xl text-white mb-10"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-md bg-[#F0A500] hover:bg-[#D4920A] text-[#1A1A2E] font-semibold px-8 py-3 text-base transition-colors duration-200"
          >
            {primaryCta.label}
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-base transition-colors duration-200"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
