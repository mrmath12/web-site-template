'use client'

import Link from 'next/link'

export default function Error({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main className="bg-[#0A2342] min-h-screen flex items-center justify-center px-4">
      <div className="text-center py-40">
        <h1 className="font-heading text-5xl font-bold text-white mb-4">
          Something Went Wrong
        </h1>
        <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
