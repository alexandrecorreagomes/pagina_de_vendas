import { motion } from 'framer-motion';

export default function PricingCTA({ id }: { id?: string }) {
  return (
    <section className="relative overflow-hidden py-16 scroll-mt-20" id={id}>
      <div className="absolute inset-0 bg-primary-container/5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(80,200,120,0.1) 0%, transparent 70%)' }} />
      <div className="container-max mx-auto px-gutter relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 text-center border border-white/10"
        >
          <h2 className="font-headline-lg text-headline-lg text-white mb-4">Adquira o seu hoje</h2>
          
          <div className="mb-10 flex flex-col items-center">
            <span className="text-on-surface-variant line-through text-xl block mb-2">De R$ 289,00</span>
            <motion.span
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary-container font-display-xl text-5xl md:text-7xl font-extrabold tracking-tighter block"
            >
              R$ 187,00
            </motion.span>
            <span className="text-on-surface-variant block mt-2 font-body-md">ou 12x de R$ 18,90 no cartão</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(80,200,120,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-primary-container text-on-primary-container px-16 py-6 rounded-full font-bold text-xl uppercase tracking-widest transition-all"
          >
            Compre Agora
          </motion.button>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-on-surface-variant font-body-md">
            <span className="material-symbols-outlined text-sm">lock</span>
            Pagamento 100% seguro via SSL
          </div>
        </motion.div>
      </div>
    </section>
  );
}
