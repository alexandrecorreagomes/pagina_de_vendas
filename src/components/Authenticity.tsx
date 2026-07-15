import { motion } from 'framer-motion';

export default function Authenticity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const benefits = [
    { icon: 'verified_user', text: '1 Ano de Garantia' },
    { icon: 'local_shipping', text: 'Entrega Expressa' },
    { icon: 'support_agent', text: 'Suporte 24/7' },
    { icon: 'payments', text: '7 Dias p/ Devolução' },
  ];

  return (
    <section className="bg-surface-container-lowest py-16">
      <div className="container-max mx-auto px-gutter text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-container/30 bg-primary-container/5 text-primary-container font-label-sm text-sm mb-6"
        >
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
          Produto Original e Autêntico
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headline-lg text-headline-lg text-white mb-6"
        >
          Garantia de Autenticidade AuraWatch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-on-surface-variant max-w-2xl mx-auto mb-12 font-body-md text-body-md leading-relaxed"
        >
          Não aceite imitações. O AuraWatch Premium original possui o exclusivo sensor de alta precisão de 4ª geração e acabamento em titânio aeroespacial.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 rounded-2xl hover:bg-white/2 transition-colors duration-300"
            >
              <div className="bg-primary-container/10 p-4 rounded-full mb-4">
                <span className="material-symbols-outlined text-4xl text-primary-container">
                  {benefit.icon}
                </span>
              </div>
              <span className="text-white font-bold font-body-md">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
