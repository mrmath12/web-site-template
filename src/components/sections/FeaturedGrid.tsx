'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CatalogCard } from '@/components/catalog/CatalogCard'

interface FeaturedItem {
  slug: string
  name: string
  shortDescription: string
  image: string
  category: string
}

interface FeaturedGridProps {
  title: string
  items: FeaturedItem[]
  basePath: string
  viewAllHref: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export function FeaturedGrid({ title, items, basePath, viewAllHref }: FeaturedGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342] text-center mb-12"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {items.map((item) => (
            <CatalogCard
              key={item.slug}
              name={item.name}
              shortDescription={item.shortDescription}
              image={item.image}
              href={`${basePath}/${item.slug}`}
              badge={item.category}
            />
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href={viewAllHref}
            className="inline-flex items-center justify-center rounded-md border-2 border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white font-semibold px-8 py-3 text-base transition-colors duration-200"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
