import { Header } from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Science from './components/Science';
import Ingredients from './components/Ingredients';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Science />
      <Ingredients />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
