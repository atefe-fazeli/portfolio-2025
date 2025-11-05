'use client';

import { TextProps } from '@/types/typography';
import { cn } from '@/utiles/utils';

export const Text = ({
  children,
  size = 'md',
  align = 'left',
  muted = false,
  className,
  ...props
}: TextProps) => {
  const baseStyles = `
    text-gray-600 
    dark:text-gray-400
    leading-relaxed
    transition-colors 
    duration-200
  `;

  const sizes = {
    sm: 'text-sm md:text-base',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl'
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const mutedStyle = muted ? 'opacity-75' : '';

  return (
    <p
      className={cn(
        baseStyles,
        sizes[size],
        alignments[align],
        mutedStyle,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};