"use client"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How accurate is CalQulate's nutrition analysis?",
      answer:
        "CalQulate uses advanced AI and OCR technology to achieve over 99% accuracy in extracting nutrition information from food labels. Our system is trained on thousands of food labels to ensure reliable results.",
    },
    {
      question: "What types of food labels can CalQulate scan?",
      answer:
        "CalQulate can scan virtually any nutrition facts panel or ingredient list, including packaged foods, beverages, supplements, and even restaurant menu items with nutrition information.",
    },
    {
      question: "Is my data safe and private?",
      answer:
        "We never store your images or personal data. All processing happens in real-time, and your photos are immediately deleted after analysis. Your privacy is our top priority.",
    },
    {
      question: "How long does it take to analyze a food label?",
      answer:
        "Most food labels are analyzed within 2-3 seconds. The exact time depends on image quality and complexity of the nutrition label.",
    },
    {
      question: "What image formats are supported?",
      answer:
        "CalQulate supports all common image formats including JPG, PNG, HEIC, and WebP. Images should be under 10MB for optimal processing.",
    },
    {
      question: "Can I use CalQulate on my mobile device?",
      answer:
        "Yes! CalQulate is fully optimized for mobile devices. You can easily take photos with your phone's camera and get instant results.",
    },
    {
      question: "What should I do if the analysis fails?",
      answer:
        "If analysis fails, try taking a clearer photo with better lighting, ensure the entire nutrition panel is visible, and avoid glare or shadows. The label should be flat and readable.",
    },
    {
      question: "Is CalQulate free to use?",
      answer:
        "Yes! CalQulate's core features are completely free. We believe everyone should have access to clear nutrition information.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold gradient-text mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about CalQulate and food label scanning.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button className="w-full text-left flex justify-between items-center" onClick={() => toggleFAQ(index)}>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <span className="text-2xl text-primary-600 flex-shrink-0">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">Can't find the answer you're looking for? We're here to help!</p>
            <a href="/contact" className="btn-primary">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
