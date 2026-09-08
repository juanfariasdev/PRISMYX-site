import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Prismyx Tech',
  description = 'Desenvolvimento de sites, aplicações e integrações para empresas que escalam com tecnologia estruturada e governança de software.',
  canonical,
  ogType = 'website',
  jsonLd,
}) => {
  useEffect(() => {
    // Update Title
    const formattedTitle = title.includes('Prismyx') ? title : `${title} | Prismyx Tech`;
    document.title = formattedTitle;

    // Helper for meta tags
    const setMetaTag = (nameOrProperty: string, value: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    setMetaTag('description', description);
    setMetaTag('og:title', formattedTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // JSON-LD Structured Data
    if (jsonLd) {
      let scriptTag = document.getElementById('jsonld-data') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'jsonld-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, ogType, jsonLd]);

  return null;
};
