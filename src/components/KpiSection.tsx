import React from 'react';
import { CheckCircle2, Network, Cloud, Gauge, Timer, Smile } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';
import { STAT_KPIS } from '../data/mockData';

const iconMap = {
  CheckCircle2,
  Network,
  Cloud,
  Gauge,
  Timer,
  Smile,
};

export const KpiSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 border-t border-border-divider relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            02. Governança e Indicadores
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight leading-tight mb-4">
            Engenharia orientada a previsibilidade, métricas e resultados corporativos.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Não entregamos apenas código; sustentamos operações digitais que precisam funcionar 24 horas por dia, 7 dias por semana, sob qualquer volume de requisições.
          </p>
        </div>

        {/* 6 StatCards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAT_KPIS.map(kpi => {
            const IconComponent = iconMap[kpi.icon as keyof typeof iconMap] || CheckCircle2;
            return (
              <Card
                key={kpi.id}
                className="group relative overflow-hidden bg-surface-base hover:bg-surface-raised/80 border-border-default hover:border-primary/50 transition-all duration-300"
              >
                {/* Subtle top edge border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-primary transition-colors duration-300" />

                <CardHeader className="p-6 pb-2 flex-row items-center justify-between space-y-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-faint">
                    {kpi.label}
                  </span>
                  <div className="p-2 rounded-lg bg-surface-inset text-primary group-hover:scale-110 transition-transform">
                    <IconComponent className="h-4 w-4" />
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-2 text-left">
                  <div className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight my-2">
                    {kpi.value}
                  </div>
                  <div className="font-medium text-sm text-text-high mb-2 font-headline">
                    {kpi.subLabel}
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {kpi.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
