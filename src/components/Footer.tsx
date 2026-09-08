import React from 'react';
import { Layers, ShieldCheck, Lock, ExternalLink, Terminal } from 'lucide-react';
import { Link } from '../router/Link';
import { useRouter } from '../router/RouterContext';

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className="border-t border-border-divider bg-surface-base text-text-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          {/* Brand and Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-surface-raised border border-border-default rounded flex items-center justify-center">
                <Layers className="text-primary h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xl text-text-high font-bold tracking-tight leading-none">
                  PRISMYX<span className="text-primary">.TECH</span>
                </span>
                <span className="font-mono text-[10px] text-text-faint uppercase tracking-widest leading-tight mt-0.5">
                  High-Assurance Systems
                </span>
              </div>
            </Link>

            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Arquitetura de software de alta tolerância, governança de dados e plataformas críticas de tecnologia desenhadas com rigor métrico e execução precisa.
            </p>

            {/* Operational Nodes Indicator */}
            <div className="p-3 rounded-lg bg-surface-inset border border-border-divider/80 font-mono text-[11px] text-text-faint inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>NODES: US-EAST-1 // SA-EAST-1 (LATAM)</span>
            </div>
          </div>

          {/* Column 1: Navegação */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-text-high mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="#stack" className="hover:text-primary transition-colors">Stack Técnica</Link></li>
              <li><Link href="#processo" className="hover:text-primary transition-colors">Metodologia</Link></li>
              <li><Link href="#time" className="hover:text-primary transition-colors">Time &amp; Governança</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">Perguntas Frequentes</Link></li>
              <li><Link href="/calculadora" className="hover:text-primary transition-colors font-semibold text-primary">Simulador de SLA</Link></li>
            </ul>
          </div>

          {/* Column 2: Serviços */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-text-high mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/servicos/sites-e-landing-pages" className="hover:text-primary transition-colors">
                  Sites &amp; LPs de Alta Performance
                </Link>
              </li>
              <li>
                <Link href="/servicos/aplicacoes-web-paineis-apps" className="hover:text-primary transition-colors">
                  Aplicações Web &amp; Painéis
                </Link>
              </li>
              <li>
                <Link href="/servicos/integracoes-automacoes-crm" className="hover:text-primary transition-colors">
                  Integrações &amp; CRM (HubSpot/n8n)
                </Link>
              </li>
              <li>
                <Link href="/privacidade-lgpd" className="hover:text-primary transition-colors">
                  Compliance &amp; LGPD DPO
                </Link>
              </li>
              <li>
                <Link href="/calculadora" className="hover:text-primary transition-colors">
                  Estimativas &amp; Dimensionamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Canais & Operação */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-text-high mb-4">
              Canais &amp; Operação
            </h4>
            <div className="space-y-3 font-mono text-[11px] leading-relaxed">
              <div>
                <span className="text-text-faint block">E-mail Operacional:</span>
                <a href="mailto:ops@prismyx.tech" className="text-primary hover:underline">
                  ops@prismyx.tech
                </a>
              </div>
              <div>
                <span className="text-text-faint block">Base Operacional:</span>
                <span className="text-text-high">Machado, MG — Brasil</span>
              </div>
              <div>
                <span className="text-text-faint block">Horário Comercial:</span>
                <span className="text-text-muted">08h às 18h (BRT)</span>
              </div>
              <div>
                <span className="text-text-faint block">Plantão Crítico:</span>
                <span className="text-emerald-400">24/7 sob contrato SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-divider/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-text-faint text-[11px]">
          <div>
            © {new Date().getFullYear()} Prismyx Tech. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-2 font-mono">
            <Lock className="h-3.5 w-3.5 text-primary" />
            <span>Segurança: TLS 1.3 / SHA-256 Verified</span>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <Link href="/privacidade-lgpd" className="hover:text-primary transition-colors">
              Privacidade (LGPD)
            </Link>
            <span>•</span>
            <Link href="#contato" className="hover:text-primary transition-colors">
              Falar com Engenharia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
