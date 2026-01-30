'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Expertise', href: '/expertise', icon: 'LightBulbIcon' },
    { label: 'Industry Solutions', href: '/industry-solutions', icon: 'BuildingOfficeIcon' },
    { label: 'Methodology', href: '/methodology', icon: 'CogIcon' },
    { label: 'Results', href: '/results', icon: 'ChartBarIcon' },
    { label: 'Architecture', href: '/architecture-showcase', icon: 'CubeIcon' },
    { label: 'Workflows', href: '/automation-architectures', icon: 'CubeTransparentIcon' },
    { label: 'About Us', href: '/about-us', icon: 'UserGroupIcon' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glassmorphism-header shadow-md' : 'bg-card'
        } ${className}`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/homepage"
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
            >
              <div className="relative h-16 w-auto">
                <Image
                  src="/assets/images/Pilot-1769732128759.png"
                  alt="Pilot Logic Systems Logo"
                  width={240}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200"
              >
                Book System Audit
              </a>
              <a
                href="mailto:chris@pilotlogicsystems.com"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background"
            onClick={closeMobileMenu}
          />
          <nav className="absolute top-20 left-0 right-0 bottom-0 bg-card overflow-y-auto">
            <div className="px-6 py-8 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}

              <div className="pt-6 space-y-3">
                <a
                  href="https://calendly.com/pilotlogicsystems/30min"
                  className="block w-full px-6 py-3 text-center text-base font-semibold text-foreground bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
                >
                  Book System Audit
                </a>
                <a
                  href="mailto:chris@pilotlogicsystems.com"
                  className="block w-full px-6 py-3 text-center bg-primary text-primary-foreground rounded-lg text-base font-bold hover:shadow-interactive transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;