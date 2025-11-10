'use client';

import Link from 'next/link';
import {NavItem} from '@/types/nav'
interface DesktopNavProps {
  navItems: NavItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }) => {



 return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-[linear-gradient(90deg,#312640_0%,#312640_18%,#712281_52%,#712281_68%,#5a5788_100%)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
         
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white hover:text-fuchsia-500 transition-colors duration-300 font-medium"
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