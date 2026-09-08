import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { KpiSection } from '../components/KpiSection';
import { ValuesSection } from '../components/ValuesSection';
import { ServicesSection } from '../components/ServicesSection';
import { TechStackSection } from '../components/TechStackSection';
import { MethodologySection } from '../components/MethodologySection';
import { TeamSection } from '../components/TeamSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { SEOHead } from '../components/SEOHead';

export const HomePage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prismyx Tech',
    url: 'https://prismyx.tech',
    logo: 'https://prismyx.tech/assets/logo.png',
    description:
      'Desenvolvimento de sites, aplicações e integrações para empresas que escalam com tecnologia estruturada e governança de software.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Machado',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'ops@prismyx.tech',
      contactType: 'technical support',
    },
  };

  return (
    <>
      <SEOHead
        title="Prismyx Tech - Engenharia de Software e Sistemas de Alta Garantia"
        description="Desenvolvimento de sites, aplicações e integrações para empresas que escalam com tecnologia estruturada e governança de software."
        canonical="https://prismyx.tech/"
        jsonLd={jsonLd}
      />
      <main>
        <HeroSection />
        <KpiSection />
        <ValuesSection />
        <ServicesSection />
        <TechStackSection />
        <MethodologySection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>
    </>
  );
};
