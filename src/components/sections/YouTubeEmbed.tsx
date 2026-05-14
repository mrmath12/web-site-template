// YouTubeEmbed — currently unused (hidden in v1).
// Import and use in a page when a video is available.

interface YouTubeEmbedProps {
  youtubeId: string
  title?: string
}

export function YouTubeEmbed({ youtubeId, title }: YouTubeEmbedProps) {
  if (!youtubeId) return null

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0A2342] text-center mb-8">
            {title}
          </h2>
        )}

        <div className="aspect-video overflow-hidden rounded-xl shadow-md">
          {/* TODO: pass the real YouTube video ID as the youtubeId prop */}
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title ?? '[Company Name] Video'}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
