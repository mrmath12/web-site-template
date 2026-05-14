interface MapEmbedProps {
  title?: string
}

export function MapEmbed({ title }: MapEmbedProps) {
  return (
    <section className="py-12 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 max-w-6xl">
        {title && (
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0A2342] text-center mb-8">
            {title}
          </h2>
        )}

        <div className="overflow-hidden rounded-xl shadow-md">
          {/* TODO: replace the src below with a real Google Maps embed URL for your location.
              How to get it: Google Maps → search your address → Share → Embed a map → copy the src URL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zWW91ciBMb2NhdGlvbg!5e0!3m2!1sen!2sus!4v0000000000"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title ?? '[Company Name] — Location'}
          />
        </div>
      </div>
    </section>
  )
}
