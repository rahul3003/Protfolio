'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef, useEffect, useState, useMemo } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';
import { EASE, staggerContainer, fadeUp } from '@/lib/motion';

const titles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'];

const stats = [
    { value: '25+', label: 'Projects' },
    { value: 'MERN', label: 'Core Stack' },
    { value: '3.5 Yrs', label: 'Experience' },
    { value: 'Open', label: 'Availability' },
];

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);
    const [titleIndex, setTitleIndex] = useState(0);

    const lightX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const lightY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        const interval = setInterval(() => setTitleIndex((p) => (p + 1) % titles.length), 3000);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [mouseX, mouseY]);

    const stars = useMemo(
        () =>
            [...Array(60)].map(() => ({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: Math.random() * 2 + 1,
                duration: 2 + Math.random() * 4,
                delay: Math.random() * 2,
            })),
        []
    );

    return (
        <section
            id="home"
            className="cursor-zone relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-24 pb-16"
        >
            <div className="absolute inset-0 dot-grid opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]" />

            <motion.div
                animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px]"
            />
            <motion.div
                animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-accent-secondary/15 rounded-full blur-[120px]"
            />

            <motion.div
                className="absolute inset-0 pointer-events-none opacity-30 hidden md:block"
                style={{
                    background: useTransform(
                        [lightX, lightY],
                        ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, rgba(139,92,246,0.15), transparent 70%)`
                    ),
                }}
            />

            {mounted &&
                stars.map((star, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.6, 0.1] }}
                        transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
                        className="absolute rounded-full bg-white"
                        style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
                    />
                ))}

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center"
            >
                <motion.div variants={fadeUp} className="mb-8">
                    <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-[10px] font-black tracking-[0.2em] text-accent uppercase border border-accent/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute h-full w-full rounded-full bg-accent opacity-60" />
                            <span className="relative rounded-full h-2 w-2 bg-accent" />
                        </span>
                        Senior Software Engineer
                    </span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="mb-4">
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                        Rahul R{' '}
                        <span className="text-gradient">Khandke</span>
                    </span>
                </motion.h1>

                <div className="h-10 md:h-14 flex items-center justify-center overflow-hidden mb-6">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={titleIndex}
                            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
                            transition={{ duration: 0.5, ease: EASE }}
                            className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-500"
                        >
                            {titles[titleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <motion.p
                    variants={fadeUp}
                    className="text-gray-500 font-semibold uppercase tracking-[0.25em] text-xs md:text-sm mb-12 max-w-lg"
                >
                    Building scalable MERN systems globally
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
                    <MagneticButton>
                        <a href="#projects">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto px-8 py-4 bg-gradient rounded-2xl font-black text-white flex items-center justify-center gap-3 btn-glow text-sm uppercase tracking-widest"
                            >
                                View Projects
                                <ArrowRight size={18} />
                            </motion.button>
                        </a>
                    </MagneticButton>
                    <MagneticButton>
                        <a href="#contact">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto px-8 py-4 glass rounded-2xl font-black text-white/80 hover:text-white flex items-center justify-center text-sm uppercase tracking-widest border border-white/8 hover:border-accent/30 transition-colors"
                            >
                                Let&apos;s Connect
                            </motion.button>
                        </a>
                    </MagneticButton>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1, ease: EASE }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="glass-card rounded-2xl p-4 md:p-5 text-center"
                        >
                            <p className="text-2xl md:text-3xl font-black text-white tracking-tight">{stat.value}</p>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 opacity-30"
            >
                <ChevronDown size={22} className="text-gray-400" />
            </motion.div>
        </section>
    );
}
