'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, Code2, Cpu, Wrench, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

const techStack = [
    { name: 'Next.js 15 (React 19)', icon: Code2 },
    { name: 'Tailwind CSS 4', icon: Cpu },
    { name: 'Framer Motion', icon: Cpu },
    { name: 'Nodemailer', icon: Mail },
    { name: 'Lucide React', icon: Wrench },
    { name: 'Google SMTP', icon: ShieldCheck }
];

const features = [
    {
        title: 'Premium Engineering Aesthetic',
        desc: 'Designed a premium visual language using hexagon-based geometry to mirror CAD/Die Design industry standards.'
    },
    {
        title: 'Lead Generation System',
        desc: 'Built a custom contact infrastructure routing inquiries through Google SMTP with automated responses.'
    },
    {
        title: 'Domain-Specific Showcases',
        desc: 'Dedicated modules for Creo, SolidWorks, and industrial domains like Automotive Casting and Aerospace.'
    },
    {
        title: 'Mobile-First & Performance',
        desc: 'Achieved perfect responsiveness and high Core Web Vitals scores for fast loading and SEO.'
    }
];

export default function ClientProject() {
    return (
        <section id="client-project" className="w-full py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0a0a0a]">
            {/* Hexagon Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                            <path d="M25 0 L50 14.4 L50 28.8 L25 43.4 L0 28.8 L0 14.4 Z" fill="none" stroke="#8b5cf6" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Content Left */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10  text-xs font-bold uppercase tracking-widest mb-6">
                                Featured Client Project
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                                Epsilon <span className="text-gradient">Engineering.</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                                Developed a premium, high-performance corporate platform for a leading mechanical design and manufacturing consultancy in Bengaluru.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="text-accent" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                                            <p className="text-gray-500 text-sm leading-snug">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 items-center">
                                <a 
                                    href="https://epsilon-engg.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-gradient text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-[#7c3aed] transition-all transform hover:scale-105"
                                >
                                    Live Site <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Right */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group shadow-2xl rounded-3xl overflow-hidden border border-white/10"
                        >
                            <img 
                                src="/epsilon_engineering_hero.png" 
                                alt="Epsilon Engineering Project" 
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            
                            {/* Floating Tech Badges */}
                            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                                {techStack.slice(0, 4).map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-[10px] text-white font-bold uppercase tracking-wider">
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Hexagon Decorative Element */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#8b5cf6] opacity-10 blur-[80px] rounded-full"></div>
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#8b5cf6] opacity-10 blur-[80px] rounded-full"></div>
                    </div>
                </div>

                {/* Challenges Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 p-10 rounded-[3rem] bg-[#8b5cf6]/5 border border-[#8b5cf6]/10"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl md:text-3xl font-black text-accent tracking-tight">Challenges Overcome.</h3>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-white font-bold mb-2">Brand Consistency</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">Translated traditional engineering values into a modern, digital-first design system without losing industry authority.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Reliable Emailing</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">Transitioned from a failing Titan SMTP setup to a robust Google App-Key configuration for 100% email delivery success.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
