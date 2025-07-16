import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
          wrong URL.
        </p>
        <div className="space-y-4">
          <Link href="/" className="btn-primary inline-block">
            🏠 Go Home
          </Link>
          <div className="text-sm text-gray-500">
            <Link href="/upload" className="text-black hover:underline">
              Try scanning a food label
            </Link>
            {" or "}
            <Link href="/contact" className="text-black hover:underline">
              contact support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
