import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "CalQulate - AI Food Label Scanner",
  description:
    "Professional AI-powered nutrition analysis from food labels. Get instant, accurate insights for healthier choices.",
  keywords: ["food scanner", "nutrition analysis", "AI", "health", "calories", "diet"],
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
