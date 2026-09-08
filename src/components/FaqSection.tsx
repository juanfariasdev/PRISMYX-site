import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredItems = FAQ_ITEMS.filter(
    item =>
      item.question.toLowerCase().includes(filter.toLowerCase()) ||
      item.answer.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-border-divider relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            08. Perguntas Frequentes
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-text-high tracking-tight leading-tight mb-4">
            Respostas técnicas diretas para dúvidas de líderes de tecnologia.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Transparência desde o primeiro contato sobre processos, segurança, contratos e entregas.
          </p>

          {/* Quick Search */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="h-4 w-4 text-text-faint absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por SLA, LGPD, código..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-base border border-border-default text-xs text-text-high placeholder:text-text-faint focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Accordion list */}
        <Accordion type="single" defaultValue={['faq-1']} className="space-y-3 text-left">
          {filteredItems.map(item => (
            <AccordionItem key={item.id} id={item.id}>
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 shrink-0">
                    {item.category}
                  </span>
                  <span>{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
