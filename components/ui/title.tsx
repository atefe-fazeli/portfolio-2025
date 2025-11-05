'use client';

import { TitleProps } from '@/types/typography';
import { cn } from '@/utiles/utils';

export const Title = ({
  children,
  variant = 'h1',
  align = 'left',
  className,
  ...props
}: TitleProps) => {
  const baseStyles = `
    font-bold 
    text-gray-900 
    dark:text-white
    transition-colors 
    duration-200
  `;

  const variants = {
    h1: 'text-4xl md:text-5xl lg:text-6xl leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl leading-snug',
    h3: 'text-2xl md:text-3xl lg:text-4xl leading-relaxed', 
    h4: 'text-xl md:text-2xl lg:text-3xl leading-normal'
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    alignments[align],
    className
  );

  // ✅ کامپوننت‌های جداگانه برای هر variant
  switch (variant) {
    case 'h1':
      return <h1 className={classes} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={classes} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={classes} {...props}>{children}</h3>;
    case 'h4':
      return <h4 className={classes} {...props}>{children}</h4>;
    default:
      return <h1 className={classes} {...props}>{children}</h1>;
  }
};