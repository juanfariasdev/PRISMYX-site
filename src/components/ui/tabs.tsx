import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../lib/utils';

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const Tabs: React.FC<{
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}> = ({ defaultValue, value: controlledValue, onValueChange, children, className }) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = (val: string) => {
    if (!isControlled) setUncontrolledValue(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={cn('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    className={cn(
      'inline-flex h-11 items-center justify-center rounded-xl bg-surface-base p-1 border border-border-default text-text-muted',
      className
    )}
    {...props}
  />
);

export const TabsTrigger: React.FC<{
  value: string;
  children: React.ReactNode;
  className?: string;
}> = ({ value, children, className }) => {
  const context = useContext(TabsContext);
  if (!context) return null;
  const isActive = context.value === value;

  return (
    <button
      type="button"
      onClick={() => context.onValueChange(value)}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium transition-all cursor-pointer',
        isActive
          ? 'bg-surface-raised text-primary shadow-sm border border-border-divider font-semibold'
          : 'text-text-muted hover:text-text-high hover:bg-surface-raised/40',
        className
      )}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<{
  value: string;
  children: React.ReactNode;
  className?: string;
}> = ({ value, children, className }) => {
  const context = useContext(TabsContext);
  if (!context) return null;
  if (context.value !== value) return null;

  return <div className={cn('mt-4 animate-in fade-in-50 duration-200', className)}>{children}</div>;
};
