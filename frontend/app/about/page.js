export const metadata = {
  title: "About - CalQulate",
  description: "Learn about the mission and technology behind CalQulate.",
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold gradient-text mb-6">About CalQulate</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empowering healthier decisions through intelligent food analysis and cutting-edge AI technology.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-16">
            <div className="card">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is CalQulate?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <strong>CalQulate</strong> is an AI-powered nutrition assistant that revolutionizes how you understand
                food labels. Whether you're shopping at a store, reviewing pantry items, or making meal decisions,
                simply upload a photo and receive a comprehensive breakdown of calories, fats, sugars, vitamins, and
                other essential nutrients.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our advanced machine learning algorithms can process even complex nutrition labels with remarkable
                accuracy, making nutrition information accessible to everyone.
              </p>
            </div>

            <div className="card">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We believe that nutrition should be <strong>transparent, accessible, and actionable</strong>. CalQulate
                was created to bridge the gap between complex nutrition science and everyday food choices.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our goal is to democratize nutrition knowledge by using cutting-edge technology to transform confusing
                food labels into clear, meaningful insights.
              </p>
            </div>

            <div className="card">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🤖 AI-Powered Analysis</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li>• Advanced OCR technology</li>
                    <li>• Machine learning models</li>
                    <li>• Natural language processing</li>
                    <li>• Real-time data validation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Simple Process</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li>• Upload a food label photo</li>
                    <li>• AI extracts nutrition data</li>
                    <li>• Get instant health insights</li>
                    <li>• Receive recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card bg-primary-50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🔐 Privacy Commitment</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Your privacy is our top priority. We never store your photos or personal data. All image processing is
                done in real-time and data is immediately discarded after generating your nutrition report.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚫</div>
                  <h4 className="font-semibold text-gray-900">No Storage</h4>
                  <p className="text-gray-600 text-sm">Images deleted immediately</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="font-semibold text-gray-900">Encrypted</h4>
                  <p className="text-gray-600 text-sm">All data transmission secured</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="font-semibold text-gray-900">Anonymous</h4>
                  <p className="text-gray-600 text-sm">No personal data required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are making smarter food choices with CalQulate.
          </p>
          <a
            href="/upload"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            🚀 Start Scanning Labels
          </a>
        </div>
      </section>
    </div>
  )
}
