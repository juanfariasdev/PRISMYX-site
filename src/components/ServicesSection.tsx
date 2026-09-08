import React from 'react';
import { Rocket, LayoutDashboard, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { SERVICE_PILLARS } from '../data/mockData';
import { useRouter } from '../router/RouterContext';

const iconMap = {
  Rocket,
  LayoutDashboard,
  Workflow,
};

export const ServicesSection: React.FC = () => {
  const router = useRouter();

  return (
    <section id="servicos" className="py-20 md:py-28 border-t border-border-divider relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            04. Capacidades e Serviços
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight leading-tight mb-4">
            Três frentes integradas para destravar a maturidade digital do seu negócio.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Do primeiro clique do usuário final à consolidação do lead no CRM corporativo, unificamos design, engenharia de software e automações de infraestrutura.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICE_PILLARS.map(pillar => {
            const Icon = iconMap[pillar.iconName as keyof typeof iconMap] || Rocket;
            return (
              <Card
                key={pillar.id}
                className="group flex flex-col justify-between bg-surface-base border-border-default hover:border-primary/50 hover:shadow-[0_0_24px_-8px_rgba(90,240,179,0.2)] transition-all duration-300"
              >
                <div>
                  <CardHeader className="p-6 md:p-8 pb-4 text-left">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="accent" className="font-mono">
                        {pillar.pillarNumber}
                      </Badge>
                      <div className="p-2.5 rounded-lg bg-surface-raised text-primary group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl mb-3">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {pillar.shortDesc}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 md:p-8 pt-2 text-left">
                    {/* Feature list */}
                    <div className="space-y-3 mb-6">
                      {pillar.features.map(feat => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-text-high">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-divider">
                      {pillar.stack.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-surface-raised border border-border-divider font-mono text-[11px] text-text-muted group-hover:text-text-high transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-6 md:p-8 pt-4">
                  <Button
                    variant="outline"
                    className="w-full justify-between group-hover:border-primary group-hover:text-primary transition-all"
                    onClick={() => router.push(`/servicos/${pillar.slug}`)}
                  >
                    <span>Ver Arquitetura e Escopo</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
