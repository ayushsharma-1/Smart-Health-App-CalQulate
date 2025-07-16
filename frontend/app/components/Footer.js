import Link from "next/link"
import { Scan, Mail, Phone, MapPin, Twitter, Linkedin, Github, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Scan Labels", href: "/upload", icon: Scan },
        { label: "Features", href: "/features" },
        { label: "How it Works", href: "/about" },
        { label: "API Access", href: "/api" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact Us", href: "/contact", icon: Mail },
        { label: "Status", href: "/status" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "GDPR", href: "/gdpr" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
      </div>

      <div className="relative z-10">
        <div className="container-custom section-padding">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Scan className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-white">CalQulate</span>
              </Link>

              <p className="text-secondary-300 text-lg leading-relaxed mb-8 max-w-md">
                Professional AI-powered food label scanner providing instant, accurate nutrition insights for healthier
                lifestyle choices.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>support@calqulate.com</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-white mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => {
                    const Icon = link.icon
                    return (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors duration-300 group"
                        >
                          {Icon && <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />}
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-white mb-3">Stay Updated</h3>
              <p className="text-secondary-300 mb-6">
                Get the latest updates on new features, nutrition insights, and health tips delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-secondary-400 focus:border-primary-400 focus:outline-none transition-all duration-300"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="flex items-center space-x-2 text-secondary-400 mb-4 md:mb-0">
              <span>© {currentYear} CalQulate. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>in San Francisco</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-secondary-400 hover:text-primary-400 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
