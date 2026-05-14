// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// To customize this template for a new client, update the values below.
// All placeholder values wrapped in [brackets] must be replaced before launch.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Company Identity ───────────────────────────────────────────────────────
  name: '[Company Name]',
  tagline: '[Your professional tagline — what your business does in one line]',
  description:
    '[Brief description of your business, the services you offer, and who you serve.]',
  url: 'https://yourdomain.com', // TODO: replace with the real domain

  // ── Contact ────────────────────────────────────────────────────────────────
  contact: {
    email: 'contact@yourdomain.com',       // TODO: replace with real contact email
    emailSales: 'sales@yourdomain.com',    // TODO: replace with real sales email
    phone: '+1 (000) 000-0000',            // TODO: replace with real phone number
    phoneHref: 'tel:+10000000000',         // TODO: replace with real phone href
    whatsapp: {
      number: '10000000000',               // TODO: replace with real WhatsApp number (country code + digits)
      url: 'https://wa.me/10000000000',    // TODO: replace with real WhatsApp link
      greeting:
        'Hello! I came from your website and would like more information.', // TODO: customize greeting
    },
    address: '[Your Street Address, City, State/Country]', // TODO: replace with real formatted address
    addressStreet: '[Street Address]',      // TODO: replace with real street address
    addressLocality: '[City]',              // TODO: replace with real city
    addressRegion: '[State/Region]',        // TODO: replace with real state or region
    addressCountry: '[XX]',                 // TODO: replace with 2-letter country code (e.g. US, BR)
    hours: 'Monday–Friday, 9am–5pm',       // TODO: replace with real business hours
    hoursJsonLd: 'Mo-Fr 09:00-17:00',      // TODO: replace in JSON-LD format (e.g. 'Mo-Fr 08:00-18:00')
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    linkedin: '#',  // TODO: replace with real LinkedIn URL
    instagram: '#', // TODO: replace with real Instagram URL
    youtube: '#',   // TODO: replace with real YouTube channel URL
  },

  // ── SEO & Open Graph ───────────────────────────────────────────────────────
  meta: {
    ogImage: '/og?type=generic',          // default OG image — update after launch if needed
    keywords: ['[keyword 1]', '[keyword 2]', '[keyword 3]'], // TODO: replace with real SEO keywords
  },
} as const
