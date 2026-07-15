import { motion } from 'framer-motion';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-36 md:pt-40 pb-12">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(80,200,120,0.05)_0%,transparent_70%)]" />
      <div className="container-max mx-auto px-gutter relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display-xl text-4xl md:text-display-xl mb-6 text-white leading-tight"
          >
            Conectividade Total, <span className="text-primary-container">Saúde em Foco</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-lg"
          >
            O assistente pessoal que acompanha seu ritmo, 24 horas por dia, 7 dias por semana. Tecnologia de ponta envolta em um design metálico sofisticado.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              onClick={(e) => handleScroll(e, '#pricing')}
              className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(80,200,120,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              href="#pricing"
            >
              Experimente agora
            </a>
            <div className="flex items-center gap-3 px-6 py-4 glass-card rounded-full border border-white/5 cursor-pointer hover:border-white/20 hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-primary-container">play_circle</span>
              <span className="font-label-sm text-label-sm text-white">Ver em ação</span>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => {
          const target = document.querySelector('#performance');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
      </motion.div>
    </section>
  );
}
