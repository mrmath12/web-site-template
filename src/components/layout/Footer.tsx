import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-4">
        <div className="flex flex-col gap-1 sm:text-center">
          <span className="font-heading text-xl font-bold text-white">
            {siteConfig.name}
          </span>
          <p className="text-sm text-gray-300 mb-2">
            {siteConfig.tagline}
          </p>
          <div className='flex flex-col sm:flex-row gap-0 sm:gap-6 justify-center'>
            <ul className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#F0A500]" />
                {siteConfig.contact.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-[#F0A500]" />
                {siteConfig.contact.phone}
              </li>
            </ul>
            <ul className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="shrink-0 text-[#F0A500]" />
                {/* TODO: replace with real social media URL */}
                <a
                  href={`${siteConfig.contact.whatsapp.url}?text=${encodeURIComponent(siteConfig.contact.whatsapp.greeting)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#F0A500]"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-[#F0A500]" />
                <a
                  href={`mailto:${siteConfig.contact.emailSales}`}
                  className="transition-colors hover:text-[#F0A500]"
                >
                  {siteConfig.contact.emailSales}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
