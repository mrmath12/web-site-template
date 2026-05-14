'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
} from '@/components/ui/sheet'
import { siteConfig } from '@/config/site'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'About' },
  { href: '/localizacao', label: 'Location' },
  { href: '/certificacoes', label: 'Certifications' },
  { href: '/produtos', label: 'Products' },
  { href: '/servicos', label: 'Services' },
  { href: '/contato', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A2342] shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo — TODO: replace /images/logo/logo-white.svg with the client's actual logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo-white.svg"
            alt={siteConfig.name}
            width={120}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === href
                    ? 'text-[#F0A500]'
                    : 'text-white hover:text-[#F0A500]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="p-2 text-white"
          >
            <Menu size={24} />
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
              side="right"
              className="border-none bg-[#0A2342]"
              showCloseButton={true}
            >
              <nav className="flex flex-col gap-2 pt-8">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`px-2 py-2 text-base font-medium transition-colors duration-200 ${
                      pathname === href
                        ? 'text-[#F0A500]'
                        : 'text-white hover:text-[#F0A500]'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
