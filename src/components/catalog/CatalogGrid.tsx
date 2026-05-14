'use client'

import { motion } from 'framer-motion'
import { CatalogCard } from './CatalogCard'

interface CatalogGridProps {
  items: Array<{
    slug: string
    name: string
    shortDescription: string
    image: string
    category: string
  }>
  basePath: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export function CatalogGrid({ items, basePath }: CatalogGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
  )
}
