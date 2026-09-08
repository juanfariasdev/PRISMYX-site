import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, ShieldCheck, Lock, FileCheck, Eye, Terminal } from 'lucide-react';
import { Link } from '../router/Link';

export const SecurityLgpdPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24">
      <SEOHead
        title="Governança de Dados, Segurança & LGPD | Prismyx Tech"
        description="Diretrizes de Privacy by Design, auditoria contínua de fluxo de dados e conformidade com a Lei 13.709/2018 (LGPD)."
        canonical="https://prismyx.tech/privacidade-lgpd"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
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

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="tertiary">COMPLIANCE &amp; PRIVACY</Badge>
            <span className="font-mono text-xs text-text-faint">LEI Nº 13.709/2018</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight mb-4">
            Governança de Dados e Segurança da Informação
          </h1>
          <p className="text-text-muted text-base leading-relaxed">
            A Prismyx Tech adota o princípio de Privacy and Security by Design em 100% dos seus produtos digitais,
            garantindo proteção integral a titulares e mitigação de passivos regulatórios.
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1: Encarregada de Dados */}
          <Card className="p-8 bg-surface-base">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="font-headline text-xl font-bold text-text-high">
                Encarregada pelo Tratamento de Dados (DPO)
              </h2>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              A gestão de conformidade é liderada por nossa DPO, Naomi Cielo (Certificação CIPM / Lead Auditor ISO 27001), responsável pelo canal direto de comunicação com titulares e a Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
            <div className="font-mono text-xs p-3 rounded-lg bg-surface-inset border border-border-divider text-text-faint">
              Canal de Dúvidas ou Requisições de Titulares: <span className="text-primary font-bold">dpo@prismyx.tech</span>
            </div>
          </Card>

          {/* Section 2: Princípios Técnicos */}
          <Card className="p-8 bg-surface-base space-y-6">
            <h2 className="font-headline text-xl font-bold text-text-high flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              <span>Controles Criptográficos e Infraestrutura</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-surface-raised border border-border-divider">
                <span className="text-primary font-bold block mb-1">Criptografia em Trânsito</span>
                <span className="text-text-muted leading-relaxed block">
                  Terminação TLS 1.3 obrigatória, HSTS e cifras seguras SHA-256 com notas máximas em auditorias SSL Labs.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-raised border border-border-divider">
                <span className="text-primary font-bold block mb-1">Criptografia em Repouso</span>
                <span className="text-text-muted leading-relaxed block">
                  Bancos de dados e buckets S3 protegidos por chaves AES-256 gerenciadas via AWS KMS com rotação automática.
                </span>
              </div>
            </div>
          </Card>

          {/* Section 3: Minimization */}
          <Card className="p-8 bg-surface-base space-y-4">
            <h2 className="font-headline text-xl font-bold text-text-high flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-brand-primary" />
              <span>Minimização e Propriedade de Dados</span>
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Tratamos apenas os dados estritamente necessários para viabilizar as funcionalidades acordadas em escopo.
              A Prismyx Tech nunca monetiza, repassa ou utiliza dados corporativos de seus clientes para finalidades secundárias.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
