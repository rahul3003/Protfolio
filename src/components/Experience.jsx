'use client';

import { motion } from 'framer-motion';
import {
    GraduationCap, BookOpen, MapPin, ExternalLink,
    Briefcase, Coffee, Terminal, Database, Zap,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '@/lib/motion';

const workExperience = [
    {
        title: 'Senior Full Stack Developer',
        company: 'PESU Venture Labs',
        location: 'Bangalore, KA',
        period: 'Mar 2025 – Present',
        description: 'Developing web applications using React, Node.js, Express.js, Vite.js. Optimized performance through lazy loading and code splitting. Architected scalable database solutions using PostgreSQL and Prisma ORM.',
        points: [
            'Implemented Dkron for distributed job scheduling',
            'Architected PostgreSQL + Prisma ORM with complex schema design',
            'Secure authentication with JWT and role-based access control',
        ],
    },
    {
        title: 'Full Stack Developer',
        company: 'PESU Venture Labs',
        location: 'Bangalore, KA',
        period: 'Nov 2023 – Mar 2025',
        description: 'Full-stack development with Node.js, Express.js, and modern frontend frameworks. Built responsive UIs and integrated third-party APIs.',
        points: [
            'Built responsive UIs and integrated third-party APIs',
            'Database design and optimization for improved performance',
        ],
    },
    {
        title: 'Frontend Developer',
        company: 'PESU Venture Labs',
        location: 'Bangalore, KA',
        period: 'Dec 2022 – Dec 2023',
        description: 'Responsive web designs and REST API integration for user-facing applications.',
        points: [
            'Modern UI/UX components with React and styled-components',
            'Frontend performance and cross-browser compatibility',
        ],
    },
    {
        title: 'System Engineer Trainee',
        company: 'Infosys',
        location: 'Mysore, KA',
        period: 'Sep 2021 – Mar 2022',
        description: '6-month training program focused on system engineering and IT infrastructure.',
        points: [
            'Java Development and software engineering fundamentals',
            'Agile development methodologies',
        ],
    },
];

const education = [
    {
        title: 'Bachelor of Engineering, Computer Science',
        institution: 'STJ Institute Of Technology',
        period: '2016 - 2020',
        location: 'Ranebennur, KA',
        description: 'Computer science fundamentals, algorithms, and software engineering.',
        icon: GraduationCap,
    },
    {
        title: 'Pre-University Education',
        institution: 'K H Patil Pu College',
        period: '2014 - 2016',
        location: 'Hirekerur, KA',
        description: 'Core concentrations in Science and Mathematics.',
        icon: BookOpen,
    },
];

const certifications = [
    { title: 'Java (Basic)', provider: 'HackerRank', date: '2024', link: 'https://www.hackerrank.com/certificates/713f07dba79f', icon: Coffee },
    { title: 'Python (Basic)', provider: 'HackerRank', date: '2024', link: 'https://www.hackerrank.com/certificates/8ec69b14c76d', icon: Terminal },
    { title: 'SQL (Basic)', provider: 'HackerRank', date: '2024', link: 'https://www.hackerrank.com/certificates/38bd66597be6', icon: Database },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding px-6 md:px-12 lg:px-24 relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    eyebrow="Career"
                    title="Work"
                    highlight="Experience"
                    description="Building the future, one line of code at a time."
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="space-y-5 mb-28"
                >
                    {workExperience.map((job) => (
                        <motion.div
                            key={job.period}
                            variants={fadeUp}
                            whileHover={{ x: 4 }}
                            className="glass-card rounded-3xl p-7 md:p-10 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-accent/10 transition-colors" />
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-6 relative">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-400">
                                        <Briefcase size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent transition-colors">{job.title}</h3>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">{job.company}</p>
                                    </div>
                                </div>
                                <div className="md:text-right shrink-0">
                                    <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-black text-gray-400 border border-white/8 uppercase tracking-wider">
                                        {job.period}
                                    </span>
                                    <p className="text-xs text-gray-600 mt-2 flex items-center md:justify-end gap-1.5">
                                        <MapPin size={12} /> {job.location}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                                <p className="text-gray-400 leading-relaxed">{job.description}</p>
                                <ul className="space-y-3">
                                    {job.points.map((point) => (
                                        <li key={point} className="flex gap-3 text-sm text-gray-500">
                                            <Zap size={14} className="text-accent shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <SectionHeader
                            eyebrow="Education"
                            title="My"
                            highlight="Journey"
                            description="Academic growth and professional training."
                            className="mb-12"
                        />
                        <div className="space-y-6 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-accent/50 before:to-transparent">
                            {education.map((item, idx) => (
                                <motion.div
                                    key={item.period}
                                    variants={fadeLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-14"
                                >
                                    <div className="absolute left-0 w-10 h-10 rounded-full border border-white/10 bg-black flex items-center justify-center text-accent z-10">
                                        <item.icon size={18} />
                                    </div>
                                    <div className="glass-card rounded-2xl p-6">
                                        <span className="text-[10px] font-black text-accent uppercase tracking-widest">{item.period}</span>
                                        <h3 className="text-lg font-black text-white mt-2">{item.title}</h3>
                                        <p className="text-xs text-gray-500 mt-1">{item.institution} · {item.location}</p>
                                        <p className="text-sm text-gray-400 mt-3 leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <SectionHeader
                            eyebrow="Certifications"
                            title="Badges"
                            highlight="Earned"
                            description="Industry-validated expertise."
                            className="mb-12"
                        />
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {certifications.map((cert) => (
                                <motion.div
                                    key={cert.title}
                                    variants={fadeRight}
                                    whileHover={{ x: 6 }}
                                    className="glass-card rounded-2xl p-5 flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-400">
                                        <cert.icon size={22} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center gap-2">
                                            <h3 className="font-black text-white group-hover:text-accent transition-colors truncate">{cert.title}</h3>
                                            <span className="text-[9px] font-bold text-gray-600 uppercase shrink-0">{cert.date}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5">{cert.provider}</p>
                                    </div>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-accent transition-colors">
                                        <ExternalLink size={16} />
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-6 rounded-2xl p-7 border border-dashed border-accent/20 bg-accent/5"
                        >
                            <h4 className="text-white font-black mb-2 flex items-center gap-2">
                                <BookOpen size={18} className="text-accent" />
                                Always Learning
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Exploring Advanced System Design, AWS Cloud Architecture, and Deep Learning fundamentals.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
