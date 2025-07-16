"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/upload", label: "Scan Label" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-2xl font-bold gradient-text">
          CalQulate
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                  pathname === item.href ? "text-primary-600 border-b-2 border-primary-600 pb-1" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/upload" className="btn-primary">
            Start Scanning
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
            ></span>
            <span
              className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden">
            <ul className="py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 ${
                      pathname === item.href ? "text-primary-600 bg-primary-50" : "text-gray-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-3">
                <Link
                  href="/upload"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Scanning
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
