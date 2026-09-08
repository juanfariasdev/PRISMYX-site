import React, { useState } from 'react';
import { Layers, Sun, Moon, Menu, ArrowRight, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from '../router/RouterContext';
import { Link } from '../router/Link';
import { Sheet } from './ui/sheet';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre', href: '#sobre', code: '02' },
    { label: 'Serviços', href: '#servicos', code: '04' },
    { label: 'Stack', href: '#stack', code: '05' },
    { label: 'Processo', href: '#processo', code: '06' },
    { label: 'Time', href: '#time', code: '07' },
    { label: 'FAQ', href: '#faq', code: '08' },
    { label: 'Contato', href: '#contato', code: '09' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      if (router.pathname !== '/') {
        router.push('/' + href);
      } else {
        router.push(href);
      }
    }, 60);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas-bg/85 backdrop-blur-xl border-b border-border-divider shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 bg-surface-raised border border-border-default rounded flex items-center justify-center group-hover:border-primary transition-colors shrink-0">
            <Layers className="text-primary h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-lg sm:text-xl text-text-high font-bold tracking-tight leading-none">
              PRISMYX<span className="text-primary">.TECH</span>
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-text-faint uppercase tracking-widest leading-tight mt-0.5">
              High-Assurance Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`transition-colors cursor-pointer text-sm font-medium ${
                router.hash === link.href ? 'text-primary font-semibold' : 'text-text-muted hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Quick Route Link */}
          <Link
            href="/calculadora"
            className="text-text-faint hover:text-primary font-mono text-xs flex items-center gap-1 transition-colors ml-2 px-2.5 py-1 rounded bg-surface-raised border border-border-divider"
          >
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span>Simulador SLA</span>
          </Link>
        </nav>

        {/* Actions & Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface-raised border border-border-default text-text-muted hover:text-text-high hover:border-primary/50 transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            title={theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-400" />
            )}
          </button>

          {/* Primary CTA Button (Desktop / Tablet) */}
          <Button
            onClick={() => handleNavClick('#contato')}
            className="hidden sm:inline-flex items-center gap-2"
          >
            <span>Falar sobre projeto</span>
            <ArrowRight className="h-4 w-4" />
          </Button>

          {/* System Status Avatar Indicator (Desktop only to prevent mobile crowding) */}
          <div
            className="hidden md:flex w-8 h-8 rounded-full bg-primary items-center justify-center text-text-inverse font-bold text-xs cursor-pointer shadow-sm shrink-0"
            title="Sistemas e SLAs Operacionais"
          >
            <ShieldCheck className="h-4 w-4 text-text-inverse" />
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-2 rounded-lg bg-surface-raised border border-border-default text-text-high hover:border-primary/50 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Abrir menu de navegação"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      <Sheet
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        title={
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-surface-raised border border-border-default rounded flex items-center justify-center">
              <Layers className="text-primary h-3.5 w-3.5" />
            </div>
            <span className="font-headline font-bold text-text-high tracking-tight text-sm">
              PRISMYX<span className="text-primary">.TECH</span>
            </span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-primary/10 text-primary border border-primary/20 ml-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              ONLINE
            </span>
          </div>
        }
      >
        <div className="flex flex-col gap-5">
          {/* Quick System Badge & Theme Switcher in Drawer */}
          <div className="p-3 rounded-xl bg-surface-raised/80 border border-border-divider flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-text-faint uppercase">Modo de Exibição</span>
              <span className="text-xs font-semibold text-text-high">
                {theme === 'dark' ? 'Tema Escuro (Dark)' : 'Tema Claro (Light)'}
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-lg bg-surface border border-border-default text-xs font-medium text-text-high hover:border-primary/50 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-3.5 w-3.5 text-amber-400" />
                  <span>Claro</span>
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Escuro</span>
                </>
              )}
            </button>
          </div>

          {/* Section Nav Items */}
          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-faint mb-2 px-1">
              Navegação do Ecossistema
            </span>
            <div className="flex flex-col gap-1">
              {navLinks.map(link => {
                const isActive = router.hash === link.href;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left py-2.5 px-3 rounded-lg transition-all text-sm font-medium flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-primary/10 text-primary font-bold border border-primary/30'
                        : 'text-text-high hover:bg-surface-raised hover:text-primary'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] text-text-faint">
                        {link.code}.
                      </span>
                      <span>{link.label}</span>
                    </div>
                    <span className="text-text-faint text-xs font-mono">→</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dedicated Tools */}
          <div className="pt-3 border-t border-border-divider flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-faint px-1">
              Módulos Especializados
            </span>
            <Link
              href="/calculadora"
              onClick={() => {
                setMobileMenuOpen(false);
                document.body.style.overflow = '';
              }}
              className="py-2.5 px-3 rounded-lg bg-surface-raised border border-border-default text-xs font-medium text-text-high hover:border-primary/50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary shrink-0" />
                <span>Simulador de SLA & Arquitetura</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border-divider text-text-faint">
                INTERATIVO
              </span>
            </Link>
            <Link
              href="/privacidade-lgpd"
              onClick={() => {
                setMobileMenuOpen(false);
                document.body.style.overflow = '';
              }}
              className="py-2.5 px-3 rounded-lg bg-surface-raised border border-border-default text-xs font-medium text-text-high hover:border-primary/50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-tertiary shrink-0" />
                <span>Conformidade LGPD & Segurança</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border-divider text-text-faint">
                DPO / ISO
              </span>
            </Link>
          </div>

          {/* Action CTA & Contact Footer */}
          <div className="pt-4 border-t border-border-divider flex flex-col gap-3">
            <Button
              onClick={() => handleNavClick('#contato')}
              className="w-full justify-center py-3"
            >
              <span>Falar sobre projeto</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <div className="text-center">
              <span className="text-[11px] text-text-muted">
                ops@prismyx.tech • SLA 24/7 sob contrato
              </span>
            </div>
          </div>
        </div>
      </Sheet>
    </header>
  );
};
