import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How long until I feel results?',
    answer: 'Many experience noticeable energy improvements within 1-3 weeks. For full cellular optimization, we recommend 90 days of consistent use. Your body builds nutrient levels gradually, and mitochondria respond best to sustained support.'
  },
  {
    question: 'Is it safe with medications?',
    answer: 'Our formula uses natural, research-backed ingredients. Always consult your healthcare provider before starting any supplement, especially if taking prescriptions or managing health conditions.'
  },
  {
    question: 'What is the dosage?',
    answer: 'Take 2 capsules daily with food for optimal absorption. Each bottle provides a 30-day supply at the recommended dosage.'
  },
  {
    question: 'Any side effects?',
    answer: 'Made with high-quality natural ingredients, our formula is generally well-tolerated. Some may experience mild digestive adjustment initially. If any concerns arise, discontinue and consult your healthcare provider.'
  },
  {
    question: 'What makes this different?',
    answer: 'Unlike caffeine-based supplements, this addresses cellular energy at its source—your mitochondria. Our formula supports NAD+ production, ATP synthesis, and mitochondrial protection for real, lasting energy.'
  },
  {
    question: 'Caffeine-free?',
    answer: 'Absolutely! No caffeine or stimulants. Works by supporting your body\'s natural energy production rather than artificial stimulation.'
  },
  {
    question: 'What\'s the return policy?',
    answer: 'We offer a 90-day money-back guarantee. Not satisfied? Return your bottles—even if empty—within 90 days for a full refund, no questions asked.'
  },
  {
    question: 'Vegetarian-friendly?',
    answer: 'Yes, our capsules are vegetarian. For vegan sourcing details or ingredient specifics, check the label or contact our team.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-700">
            Get clear answers about our formula and how it supports your cellular energy.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:border-teal-300 hover:bg-white transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-teal-500/5 rounded-lg p-8 text-center border border-teal-200">
          <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
            Need More Help?
          </h3>
          <p className="text-gray-700 mb-6">
            Our team is ready to answer your questions about supporting your cellular energy.
          </p>
          <a
            href="mailto:support@example.com"
            className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
