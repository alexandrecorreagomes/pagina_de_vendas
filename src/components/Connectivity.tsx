import { motion } from 'framer-motion';
import watchConnectivity from '../assets/watch-connectivity.png';

export default function Connectivity({ id }: { id?: string }) {
  return (
    <section className="bg-surface-container-lowest py-16 scroll-mt-20" id={id}>
      <div className="container-max mx-auto px-gutter">
        {/* Cabeçalho centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">
            Sempre conectado, sem esforço.
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Receba notificações instantâneas do WhatsApp, Instagram e chamadas diretamente no seu pulso. O AuraWatch Premium integra-se perfeitamente ao seu estilo de vida digital.
          </p>
        </motion.div>

        {/* Grid de conteúdo: cards à esquerda, imagem à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Cards de funcionalidade */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-5 glass-card rounded-xl border border-white/5 hover:border-primary-container/30 transition-all cursor-default group">
              <div className="bg-primary-container/10 p-3 rounded-lg group-hover:bg-primary-container/20 transition-all duration-300 shrink-0">
                <span className="material-symbols-outlined text-primary-container">chat</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">WhatsApp &amp; Mensagens</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Leia mensagens completas e responda com frases rápidas pré-configuradas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass-card rounded-xl border border-white/5 hover:border-primary-container/30 transition-all cursor-default group">
              <div className="bg-primary-container/10 p-3 rounded-lg group-hover:bg-primary-container/20 transition-all duration-300 shrink-0">
                <span className="material-symbols-outlined text-primary-container">call</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Chamadas Bluetooth 5.3</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Atenda e realize chamadas com clareza cristalina através do microfone integrado.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Imagem do relógio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-[70%] h-[70%] bg-primary-container/5 rounded-full blur-[80px]" />
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              alt="Smartwatch com interface de chat conectada e ícones de redes sociais flutuando ao redor"
              className="relative z-10 w-full max-w-sm drop-shadow-2xl object-contain"
              src={watchConnectivity}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
