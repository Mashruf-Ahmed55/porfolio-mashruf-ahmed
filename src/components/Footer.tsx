'use client';

import { useCursor } from '@/stores/useCursor';
import { Code, Heart, Send } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';

const Footer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { setCursorType } = useCursor();
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white relative">
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center px-3 gap-x-2 w-fit h-12 bg-white rounded-full shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Contact Me
            <Send className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="max-w-4xl mx-auto p-6 bg-gray-900 border-gray-900">
          <DrawerHeader>
            <DrawerTitle>
              <h1 className="text-3xl md:text-4xl font-bold text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h1>
            </DrawerTitle>
            <DrawerDescription>
              <p className="text-center text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
                I'm always interested in hearing about new opportunities and
                exciting projects. Let’s build something great together!
              </p>
            </DrawerDescription>
          </DrawerHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-gray-400">
                Feel free to reach out if you have any questions, want to
                collaborate, or just say hello.
              </p>
              <div>
                <h4 className="text-lg font-medium mb-2">Follow Me</h4>
                {/* Add social icons/links here */}
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-500 text-gray-900 dark:text-white"
                    onFocus={() => setCursorType('text')}
                    onBlur={() => setCursorType('default')}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-500 text-gray-900 dark:text-white"
                    onFocus={() => setCursorType('text')}
                    onBlur={() => setCursorType('default')}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-500 text-gray-900 dark:text-white"
                  onFocus={() => setCursorType('text')}
                  onBlur={() => setCursorType('default')}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
                  onFocus={() => setCursorType('text')}
                  onBlur={() => setCursorType('default')}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </div>
              </motion.button>
            </motion.form>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Footer bottom */}
      <div className="text-center py-6 border-t border-gray-800 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-400 flex justify-center items-center space-x-2"
        >
          <span>© {currentYear} Mashruf Ahmed. Made with</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </motion.span>
          <span>and</span>
          <Code className="h-4 w-4 text-blue-400" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

