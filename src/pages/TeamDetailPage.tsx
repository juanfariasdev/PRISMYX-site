import React from 'react';
import { useRouter } from '../router/RouterContext';
import { TEAM_MEMBERS } from '../data/mockData';
import { SEOHead } from '../components/SEOHead';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, CheckCircle2, Award, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { Link } from '../router/Link';

export const TeamDetailPage: React.FC = () => {
  const { params, push } = useRouter();
  const id = params.id;

  const member = TEAM_MEMBERS.find(m => m.id === id);

  if (!member) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 text-center">
        <SEOHead title="Especialista Não Encontrado" />
        <h1 className="font-headline text-3xl font-bold text-text-high mb-4">
          Especialista Não Localizado
        </h1>
        <p className="text-text-muted mb-8">
          O perfil de engenharia ou liderança solicitado não foi encontrado.
        </p>
        <Button onClick={() => push('/#time')} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para Equipe</span>
        </Button>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      '@type': 'Organization',
      name: 'Prismyx Tech',
    },
  };

  return (
    <div className="pt-28 pb-24">
      <SEOHead
        title={`${member.name} - ${member.role} | Prismyx Tech`}
        description={member.bio}
        canonical={`https://prismyx.tech/equipe/${member.id}`}
        jsonLd={jsonLd}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/#time"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retornar para Engenharia &amp; Governança</span>
          </Link>
        </div>

        {/* Member Profile Hero Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-base border border-border-default shadow-xl relative overflow-hidden mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-surface-inset border-2 border-primary/40 flex items-center justify-center font-mono font-bold text-2xl text-primary shadow-lg">
              {member.initials}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge variant="accent">{member.department}</Badge>
                <span className="font-mono text-xs text-text-faint">{member.badge}</span>
              </div>
              <h1 className="font-headline text-2xl sm:text-3xl font-bold text-text-high">
                {member.name}
              </h1>
              <div className="text-sm font-medium text-primary">
                {member.role}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border-divider">
            <h2 className="font-headline text-lg font-bold text-text-high mb-3">
              Trajetória Profissional &amp; Escopo de Atuação
            </h2>
            <p className="text-text-muted leading-relaxed text-sm sm:text-base mb-6">
              {member.fullBio || member.bio}
            </p>
          </div>

          {/* Specialties and Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border-divider">
            <div>
              <h3 className="font-headline font-bold text-sm text-text-high mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Especialidades e Domínios</span>
              </h3>
              <div className="space-y-2">
                {member.specialties.map(spec => (
                  <div key={spec} className="flex items-center gap-2 text-xs font-mono text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-headline font-bold text-sm text-text-high mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-brand-tertiary" />
                <span>Certificações &amp; Credenciais</span>
              </h3>
              <div className="space-y-2">
                {member.certifications?.map(cert => (
                  <div key={cert} className="flex items-center gap-2 text-xs font-mono text-text-high bg-surface-raised p-2 rounded-lg border border-border-divider">
                    <span className="text-primary font-bold">✓</span>
                    <span>{cert}</span>
                  </div>
                )) || (
                  <div className="text-xs text-text-muted">Certificações corporativas validadas.</div>
                )}
              </div>
            </div>
          </div>

          {/* Key Deliveries Summary */}
          {member.projectsDelivered && (
            <div className="mt-8 p-4 rounded-xl bg-surface-raised border border-border-divider flex items-center justify-between font-mono text-xs">
              <span className="text-text-muted">Impacto Comprovado:</span>
              <span className="text-primary font-bold">{member.projectsDelivered}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-surface-raised border border-border-divider">
          <div>
            <div className="font-headline font-bold text-text-high text-sm">
              Deseja conversar com {member.name}?
            </div>
            <div className="text-xs text-text-muted mt-0.5">
              Participe de um workshop de diagnóstico preliminar de tecnologia.
            </div>
          </div>
          <Button onClick={() => push('/#contato')} className="gap-2">
            <span>Agendar Diagnóstico</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
