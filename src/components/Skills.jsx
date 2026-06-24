'use client';

import { motion } from 'framer-motion';
import {
    Atom, Layers, Zap, Wind, Palette, Server,
    FastForward, Database, Box, Shield, Globe,
    GitBranch, Flame, Code2, Coffee, Cloud,
    Container, Clock, Terminal, Cpu, Layout,
    Share2, Workflow,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, cardHover } from '@/lib/motion';

const skillCategories = [
    {
        title: 'Frontend Engineering',
        icon: Layout,
        skills: [
            { name: 'React', icon: Atom, color: '#61DAFB' },
            { name: 'Next.js', icon: Layers, color: '#FFFFFF' },
            { name: 'Vite', icon: Zap, color: '#646CFF' },
            { name: 'Tailwind', icon: Wind, color: '#38B2AC' },
            { name: 'MUI', icon: Palette, color: '#007FFF' },
        ],
    },
    {
        title: 'Backend & Systems',
        icon: Server,
        skills: [
            { name: 'Node.js', icon: Server, color: '#339933' },
            { name: 'Express', icon: FastForward, color: '#828282' },
            { name: 'MongoDB', icon: Database, color: '#47A248' },
            { name: 'Postgres', icon: Box, color: '#336791' },
            { name: 'Prisma', icon: Shield, color: '#2D3748' },
            { name: 'Socket.io', icon: Globe, color: '#010101' },
            { name: 'Firebase', icon: Flame, color: '#FFCA28' },
        ],
    },
    {
        title: 'DevOps & Languages',
        icon: Terminal,
        skills: [
            { name: 'Docker', icon: Container, color: '#2496ED' },
            { name: 'AWS', icon: Cloud, color: '#FF9900' },
            { name: 'Git', icon: GitBranch, color: '#F05032' },
            { name: 'Python', icon: Code2, color: '#3776AB' },
            { name: 'Java', icon: Coffee, color: '#007396' },
            { name: 'Dkron', icon: Clock, color: '#5C2D91' },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/8 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-secondary/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    eyebrow="Technical Expertise"
                    title="Technical"
                    highlight="Arsenal"
                    description="High-performance systems built with modern, battle-tested technologies."
                    align="center"
                    className="mx-auto"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category) => (
                        <CategoryCard key={category.title} category={category} />
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <motion.div
                        variants={cardHover}
                        initial="rest"
                        whileHover="hover"
                        className="glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-accent/15 rounded-xl text-accent">
                                    <Workflow size={20} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-white">Enterprise Architecture</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed max-w-xl">
                                Event-driven microservices and scalable serverless pipelines handling mission-critical workloads with 99.9% uptime.
                            </p>
                        </div>
                        <div className="relative z-10 flex gap-4">
                            {[Cpu, Shield, Share2].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-accent/70 group-hover:text-accent transition-colors"
                                >
                                    <Icon size={24} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function CategoryCard({ category }) {
    const Icon = category.icon;
    return (
        <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="group">
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                    <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="p-4 bg-white/5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-400"
                    >
                        <Icon size={26} />
                    </motion.div>
                    <h3 className="text-lg font-black text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-2 glass rounded-xl border-white/5 hover:border-accent/30 transition-colors cursor-default"
                        >
                            <skill.icon size={14} style={{ color: skill.color }} />
                            <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-300">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
