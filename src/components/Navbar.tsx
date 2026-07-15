import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm"
    >
      <nav className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        {/* Logo responsivo para não colidir com o botão no mobile */}
        <a 
          href="#"
          className="font-headline-lg text-2xl md:text-headline-lg font-bold text-primary-container hover:opacity-90 transition-opacity"
        >
          AuraWatch
        </a>
        
        {/* Links do Menu traduzidos para Português */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300"
            href="#performance"
          >
            Performance
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300"
            href="#health"
          >
            Saúde
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300"
            href="#design"
          >
            Design
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary-container transition-colors duration-300"
            href="#specs"
          >
            Especificações
          </a>
        </div>
        
        {/* Botão de Compra responsivo (fonte e padding reduzidos no mobile) */}
        <a
          href="#pricing"
          className="bg-primary-container text-on-primary-container px-4 py-2 md:px-6 md:py-2 rounded-full font-label-sm text-[10px] md:text-label-sm uppercase tracking-widest hover:scale-95 active:scale-90 transition-all font-bold text-center inline-block"
        >
          Compre Agora
        </a>
      </nav>
    </motion.header>
  );
}
