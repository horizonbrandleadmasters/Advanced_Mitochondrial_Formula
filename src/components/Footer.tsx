import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          <div>
            <img src="/logo_nova.png" alt="HLM Logo" className="h-8 w-8 mb-3 brightness-200" />
            <h3 className="font-semibold mb-2">HLM</h3>
            <p className="text-sm text-white/70">
              Supporting cellular energy and healthy aging through science-backed supplements.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#benefits" className="text-white/70 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#science" className="text-white/70 hover:text-white transition-colors">
                  Science
                </a>
              </li>
              <li>
                <a href="#ingredients" className="text-white/70 hover:text-white transition-colors">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#cta" className="text-white/70 hover:text-white transition-colors">
                  Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-400" />
                <a href="mailto:support@example.com" className="text-white/70 hover:text-white transition-colors">
                  support@example.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-400" />
                <p className="text-white/70">
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 md:pt-12">
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-sm">Affiliate Disclosure</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              This website contains affiliate links. We may earn a commission when you purchase through these links. This helps us continue to provide high-quality information and recommendations.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-sm">Medical Disclaimer</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before starting any supplement.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-white/60">
              © {currentYear} HLM - Health & Longevity Matters. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
