'use client';

import { motion } from 'framer-motion';
import {
    Atom,
    Layers,
    Zap,
    Wind,
    Palette,
    Server,
    FastForward,
    Database,
    Box,
    HardDrive,
    GitBranch,
    Flame,
    Code2,
    Coffee,
    Clock,
    Globe,
    Shield,
    Cloud,
    Container
} from 'lucide-react';
import { useState } from 'react';

const allSkills = [
    { name: 'React', icon: Atom, color: '#61DAFB' },
    { name: 'Next.js', icon: Layers, color: '#FFFFFF' },
    { name: 'Vite', icon: Zap, color: '#646CFF' },
    { name: 'Tailwind', icon: Wind, color: '#38B2AC' },
    { name: 'MUI', icon: Palette, color: '#007FFF' },
    { name: 'Node.js', icon: Server, color: '#339933' },
    { name: 'Express', icon: FastForward, color: '#828282' },
    { name: 'MongoDB', icon: Database, color: '#47A248' },
    { name: 'Postgres', icon: Box, color: '#336791' },
    { name: 'Prisma', icon: Shield, color: '#2D3748' },
    { name: 'Socket.io', icon: Globe, color: '#010101' },
    { name: 'Git', icon: GitBranch, color: '#F05032' },
    { name: 'Firebase', icon: Flame, color: '#FFCA28' },
    { name: 'Python', icon: Code2, color: '#3776AB' },
    { name: 'Java', icon: Coffee, color: '#007396' },
    { name: 'AWS', icon: Cloud, color: '#FF9900' },
    { name: 'Docker', icon: Container, color: '#2496ED' },
    { name: 'Dkron', icon: Clock, color: '#5C2D91' }
];

const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-24 bg-black relative z-10 overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-black mb-4 tracking-tighter"
                >
                    Technical <span className="text-gradient">Arsenal</span>
                </motion.h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg font-medium opacity-60">
                    Propelling digital innovation with a cutting-edge industry stack.
                </p>
            </div>

            {/* Optimized Carousel */}
            <div className="relative w-full flex overflow-hidden">
                {/* Edge Fades */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex gap-6 md:gap-8 py-8 will-change-transform"
                    animate={{ x: [0, -2500] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50, // Much slower and smoother
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedSkills.map((skill, idx) => (
                        <SkillItem key={`${skill.name}-${idx}`} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function SkillItem({ skill }) {
    const Icon = skill.icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex-shrink-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                className="w-32 h-32 md:w-40 md:h-40 glass rounded-[2.5rem] flex flex-col items-center justify-center gap-4 transition-all duration-300 relative border-2"
                style={{
                    borderColor: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)',
                    transform: 'translate3d(0, 0, 0)', // Force GPU
                    backfaceVisibility: 'hidden'
                }}
            >
                {/* Crisp Glowing Core */}
                <div
                    className="absolute inset-4 rounded-full blur-[20px] opacity-20 transition-opacity duration-300 z-0"
                    style={{ backgroundColor: skill.color, opacity: isHovered ? 0.4 : 0.1 }}
                />

                <div
                    className="transition-all duration-300 relative z-10"
                    style={{
                        color: isHovered ? '#fff' : skill.color,
                        filter: isHovered ? `drop-shadow(0 0 8px ${skill.color})` : 'none'
                    }}
                >
                    <Icon size={40} strokeWidth={1.5} />
                </div>

                <span
                    className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 text-center relative z-10 text-white/50"
                    style={{ color: isHovered ? '#fff' : 'rgba(255,255,255,0.4)' }}
                >
                    {skill.name}
                </span>
            </motion.div>
        </div>
    );
}
