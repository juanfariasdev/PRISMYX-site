import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (id: string) => void;
  type?: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const Accordion: React.FC<{
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  defaultValue?: string[];
  className?: string;
}> = ({ children, type = 'single', defaultValue = [], className }) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue);

  const toggleItem = (id: string) => {
    if (type === 'single') {
      setOpenItems(prev => (prev.includes(id) ? [] : [id]));
    } else {
      setOpenItems(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('flex flex-col gap-3', className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItemContext = createContext<{ id: string }>({ id: '' });

export const AccordionItem: React.FC<AccordionItemProps> = ({ id, children, className }) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <div
        className={cn(
          'rounded-xl bg-surface-container border border-border-default overflow-hidden transition-all duration-200',
          className
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionTrigger: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const { id } = useContext(AccordionItemContext);
  const context = useContext(AccordionContext);
  if (!context) return null;

  const isOpen = context.openItems.includes(id);

  return (
    <button
      type="button"
      onClick={() => context.toggleItem(id)}
      className={cn(
        'w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-text-high hover:text-primary transition-colors cursor-pointer select-none',
        className
      )}
      aria-expanded={isOpen}
    >
      <span className="text-base font-medium leading-normal">{children}</span>
      <ChevronDown
        className={cn(
          'h-5 w-5 shrink-0 text-primary transition-transform duration-200',
          isOpen && 'rotate-180 text-primary'
        )}
      />
    </button>
  );
};

export const AccordionContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const { id } = useContext(AccordionItemContext);
  const context = useContext(AccordionContext);
  if (!context) return null;

  const isOpen = context.openItems.includes(id);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'px-5 pb-5 pt-0 border-t border-border-divider/50 text-text-muted leading-relaxed text-sm animate-in fade-in-50 duration-200',
        className
      )}
    >
      <div className="pt-3">{children}</div>
    </div>
  );
};
