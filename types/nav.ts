export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavigationProps {
  navItems: NavItem[];
}