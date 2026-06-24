'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import ClientProject from '@/components/ClientProject';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { fadeIn } from '@/lib/motion';

export default function Home() {
    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative mesh-bg"
        >
            <Navbar />
            <Hero />
            <div className="section-divider mx-auto max-w-5xl" />
            <About />
            <div className="section-divider mx-auto max-w-5xl" />
            <Skills />
            <div className="section-divider mx-auto max-w-5xl" />
            <Experience />
            <div className="section-divider mx-auto max-w-5xl" />
            <ClientProject />
            <div className="section-divider mx-auto max-w-5xl" />
            <Projects />
            <div className="section-divider mx-auto max-w-5xl" />
            <Contact />

            <footer className="relative py-16 text-center border-t border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative text-gray-500 text-xs uppercase tracking-[0.3em] font-bold"
                >
                    &copy; {new Date().getFullYear()} Rahul Khandke
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative mt-2 text-gray-600 text-[10px] tracking-widest"
                >
                    Crafted with Next.js & Framer Motion
                </motion.p>
            </footer>
        </motion.main>
    );
}
