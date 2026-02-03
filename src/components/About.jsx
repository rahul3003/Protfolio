'use client';

import { motion } from 'framer-motion';
import { User, Target, Zap, Heart } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-white/[0.01] relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-lg lg:w-1/2"
                >
                    <div className="aspect-square rounded-[3rem] overflow-hidden glass border-white/10 border-2 flex items-center justify-center p-10 relative">
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-pink-500/10 flex items-center justify-center rounded-[2.5rem] shadow-inner">
                            <span className="text-8xl md:text-[10rem] drop-shadow-2xl">👨‍💻</span>
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-8 -right-8 glass p-6 md:p-10 rounded-[2.5rem] border-accent/30 border-2 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-transform hover:scale-110">
                            <p className="text-4xl md:text-5xl font-black text-accent leading-none">3.5+</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mt-3">Years Exp.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <div className="lg:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter"
                    >
                        Building Scalable <br /> <span className="text-gradient">Digital Worlds</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-8"
                    >
                        <p className="text-gray-400 text-lg md:text-2xl leading-relaxed font-sans">
                            As a <span className="text-white font-bold">Senior Full Stack Developer</span> at <span className="text-white">PESU Venture Labs</span>, I specialize in the MERN stack, distributed systems, and high-performance frontend architectures.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <BioFeature
                                icon={Target}
                                title="Mission Driven"
                                desc="Developing high-fidelity web apps using React, Node.js, and Express.js."
                            />
                            <BioFeature
                                icon={Zap}
                                title="Performance Ops"
                                desc="Optimized web metrics through lazy loading and advanced code splitting."
                            />
                            <BioFeature
                                icon={User}
                                title="Team Catalyst"
                                desc="Architected 50+ RESTful endpoints and integrated complex SDKs like 100ms."
                            />
                            <BioFeature
                                icon={Heart}
                                title="Secure by Design"
                                desc="Implementing robust JWT-based Auth and role-based access control (RBAC)."
                            />
                        </div>

                        <p className="text-gray-500 text-base md:text-xl leading-relaxed font-sans border-l-4 border-accent/30 pl-8 mt-12 py-4 italic">
                            "I bridge the gap between complex backend logic and intuitive frontend interfaces, ensuring every pixel-perfect UI is backed by scalable database architectures using PostgreSQL and Prisma ORM."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function BioFeature({ icon: Icon, title, desc }) {
    return (
        <div className="space-y-3 p-6 glass rounded-2xl border-white/5 hover:border-accent/20 transition-all group">
            <div className="text-accent group-hover:scale-110 transition-transform">
                <Icon size={28} />
            </div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest">{title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
