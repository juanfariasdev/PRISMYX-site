/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './router/RouterContext';
import { ToastProvider } from './components/ui/toast';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { TeamDetailPage } from './pages/TeamDetailPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { SecurityLgpdPage } from './pages/SecurityLgpdPage';

function AppContent() {
  const { pathname } = useRouter();

  let CurrentView = HomePage;

  if (pathname.startsWith('/servicos/')) {
    CurrentView = ServiceDetailPage;
  } else if (pathname.startsWith('/equipe/')) {
    CurrentView = TeamDetailPage;
  } else if (pathname === '/calculadora') {
    CurrentView = CalculatorPage;
  } else if (pathname === '/privacidade-lgpd') {
    CurrentView = SecurityLgpdPage;
  }

  return (
    <div className="min-h-screen flex flex-col bg-canvas-bg text-foreground selection:bg-primary/30 selection:text-primary">
      <Header />
      <div className="flex-1">
        <CurrentView />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </RouterProvider>
    </ThemeProvider>
  );
}
