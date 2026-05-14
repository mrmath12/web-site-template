import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-[#0A2342] min-h-screen flex items-center justify-center px-4">
      <div className="text-center py-40">
        <h1 className="font-heading text-5xl font-bold text-white mb-4">
          404 — Page Not Found
        </h1>
        <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
