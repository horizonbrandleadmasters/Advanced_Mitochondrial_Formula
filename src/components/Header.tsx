import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo_nova.png" alt="HLM Logo" className="h-10 w-10 object-contain" />
          <span className="font-display font-bold text-navy-900 text-lg hidden sm:block">HLM</span>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`
          absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:static md:border-none md:bg-transparent md:flex md:items-center md:gap-8
          ${menuOpen ? 'block' : 'hidden md:flex'}
        `}>
          <button
            onClick={() => scrollToSection('benefits')}
            className="block w-full md:w-auto text-left md:text-center px-4 md:px-0 py-3 md:py-0 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('science')}
            className="block w-full md:w-auto text-left md:text-center px-4 md:px-0 py-3 md:py-0 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
          >
            Science
          </button>
          <button
            onClick={() => scrollToSection('ingredients')}
            className="block w-full md:w-auto text-left md:text-center px-4 md:px-0 py-3 md:py-0 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
          >
            Ingredients
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block w-full md:w-auto text-left md:text-center px-4 md:px-0 py-3 md:py-0 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
          >
            FAQ
          </button>
        </div>
      </nav>
    </header>
  );
}
