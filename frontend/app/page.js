import Link from "next/link"
import {
  Scan,
  Zap,
  Shield,
  Smartphone,
  Brain,
  Star,
  Users,
  ArrowRight,
  CheckCircle,
  Camera,
  BarChart3,
  Lightbulb,
} from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Analysis",
      description: "Get comprehensive nutrition insights in under 2 seconds with our advanced AI processing engine.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms trained on millions of food labels for unmatched accuracy.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your images are processed securely and never stored. Complete privacy guaranteed.",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless experience across all devices with responsive design and native mobile support.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Star,
      title: "99.9% Accuracy",
      description: "Industry-leading precision in extracting calories, macros, vitamins, and allergen information.",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join over 50,000 users who rely on CalQulate for their daily nutrition decisions.",
      color: "from-pink-400 to-red-500",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Capture",
      description: "Take a clear photo of any food label or nutrition facts panel using your device camera",
      icon: Camera,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Analyze",
      description: "Our advanced AI instantly processes and extracts all nutrition information with precision",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Understand",
      description: "Get clear insights, health recommendations, and actionable advice for better choices",
      icon: Lightbulb,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const stats = [
    { number: "50K+", label: "Labels Scanned", icon: Scan },
    { number: "99.9%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "2s", label: "Average Scan Time", icon: Zap },
    { number: "24/7", label: "Available", icon: Shield },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding pt-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/20 animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-secondary-700">AI-Powered • Real-time • Privacy-First</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold mb-8 animate-fade-in">
              <span className="gradient-text">Smart Food Insights</span>
              <br />
              <span className="text-secondary-800">at Your Fingertips</span>
            </h1>

            <p className="text-xl lg:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Transform any food label into comprehensive nutrition insights with our advanced AI. Make informed,
              healthier choices effortlessly with professional-grade analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up">
              <Link href="/upload" className="btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-3xl">
                <Scan className="w-5 h-5 mr-3" />
                Start Scanning Now
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                <Brain className="w-5 h-5 mr-3" />
                Learn How It Works
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-secondary-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">How It Works</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Three simple steps to unlock comprehensive nutrition insights from any food label
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative group">
                    <div className="card text-center group-hover:scale-105 transition-all duration-500">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl mb-6 shadow-xl text-white font-bold text-2xl`}
                      >
                        {step.step}
                      </div>
                      <Icon className="w-12 h-12 text-secondary-400 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-secondary-800 mb-4">{step.title}</h3>
                      <p className="text-secondary-600 leading-relaxed">{step.description}</p>
                    </div>

                    {index < 2 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary-300 to-accent-300"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">Why Choose CalQulate?</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Advanced AI technology meets intuitive design for the ultimate nutrition analysis experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card group hover:scale-105 transition-all duration-500">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">{feature.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/30 to-accent-500/30"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Make Smarter
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Food Choices?
            </span>
          </h2>
          <p className="text-xl text-secondary-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of health-conscious individuals who trust CalQulate for accurate, instant nutrition analysis.
            Start your journey to better health today.
          </p>
          <Link
            href="/upload"
            className="inline-flex items-center bg-white text-secondary-900 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
          >
            <Scan className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform duration-300" />
            Start Scanning Now
            <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  )
}
