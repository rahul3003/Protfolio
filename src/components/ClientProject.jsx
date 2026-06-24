'use client';

import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import MagneticButton from '@/components/ui/MagneticButton';
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '@/lib/motion';

const techStack = ['Next.js 15', 'Tailwind CSS 4', 'Framer Motion', 'Nodemailer', 'Google SMTP'];

const features = [
    { title: 'Premium Engineering Aesthetic', desc: 'Hexagon-based geometry mirroring CAD/Die Design industry standards.' },
    { title: 'Lead Generation System', desc: 'Custom contact infrastructure with Google SMTP and automated responses.' },
    { title: 'Domain-Specific Showcases', desc: 'Modules for Creo, SolidWorks, Automotive Casting, and Aerospace.' },
    { title: 'Mobile-First & Performance', desc: 'Perfect responsiveness and high Core Web Vitals scores.' },
];

export default function ClientProject() {
    return (
        <section id="client-project" className="section-padding px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="lg:w-1/2"
                    >
                        <SectionHeader
                            eyebrow="Featured Client"
                            title="Epsilon"
                            highlight="Engineering"
                            description="Premium corporate platform for a leading mechanical design and manufacturing consultancy in Bengaluru."
                            className="mb-8"
                        />

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
                        >
                            {features.map((f) => (
                                <motion.div key={f.title} variants={fadeUp} className="flex gap-3">
                                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{f.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <MagneticButton>
                            <a
                                href="https://epsilon-engg.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient rounded-2xl font-black text-white text-sm uppercase tracking-widest btn-glow"
                            >
                                Live Site <ExternalLink size={16} />
                            </a>
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="gradient-border rounded-3xl overflow-hidden">
                            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} className="relative group">
                                <img
                                    src="/epsilon_engineering_hero.png"
                                    alt="Epsilon Engineering Project"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                                    {techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[9px] text-white font-bold uppercase tracking-wider"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-accent/20 blur-[80px] rounded-full" />
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 glass-card rounded-3xl p-8 md:p-10"
                >
                    <h3 className="text-xl font-black text-gradient mb-6">Challenges Overcome</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white font-bold mb-2">Brand Consistency</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Translated traditional engineering values into a modern digital design system without losing industry authority.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Reliable Emailing</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Migrated from failing Titan SMTP to robust Google App-Key configuration for 100% delivery success.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
