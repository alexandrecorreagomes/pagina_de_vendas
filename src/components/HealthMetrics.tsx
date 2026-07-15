import { motion } from 'framer-motion';

interface MetricCardProps {
  icon: string;
  title: string;
  description: string;
  value: string;
  ringClass: string;
  iconClass: string;
  iconBgClass: string;
  pulseClass: string;
}

function MetricCard({
  icon,
  title,
  description,
  value,
  ringClass,
  iconClass,
  iconBgClass,
  pulseClass,
}: MetricCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass-card p-8 rounded-3xl text-center group border border-white/5 hover:border-primary-container/20 transition-all duration-300 flex flex-col items-center justify-between"
    >
      <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        {/* Ring pulsante */}
        <div className={`absolute inset-0 rounded-full pulse-ring ${ringClass}`} />
        {/* Ícone */}
        <div className={`absolute inset-2 rounded-full flex items-center justify-center border ${iconBgClass} ${pulseClass}`}>
          <span className={`material-symbols-outlined ${iconClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>
            {icon}
          </span>
        </div>
      </div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-on-surface-variant text-sm mb-6 max-w-[240px] leading-relaxed">
        {description}
      </p>
      <div className="text-primary-container font-headline-lg text-2xl font-bold mt-auto">
        {value}
      </div>
    </motion.div>
  );
}

export default function HealthMetrics({ id }: { id?: string }) {
  const metrics: MetricCardProps[] = [
    {
      icon: 'favorite',
      title: 'Frequência Cardíaca',
      description: 'Monitoramento contínuo em tempo real com alertas de variações.',
      value: '72 BPM',
      ringClass: 'bg-error/20',
      iconClass: 'text-error',
      iconBgClass: 'bg-error/10 border-error/30',
      pulseClass: '',
    },
    {
      icon: 'water_drop',
      title: 'Lembrete de Hidratação',
      description: 'Notificações sutis para garantir que você mantenha seu corpo hidratado.',
      value: '2.4L / 3L',
      ringClass: 'bg-primary-container/20',
      iconClass: 'text-primary-container',
      iconBgClass: 'bg-primary-container/10 border-primary-container/30',
      pulseClass: '',
    },
    {
      icon: 'bedtime',
      title: 'Análise de Sono',
      description: 'Relatórios detalhados sobre as fases REM e sono profundo.',
      value: '08h 12m',
      ringClass: 'bg-secondary-fixed/20',
      iconClass: 'text-secondary-fixed',
      iconBgClass: 'bg-secondary-fixed/10 border-secondary-fixed/30',
      pulseClass: '',
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 scroll-mt-20" id={id}>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(80,200,120,0.02)_0%,transparent_60%)]" />
      <div className="container-max mx-auto px-gutter relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-headline-lg text-headline-lg text-white mb-6"
          >
            Seu Assistente de Bem-Estar Pessoal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-on-surface-variant font-body-md text-body-md leading-relaxed"
          >
            Monitore cada batimento, cada passo e cada ciclo de sono com precisão cirúrgica. O AuraWatch não apenas coleta dados; ele cuida de você.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {metrics.map((metric, i) => (
            <MetricCard key={i} {...metric} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
