import { Brain, Shield, Zap, Users, Award, Heart, CheckCircle, Scan, X } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About - CalQulate",
  description: "Learn about CalQulate's mission to make nutrition information accessible through AI technology.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description:
        "Leveraging cutting-edge machine learning and computer vision to deliver unmatched accuracy in nutrition analysis.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Privacy by Design",
      description:
        "Your data security is paramount. We process images in real-time without storing any personal information.",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Advanced optimization ensures you get comprehensive nutrition insights in under 2 seconds.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description:
        "Every feature is designed with real users in mind, making nutrition analysis accessible to everyone.",
      color: "from-blue-500 to-indigo-500",
    },
  ]

  const features = [
    "Advanced OCR technology for text extraction",
    "Machine learning models trained on millions of labels",
    "Natural language processing for ingredient analysis",
    "Real-time data validation and error correction",
    "Cross-platform compatibility and optimization",
    "Continuous learning and model improvements",
  ]

  const stats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "50K+", label: "Labels Processed" },
    { number: "2s", label: "Average Processing Time" },
    { number: "24/7", label: "Availability" },
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/20">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-secondary-700">Made with passion for better health</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-8">About CalQulate</h1>
            <p className="text-xl lg:text-2xl text-secondary-600 leading-relaxed">
              Empowering healthier decisions through intelligent food analysis and cutting-edge AI technology. We're on
              a mission to make nutrition information accessible, accurate, and actionable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Mission</h2>
              <p className="text-xl text-secondary-600 leading-relaxed mb-8">
                We believe that nutrition should be <strong>transparent, accessible, and actionable</strong>. CalQulate
                was created to bridge the gap between complex nutrition science and everyday food choices, democratizing
                nutrition knowledge through cutting-edge technology.
              </p>
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-secondary-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Our Core Values</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The principles that guide everything we do at CalQulate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="card group hover:scale-105 transition-all duration-500">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">{value.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">How CalQulate Works</h2>
                <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                  Our advanced AI system combines multiple cutting-edge technologies to deliver unparalleled accuracy in
                  nutrition analysis. Here's what powers CalQulate:
                </p>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0" />
                      <span className="text-secondary-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="card bg-gradient-to-br from-primary-500 to-accent-500 text-white p-12 text-center">
                  <Brain className="w-20 h-20 mx-auto mb-6 opacity-90" />
                  <h3 className="text-3xl font-bold mb-4">AI-Powered Analysis</h3>
                  <p className="text-primary-100 text-lg leading-relaxed">
                    Our neural networks process millions of data points to extract accurate nutrition information from
                    any food label in seconds.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Zap className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Privacy-First Commitment</h2>
            <p className="text-xl text-secondary-300 mb-12 leading-relaxed">
              Your privacy is our top priority. We've built CalQulate with privacy by design, ensuring your data remains
              secure and private at all times.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">No Storage</h4>
                <p className="text-secondary-300">Images processed and immediately deleted</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Encrypted</h4>
                <p className="text-secondary-300">All data transmission secured with HTTPS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Anonymous</h4>
                <p className="text-secondary-300">No personal data collection required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto">
            Join thousands of health-conscious individuals who trust CalQulate for accurate, instant nutrition analysis.
            Experience the future of food label scanning today.
          </p>
          <Link href="/upload" className="btn-primary text-xl px-10 py-5 shadow-2xl hover:shadow-3xl">
            <Scan className="w-6 h-6 mr-4" />
            Start Scanning Labels
          </Link>
        </div>
      </section>
    </div>
  )
}
