'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef, useEffect, useState, useMemo } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);
    const [titleIndex, setTitleIndex] = useState(0);

    const titles = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];

    const lightX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const lightY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            mouseX.set(clientX);
            mouseY.set(clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);

        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [mouseX, mouseY]);

    const stars = useMemo(() => {
        return [...Array(80)].map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 'px',
            height: Math.random() * 2 + 'px',
            duration: 2 + Math.random() * 5,
            initialOpacity: Math.random()
        }));
    }, []);

    return (
        <section
            ref={containerRef}
            id="home"
            className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20 pb-10"
        >
            {/* Animated Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }} />
            </div>

            {/* Glowing Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-[120px] z-0"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 80, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] z-0"
            />
            <motion.div
                animate={{
                    x: [0, 60, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-[100px] z-0"
            />

            {/* Spotlight */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none opacity-40 hidden md:block"
                style={{
                    background: useTransform(
                        [lightX, lightY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.2), transparent)`
                    )
                }}
            />

            {/* Galaxy Star Field */}
            <div className="absolute inset-0 z-[-1]">
                {mounted && stars.map((star, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: star.initialOpacity }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: star.duration, repeat: Infinity }}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.width,
                            height: star.height,
                        }}
                    />
                ))}
            </div>

            {/* Radial Glow from Center */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 w-full flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="px-5 py-1.5 rounded-full glass text-[10px] md:text-xs font-black tracking-[0.2em] text-accent uppercase inline-flex items-center gap-2 border border-accent/20 bg-accent/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Senior Software Engineer
                    </span>
                </motion.div>

                <h1 className="flex flex-col items-center mb-8 perspective-1000">
                    <motion.span
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-1 text-white/90"
                    >
                        Rahul R <span className="text-gradient">Khandke.</span>
                    </motion.span>

                    <div className="h-10 md:h-12 lg:h-16 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={titleIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="text-xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white/20 whitespace-nowrap block"
                            >
                                {titles[titleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </h1>

                <p className="w-full text-center text-gray-500 font-bold uppercase tracking-[0.3em] font-sans mb-12" style={{ fontSize: '14px' }}>
                    Building Scalable MERN Systems Globally.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 mb-16">
                    <MagneticButton className="w-full sm:w-auto">
                        <a href="#projects" className="w-full">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:min-w-[220px] px-8 py-3.5 bg-gradient rounded-2xl font-black text-white flex items-center justify-center gap-3 shadow-[0_15px_40px_rgba(139,92,246,0.2)] text-base md:text-lg uppercase tracking-widest transition-all"
                            >
                                View Projects
                                <ArrowRight size={20} />
                            </motion.button>
                        </a>
                    </MagneticButton>

                    <MagneticButton className="w-full sm:w-auto">
                        <a href="#contact" className="w-full">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:min-w-[220px] px-8 py-3.5 glass rounded-2xl font-black hover:border-accent transition-all duration-300 flex items-center justify-center text-base md:text-lg border-white/5 uppercase tracking-widest text-white/70 hover:text-white"
                            >
                                Let's Connect
                            </motion.button>
                        </a>
                    </MagneticButton>
                </div>
            </motion.div>

            <div className="grid grid-cols-2 lg:flex gap-8 md:gap-20 text-center z-10 px-6 backdrop-blur-sm p-6 rounded-[2rem] border border-white/5 bg-white/[0.01]">
                <HeroStat label="Projects Completed" value="25+" />
                <HeroStat label="Core Tech" value="MERN" />
                <HeroStat label="Est. Experience" value="3.5 Yrs" />
                <HeroStat label="Availability" value="Limited" />
            </div>

            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-8 opacity-30"
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
}

function HeroStat({ label, value }) {
    return (
        <div className="space-y-1">
            <p className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white">{value}</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold whitespace-nowrap">{label}</p>
        </div>
    );
}

function MagneticButton({ children, className = "" }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
