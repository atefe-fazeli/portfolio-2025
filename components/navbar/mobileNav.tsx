'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from '@/types/nav';
import { cn } from '@/utiles/utils';

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 lg:hidden">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            <Link href="#home" scroll={false} onClick={handleLinkClick}>
             
            </Link>


            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-slate-800 transition-colors duration-300"
              aria-label="منو"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={cn(
                    'w-full h-0.5 bg-white transition-all duration-300 transform',
                    isOpen ? 'rotate-45 translate-y-2.5' : ''
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 bg-white transition-all duration-300 opacity-100',
                    isOpen ? 'opacity-0' : ''
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 bg-white transition-all duration-300 transform',
                    isOpen ? '-rotate-45 -translate-y-2.5' : ''
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>


      <div
        className={cn(
          'fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out',
          'flex flex-col items-center justify-center',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-8 w-full">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-2xl text-white hover:text-green-400 transition-colors duration-300 py-4 px-8 w-full text-center"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;