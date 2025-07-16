import Link from "next/link"

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-6 animate-fade-in">
              Smart Food Insights
              <span className="block text-4xl lg:text-6xl mt-2">at Your Fingertips</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
              Snap a photo of any food label and get instant AI-powered nutrition analysis. Make informed choices
              effortlessly with CalQulate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="/upload" className="btn-primary text-lg px-8 py-4">
                📸 Scan Your First Label
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-gray-600">Labels Scanned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2s</div>
                <div className="text-sm text-gray-600">Average Scan Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to better nutrition</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center relative">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  01
                </div>
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Capture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Take a clear photo of any food label or nutrition facts panel
                </p>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
              </div>

              <div className="text-center relative">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  02
                </div>
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Analyze</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI instantly processes and extracts all nutrition information
                </p>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
              </div>

              <div className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  03
                </div>
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Understand</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get clear insights and recommendations for healthier choices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CalQulate?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI technology meets simple, intuitive design for the ultimate nutrition experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Get nutrition insights in seconds with our advanced AI processing engine.</p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Highly Accurate</h3>
              <p className="text-gray-600">
                Precise extraction of calories, macros, vitamins, and allergen information.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">Your images are processed securely and never stored on our servers.</p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Optimized</h3>
              <p className="text-gray-600">Perfect experience across all devices - phone, tablet, or desktop.</p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Analysis</h3>
              <p className="text-gray-600">Get personalized recommendations based on your nutrition data.</p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Free</h3>
              <p className="text-gray-600">Core features remain free forever. No hidden costs or subscriptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Make Smarter Food Choices?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already making healthier decisions with CalQulate.
          </p>
          <Link
            href="/upload"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Start Scanning Now →
          </Link>
        </div>
      </section>
    </div>
  )
}
