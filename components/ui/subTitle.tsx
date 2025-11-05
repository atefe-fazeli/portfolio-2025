'use client';

import { SubtitleProps } from '@/types/typography';
import { cn } from '@/utiles/utils';

export const Subtitle = ({
  children,
  align = 'left',
  className,
  ...props
}: SubtitleProps) => {
  const baseStyles = `
    text-lg 
    md:text-xl 
    lg:text-2xl 
    font-semibold 
    text-gray-700 
    dark:text-gray-300
    leading-relaxed
    transition-colors 
    duration-200
  `;

  const alignments = {
    left: 'text-left',
    center: 'text-center', 
    right: 'text-right'
  };

  return (
    <p
      className={cn(
        baseStyles,
        alignments[align],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};