'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Terminal, Heart, ShoppingBag, Bus, Users, PlayCircle, Bot } from 'lucide-react';

const projects = [
    {
        title: 'Netflix Clone',
        category: 'Entertainment',
        description: 'Leveraged React.js to build a dynamic and responsive UI that closely emulates Netflix. Created reusable components for homepage, movie details, and profiles.',
        tags: ['React', 'Firebase', 'TMDb API'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop',
        icon: PlayCircle
    },
    {
        title: 'Doctor Chat App',
        category: 'Healthcare',
        description: 'Built a real-time chat application facilitating seamless communication between doctors and patients using Stream Chat integration.',
        tags: ['React', 'Stream Chat', 'Real-time'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1576091160550-2173599211d0?q=80&w=800&auto=format&fit=crop',
        icon: Heart
    },
    {
        title: 'CodeX AI',
        category: 'Artificial Intelligence',
        description: 'Spearheaded the creation of CodeX, a feature-rich chat application integrating ChatGPT API for high-fidelity code generation and technical help.',
        tags: ['Next.js', 'ChatGPT API', 'Node.js', 'Express'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        icon: Bot
    },
    {
        title: 'Shopy E-commerce',
        category: 'E-commerce',
        description: 'Architected an end-to-end e-commerce solution with dynamic product listings, secure checkout, and MongoDB database management.',
        tags: ['Node.js', 'React', 'MongoDB', 'Bootstrap'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
        icon: ShoppingBag
    },
    {
        title: 'KSRTC Tracking',
        category: 'Logistics',
        description: 'Developed a comprehensive bus tracking system for KSRTC with real-time GPS location updates and arrival time predictions.',
        tags: ['React', 'Node.js', 'GPS API', 'Real-time'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
        icon: Bus
    },
    {
        title: 'Studio HRMS',
        category: 'Enterprise',
        description: 'Built a full-scale HRMS for employee management, onboarding, payroll, and performance tracking with role-based access control.',
        tags: ['React', 'Node.js', 'Database Design', 'Auth'],
        link: 'https://github.com/rahul3003',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
        icon: Users
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-32 px-6 md:px-12 lg:px-24 relative z-10 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
                    >
                        Project <span className="text-gradient">Gallery.</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-2xl italic font-medium">
                        Internal Labs & Personal Projects. Deep-dives in modern web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    const Icon = project.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
        >
            <div className="glass rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col h-full transition-all duration-500 hover:border-accent/40 hover:shadow-[0_40px_80px_rgba(139,92,246,0.15)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="p-5 bg-white text-black rounded-3xl hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-2xl">
                            <Github size={28} />
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="p-5 bg-white text-black rounded-3xl hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-2xl">
                            <ExternalLink size={28} />
                        </a>
                    </div>
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6 p-4 glass rounded-2xl text-accent border-white/10 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-2xl">
                        <Icon size={24} />
                    </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                    <span className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-3 inline-block">
                        {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed font-sans line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-5 py-2 bg-white/5 rounded-2xl text-[10px] text-gray-400 font-black border border-white/5 uppercase tracking-tighter hover:border-accent/30 hover:text-white transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
