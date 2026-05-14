'use client'

import { MapPin, Building2, Wrench, Package } from 'lucide-react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface Diferencial {
  icon: LucideIcon
  title: string
  desc: string
}

// TODO: replace with your company's real differentials — what sets you apart from competitors
const diferenciais: Diferencial[] = [
  {
    icon: MapPin,
    title: '[Differential Title 1]',
    desc: '[Brief description of this differential — e.g., strategic location, market access, or proximity to clients.]',
  },
  {
    icon: Building2,
    title: '[Differential Title 2]',
    desc: '[Brief description of this differential — e.g., infrastructure, capacity, facilities, or scale.]',
  },
  {
    icon: Wrench,
    title: '[Differential Title 3]',
    desc: '[Brief description of this differential — e.g., technical expertise, certifications, or specialized team.]',
  },
  {
    icon: Package,
    title: '[Differential Title 4]',
    desc: '[Brief description of this differential — e.g., product portfolio, integrated solutions, or delivery speed.]',
  },
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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Diferenciais() {
  return (
    <section className="bg-[#F5F7FA] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0A2342]">
            Why Choose {siteConfig.name}?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {diferenciais.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#F0A500]/10">
                  <Icon className="w-7 h-7 text-[#F0A500]" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-bold text-[#0A2342] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
