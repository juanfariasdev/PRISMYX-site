import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Terminal, CheckCircle2, ShieldCheck, Activity, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useRouter } from '../router/RouterContext';
import { useToast } from './ui/toast';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [copiedPing, setCopiedPing] = useState(false);

  const handleCopyEndpoint = () => {
    navigator.clipboard?.writeText('https://telemetry.prismyx.tech/v1/health');
    setCopiedPing(true);
    toast({
      title: 'Endpoint de Telemetria Copiado',
      description: 'https://telemetry.prismyx.tech/v1/health copiado para a área de transferência.',
      type: 'success',
    });
    setTimeout(() => setCopiedPing(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Top Ambient Glow Field */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-70 dark:opacity-90 blur-3xl -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(90, 240, 179, 0.18) 0%, rgba(13, 20, 29, 0.05) 60%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text & Actions Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-raised border border-border-default mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-mono text-xs font-semibold text-text-muted tracking-wide uppercase">
                ENGENHARIA DIGITAL &amp; OPERAÇÃO CONECTADA
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-high tracking-tight leading-[1.12] mb-6">
              Desenvolvimento de sites, aplicações e integrações para empresas que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-primary">
                escalam com tecnologia estruturada.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-8">
              Projetamos, desenvolvemos e conectamos produtos digitais com CRM, automações e infraestrutura
              para transformar operações em sistemas mais rápidos, integrados e escaláveis.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => router.push('#contato')}
                className="gap-2.5 shadow-[0_0_24px_-4px_rgba(90,240,179,0.35)]"
              >
                <span>Falar sobre projeto</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('#servicos')}
                className="gap-2"
              >
                <span>Ver serviços</span>
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Telemetry Tickers */}
            <div className="w-full pt-8 border-t border-border-divider/70 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="font-headline text-2xl sm:text-3xl font-bold text-text-high tracking-tight">
                  6 dias
                </div>
                <div className="font-mono text-xs text-text-faint uppercase tracking-wider mt-1">
                  Deploy Lead Time
                </div>
              </div>
              <div>
                <div className="font-headline text-2xl sm:text-3xl font-bold text-text-high tracking-tight">
                  99.9%
                </div>
                <div className="font-mono text-xs text-text-faint uppercase tracking-wider mt-1">
                  SLA Target Uptime
                </div>
              </div>
              <div>
                <div className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                  +70
                </div>
                <div className="font-mono text-xs text-text-faint uppercase tracking-wider mt-1">
                  Net Promoter Score
                </div>
              </div>
            </div>
          </div>

          {/* Right Live Telemetry Terminal Column */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-surface-base border border-border-default shadow-2xl p-5 sm:p-6 overflow-hidden">
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-border-divider mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
                  <Terminal className="h-4 w-4 text-primary" />
                  <span>telemetry::node_latam_01</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEndpoint}
                    className="p-1 rounded hover:bg-surface-raised text-text-faint hover:text-text-high transition-colors cursor-pointer"
                    title="Copiar endpoint de status"
                  >
                    {copiedPing ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    STATUS: ONLINE
                  </span>
                </div>
              </div>

              {/* Telemetry Metrics Stack */}
              <div className="space-y-3.5 font-mono text-xs">
                <div className="p-3 rounded-lg bg-surface-container border border-border-divider/70 flex items-center justify-between">
                  <div className="text-text-muted flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>200+ Projetos Web Entregues</span>
                  </div>
                  <span className="text-primary font-semibold">100% OK</span>
                </div>

                <div className="p-3 rounded-lg bg-surface-container border border-border-divider/70 flex items-center justify-between">
                  <div className="text-text-muted flex items-center gap-2">
                    <Activity className="h-4 w-4 text-brand-tertiary" />
                    <span>Frente Técnica</span>
                  </div>
                  <span className="text-text-high">Core Full-stack</span>
                </div>

                <div className="p-3 rounded-lg bg-surface-container border border-border-divider/70 flex items-center justify-between">
                  <div className="text-text-muted flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-indigo-400" />
                    <span>Infraestrutura em Nuvem</span>
                  </div>
                  <span className="text-text-high truncate max-w-[170px]">AWS • Docker • CI/CD</span>
                </div>

                <div className="p-3 rounded-lg bg-surface-container border border-border-divider/70 flex items-center justify-between">
                  <div className="text-text-muted flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span>Conectividade &amp; CRM</span>
                  </div>
                  <span className="text-text-high truncate max-w-[170px]">HubSpot • Kommo • n8n</span>
                </div>
              </div>

              {/* Acceptance Banner at bottom */}
              <div className="mt-5 p-3.5 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-primary animate-ping shrink-0" />
                <div className="text-left">
                  <div className="font-headline font-bold text-xs text-text-high">
                    Aceitando Novos Projetos
                  </div>
                  <div className="font-mono text-[11px] text-text-muted mt-0.5">
                    Capacidade aberta para o próximo trimestre.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
