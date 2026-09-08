import React, { useState, useMemo } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useRouter } from '../router/RouterContext';
import { ArrowLeft, Cpu, CheckCircle2, ShieldAlert, Sparkles, ArrowRight, Clock, Layers } from 'lucide-react';
import { Link } from '../router/Link';
import { useToast } from '../components/ui/toast';

export const CalculatorPage: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [projectType, setProjectType] = useState<'landing' | 'app' | 'integrations'>('app');
  const [trafficVolume, setTrafficVolume] = useState<'low' | 'medium' | 'high'>('medium');
  const [slaRequirement, setSlaRequirement] = useState<'standard' | 'high' | 'critical'>('high');
  const [needsLgpdDpo, setNeedsLgpdDpo] = useState(true);
  const [needsCrmSync, setNeedsCrmSync] = useState(true);

  // Computed metrics
  const estimate = useMemo(() => {
    let baseSprints = 3;
    let baseUptime = '99.9%';
    let infraTier = 'AWS ECS Fargate + RDS Multi-AZ';

    if (projectType === 'landing') {
      baseSprints = 1.5;
      baseUptime = '99.95%';
      infraTier = 'Edge CloudFront CDN + S3 Static Engine';
    } else if (projectType === 'integrations') {
      baseSprints = 2;
      baseUptime = '99.99%';
      infraTier = 'Docker Self-Hosted n8n + Redis Dead-Letter Queue';
    } else {
      // app
      baseSprints = trafficVolume === 'high' ? 5 : trafficVolume === 'medium' ? 3.5 : 2.5;
      baseUptime = slaRequirement === 'critical' ? '99.99%' : '99.9%';
      infraTier =
        trafficVolume === 'high'
          ? 'AWS Kubernetes (EKS) + PostgreSQL Aurora Serverless + Redis Cluster'
          : 'AWS ECS Fargate Container + PostgreSQL RDS';
    }

    if (needsLgpdDpo) {
      baseSprints += 0.5;
    }
    if (needsCrmSync && projectType !== 'integrations') {
      baseSprints += 0.5;
    }

    const estimatedDays = Math.round(baseSprints * 6); // 6 days per sprint avg

    return {
      sprints: baseSprints.toFixed(1),
      estimatedDays,
      uptime: baseUptime,
      infra: infraTier,
      leadTime: `${estimatedDays} dias úteis estimados`,
    };
  }, [projectType, trafficVolume, slaRequirement, needsLgpdDpo, needsCrmSync]);

  const handleCopyScope = () => {
    const text = `Simulação de Escopo Prismyx Tech:
- Tipo: ${projectType}
- Tráfego: ${trafficVolume}
- SLA: ${slaRequirement} (${estimate.uptime})
- DPO LGPD: ${needsLgpdDpo ? 'Sim' : 'Não'}
- Integração CRM: ${needsCrmSync ? 'Sim' : 'Não'}
- Lead Time Estimado: ${estimate.leadTime} (${estimate.sprints} sprints)
- Arquitetura de Nuvem: ${estimate.infra}`;

    navigator.clipboard?.writeText(text);
    toast({
      title: 'Escopo Copiado com Sucesso',
      description: 'Use este resumo para agilizar o diagnóstico com nossa equipe.',
      type: 'success',
    });
  };

  return (
    <div className="pt-28 pb-24">
      <SEOHead
        title="Simulador de SLA e Arquitetura | Prismyx Tech"
        description="Dimensione a complexidade técnica, infraestrutura de nuvem e lead time para o projeto de software da sua empresa."
        canonical="https://prismyx.tech/calculadora"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retornar ao Início</span>
          </Link>
        </div>

        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Ferramenta para CTOs &amp; Gestores
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight mb-4">
            Simulador de Arquitetura, SLA &amp; Lead Time
          </h1>
          <p className="text-text-muted text-base leading-relaxed">
            Calcule o modelo de infraestrutura recomendado, conformidade necessária e prazo estimado com base nos padrões operacionais da Prismyx Tech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Project Type */}
            <Card className="p-6 bg-surface-base">
              <label className="font-mono text-xs font-bold uppercase text-text-faint block mb-3">
                1. Tipo de Solução Pretendida
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'landing', label: 'Sites & LPs', desc: 'Core Web Vitals 95+' },
                  { id: 'app', label: 'Aplicação Web', desc: 'SaaS / Portais B2B' },
                  { id: 'integrations', label: 'Integrações', desc: 'CRM / n8n / APIs' },
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'bg-surface-raised border-primary text-primary shadow-sm'
                        : 'bg-surface-inset border-border-divider text-text-muted hover:text-text-high'
                    }`}
                  >
                    <div className="font-bold text-xs font-headline">{item.label}</div>
                    <div className="text-[11px] text-text-faint mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </Card>

            {/* 2. Volume & Concurrency */}
            <Card className="p-6 bg-surface-base">
              <label className="font-mono text-xs font-bold uppercase text-text-faint block mb-3">
                2. Volume de Requisições &amp; Tráfego Esperado
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'low', label: 'Até 50k req/dia' },
                  { id: 'medium', label: '50k - 500k req/dia' },
                  { id: 'high', label: '500k+ req/dia (Crítico)' },
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTrafficVolume(item.id as any)}
                    className={`p-3 rounded-lg border text-center text-xs font-mono transition-all cursor-pointer ${
                      trafficVolume === item.id
                        ? 'bg-surface-raised border-primary text-primary font-bold'
                        : 'bg-surface-inset border-border-divider text-text-muted hover:text-text-high'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </Card>

            {/* 3. SLA Tier */}
            <Card className="p-6 bg-surface-base">
              <label className="font-mono text-xs font-bold uppercase text-text-faint block mb-3">
                3. Nível Contratual de Disponibilidade (SLA)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: '99.5% Uptime' },
                  { id: 'high', label: '99.9% Uptime' },
                  { id: 'critical', label: '99.99% Multi-region' },
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSlaRequirement(item.id as any)}
                    className={`p-3 rounded-lg border text-center text-xs font-mono transition-all cursor-pointer ${
                      slaRequirement === item.id
                        ? 'bg-surface-raised border-primary text-primary font-bold'
                        : 'bg-surface-inset border-border-divider text-text-muted hover:text-text-high'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </Card>

            {/* 4. Addons */}
            <Card className="p-6 bg-surface-base space-y-4">
              <label className="font-mono text-xs font-bold uppercase text-text-faint block">
                4. Requisitos Complementares de Governança
              </label>

              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={needsLgpdDpo}
                  onChange={e => setNeedsLgpdDpo(e.target.checked)}
                  className="h-4 w-4 rounded border-border-default text-primary accent-emerald-400 cursor-pointer"
                />
                <div>
                  <div className="text-sm font-semibold text-text-high">
                    Auditoria de Privacidade &amp; DPO (LGPD)
                  </div>
                  <div className="text-xs text-text-muted">
                    Validação do fluxo de dados por nossa encarregada de compliance (Lei 13.709/2018).
                  </div>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={needsCrmSync}
                  onChange={e => setNeedsCrmSync(e.target.checked)}
                  className="h-4 w-4 rounded border-border-default text-primary accent-emerald-400 cursor-pointer"
                />
                <div>
                  <div className="text-sm font-semibold text-text-high">
                    Integração Nativa com HubSpot / Kommo
                  </div>
                  <div className="text-xs text-text-muted">
                    Webhooks bidirecionais e filas com Dead-Letter Queue para zero perda de leads.
                  </div>
                </div>
              </label>
            </Card>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 sticky top-24">
            <Card className="p-6 sm:p-8 bg-surface-base border-primary/50 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-border-divider mb-6">
                <span className="font-mono text-xs text-primary uppercase font-bold">
                  Diagnóstico Estimado
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-primary/10 text-primary border border-primary/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  MÉTRICAS ATIVAS
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="font-mono text-xs text-text-faint uppercase block mb-1">
                    Prazo de Entrega Estimado
                  </span>
                  <div className="font-headline text-3xl font-bold text-text-high">
                    ~{estimate.estimatedDays} dias úteis
                  </div>
                  <div className="text-xs text-text-muted mt-0.5">
                    Equivalente a {estimate.sprints} sprints de engenharia.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-inset border border-border-divider space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-text-faint block">SLA Alvo:</span>
                    <span className="text-primary font-bold text-sm">{estimate.uptime}</span>
                  </div>
                  <div>
                    <span className="text-text-faint block">Stack de Infraestrutura:</span>
                    <span className="text-text-high text-xs">{estimate.infra}</span>
                  </div>
                  <div>
                    <span className="text-text-faint block">Propriedade Intelectual:</span>
                    <span className="text-text-high text-xs">100% Repositório do Cliente</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Button
                    size="lg"
                    className="w-full justify-center gap-2"
                    onClick={() => router.push('/#contato')}
                  >
                    <span>Submeter Escopo para Análise</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2 text-xs"
                    onClick={handleCopyScope}
                  >
                    <span>Copiar Resumo da Arquitetura</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
