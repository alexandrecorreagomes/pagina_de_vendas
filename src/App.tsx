import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Connectivity from './components/Connectivity';
import HealthMetrics from './components/HealthMetrics';
import TechSpecs from './components/TechSpecs';
import Authenticity from './components/Authenticity';
import PricingCTA from './components/PricingCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <>
      {/* Cabeçalho de Navegação */}
      <Navbar />

      {/* Conteúdo Principal do Site */}
      <main className="pt-16">
        {/* Seção Hero */}
        <Hero />

        {/* Seção de Conectividade / Performance */}
        <Connectivity id="performance" />

        {/* Seção de Métricas de Saúde */}
        <HealthMetrics id="health" />

        {/* Seção de Detalhes Técnicos (Bento Grid e Especificações) */}
        <TechSpecs id="specs" designId="design" />

        {/* Seção de Garantia de Autenticidade */}
        <Authenticity />

        {/* Seção de Preços e Oferta */}
        <PricingCTA id="pricing" />
      </main>

      {/* Rodapé Semântico */}
      <Footer />

      {/* CTA Flutuante para Mobile */}
      <StickyCTA />
    </>
  );
}
