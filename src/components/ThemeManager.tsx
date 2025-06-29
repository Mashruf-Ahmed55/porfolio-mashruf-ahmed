'use client';
import { useTheme } from '@/stores/useTheme';
import { useEffect } from 'react';

export default function ThemeManager() {
  const darkMode = useTheme((state) => state.darkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);
  return null;
}
