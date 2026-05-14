'use client'

import { motion } from 'framer-motion'

// TODO: replace with your company's real key metrics / statistics
const stats = [
  { value: '[Value 1]', label: '[Metric Label 1]' },
  { value: '[Value 2]', label: '[Metric Label 2]' },
  { value: '[Value 3]', label: '[Metric Label 3]' },
  { value: '[Value 4]', label: '[Metric Label 4]' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function StatsBlock() {
  return (
    <section className="bg-[#0A2342] pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <span className="font-heading font-bold text-3xl md:text-4xl text-[#F0A500] leading-tight mb-2">
                {stat.value}
              </span>
              <span className="font-sans text-sm text-white/70 uppercase tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
