'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CatalogCardProps {
  name: string
  shortDescription: string
  image: string
  href: string
  badge?: string
}

export function CatalogCard({ name, shortDescription, image, href, badge }: CatalogCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Image — TODO: replace /images/placeholder.svg with a real product/service image (recommended: 16:9 ratio) */}
      <div className="relative w-full aspect-video shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {badge && (
          <span className="inline-block self-start rounded-full bg-[#1E6FA8] px-3 py-0.5 text-xs font-medium text-white leading-tight hidden">
            {badge}
          </span>
        )}
        <h3 className="font-heading font-bold text-[#0A2342] text-base leading-snug line-clamp-2">
          {name}
        </h3>

        <p className="text-text-muted text-sm leading-relaxed line-clamp-3 flex-1">
          {shortDescription}
        </p>

        <Link
          href={href}
          className="mt-auto inline-flex items-center justify-center rounded-md bg-[#F0A500] hover:bg-[#D4920A] text-white text-sm font-semibold px-4 py-2 transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
