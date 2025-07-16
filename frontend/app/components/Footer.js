import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Upload", href: "/upload" },
      { label: "API", href: "/api" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Support", href: "/support" },
      { label: "Status", href: "/status" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: process.env.NEXT_PUBLIC_TWITTER_URL || "#", label: "Twitter" },
    { icon: Linkedin, href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#", label: "LinkedIn" },
    { icon: Github, href: process.env.NEXT_PUBLIC_GITHUB_URL || "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              CalQulate
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered food label scanner providing instant nutrition insights for healthier choices.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div>📧 support@calqulate.com</div>
              <div>📞 +1 (555) 123-4567</div>
              <div>📍 San Francisco, CA</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/upload" className="text-gray-400 hover:text-white transition-colors">
                  Upload
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © {currentYear} CalQulate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
