import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (darkMode: boolean) => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      darkMode:
        typeof window !== 'undefined'
          ? window.matchMedia('(prefers-color-scheme: dark)').matches
          : false,
      toggleDarkMode: () => {
        const current = get().darkMode;
        set({ darkMode: !current });
      },
      setDarkMode: (darkMode: boolean) => set({ darkMode }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
