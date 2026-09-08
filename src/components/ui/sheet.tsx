import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: 'left' | 'right';
}

export const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, children, side = 'right' }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          'fixed inset-y-0 z-50 flex max-w-full',
          side === 'right' ? 'right-0' : 'left-0'
        )}
      >
        <div className="w-screen max-w-sm bg-surface-base border-l border-border-default p-6 shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-border-divider">
            <span className="font-headline font-bold text-text-high">PRISMYX.TECH</span>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-md p-1.5 text-text-faint hover:text-text-high hover:bg-surface-raised cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="pt-4 flex-1 flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
};
