import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToPricing = () => {
    const target = document.querySelector('#pricing');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 w-full z-[60] p-4 md:hidden"
        >
          <div className="bg-surface-container-high/90 backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between shadow-2xl border border-white/10">
            <div>
              <span className="block text-xs text-on-surface-variant uppercase tracking-widest font-bold">
                Oferta Limitada
              </span>
              <span className="text-primary-container font-bold text-lg">R$ 187,00</span>
            </div>
            <button
              onClick={handleScrollToPricing}
              className="bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest active:scale-95 transition-transform"
            >
              Comprar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
