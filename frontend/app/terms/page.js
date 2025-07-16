export const metadata = {
  title: "Terms of Service - CalQulate",
  description: "CalQulate terms of service and usage guidelines.",
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold gradient-text mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600">Please read these terms carefully before using CalQulate.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using CalQulate, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily use CalQulate for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-700 mb-4">
                This license shall automatically terminate if you violate any of these restrictions.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                CalQulate provides nutrition information for informational purposes only. While we strive for accuracy,
                we cannot guarantee that all extracted information is 100% accurate.
              </p>
              <p className="text-gray-700">
                Always consult with healthcare professionals for dietary advice and verify nutrition information when
                making health decisions.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
              <p className="text-gray-700">
                CalQulate shall not be held liable for any damages arising from the use of this service, including but
                not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@calqulate.com" className="text-primary-600 hover:underline">
                  legal@calqulate.com
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
