'use client';

import { motion } from 'framer-motion';
import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full"
    >
      <Navbar />

      <main className="pt-32 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Home;
