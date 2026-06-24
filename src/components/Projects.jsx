'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, PlayCircle, Heart, Bot, ShoppingBag, Bus, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer } from '@/lib/motion';

const projects = [
    {
        title: 'Netflix Clone',
        category: 'Entertainment',
        description: 'Dynamic responsive UI emulating Netflix with reusable components for homepage, movie details, and profiles.',
        tags: ['React', 'Firebase', 'TMDb API'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop',
        icon: PlayCircle,
    },
    {
        title: 'Doctor Chat App',
        category: 'Healthcare',
        description: 'Real-time chat between doctors and patients using Stream Chat integration.',
        tags: ['React', 'Stream Chat', 'Real-time'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1576091160550-2173599211d0?q=80&w=800&auto=format&fit=crop',
        icon: Heart,
    },
    {
        title: 'CodeX AI',
        category: 'AI',
        description: 'Feature-rich chat app integrating ChatGPT API for code generation and technical help.',
        tags: ['Next.js', 'ChatGPT API', 'Node.js'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        icon: Bot,
    },
    {
        title: 'Shopy E-commerce',
        category: 'E-commerce',
        description: 'End-to-end e-commerce with dynamic listings, secure checkout, and MongoDB.',
        tags: ['Node.js', 'React', 'MongoDB'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
        icon: ShoppingBag,
    },
    {
        title: 'KSRTC Tracking',
        category: 'Logistics',
        description: 'Bus tracking system with real-time GPS updates and arrival predictions.',
        tags: ['React', 'Node.js', 'GPS API'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
        icon: Bus,
    },
    {
        title: 'Studio HRMS',
        category: 'Enterprise',
        description: 'Full-scale HRMS for onboarding, payroll, and performance tracking with RBAC.',
        tags: ['React', 'Node.js', 'Auth'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
        icon: Users,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding px-6 md:px-12 lg:px-24 relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    eyebrow="Portfolio"
                    title="Project"
                    highlight="Gallery"
                    description="Internal labs and personal projects — deep dives in modern web development."
                    align="center"
                    className="mx-auto"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    const Icon = project.icon;
    return (
        <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="group h-full">
            <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 p-2.5 glass rounded-xl text-accent border-white/10 group-hover:bg-accent group-hover:text-white transition-all duration-400">
                        <Icon size={18} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3.5 bg-white text-black rounded-2xl hover:bg-accent hover:text-white transition-colors shadow-xl"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3.5 bg-white text-black rounded-2xl hover:bg-accent hover:text-white transition-colors shadow-xl"
                        >
                            <ExternalLink size={20} />
                        </motion.a>
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.25em] mb-2">{project.category}</span>
                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-gray-500 font-bold border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
