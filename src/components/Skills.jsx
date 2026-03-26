'use client';

import { motion } from 'framer-motion';
import { 
    Atom, Layers, Zap, Wind, Palette, Server, 
    FastForward, Database, Box, Shield, Globe, 
    GitBranch, Flame, Code2, Coffee, Cloud, 
    Container, Clock, Terminal, Cpu, Layout, 
    Share2, Workflow
} from 'lucide-react';
import { useState } from 'react';

const skillCategories = [
    {
        title: "Frontend Engineering",
        icon: Layout,
        skills: [
            { name: 'React', icon: Atom, color: '#61DAFB' },
            { name: 'Next.js', icon: Layers, color: '#FFFFFF' },
            { name: 'Vite', icon: Zap, color: '#646CFF' },
            { name: 'Tailwind', icon: Wind, color: '#38B2AC' },
            { name: 'MUI', icon: Palette, color: '#007FFF' }
        ]
    },
    {
        title: "Backend & Systems",
        icon: Server,
        skills: [
            { name: 'Node.js', icon: Server, color: '#339933' },
            { name: 'Express', icon: FastForward, color: '#828282' },
            { name: 'MongoDB', icon: Database, color: '#47A248' },
            { name: 'Postgres', icon: Box, color: '#336791' },
            { name: 'Prisma', icon: Shield, color: '#2D3748' },
            { name: 'Socket.io', icon: Globe, color: '#010101' },
            { name: 'Firebase', icon: Flame, color: '#FFCA28' }
        ]
    },
    {
        title: "DevOps & Languages",
        icon: Terminal,
        skills: [
            { name: 'Docker', icon: Container, color: '#2496ED' },
            { name: 'AWS', icon: Cloud, color: '#FF9900' },
            { name: 'Git', icon: GitBranch, color: '#F05032' },
            { name: 'Python', icon: Code2, color: '#3776AB' },
            { name: 'Java', icon: Coffee, color: '#007396' },
            { name: 'Dkron', icon: Clock, color: '#5C2D91' }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-32 bg-black relative z-10 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8b5cf6]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ec4899]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 inline-block"
                        >
                            Technical expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white"
                        >
                            Technical <span className="text-gradient">Arsenal.</span>
                        </motion.h2>
                        <p className="text-gray-500 text-lg md:text-2xl font-medium leading-relaxed italic">
                            Building high-performance systems with the worlds most powerful modern technologies.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <CategoryCard key={idx} category={category} index={idx} />
                    ))}
                </div>

                {/* Bottom Featured Highlight */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 glass rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="flex-1 relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent/20 rounded-2xl text-accent">
                                <Workflow size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Enterprise Architecture.</h3>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            Specializing in <span className="text-white font-bold">Event-Driven Microservices</span> and <span className="text-white font-bold">Scalable Serverless Pipelines</span> that handle mission-critical corporate workloads with 99.9% uptime.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 relative z-10">
                        {[Cpu, Shield, Share2].map((Icon, i) => (
                            <div key={i} className="w-16 h-16 md:w-20 md:h-20 glass rounded-3xl flex items-center justify-center text-accent/60 group-hover:text-accent transition-all duration-500 group-hover:scale-110 shadow-xl">
                                <Icon size={32} />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CategoryCard({ category, index }) {
    const Icon = category.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-full"
        >
            <div className="glass rounded-[3.5rem] p-10 h-full border border-white/5 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_40px_80px_rgba(139,92,246,0.1)] flex flex-col">
                <div className="flex items-center gap-6 mb-12">
                    <div className="p-5 bg-white/5 rounded-3xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-xl">
                        <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                    {category.skills.map((skill, sIdx) => (
                        <div 
                            key={sIdx}
                            className="flex items-center gap-3 px-5 py-3 glass rounded-2xl border-white/5 hover:border-accent/40 hover:bg-white/5 transition-all duration-300 group/skill cursor-default"
                        >
                            <skill.icon 
                                size={18} 
                                style={{ color: skill.color }} 
                                className="group-hover/skill:scale-110 transition-transform"
                            />
                            <span className="text-xs font-bold text-gray-400 group-hover/skill:text-white transition-colors tracking-wide">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
