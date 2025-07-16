import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer  from "./components/Footer"
import { Providers } from "./components/Providers"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "CalQulate - Smart Food Label Scanner",
  description: "AI-powered nutrition analysis from food labels",
  keywords: "nutrition, food label, scanner, AI, health, wellness",
  authors: [{ name: "Ayush Sharma", url: "https://calqulate.ayushsharma.site" }],
  creator: "CalQulate Team",
  openGraph: {
    title: "CalQulate - Smart Food Label Scanner",
    description: "AI-powered nutrition analysis from food labels",
    url: "https://calqulate.ayushsharma.site",
    siteName: "CalQulate",
  }, 
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 antialiased`}>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
