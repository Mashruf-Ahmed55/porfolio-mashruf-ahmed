'use client';

import { Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ContactForm from './ContactFrom';

export default function ContactButton() {
  const rotateRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll-based rotation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrollY(y);

          if (rotateRef.current) {
            rotateRef.current.style.transform = `rotate(${y * 0.2}deg)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative w-[120px] h-[120px] flex items-center justify-center">
        {/* Rotating Text Ring */}
        <div
          ref={rotateRef}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
          style={{
            animation: 'spin 20s linear infinite',
          }}
        >
          {/* Circular Text */}
          <div className="relative w-full h-full">
            <svg
              className="w-full h-full"
              viewBox="0 0 140 140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                />
              </defs>
              <text className="fill-gray-600 dark:fill-gray-400 text-[10px] font-medium tracking-[0.03em] uppercase">
                <textPath href="#circle-path" startOffset="0%">
                  • Contact Me • Contact Me • Contact Me • Contact Me
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Centered Button */}
        <ContactForm>
          <div className="relative group cursor-pointer">
            {/* Main circular button */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/90 to-purple-600/90 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 flex items-center justify-center group-hover:scale-110 group-hover:from-blue-500 group-hover:to-purple-500">
              {/* Inner circle with icon */}
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Send className="w-5 h-5 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </div>
            </div>

            {/* Pulse animation rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping group-hover:border-blue-400/50" />
            <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-pulse" />

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/20 group-hover:to-purple-400/20 transition-all duration-500 blur-xl" />
          </div>
        </ContactForm>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
