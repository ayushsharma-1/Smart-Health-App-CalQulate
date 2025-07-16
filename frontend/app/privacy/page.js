export const metadata = {
  title: "Privacy Policy - CalQulate",
  description: "CalQulate privacy policy and data protection information.",
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold gradient-text mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Your privacy is important to us. Learn how we protect your data.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Collection</h2>
              <p className="text-gray-700 mb-4">
                CalQulate is designed with privacy in mind. We do not collect, store, or retain any personal information
                or uploaded images.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Images are processed in real-time and immediately deleted</li>
                <li>• No user accounts or personal data required</li>
                <li>• No tracking cookies or analytics</li>
                <li>• No data sharing with third parties</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Process Images</h2>
              <p className="text-gray-700 mb-4">When you upload an image to CalQulate:</p>
              <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                <li>The image is temporarily processed by our AI system</li>
                <li>Nutrition information is extracted and returned to you</li>
                <li>The image is immediately deleted from our servers</li>
                <li>No copy or backup of your image is retained</li>
              </ol>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
              <p className="text-gray-700 mb-4">We implement industry-standard security measures:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• All data transmission is encrypted using HTTPS</li>
                <li>• Secure cloud infrastructure</li>
                <li>• Regular security audits and updates</li>
                <li>• No persistent data storage</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@calqulate.com" className="text-primary-600 hover:underline">
                  privacy@calqulate.com
                </a>
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
