export type LinkVariant = 'button' | 'text' | 'icon';
export type LinkSize = 'sm' | 'md' | 'lg';
export type LinkColor = 'primary' | 'secondary' | 'accent';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: LinkVariant;
  size?: LinkSize;
  color?: LinkColor;
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
}