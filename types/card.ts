import { BaseComponentProps } from "./baseTypes";

export type CardVariant = 'default' | 'outline' | 'glass';

export interface CardProps extends BaseComponentProps {
  variant?: CardVariant;
  imageUrl?: string;
  title?: string;
  description?: string;
  tags?: string[];
  onClick?: () => void;
  href?: string;
}