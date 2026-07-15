import { motion } from 'framer-motion';
import athleteSpecs from '../assets/athlete-specs.png';
import watchCustomization from '../assets/watch-customization.png';

export default function TechSpecs({ id, designId }: { id?: string; designId?: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-surface py-16 scroll-mt-20" id={id}>
      <div className="container-max mx-auto px-gutter">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline-lg text-headline-lg text-white mb-16 text-center"
        >
          Excelência em Cada Detalhe
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]"
        >
          {/* Specs Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 glass-card rounded-3xl p-8 overflow-hidden relative group"
          >
            <div className="relative z-20 flex flex-col justify-end h-full max-w-md">
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <h3 className="text-white font-bold text-2xl mb-4">Métricas Esportivas Avançadas</h3>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                  Mais de 100 modos esportivos, incluindo natação, corrida e ciclismo. GPS integrado para traçado de rotas preciso.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1.5 bg-primary-container/10 rounded-full border border-primary-container/20 text-xs font-bold text-primary-container">
                    IP68 RESISTENTE
                  </span>
                  <span className="px-3 py-1.5 bg-primary-container/10 rounded-full border border-primary-container/20 text-xs font-bold text-primary-container">
                    BT 5.3 STABLE
                  </span>
                  <span className="px-3 py-1.5 bg-primary-container/10 rounded-full border border-primary-container/20 text-xs font-bold text-primary-container">
                    AMOLED DISPLAY
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              alt="Atleta correndo usando o AuraWatch com métricas de performance esportiva"
              className="absolute inset-0 h-full w-full object-cover object-right mix-blend-lighten z-0"
              src={athleteSpecs}
            />
          </motion.div>

          <motion.div
            id={designId}
            variants={itemVariants}
            className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden scroll-mt-24"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
              style={{ backgroundImage: `url(${watchCustomization})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-10" />
            <div className="relative z-20 mt-auto w-full">
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <h3 className="text-white font-bold text-2xl mb-2">Personalização Total</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Centenas de mostradores para combinar com seu look diário.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Table Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-12 glass-card rounded-3xl p-4 md:p-8 border-primary-container/10 flex items-center h-auto min-h-[300px]"
          >
            <table className="w-full text-left table-auto whitespace-normal break-words text-xs md:text-sm">
              <thead>
                <tr className="border-b border-white/10 border-primary-container/20">
                  <th className="pb-3 md:pb-4 pr-2 font-bold text-white uppercase text-[10px] md:text-xs tracking-widest w-1/4">Recurso</th>
                  <th className="pb-3 md:pb-4 pr-2 font-bold text-white uppercase text-[10px] md:text-xs tracking-widest w-2/5">Especificação AuraWatch Premium</th>
                  <th className="pb-3 md:pb-4 font-bold text-white uppercase text-[10px] md:text-xs tracking-widest w-1/3">Vantagem</th>
                </tr>
              </thead>
              <tbody className="text-on-surface-variant">
                <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="py-3 md:py-4 pr-2 font-medium text-white text-xs md:text-sm">Tela</td>
                  <td className="py-3 md:py-4 pr-2 text-xs md:text-sm">1.43" AMOLED 466x466px</td>
                  <td className="py-3 md:py-4 text-xs md:text-sm">Visibilidade perfeita sob o sol</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="py-3 md:py-4 pr-2 font-medium text-white text-xs md:text-sm">Bateria</td>
                  <td className="py-3 md:py-4 pr-2 text-xs md:text-sm">Até 15 dias de uso típico</td>
                  <td className="py-3 md:py-4 text-xs md:text-sm">Menos tempo na tomada, mais no pulso</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="py-3 md:py-4 pr-2 font-medium text-white text-xs md:text-sm">Línguas</td>
                  <td className="py-3 md:py-4 pr-2 text-xs md:text-sm">Português, Inglês, Espanhol +12</td>
                  <td className="py-3 md:py-4 text-xs md:text-sm">Interface 100% em Português</td>
                </tr>
                <tr className="hover:bg-white/2 transition-colors">
                  <td className="py-3 md:py-4 pr-2 font-medium text-white text-xs md:text-sm">Materiais</td>
                  <td className="py-3 md:py-4 pr-2 text-xs md:text-sm">Aço Inoxidável &amp; Cerâmica</td>
                  <td className="py-3 md:py-4 text-xs md:text-sm">Durabilidade e toque premium</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
