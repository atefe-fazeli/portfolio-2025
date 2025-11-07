'use client';

import Link from 'next/link';
import {NavItem} from '@/types/nav'
interface DesktopNavProps {
  navItems: NavItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }) => {



 return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
         
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
         
      
         
       
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;