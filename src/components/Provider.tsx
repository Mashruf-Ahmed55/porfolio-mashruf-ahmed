'use client';

import { AnimatePresence } from 'motion/react';
import CustomCursor from './CustomCursor';
import ParticleBackground from './ParticleBackground';


export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ParticleBackground />
      <CustomCursor />
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </div>
  );
}
