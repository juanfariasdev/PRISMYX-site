import React from 'react';
import { useRouter } from './RouterContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  onClick,
  ...rest
}) => {
  const router = useRouter();

  const isCurrent =
    href === '/'
      ? router.pathname === '/' && !router.hash
      : href.startsWith('#')
      ? router.hash === href
      : router.pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Allow modifier keys (cmd/ctrl click to open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    e.preventDefault();
    router.push(href);
  };

  const combinedClasses = `${className} ${isCurrent && activeClassName ? activeClassName : ''}`.trim();

  return (
    <a href={href} onClick={handleClick} className={combinedClasses} {...rest}>
      {children}
    </a>
  );
};
