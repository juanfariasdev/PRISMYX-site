import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { Badge } from './ui/badge';
import { Card, CardHeader, CardContent } from './ui/card';
import { Award, ShieldCheck, Code2, Layout, Briefcase, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/RouterContext';

const iconMap = {
  Award,
  ShieldCheck,
  Code2,
  Layout,
  Briefcase,
};

export const TeamSection: React.FC = () => {
  const router = useRouter();

  return (
    <section id="time" className="py-20 md:py-28 border-t border-border-divider relative bg-surface-raised/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            07. Engenharia &amp; Governança
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight leading-tight mb-4">
            Especialistas dedicados por domínio técnico, compliance e gestão ágil.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Uma equipe multidisciplinar estruturada para garantir excelência técnica, prazos cumpridos e conformidade regulatória plena.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map(member => {
            const Icon = iconMap[member.iconName as keyof typeof iconMap] || Award;
            return (
              <Card
                key={member.id}
                className="group flex flex-col justify-between bg-surface-base border-border-default hover:border-primary/50 transition-all duration-300 text-left p-6"
              >
                <div>
                  {/* Top Avatar Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-inset border border-border-divider flex items-center justify-center font-mono font-bold text-base text-primary group-hover:border-primary transition-colors">
                      {member.initials}
                    </div>
                    <div className="p-2 rounded-lg bg-surface-raised text-text-faint group-hover:text-primary transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Department & Name */}
                  <div className="font-mono text-[10px] text-text-faint uppercase tracking-wider mb-1">
                    {member.department}
                  </div>
                  <h3 className="font-headline font-bold text-lg text-text-high mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs text-primary font-medium mb-3">
                    {member.role}
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Badge & Action */}
                <div className="pt-4 border-t border-border-divider flex items-center justify-between">
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-raised border border-border-divider text-text-high">
                    {member.badge}
                  </span>
                  <button
                    onClick={() => router.push(`/equipe/${member.id}`)}
                    className="text-text-faint hover:text-primary transition-colors p-1"
                    title="Ver perfil detalhado"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
