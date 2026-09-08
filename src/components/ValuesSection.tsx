import React from 'react';
import { Target, Compass, Zap, Shield, Sparkles, FileCode2, Users2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export const ValuesSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      category: 'Estratégia',
      title: 'Alinhamento e Agilidade',
      desc: 'Desenvolvemos com propósito de negócio. Cada funcionalidade deve impactar diretamente a operação ou a receita do cliente.',
      icon: Zap,
    },
    {
      num: '02',
      category: 'Privacidade',
      title: 'Security by Design',
      desc: 'LGPD e proteção de dados não são etapas finais; são requisitos estruturais presentes desde o primeiro diagrama arquitetural.',
      icon: Shield,
    },
    {
      num: '03',
      category: 'UX & Acessibilidade',
      title: 'Experiência Fluida',
      desc: 'Interfaces limpas, rápidas e universais. Se o usuário precisa de um manual para operar a aplicação, o projeto falhou.',
      icon: Sparkles,
    },
    {
      num: '04',
      category: 'Padrões',
      title: 'Código Sustentável',
      desc: 'Testes automatizados, tipagem estrita e documentação viva. Código feito para ser mantido e evoluído por qualquer equipe técnica.',
      icon: FileCode2,
    },
    {
      num: '05',
      category: 'Relação',
      title: 'Parceria Contínua',
      desc: 'Não encerramos o relacionamento no deploy. Monitoramos, refinamos e evoluímos as soluções lado a lado com a liderança do cliente.',
      icon: Users2,
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-border-divider relative bg-surface-raised/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            03. Diretrizes &amp; Valores
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight leading-tight mb-4">
            Princípios inegociáveis que norteiam cada linha de código entregue.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Nossa cultura técnica combina velocidade de startup com o rigor e a governança exigidos por grandes corporações.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <Card className="relative overflow-hidden bg-surface-base border-border-default hover:border-primary/50 transition-all p-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                <Target className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                Nossa Missão
              </span>
            </div>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-text-high mb-3 leading-snug">
              Engenharia a serviço da eficiência e escalabilidade do cliente.
            </h3>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Transformar complexidade técnica em produtos digitais de alta performance, conectando aplicações,
              automações e bancos de dados para que empresas operem com máxima eficiência e velocidade sustentável.
            </p>
          </Card>

          {/* Vision */}
          <Card className="relative overflow-hidden bg-surface-base border-border-default hover:border-primary/50 transition-all p-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Compass className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
                Nossa Visão
              </span>
            </div>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-text-high mb-3 leading-snug">
              Referência em software de alta garantia até 2028.
            </h3>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Ser a principal referência técnica em arquitetura de software de alta tolerância, governança de dados e plataformas críticas no ecossistema empresarial latino-americano até 2028.
            </p>
          </Card>
        </div>

        {/* 5 Principles Horizontal/Bento Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {principles.map(p => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="p-5 rounded-xl bg-surface-base border border-border-default hover:border-border-default/80 hover:bg-surface-raised transition-all flex flex-col text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-text-faint">
                    {p.num} // {p.category}
                  </span>
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-headline font-bold text-base text-text-high mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mt-auto">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
