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

  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        baseStyles,
        variants[variant],
        alignments[align],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};