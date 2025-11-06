'use client';

import Link from 'next/link';
import {NavItem} from '@/types/nav'
interface DesktopNavProps {
  navItems: NavItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }) => {
  const leftNavItems = navItems.slice(0, 2);
  const rightNavItems = navItems.slice(2); 

 return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                scroll={false}
                className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="#home" scroll={false}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 transform -skew-x-12 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300">
                <span className="text-white font-bold text-lg skew-x-12">LO</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                scroll={false}
                className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;