import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src="/gemini_generated_image_c9kwquc9kwquc9kw.png"
            alt="Woman holding supplement bottle"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div className="order-1 md:order-2 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-6 w-fit px-4 py-2 bg-teal-500/10 rounded-full">
            <Zap size={16} className="text-teal-600" />
            <span className="text-sm font-medium text-teal-700">Science-Backed Formula</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6 leading-tight">
            Reclaim Your Natural Energy
          </h1>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Feel the vitality you deserve. Our scientifically-formulated supplement supports optimal cellular energy production, helping you regain the focus, stamina, and joy of living that age can diminish.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={scrollToCTA}
              className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Start Now <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-teal-500 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              How It Works
            </button>
          </div>

          <p className="text-sm text-gray-600">
            ✓ 90-day money-back guarantee • ✓ Scientifically formulated • ✓ Premium quality
          </p>
        </div>
      </div>
    </section>
  );
}
