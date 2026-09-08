import React, { useState } from 'react';
import { Layout, Terminal, Database, Cloud, Cpu, Sparkles, Check, Info } from 'lucide-react';
import { TECH_DOMAINS } from '../data/mockData';
import { TechItem } from '../types';
import { Badge } from './ui/badge';
import { Dialog, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';

const domainIcons = {
  Frontend: Layout,
  Backend: Terminal,
  Dados: Database,
  'Cloud & DevOps': Cloud,
  'Automação & CRM': Cpu,
};

export const TechStackSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  return (
    <section id="stack" className="py-20 md:py-28 border-t border-border-divider relative bg-surface-raised/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            05. Arquitetura &amp; Ferramentas
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight leading-tight mb-4">
            Stack técnica selecionada por robustez, velocidade e manutenibilidade.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Não adotamos modismos passageiros. Escolhemos tecnologias com forte suporte corporativo, documentação perene e ecossistema maduro.
          </p>
        </div>

        {/* 5 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TECH_DOMAINS.map(domain => {
            const Icon = domainIcons[domain.title as keyof typeof domainIcons] || Layout;
            return (
              <div
                key={domain.title}
                className="p-6 rounded-2xl bg-surface-base border border-border-default hover:border-border-default/80 flex flex-col text-left transition-all"
              >
                {/* Domain Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-border-divider">
                  <div className={`p-2 rounded-lg bg-surface-raised ${domain.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-headline font-bold text-base text-text-high">
                    {domain.title}
                  </h3>
                </div>

                {/* Items in Domain */}
                <div className="space-y-2.5 flex-1">
                  {domain.items.map(tech => (
                    <button
                      key={tech.name}
                      onClick={() => setSelectedTech(tech)}
                      className="w-full text-left p-2.5 rounded-lg bg-surface-raised/60 hover:bg-surface-raised border border-border-divider/60 hover:border-primary/50 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="font-medium text-xs text-text-high group-hover:text-primary transition-colors">
                        {tech.name}
                      </span>
                      <span className="font-mono text-[10px] text-text-faint px-1.5 py-0.5 rounded bg-surface-inset">
                        {tech.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Detail Modal */}
        <Dialog open={!!selectedTech} onOpenChange={open => !open && setSelectedTech(null)}>
          {selectedTech && (
            <div>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="accent">{selectedTech.category}</Badge>
                  <span className="font-mono text-xs text-text-faint">{selectedTech.tag}</span>
                </div>
                <DialogTitle>{selectedTech.name}</DialogTitle>
                <DialogDescription>
                  Padrão corporativo adotado nos projetos da Prismyx Tech.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 text-left py-2">
                <div className="p-4 rounded-xl bg-surface-inset border border-border-divider">
                  <h4 className="font-headline text-sm font-semibold text-text-high mb-1">
                    Justificativa Arquitetural
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {selectedTech.description ||
                      'Selecionado para garantir máxima previsibilidade em produção, segurança de tipos e tolerância a picos de tráfego sem degradação do serviço.'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-surface-raised border border-border-divider">
                    <span className="text-text-faint block mb-1">Suporte Corporativo</span>
                    <span className="text-primary font-semibold">LTS / Enterprise</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-raised border border-border-divider">
                    <span className="text-text-faint block mb-1">Compliance</span>
                    <span className="text-text-high font-semibold">ISO 27001 Ready</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button variant="outline" onClick={() => setSelectedTech(null)}>
                  Fechar
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </section>
  );
};
