import { Leaf, Sparkles, Zap } from 'lucide-react';

const primaryIngredients = [
  {
    name: 'Niacinamide (Vitamin B3)',
    description: 'The premier NAD+ precursor shown in research to elevate NAD+ levels significantly and support cellular repair and energy production.',
    benefit: 'NAD+ powerhouse',
    icon: Zap
  },
  {
    name: 'D-Ribose',
    description: 'A 5-carbon sugar that directly builds ATP molecules. Works without spiking blood sugar to fuel energy production.',
    benefit: 'ATP fuel source',
    icon: Sparkles
  },
  {
    name: 'Trans-Resveratrol',
    description: 'Activates sirtuins—the cellular "longevity proteins"—supporting healthy aging and optimal mitochondrial function.',
    benefit: 'Longevity activation',
    icon: Leaf
  }
];

const supportingIngredients = [
  { name: 'PQQ (Pyrroloquinoline Quinone)', description: 'Triggers mitochondrial biogenesis—the creation of new mitochondria.' },
  { name: 'Acetyl-L-Carnitine', description: 'Shuttles fat into mitochondria for efficient energy conversion.' },
  { name: 'CoQ10', description: 'Essential cofactor in the electron transport chain for ATP generation.' },
  { name: 'Quercetin', description: 'Powerful antioxidant that amplifies absorption of other nutrients.' },
  { name: 'Alpha-Lipoic Acid', description: 'Protects mitochondria from oxidative damage and supports metabolic health.' },
  { name: 'Curcumin (Turmeric)', description: 'Supports healthy cellular function and mitochondrial performance.' },
  { name: 'BioPerine (Black Pepper)', description: 'Boosts bioavailability of curcumin and other nutrients by up to 20x.' },
  { name: 'Magnesium (Highly Absorbable)', description: 'Essential mineral cofactor for ATP production and 300+ enzymatic reactions.' }
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            The Power of Precision Formulation
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Every ingredient is scientifically selected and precisely dosed to support cellular energy production and healthy aging.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-navy-900 mb-8 text-center">
            Three Primary Mitochondrial Boosters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {primaryIngredients.map((ingredient, index) => {
              const Icon = ingredient.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-500/5 to-navy-900/5 border border-teal-200 rounded-xl p-8 hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-3">
                    {ingredient.name}
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {ingredient.description}
                  </p>
                  <div className="bg-teal-500/10 px-3 py-2 rounded-lg inline-block">
                    <span className="text-xs font-semibold text-teal-700">
                      {ingredient.benefit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-2xl font-semibold text-navy-900 mb-8 text-center">
            Eight Supporting Nutrients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {supportingIngredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 border border-gray-200 hover:border-teal-300 transition-colors"
              >
                <h4 className="font-semibold text-navy-900 mb-2 text-sm">
                  {ingredient.name}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-primary text-white rounded-xl p-8 text-center shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Third-Party Tested for Quality
          </h3>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">
            Every batch is independently tested for purity, potency, and safety. What's on the label is exactly what you get.
          </p>
        </div>
      </div>
    </section>
  );
}
