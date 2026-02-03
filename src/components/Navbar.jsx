'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* 3D Flipping R Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="z-[101] perspective-1000"
                >
                    <a href="#" className="group relative block w-12 h-12">
                        <motion.div
                            animate={{ rotateY: [0, 180, 360] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 1
                            }}
                            className="w-full h-full relative preserve-3d"
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.5)] backface-hidden border border-white/20">
                                <span className="text-2xl font-black text-white">R</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-white text-accent rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] [transform:rotateY(180deg)] backface-hidden border border-accent/20">
                                <span className="text-2xl font-black">R</span>
                            </div>
                        </motion.div>
                    </a>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center glass px-8 py-3 rounded-full border-white/5 shadow-2xl backdrop-blur-3xl bg-white/[0.02]">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-accent transition-colors relative group text-gray-400"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                        </motion.a>
                    ))}
                </div>

                <div className="hidden md:flex gap-4">
                    <SocialIcon Icon={Github} href="https://github.com/rahul3003" title="GitHub" />
                    <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/rahul-khandke" title="LinkedIn" />
                    <SocialIcon Icon={Mail} href="mailto:rahulkhandke71@gmail.com" title="Email" />
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-[101] p-3 glass rounded-2xl text-white border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center gap-8 md:hidden p-8"
                        >
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-black tracking-tighter hover:text-accent transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <div className="flex gap-6 mt-8">
                                <SocialIcon Icon={Github} href="https://github.com/rahul3003" title="GitHub" />
                                <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/rahul-khandke" title="LinkedIn" />
                                <SocialIcon Icon={Mail} href="mailto:rahulkhandke71@gmail.com" title="Email" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
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
            className="p-3 rounded-2xl glass hover:border-accent/50 transition-all border-white/5 text-gray-500 hover:text-white group"
        >
            <Icon size={18} strokeWidth={1.5} />
        </motion.a>
    );
}
