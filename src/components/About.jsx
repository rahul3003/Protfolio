'use client';

import { motion } from 'framer-motion';
import {
    Target, Zap, User, Heart,
    Globe, Clock, Briefcase, Code2,
    Layout, Server, Rocket, MessageSquare,
    CheckCircle2, ArrowRight,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import MagneticButton from '@/components/ui/MagneticButton';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '@/lib/motion';

const features = [
    { icon: Target, title: 'Mission Driven', desc: 'High-fidelity web apps with React, Node.js, and Express.js.' },
    { icon: Zap, title: 'Performance Ops', desc: 'Lazy loading, code splitting, and optimized web metrics.' },
    { icon: User, title: 'Team Catalyst', desc: '50+ RESTful endpoints and complex SDK integrations like 100ms.' },
    { icon: Heart, title: 'Secure by Design', desc: 'JWT-based auth and role-based access control (RBAC).' },
];

const freelanceServices = [
    {
        icon: Layout,
        title: 'Web Applications',
        desc: 'Custom dashboards, SaaS products, and responsive corporate sites with Next.js and React.',
    },
    {
        icon: Server,
        title: 'Backend & APIs',
        desc: 'RESTful APIs, database design with PostgreSQL/MongoDB, Prisma ORM, and third-party integrations.',
    },
    {
        icon: Code2,
        title: 'Full-Stack MERN',
        desc: 'End-to-end product builds — from UI/UX implementation to deployment and maintenance.',
    },
    {
        icon: Rocket,
        title: 'Performance & DevOps',
        desc: 'Code splitting, lazy loading, Docker setup, SMTP/contact systems, and Core Web Vitals optimization.',
    },
];

const engagementModels = [
    {
        label: 'Project-Based',
        detail: 'Fixed scope & timeline',
        desc: 'Best for MVPs, landing pages, and well-defined product builds with clear deliverables.',
    },
    {
        label: 'Hourly / Part-Time',
        detail: 'Flexible hours',
        desc: 'Ideal for ongoing feature work, bug fixes, code reviews, and sprint-based collaboration.',
    },
    {
        label: 'Retainer',
        detail: 'Monthly support',
        desc: 'Priority access for maintenance, updates, performance tuning, and long-term product growth.',
    },
];

const workProcess = [
    { step: '01', title: 'Discovery', desc: 'Understand your goals, users, timeline, and technical requirements.' },
    { step: '02', title: 'Proposal', desc: 'Scope, milestones, and transparent pricing — no surprises.' },
    { step: '03', title: 'Build', desc: 'Agile sprints with regular updates, demos, and feedback loops.' },
    { step: '04', title: 'Launch', desc: 'Deployment, handoff docs, and optional post-launch support.' },
];

const freelanceFacts = [
    { icon: Globe, label: 'Remote', value: 'Worldwide (IST)' },
    { icon: Clock, label: 'Response', value: 'Within 24 hrs' },
    { icon: Briefcase, label: 'Availability', value: 'Open for projects' },
    { icon: MessageSquare, label: 'Communication', value: 'Slack, Email, Calls' },
];

export default function About() {
    return (
        <section id="about" className="section-padding px-6 md:px-12 lg:px-24 relative">
            <div className="max-w-7xl mx-auto">
                {/* ── About intro ── */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24 md:mb-32">
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="relative w-full max-w-md lg:w-2/5 shrink-0"
                    >
                        <div className="gradient-border p-1 rounded-[2rem]">
                            <div className="aspect-square rounded-[1.85rem] overflow-hidden bg-gradient-to-br from-accent/15 to-accent-secondary/10 flex items-center justify-center relative">
                                <motion.span
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="text-8xl md:text-9xl select-none"
                                >
                                    👨‍💻
                                </motion.span>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: 'spring', damping: 20 }}
                            whileHover={{ scale: 1.05 }}
                            className="absolute -bottom-6 -right-4 md:-right-8 glass-card rounded-2xl p-6 border-accent/20"
                        >
                            <p className="text-4xl font-black text-gradient leading-none">3.5+</p>
                            <p className="text-[9px] uppercase tracking-[0.25em] text-gray-500 font-bold mt-2">Years Exp.</p>
                        </motion.div>
                    </motion.div>

                    <div className="lg:w-3/5">
                        <SectionHeader
                            eyebrow="About Me"
                            title="Building Scalable"
                            highlight="Digital Worlds"
                            description="Senior Full Stack Developer at PESU Venture Labs — specializing in MERN stack, distributed systems, and high-performance frontend architectures. Also available for freelance and contract work."
                        />

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {features.map((f) => (
                                <motion.div
                                    key={f.title}
                                    variants={fadeUp}
                                    whileHover={{ y: -4 }}
                                    className="glass-card rounded-2xl p-5 group"
                                >
                                    <div className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <f.icon size={22} />
                                    </div>
                                    <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2">{f.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.blockquote
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-10 pl-6 border-l-2 border-accent/40 text-gray-400 text-base md:text-lg leading-relaxed italic"
                        >
                            &ldquo;I bridge complex backend logic with intuitive frontend interfaces — every pixel backed by scalable PostgreSQL and Prisma architectures.&rdquo;
                        </motion.blockquote>
                    </div>
                </div>

                {/* ── Freelancing details ── */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent rounded-3xl pointer-events-none" />

                    <SectionHeader
                        eyebrow="Freelance Services"
                        title="Available for"
                        highlight="Freelance Work"
                        description="I partner with startups, agencies, and businesses to design, build, and ship production-ready web products — from corporate platforms to full-stack SaaS applications."
                        align="center"
                        className="mx-auto mb-14"
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                    >
                        {freelanceFacts.map((fact) => (
                            <motion.div
                                key={fact.label}
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                                className="glass-card rounded-2xl p-5 text-center"
                            >
                                <fact.icon size={20} className="text-accent mx-auto mb-3" />
                                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{fact.label}</p>
                                <p className="text-sm font-black text-white">{fact.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
                    >
                        {freelanceServices.map((service) => (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                className="glass-card rounded-2xl p-6 group h-full"
                            >
                                <div className="p-2.5 bg-accent/10 rounded-xl text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <service.icon size={20} />
                                </div>
                                <h4 className="text-white font-black text-sm mb-2">{service.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass-card rounded-3xl p-8"
                        >
                            <h3 className="text-xl font-black text-white mb-6">Engagement Models</h3>
                            <div className="space-y-5">
                                {engagementModels.map((model) => (
                                    <div key={model.label} className="flex gap-4 group">
                                        <div className="shrink-0 mt-1">
                                            <CheckCircle2 size={18} className="text-accent" />
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h4 className="text-white font-bold text-sm">{model.label}</h4>
                                                <span className="text-[9px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                                                    {model.detail}
                                                </span>
                                            </div>
                                            <p className="text-gray-500 text-sm leading-relaxed">{model.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass-card rounded-3xl p-8"
                        >
                            <h3 className="text-xl font-black text-white mb-6">How We Work Together</h3>
                            <div className="space-y-6">
                                {workProcess.map((item, i) => (
                                    <motion.div
                                        key={item.step}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex gap-4"
                                    >
                                        <span className="text-2xl font-black text-accent/40 leading-none shrink-0 w-8">{item.step}</span>
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="gradient-border rounded-3xl"
                    >
                        <div className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl font-black text-white mb-2">
                                    Have a project in mind?
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                                    Whether you need a corporate website, a full-stack web app, or API development —
                                    I offer custom quotes based on scope. First consultation is free.
                                </p>
                            </div>
                            <MagneticButton>
                                <a href="#contact">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="px-8 py-4 bg-gradient rounded-2xl font-black text-white text-sm uppercase tracking-widest flex items-center gap-2 btn-glow whitespace-nowrap"
                                    >
                                        Start a Project
                                        <ArrowRight size={16} />
                                    </motion.button>
                                </a>
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
