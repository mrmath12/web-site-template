'use client'

import { FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Certification } from '@/types/certification'

interface CertificacoesGridProps {
  certifications: Certification[]
}

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

export function CertificacoesGrid({ certifications }: CertificacoesGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {certifications.map((cert) => (
        <motion.div
          key={cert.id}
          variants={itemVariants}
          className="flex flex-col items-center text-center bg-white rounded-xl p-8 shadow-md"
        >
          <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#1E6FA8]/10">
            <FileText className="w-7 h-7 text-[#1E6FA8]" strokeWidth={1.75} />
          </div>

          <h3 className="font-heading font-semibold text-[#0A2342] text-base mb-4 leading-snug">
            {cert.name}
          </h3>

          {cert.pdfUrl ? (
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#1E6FA8] hover:bg-[#155a8a] text-white text-sm font-semibold px-5 py-2 transition-colors duration-200 mt-auto"
            >
              View
            </a>
          ) : (
            <span className="inline-block rounded-full bg-[#6B7280]/15 text-[#6B7280] text-xs font-medium px-4 py-1.5 mt-auto">
              Coming Soon
            </span>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
