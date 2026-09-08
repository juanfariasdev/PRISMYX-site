import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'neutral' | 'accent' | 'governance' | 'tertiary' | 'outline' | 'success';
  className?: string;
  children?: React.ReactNode;
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default:
      'bg-primary/10 border-primary/30 text-emerald-400 dark:text-emerald-300',
    neutral:
      'bg-surface-inset border-border-divider text-text-faint',
    accent:
      'bg-primary/15 border-primary/40 text-primary font-bold shadow-[0_0_8px_rgba(90,240,179,0.2)]',
    governance:
      'bg-indigo-500/15 border-indigo-400/30 text-indigo-400 dark:text-indigo-300',
    tertiary:
      'bg-teal-500/15 border-teal-400/30 text-teal-400 dark:text-teal-300',
    outline:
      'border-border-default text-text-muted bg-transparent',
    success:
      'bg-emerald-950/80 border-emerald-500/30 text-emerald-300',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider border transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
