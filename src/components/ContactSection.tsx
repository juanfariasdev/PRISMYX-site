import React, { useState } from 'react';
import { Clock, Globe, ShieldCheck, ArrowRight, CheckCircle2, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Dialog, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { useToast } from './ui/toast';
import { ProjectLeadForm } from '../types';

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ProjectLeadForm>({
    companyName: '',
    contactName: '',
    corporateEmail: '',
    serviceInterest: 'Sites & LPs de Alta Performance',
    techChallenge: '',
    lgpdAgreed: true,
  });

  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.corporateEmail) {
      toast({
        title: 'Campos Obrigatórios',
        description: 'Por favor preencha Nome da Empresa, Seu Nome e E-mail Corporativo.',
        type: 'error',
      });
      return;
    }

    if (!formData.lgpdAgreed) {
      toast({
        title: 'Consentimento LGPD',
        description: 'É necessário concordar com o tratamento para podermos retornar o contato.',
        type: 'error',
      });
      return;
    }

    setLoading(true);
    // Simulate API lead generation
    setTimeout(() => {
      setLoading(false);
      const generatedId = `PRX-${Math.floor(1000 + Math.random() * 9000)}-SYS`;
      setTicketId(generatedId);
      toast({
        title: 'Diagnóstico Solicitado com Sucesso',
        description: `Protocolo ${generatedId} gerado. SLA de retorno em < 24h úteis.`,
        type: 'success',
      });
    }, 900);
  };

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-border-divider relative bg-surface-raised/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Information & Value Propositions) */}
          <div className="lg:col-span-5 text-left">
            <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              09. Início de Projeto
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight leading-tight mb-4">
              Pronto para estruturar sua tecnologia? Fale com a equipe técnica.
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Conte sobre seu desafio. Um engenheiro e a liderança comercial retornarão em até 1 dia útil com uma análise preliminar de viabilidade e próximos passos.
            </p>

            <div className="space-y-6 pt-4 border-t border-border-divider">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-surface-raised border border-border-default text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-text-high">
                    Resposta em &lt; 1 dia útil
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mt-1">
                    Sem intermediários comerciais genéricos; conversa direta com quem entende de arquitetura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-surface-raised border border-border-default text-brand-tertiary shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-text-high">
                    Modelo Remoto Global • Base Operacional
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mt-1">
                    Atendimento a clientes em todo o Brasil e no exterior, com base operacional em Machado, MG.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-surface-raised border border-border-default text-indigo-400 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-text-high">
                    Garantia de Sigilo &amp; NDA
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mt-1">
                    Assinamos acordo de confidencialidade mútuo antes do compartilhamento de qualquer dado sensível.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Interactive Technical Form) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-base border border-border-default shadow-xl text-left">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Nome da Empresa *</Label>
                    <Input
                      id="companyName"
                      placeholder="Acme Inc. ou Tecnologia S/A"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactName">Seu Nome e Cargo *</Label>
                    <Input
                      id="contactName"
                      placeholder="Ana Souza, CTO"
                      value={formData.contactName}
                      onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="corporateEmail">E-mail Corporativo *</Label>
                    <Input
                      id="corporateEmail"
                      type="email"
                      placeholder="ana@empresa.com.br"
                      value={formData.corporateEmail}
                      onChange={e => setFormData({ ...formData, corporateEmail: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceInterest">Frente de Maior Interesse</Label>
                    <select
                      id="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="flex h-11 w-full rounded-lg bg-surface-inset border border-border-default px-4 py-2 text-sm text-text-high focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-colors"
                    >
                      <option value="Sites & LPs de Alta Performance">
                        Pilar 01: Sites &amp; LPs de Alta Performance
                      </option>
                      <option value="Aplicações & Painéis Sob Medida">
                        Pilar 02: Aplicações Web &amp; Painéis
                      </option>
                      <option value="Integrações, CRM & Automações">
                        Pilar 03: Integrações &amp; CRM (HubSpot/n8n)
                      </option>
                      <option value="Diagnóstico Completo Full-Stack">
                        Diagnóstico Completo Full-Stack &amp; Governança
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="techChallenge">Desafio Técnico ou Operacional</Label>
                  <Textarea
                    id="techChallenge"
                    placeholder="Descreva resumidamente o objetivo, gargalo atual ou escopo do projeto..."
                    value={formData.techChallenge}
                    onChange={e => setFormData({ ...formData, techChallenge: e.target.value })}
                    rows={4}
                  />
                </div>

                {/* LGPD Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="lgpdAgreed"
                    checked={formData.lgpdAgreed}
                    onChange={e => setFormData({ ...formData, lgpdAgreed: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-border-default text-primary focus:ring-primary accent-emerald-400 cursor-pointer"
                  />
                  <label htmlFor="lgpdAgreed" className="text-xs text-text-muted leading-relaxed cursor-pointer select-none">
                    Concordo com o tratamento dos dados para fins de contato comercial e diagnóstico técnico, nos termos da Lei Geral de Proteção de Dados (LGPD).
                  </label>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  isLoading={loading}
                  className="w-full justify-center gap-2 mt-4"
                >
                  <span>Solicitar Diagnóstico Técnico</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal Dialog */}
      <Dialog open={!!ticketId} onOpenChange={open => !open && setTicketId(null)}>
        {ticketId && (
          <div className="text-left space-y-4">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2 text-primary font-mono text-xs">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>SOLICITAÇÃO RECEBIDA COM SUCESSO</span>
              </div>
              <DialogTitle>Diagnóstico Técnico Agendado</DialogTitle>
              <DialogDescription>
                Seus dados foram roteados para a fila de alta prioridade da diretoria de tecnologia da Prismyx Tech.
              </DialogDescription>
            </DialogHeader>

            <div className="p-4 rounded-xl bg-surface-inset border border-border-divider font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-text-muted">
                <span>Protocolo de Atendimento:</span>
                <span className="font-bold text-primary">{ticketId}</span>
              </div>
              <div className="flex items-center justify-between text-text-muted">
                <span>Prazo de Retorno:</span>
                <span className="text-text-high">&lt; 24h úteis (SLA Corporativo)</span>
              </div>
              <div className="flex items-center justify-between text-text-muted">
                <span>Empresa:</span>
                <span className="text-text-high">{formData.companyName}</span>
              </div>
              <div className="flex items-center justify-between text-text-muted">
                <span>Responsável Técnico:</span>
                <span className="text-text-high">{formData.contactName}</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard?.writeText(ticketId);
                  toast({ title: 'Protocolo copiado' });
                }}
                className="gap-1.5 text-xs"
              >
                <Copy className="h-3.5 w-3.5" />
                <span>Copiar Protocolo</span>
              </Button>
              <Button onClick={() => setTicketId(null)}>
                Concluir
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
};
