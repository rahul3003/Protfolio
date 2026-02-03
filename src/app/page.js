'use client';

import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-12 text-center text-gray-600 text-xs uppercase tracking-widest border-t border-white/5">
        &copy; {new Date().getFullYear()} Rahul Khandke. Built with Next.js & Framer Motion.
      </footer>
    </motion.main>
  );
}
