'use client';

import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import type React from 'react';
import { useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  return (
    <footer
      ref={footerRef}
      className=" text-white relative overflow-hidden w-full"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center space-y-4 md:space-y-0"
        >
          <div className="text-xs md:text-sm text-gray-400 flex items-center space-x-2 font-sans">
            <span>© {currentYear} Made By - Mashruf Ahmed.</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
