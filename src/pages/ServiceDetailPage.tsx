import React from 'react';
import { useRouter } from '../router/RouterContext';
import { SERVICE_PILLARS } from '../data/mockData';
import { SEOHead } from '../components/SEOHead';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { ArrowLeft, CheckCircle2, ArrowRight, Gauge, Cpu, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Link } from '../router/Link';

export const ServiceDetailPage: React.FC = () => {
  const { params, push } = useRouter();
  const slug = params.slug;

  const pillar = SERVICE_PILLARS.find(p => p.slug === slug);

  if (!pillar) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 text-center">
        <SEOHead title="Serviço Não Encontrado" />
        <h1 className="font-headline text-3xl font-bold text-text-high mb-4">
          Serviço Não Localizado
        </h1>
        <p className="text-text-muted mb-8">
          A especificação técnica solicitada não foi encontrada em nossa matriz de serviços.
        </p>
        <Button onClick={() => push('/#servicos')} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para Serviços</span>
        </Button>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pillar.title,
    serviceType: pillar.pillarNumber,
    description: pillar.fullDesc,
    provider: {
      '@type': 'Organization',
      name: 'Prismyx Tech',
    },
  };

  return (
    <div className="pt-28 pb-24">
      <SEOHead
        title={`${pillar.title} | Prismyx Tech`}
        description={pillar.shortDesc}
        canonical={`https://prismyx.tech/servicos/${pillar.slug}`}
        jsonLd={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/#servicos"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retornar para Matriz de Serviços</span>
          </Link>
        </div>

        {/* Header Hero */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-base border border-border-default shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="accent">{pillar.pillarNumber}</Badge>
            <span className="font-mono text-xs text-text-faint">ESPECIFICAÇÃO TÉCNICA</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-text-high tracking-tight leading-tight mb-6">
            {pillar.title}
          </h1>

          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-3xl mb-8">
            {pillar.fullDesc}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-divider font-mono">
            {pillar.metrics.map(m => (
              <div key={m.label} className="p-4 rounded-xl bg-surface-raised/70 border border-border-divider">
                <div className="text-2xl font-bold text-primary mb-1">{m.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Columns Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Deliverables & Tech */}
          <div className="lg:col-span-7 space-y-8">
            <Card className="p-6 sm:p-8 bg-surface-base">
              <h2 className="font-headline text-xl font-bold text-text-high mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Entregáveis e Critérios de Aceite</span>
              </h2>
              <div className="space-y-3.5">
                {pillar.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                    <span className="font-mono text-xs text-primary font-bold mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-surface-base">
              <h2 className="font-headline text-xl font-bold text-text-high mb-4 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-brand-tertiary" />
                <span>Pilha Tecnológica Recomendada</span>
              </h2>
              <p className="text-sm text-text-muted mb-4">
                Ferramentas aplicadas sob os princípios de escalabilidade horizontal, tolerância a falhas e contratos fortemente tipados.
              </p>
              <div className="flex flex-wrap gap-2">
                {pillar.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-surface-raised border border-border-default font-mono text-xs text-text-high"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: Target Audience & Direct Action */}
          <div className="lg:col-span-5 space-y-8">
            <Card className="p-6 sm:p-8 bg-surface-base border-primary/40">
              <h3 className="font-headline text-lg font-bold text-text-high mb-2">
                Perfil de Aplicação Ideal
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                {pillar.targetAudience}
              </p>

              <div className="p-4 rounded-xl bg-surface-inset border border-border-divider mb-6 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-text-faint">
                  <span>Auditoria de SLA:</span>
                  <span className="text-primary font-semibold">99.9% Alvo</span>
                </div>
                <div className="flex items-center justify-between text-text-faint">
                  <span>Conformidade:</span>
                  <span className="text-text-high">LGPD &amp; OWASP</span>
                </div>
                <div className="flex items-center justify-between text-text-faint">
                  <span>Código-Fonte:</span>
                  <span className="text-text-high">100% do Cliente</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full justify-center gap-2"
                onClick={() => push('/#contato')}
              >
                <span>Solicitar Diagnóstico desta Frente</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>

            <div className="p-6 rounded-2xl bg-surface-raised border border-border-divider">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="h-5 w-5 text-indigo-400" />
                <span className="font-headline font-bold text-sm text-text-high">
                  Governança &amp; Homologação
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Todas as entregas passam por validação contínua da nossa equipe de compliance antes do deploy final em produção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
