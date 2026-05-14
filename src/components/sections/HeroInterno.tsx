'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroInternoProps {
  title: string
  subtitle?: string
  imageUrl?: string
}

export function HeroInterno({ title, subtitle, imageUrl }: HeroInternoProps) {
  return (
    <section className="relative pt-32 pb-8  md:pt-40 md:pb-8 flex items-center overflow-hidden bg-[#0A2342]">
      {/* Background image (optional) */}
      {imageUrl && (
        <>
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg text-white/70 mt-4 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
