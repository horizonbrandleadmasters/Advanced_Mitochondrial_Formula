import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    age: 54,
    rating: 5,
    text: "After 6 weeks, the energy difference is night and day. No more afternoon crashes or reaching for coffee."
  },
  {
    name: 'Michael T.',
    age: 62,
    rating: 5,
    text: "Skeptical at first, but within 3 weeks my mental clarity improved noticeably. Sustained energy all day long."
  },
  {
    name: 'Jennifer L.',
    age: 48,
    rating: 5,
    text: "My workouts improved dramatically. More stamina, faster recovery. This formula genuinely works."
  },
  {
    name: 'Robert K.',
    age: 58,
    rating: 5,
    text: "Two months in and I have my energy back. More productive, enjoying hobbies again. Life-changing."
  },
  {
    name: 'Linda P.',
    age: 51,
    rating: 5,
    text: "More energy AND better focus. I can work longer without the mental drain. Highly impressed."
  },
  {
    name: 'David H.',
    age: 65,
    rating: 5,
    text: "Recommended to all my friends. The ingredient quality and results are exceptional. Worth it."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            Results From Real People
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Thousands have reclaimed their energy and vitality with cellular support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                ))}
              </div>

              <Quote className="w-5 h-5 text-teal-500/30 mb-3" />

              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              <div className="pt-3 border-t border-gray-200">
                <div className="font-semibold text-navy-900 text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-600">Age {testimonial.age}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-white px-8 py-6 rounded-lg border border-gray-200 shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-gold-500 fill-current" />
              <span className="text-2xl md:text-3xl font-bold text-navy-900">4.8 of 5</span>
            </div>
            <div className="text-xs md:text-sm text-gray-600">2,400+ verified customer reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
