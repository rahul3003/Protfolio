'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EASE } from '@/lib/motion';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = navItems.map((item) => item.toLowerCase());
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                scrolled ? 'py-3' : 'py-6'
            }`}
        >
            <div
                className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${
                    scrolled
                        ? 'glass rounded-2xl mx-4 md:mx-auto py-3 px-6 border-white/8 shadow-2xl shadow-black/40'
                        : ''
                }`}
            >
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-[101] group"
                >
                    <div className="w-11 h-11 rounded-xl bg-gradient flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-shadow">
                        <span className="text-xl font-black text-white">R</span>
                    </div>
                </motion.a>

                <div className="hidden md:flex items-center gap-1 glass px-2 py-2 rounded-full border-white/6">
                    {navItems.map((item, index) => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <motion.a
                                key={item}
                                href={`#${id}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className={`relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] rounded-full transition-colors duration-300 ${
                                    isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white/8 rounded-full border border-white/10"
                                        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                                    />
                                )}
                                <span className="relative z-10">{item}</span>
                            </motion.a>
                        );
                    })}
                </div>

                <div className="hidden md:flex gap-2">
                    <SocialIcon Icon={Github} href="https://github.com/rahul3003" title="GitHub" />
                    <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/rahul-khandke" title="LinkedIn" />
                    <SocialIcon Icon={Mail} href="mailto:rahulkhandke71@gmail.com" title="Email" />
                </div>

                <button
                    className="md:hidden z-[101] p-2.5 glass rounded-xl text-white border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center gap-6 md:hidden"
                        >
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.06 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-black tracking-tight text-white hover:text-gradient transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-4 mt-6"
                            >
                                <SocialIcon Icon={Github} href="https://github.com/rahul3003" title="GitHub" />
                                <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/rahul-khandke" title="LinkedIn" />
                                <SocialIcon Icon={Mail} href="mailto:rahulkhandke71@gmail.com" title="Email" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

function SocialIcon({ Icon, href, title }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl glass border-white/6 text-gray-500 hover:text-white hover:border-accent/30 transition-colors"
        >
            <Icon size={16} strokeWidth={1.5} />
        </motion.a>
    );
}
