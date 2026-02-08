import { Shield, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'Start',
    bottles: 1,
    price: 79.95,
    pricePerBottle: 79.95,
    savings: 0,
    popular: false,
    freeShipping: false
  },
  {
    name: 'Most Popular',
    bottles: 3,
    price: 214.95,
    pricePerBottle: 71.65,
    savings: 24.90,
    popular: true,
    freeShipping: true
  },
  {
    name: 'Best Value',
    bottles: 6,
    price: 399.90,
    pricePerBottle: 66.65,
    savings: 79.80,
    popular: false,
    freeShipping: true
  }
];

const guarantees = [
  {
    icon: Shield,
    title: '90-Day Guarantee',
    description: 'Not completely satisfied? Full refund, no questions asked.'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders of 3+ bottles. Fast, reliable delivery.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    description: 'Third-party tested for purity and potency.'
  }
];

const handleOrderClick = (pkg: typeof packages[0]) => {
  window.location.href = 'https://www.digistore24.com/redir/576637/barrosjunior21/';
};

export default function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Reclaim Your Energy Today
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Choose your package. All orders backed by our 90-day money-back guarantee—your satisfaction is guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-gold-500 md:scale-105' : 'hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="bg-gold-500 text-navy-900 text-center py-2 font-bold text-xs uppercase tracking-wide">
                  Most Popular Choice
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-1">
                  ${pkg.price}
                </div>
                <div className="text-gray-700 mb-6 text-sm">
                  ${pkg.pricePerBottle.toFixed(2)}/bottle
                </div>

                {pkg.savings > 0 && (
                  <div className="bg-teal-500/10 text-teal-700 px-4 py-2 rounded-lg mb-6 border border-teal-200 text-sm font-semibold">
                    Save ${pkg.savings.toFixed(2)}
                  </div>
                )}

                {pkg.freeShipping && (
                  <div className="flex items-center text-teal-700 mb-6 text-sm font-semibold">
                    <Truck className="w-4 h-4 mr-2" />
                    Free Shipping
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{pkg.bottles} {pkg.bottles === 1 ? 'Bottle' : 'Bottles'} ({pkg.bottles * 30} days)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">90-Day Money-Back Guarantee</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Third-Party Tested</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleOrderClick(pkg)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                    pkg.popular
                      ? 'bg-gradient-primary text-white shadow-lg hover:shadow-xl'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  Order Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div key={index} className="text-center text-white">
                <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Risk-Free 90-Day Guarantee
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            We're confident in our formula. If you don't experience noticeable improvements in energy, focus, and vitality within 90 days, return your bottles—even if empty—for a complete refund. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
