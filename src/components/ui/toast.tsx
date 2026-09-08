import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info';
}

interface ToastContextType {
  toast: (options: { title: string; description?: string; type?: 'success' | 'error' | 'info' }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, description, type = 'success' }: { title: string; description?: string; type?: 'success' | 'error' | 'info' }) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, title, description, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
        {toasts.map(t => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-surface-base border border-border-default shadow-2xl animate-in slide-in-from-bottom-5 duration-200"
          >
            {t.type === 'success' && <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />}
            {t.type === 'error' && <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />}
            {t.type === 'info' && <Info className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />}
            <div className="flex-1 text-left">
              <h4 className="text-sm font-semibold text-text-high">{t.title}</h4>
              {t.description && <p className="text-xs text-text-muted mt-1">{t.description}</p>}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-text-faint hover:text-text-high p-1 rounded transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
