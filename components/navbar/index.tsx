import { NavigationProps } from '@/types/nav';
import DesktopNav from './deskNav';
import MobileNav from './mobileNav';

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  return (
    <>
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </>
  );
};

export default Navigation;