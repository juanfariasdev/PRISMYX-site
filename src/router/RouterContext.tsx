import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextType {
  pathname: string;
  hash: string;
  search: string;
  params: Record<string, string>;
  push: (url: string) => void;
  replace: (url: string) => void;
  back: () => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Helper to extract dynamic parameters from pathname
function matchRoute(currentPath: string): { matchedPath: string; params: Record<string, string> } {
  // Check /servicos/:slug
  const servicosMatch = currentPath.match(/^\/servicos\/([^/]+)/);
  if (servicosMatch) {
    return { matchedPath: '/servicos/:slug', params: { slug: servicosMatch[1] } };
  }

  // Check /equipe/:id
  const equipeMatch = currentPath.match(/^\/equipe\/([^/]+)/);
  if (equipeMatch) {
    return { matchedPath: '/equipe/:id', params: { id: equipeMatch[1] } };
  }

  return { matchedPath: currentPath, params: {} };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [hash, setHash] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash || '';
    }
    return '';
  });

  const [search, setSearch] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.search || '';
    }
    return '';
  });

  const [params, setParams] = useState<Record<string, string>>(() => {
    return matchRoute(typeof window !== 'undefined' ? window.location.pathname : '/').params;
  });

  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname || '/';
      setPathname(currentPath);
      setHash(window.location.hash || '');
      setSearch(window.location.search || '');
      setParams(matchRoute(currentPath).params);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToTarget = useCallback((target: string) => {
    let attempts = 0;
    const maxAttempts = 12;

    const tryScroll = () => {
      const element = document.querySelector(target);
      if (element) {
        const headerOffset = 76; // header 64px + 12px margin
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 40);
      }
    };

    setTimeout(tryScroll, 20);
  }, []);

  const push = useCallback((url: string) => {
    // If it's a pure hash link on the current page (e.g. #servicos)
    if (url.startsWith('#')) {
      window.history.pushState(null, '', url);
      setHash(url);
      scrollToTarget(url);
      return;
    }

    try {
      const parsedUrl = new URL(url, window.location.origin);
      window.history.pushState({}, '', parsedUrl.pathname + parsedUrl.search + parsedUrl.hash);
      setPathname(parsedUrl.pathname);
      setHash(parsedUrl.hash);
      setSearch(parsedUrl.search);
      setParams(matchRoute(parsedUrl.pathname).params);

      if (parsedUrl.hash) {
        scrollToTarget(parsedUrl.hash);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      window.location.href = url;
    }
  }, [scrollToTarget]);

  const replace = useCallback((url: string) => {
    try {
      const parsedUrl = new URL(url, window.location.origin);
      window.history.replaceState({}, '', parsedUrl.pathname + parsedUrl.search + parsedUrl.hash);
      setPathname(parsedUrl.pathname);
      setHash(parsedUrl.hash);
      setSearch(parsedUrl.search);
      setParams(matchRoute(parsedUrl.pathname).params);
    } catch {
      window.location.href = url;
    }
  }, []);

  const back = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, hash, search, params, push, replace, back }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
