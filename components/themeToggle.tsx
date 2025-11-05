'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return (
      <button className="h-10 w-10 rounded-full bg-gray-200"></button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="
        h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 
        flex items-center justify-center
        transition-colors duration-300
      "
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}