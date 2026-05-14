'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {/* TODO: replace /images/hero/hero-bg.jpg with a real hero image (recommended: 1920x1080px, JPG or WebP).
          Place the file at public/images/hero/hero-bg.jpg */}
      <Image
        src="/images/hero/hero-bg-placeholder.svg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-md bg-[#F0A500] hover:bg-[#D4920A] text-[#1A1A2E] font-semibold px-8 py-3 text-base transition-colors duration-200"
          >
            {primaryCta.label}
          </Link>

          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-md border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-base transition-colors duration-200"
          >
            {secondaryCta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
