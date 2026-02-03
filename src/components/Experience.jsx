'use client';

import { motion } from 'framer-motion';
import {
    GraduationCap,
    Award,
    Calendar,
    MapPin,
    ExternalLink,
    BookOpen,
    ShieldCheck,
    Briefcase,
    Coffee,
    Terminal,
    Database,
    Zap
} from 'lucide-react';

const workExperience = [
    {
        title: "Senior Full Stack Developer",
        company: "PESU Venture Labs",
        location: "Bangalore, KA",
        period: "Mar 2025 – Present",
        description: "Developing and maintaining numerous web applications using React, Node.js, Express.js, Vite.js. Optimized performance through lazy loading and code splitting. Architected scalable database solutions using PostgreSQL and Prisma ORM.",
        points: [
            "Implemented Dkron for distributed job scheduling, improving system reliability",
            "Architected scalable database solutions using PostgreSQL and Prisma ORM with complex schema design",
            "Implemented secure authentication systems with JWT tokens and role-based access control"
        ]
    },
    {
        title: "Full Stack Developer",
        company: "PESU Venture Labs",
        location: "Bangalore, KA",
        period: "Nov 2023 – Mar 2025",
        description: "Contributed to full-stack development, leveraging Node.js, Express.js, and modern frontend frameworks. Built responsive user interfaces and integrated third-party APIs.",
        points: [
            "Built responsive user interfaces and integrated third-party APIs and services",
            "Collaborated on database design and optimization for improved application performance"
        ]
    },
    {
        title: "Frontend Developer",
        company: "PESU Venture Labs",
        location: "Bangalore, KA",
        period: "Dec 2022 – Dec 2023",
        description: "Developed responsive web designs and integrated REST APIs for various user-facing applications.",
        points: [
            "Implemented modern UI/UX components using React and styled-components",
            "Optimized frontend performance and ensured cross-browser compatibility"
        ]
    },
    {
        title: "System Engineer Trainee",
        company: "Infosys",
        location: "Mysore, KA",
        period: "Sep 2021 – Mar 2022",
        description: "Completed a 6-month training program focused on system engineering and IT infrastructure.",
        points: [
            "Gained hands-on experience in Java Development and software engineering fundamentals",
            "Participated in team projects and learned agile development methodologies"
        ]
    }
];

const education = [
    {
        title: "Bachelor of Engineering, Computer Science",
        institution: "STJ Institute Of Technology",
        period: "2016 - 2020",
        location: "Ranebennur, KA",
        description: "Focused on computer science fundamentals, algorithms, and software engineering.",
        icon: GraduationCap
    },
    {
        title: "Pre-University Education",
        institution: "K H Patil Pu College",
        period: "2014 - 2016",
        location: "Hirekerur, KA",
        description: "Core concentrations in Science and Mathematics.",
        icon: BookOpen
    }
];

const certifications = [
    {
        title: "Java (Basic)",
        provider: "HackerRank",
        date: "2024",
        link: "https://www.hackerrank.com/certificates/713f07dba79f",
        icon: Coffee
    },
    {
        title: "Python (Basic)",
        provider: "HackerRank",
        date: "2024",
        link: "https://www.hackerrank.com/certificates/8ec69b14c76d",
        icon: Terminal
    },
    {
        title: "SQL (Basic)",
        provider: "HackerRank",
        date: "2024",
        link: "https://www.hackerrank.com/certificates/38bd66597be6",
        icon: Database
    }
];

export default function Experience() {
    return (
        <section id="experience" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-black relative z-10">
            <div className="max-w-7xl mx-auto">

                {/* Work Experience Section */}
                <div className="mb-32">
                    <div className="mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-4"
                        >
                            Work <span className="text-gradient">Experience.</span>
                        </motion.h2>
                        <p className="text-gray-400 text-lg md:text-2xl font-medium italic">Building the future, one line of code at a time.</p>
                    </div>

                    <div className="space-y-8">
                        {workExperience.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 md:p-12 rounded-[3rem] border-white/5 hover:border-accent/30 transition-all duration-500 relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent shadow-inner border border-white/5 group-hover:border-accent/20 transition-all">
                                            <Briefcase size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-accent transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-lg font-bold text-gray-500 uppercase tracking-widest">{job.company}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="px-6 py-2 bg-white/5 rounded-full text-xs font-black text-white/60 border border-white/10 uppercase tracking-[0.2em]">
                                            {job.period}
                                        </span>
                                        <p className="text-sm font-bold text-gray-600 mt-3 flex items-center justify-end gap-2">
                                            <MapPin size={14} /> {job.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                        {job.description}
                                    </p>
                                    <ul className="space-y-4">
                                        {job.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex gap-4 text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                                <Zap size={16} className="text-accent shrink-0 mt-1" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

                    {/* Education Section */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-black tracking-tighter"
                            >
                                My <span className="text-gradient">Journey.</span>
                            </motion.h2>
                            <p className="text-gray-400 text-lg md:text-xl max-w-md font-medium">
                                A timeline of my academic growth and professional training.
                            </p>
                        </div>

                        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:via-white/5 before:to-transparent">
                            {education.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                                >
                                    {/* Dot */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black text-accent absolute left-0 md:left-1/2 md:-ml-5 z-10 group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-[0_0_20px_rgba(139,92,246,0)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                                        <item.icon size={20} />
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-[2rem] border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-4 py-1.5 bg-accent/10 rounded-full text-[10px] text-accent font-black uppercase tracking-widest border border-accent/20">
                                                {item.period}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black mb-1 text-white group-hover:text-accent transition-colors">{item.title}</h3>
                                        <p className="text-sm font-bold text-gray-500 mb-4">{item.institution} • {item.location}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-black tracking-tighter"
                            >
                                <span className="text-gradient">Badges</span> Earned.
                            </motion.h2>
                            <p className="text-gray-400 text-lg md:text-xl max-w-md font-medium">
                                Validated expertise through industry-leading certifications.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    className="glass p-6 rounded-[2rem] border-white/5 hover:border-accent/30 transition-all duration-500 flex items-center gap-6 group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                                        <cert.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="text-xl font-black text-white group-hover:text-accent transition-colors">
                                                {cert.title}
                                            </h3>
                                            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                                                {cert.date}
                                            </span>
                                        </div>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-tighter italic">
                                            {cert.provider}
                                        </p>
                                    </div>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 text-gray-600 group-hover:text-accent transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-accent/5 rounded-[2.5rem] p-10 border border-accent/20 border-dashed"
                        >
                            <h4 className="text-white font-black text-xl mb-4 flex items-center gap-3">
                                <BookOpen className="text-accent" />
                                Always Learning
                            </h4>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                Currently exploring Advanced System Design, Cloud Architecture with AWS,
                                and Deep Learning fundamentals to broaden my technical horizons.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
