'use client';
import { SVG } from '@svgdotjs/svg.js';
import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
export default function LiftUpButton() {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const draw = SVG().addTo(containerRef.current).size(300, 300);

    const circlePath = draw
      .path('M 150,150 m -100,0 a 50,50 1 2,1 100,0 a 10,10 0 1,1 -200,0')
      .fill('none')
      .stroke({ width: 2 }); // hide circle

    const text = draw.text('Tarek Hasan • Tarek Hasan •');
    text.path(circlePath);

    text
      .font({
        size: 16,
        family: 'sans-serif',
        anchor: 'start',
        weight: 'bold',
      })
      .fill('#1e40af'); // Tailwind blue-900

    // Cleanup (optional)
    return () => {
      draw.clear();
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 bg-amber-50">
        <motion.div
        // animate={}
        >
          <div
            className="w-[300px] h-[300px] mx-auto mt-10"
            ref={containerRef}
          ></div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </>
  );
}
