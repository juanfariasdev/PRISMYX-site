import React, { useState } from 'react';
import { Layers, Sun, Moon, Menu, ArrowRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';
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
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Stack', href: '#stack' },
    { label: 'Processo', href: '#processo' },
    { label: 'Time', href: '#time' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (router.pathname !== '/') {
      router.push('/' + href);
    } else {
      router.push(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas-bg/85 backdrop-blur-xl border-b border-border-divider shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-surface-raised border border-border-default rounded flex items-center justify-center group-hover:border-primary transition-colors">
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

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-text-muted hover:text-primary transition-colors cursor-pointer text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          {/* Quick Dynamic Route links in dropdown or direct */}
          <Link
            href="/calculadora"
            className="text-text-faint hover:text-primary font-mono text-xs flex items-center gap-1 transition-colors ml-2 px-2 py-1 rounded bg-surface-raised border border-border-divider"
          >
            <Cpu className="w-3 h-3 text-primary" />
            <span>Simulador SLA</span>
          </Link>
        </nav>

        {/* Actions & Theme Switcher */}
        <div className="flex items-center gap-3">
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

          {/* Primary CTA Button */}
          <Button
            onClick={() => handleNavClick('#contato')}
            className="hidden sm:inline-flex items-center gap-2"
          >
            <span>Falar sobre projeto</span>
            <ArrowRight className="h-4 w-4" />
          </Button>

          {/* User Icon Avatar (matching the HTML screenshot) */}
          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-text-inverse font-bold text-xs cursor-pointer shadow-sm"
            title="Prismyx Operations Status"
          >
            <ShieldCheck className="h-4 w-4 text-text-inverse" />
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-2 rounded-lg bg-surface-raised border border-border-default text-text-high hover:border-primary/50 cursor-pointer"
            aria-label="Menu de navegação"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col gap-1 pb-4 border-b border-border-divider">
            <span className="font-mono text-xs text-primary uppercase">Menu Principal</span>
            <span className="text-sm text-text-muted">Navegação e governança</span>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 rounded-lg text-text-high hover:bg-surface-raised hover:text-primary transition-colors text-base font-medium flex items-center justify-between cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="text-text-faint text-xs font-mono">→</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-border-divider flex flex-col gap-3">
            <Link
              href="/calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg bg-surface-raised border border-border-default text-sm text-text-high flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-primary" />
              <span>Simulador de SLA e Arquitetura</span>
            </Link>
            <Link
              href="/privacidade-lgpd"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg bg-surface-raised border border-border-default text-sm text-text-high flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-tertiary" />
              <span>Conformidade LGPD & Segurança</span>
            </Link>
          </div>

          <div className="mt-auto pt-6 border-t border-border-divider">
            <Button
              onClick={() => handleNavClick('#contato')}
              className="w-full justify-center"
            >
              <span>Solicitar Diagnóstico</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Sheet>
    </header>
  );
};
