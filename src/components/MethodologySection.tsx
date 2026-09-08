import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../data/mockData';
import { Badge } from './ui/badge';
import { CheckCircle2, ChevronRight, Clock, FileText } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="processo" className="py-20 md:py-28 border-t border-border-divider relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            06. Metodologia Iterativa
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight leading-tight mb-4">
            Cinco etapas estruturadas para transformar requisitos em código em produção.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Transparência total em cada sprint: relatórios de progresso, acesso antecipado a ambientes de homologação e validação contínua.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="space-y-4">
          {METHODOLOGY_STEPS.map((m, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={m.step}
                onClick={() => setActiveStep(index)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                  isSelected
                    ? 'bg-surface-raised border-primary/50 shadow-[0_0_24px_-10px_rgba(90,240,179,0.25)]'
                    : 'bg-surface-base border-border-default hover:border-border-default/80 hover:bg-surface-base/80'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Big Step Number */}
                    <div
                      className={`font-mono text-2xl sm:text-3xl font-bold transition-colors ${
                        isSelected ? 'text-primary' : 'text-text-faint'
                      }`}
                    >
                      {m.step}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-text-faint uppercase tracking-wider">
                          {m.phase}
                        </span>
                        <span className="font-mono text-xs text-text-faint">•</span>
                        <span className="font-mono text-xs text-primary flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {m.duration}
                        </span>
                      </div>
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-text-high">
                        {m.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 self-start md:self-center">
                    {m.tags.map(t => (
                      <span
                        key={t}
                        className={`font-mono text-[11px] px-2.5 py-1 rounded border transition-colors ${
                          isSelected
                            ? 'bg-primary/10 border-primary/30 text-emerald-400'
                            : 'bg-surface-inset border-border-divider text-text-muted'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description & Artifacts */}
                <div className="mt-4 pt-4 border-t border-border-divider/60">
                  <p className="text-sm text-text-muted leading-relaxed">
                    {m.description}
                  </p>

                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-border-divider/40 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {m.artifacts.map(art => (
                        <div
                          key={art}
                          className="flex items-center gap-2 text-xs font-mono text-text-high bg-surface-inset/70 p-2 rounded-lg border border-border-divider/50"
                        >
                          <FileText className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="truncate">{art}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
