'use client';

import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto glass rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden border-white/5 shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -mr-40 -mt-40" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px] -ml-40 -mb-40" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
                        >
                            Start a <br /> <span className="text-gradient underline decoration-accent/10">Project.</span>
                        </motion.h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md">
                            Have a vision? I'm here to build it. Reach out for collaborations or just a tech chat.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <ContactMethod Icon={Mail} label="Email" value="rahulkhandke71@gmail.com" />
                            <ContactMethod Icon={Phone} label="Phone" value="+91 7892655210" />
                            <ContactMethod Icon={MapPin} label="Location" value="Bangalore, India" />
                        </div>
                    </div>

                    <form className="space-y-4 md:space-y-6 bg-white/[0.02] p-6 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <FormInput label="Full Name" type="text" placeholder="John Doe" />
                            <FormInput label="Email Address" type="email" placeholder="john@example.com" />
                        </div>
                        <FormInput label="Subject" type="text" placeholder="Project Inquiry" />
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Describe your vision..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-all resize-none text-white placeholder:text-gray-600 outline-none"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-5 bg-gradient rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(139,92,246,0.2)] text-white text-lg tracking-tight uppercase"
                        >
                            Send Message
                            <Send size={20} />
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
}

function FormInput({ label, type, placeholder }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-all text-white placeholder:text-gray-600 outline-none"
            />
        </div>
    );
}

function ContactMethod({ Icon, label, value }) {
    return (
        <div className="flex items-center gap-6 group">
            <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <Icon size={24} />
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-black">{label}</p>
                <p className="text-lg md:text-xl font-bold text-white/80">{value}</p>
            </div>
        </div>
    );
}
