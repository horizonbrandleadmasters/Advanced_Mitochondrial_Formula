import { Zap, Brain, Heart, Activity, Shield, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Sustained Energy',
    description: 'Wake up refreshed and maintain consistent energy throughout your day without crashes or caffeine dependence.'
  },
  {
    icon: Brain,
    title: 'Sharp Mental Focus',
    description: 'Experience enhanced clarity, concentration, and memory recall for better productivity and decision-making.'
  },
  {
    icon: Heart,
    title: 'Cardiovascular Vitality',
    description: 'Support healthy heart function and optimal circulation for improved overall wellness.'
  },
  {
    icon: Activity,
    title: 'Physical Endurance',
    description: 'Feel stronger with improved stamina for daily activities, workouts, and adventures you enjoy.'
  },
  {
    icon: Shield,
    title: 'Cellular Protection',
    description: 'Guard against oxidative stress with potent antioxidants that protect your cellular energy factories.'
  },
  {
    icon: Sparkles,
    title: 'Youthful Vitality',
    description: 'Reclaim the energy and vibrancy you remember feeling, supporting graceful and healthy aging.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            The Six Pillars of Cellular Vitality
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            When your mitochondria thrive, your entire body benefits. Experience the compounding effects of true cellular energy support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-xl hover:border-teal-400 hover:shadow-md transition-all duration-300 bg-white group"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
