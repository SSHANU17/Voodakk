import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ServiceMatrix from './components/ServiceMatrix';
import ClientMarquee from './components/ClientMarquee';
import ProductShowcase from './components/ProductShowcase';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-voodak-accent selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <CustomCursor />
      <Background3D />
      
      <Navbar />
      <main>
        <Hero />
        <ClientMarquee />
        <Features />
        <ServiceMatrix />
        <ProductShowcase />
        <Portfolio />
        <TechStack />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
