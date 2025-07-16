"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Scan, Home, Info, HelpCircle, Mail } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/upload", label: "Scan", icon: Scan },
    { href: "/about", label: "About", icon: Info },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20" : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Scan className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">CalQulate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary-100 text-primary-700 shadow-md"
                      : "text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/upload" className="btn-primary">
              <Scan className="w-4 h-4 mr-2" />
              Start Scanning
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-secondary-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-secondary-700" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20 animate-slide-down">
            <div className="container-custom py-6">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary-100 text-primary-700"
                          : "text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
                <div className="pt-4 border-t border-secondary-200">
                  <Link
                    href="/upload"
                    className="btn-primary w-full justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Scan className="w-4 h-4 mr-2" />
                    Start Scanning
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
