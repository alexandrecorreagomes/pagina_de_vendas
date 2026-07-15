export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface-container-lowest w-full border-t border-white/5 py-16">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-base">
        <div>
          <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold mb-4">
            AuraWatch
          </div>
          <p className="text-on-tertiary-container max-w-sm mb-8 font-body-md text-body-md leading-relaxed">
            Elevando sua performance e cuidando do seu bem-estar através de tecnologia vestível de luxo.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-all cursor-pointer">
              face_nod
            </span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-all cursor-pointer">
              share
            </span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-all cursor-pointer">
              mail
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="text-white font-bold mb-4">Explorar</h5>
            <ul className="space-y-2 text-on-tertiary-container font-body-md text-body-md">
              <li>
                <a
                  onClick={(e) => handleScroll(e, '#performance')}
                  className="hover:text-primary-fixed transition-colors cursor-pointer"
                  href="#performance"
                >
                  Performance
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleScroll(e, '#health')}
                  className="hover:text-primary-fixed transition-colors cursor-pointer"
                  href="#health"
                >
                  Saúde
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleScroll(e, '#design')}
                  className="hover:text-primary-fixed transition-colors cursor-pointer"
                  href="#design"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleScroll(e, '#specs')}
                  className="hover:text-primary-fixed transition-colors cursor-pointer"
                  href="#specs"
                >
                  Specs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Suporte</h5>
            <ul className="space-y-2 text-on-tertiary-container font-body-md text-body-md">
              <li>
                <a className="hover:text-primary-fixed transition-colors" href="#garantia">
                  Garantia
                </a>
              </li>
              <li>
                <a className="hover:text-primary-fixed transition-colors" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-primary-fixed transition-colors" href="#termos">
                  Termos
                </a>
              </li>
              <li>
                <a className="hover:text-primary-fixed transition-colors" href="#privacidade">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-on-tertiary-container text-sm">
          <div>© 2024 AuraWatch Precision Instruments. All rights reserved.</div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 hover:border-primary-container/30 transition-all active:scale-95 group cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
