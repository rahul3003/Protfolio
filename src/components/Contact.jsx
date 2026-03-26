'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle2, AlertCircle, Loader2, MessageSquareText, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
    { 
        Icon: Mail, 
        label: "Direct Email", 
        value: "rahulkhandke71@gmail.com",
        href: "mailto:rahulkhandke71@gmail.com" 
    },
    { 
        Icon: MapPin, 
        label: "Base Location", 
        value: "Bangalore, India",
        href: "#" 
    }
];

const socialLinks = [
    { Icon: Linkedin, href: "https://linkedin.com/in/rahulkhandke" },
    { Icon: Github, href: "https://github.com/rahul3003" }
];

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Something went wrong');
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('Cannot reach server. Try again later.');
            setStatus('error');
        }

        // Reset status after 5 seconds if success
        if (status === 'success') {
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-pink-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    
                    {/* Visual Left: Heading & Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 text-accent font-black uppercase tracking-[0.3em] text-xs"
                            >
                                <span className="w-8 h-[2px] bg-accent"></span>
                                Get in touch
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                            >
                                Start a <br />
                                <span className="text-gradient">Project.</span>
                            </motion.h2>
                            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                                I'm currently available for freelance work and full-time opportunities. Have a unique vision? Let's build it together.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {contactMethods.map((method, idx) => (
                                <ContactMethod key={idx} {...method} />
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-4 glass rounded-2xl text-gray-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                                >
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Visual Right: Form Card */}
                    <div className="lg:col-span-7 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass rounded-[3.5rem] p-8 md:p-14 border border-white/5 relative z-10 overflow-hidden shadow-2xl"
                        >
                            {/* Form Header */}
                            <div className="flex items-center gap-4 mb-12">
                                <div className="p-4 bg-accent/20 rounded-2xl text-accent">
                                    <MessageSquareText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white tracking-tight">Send a Message.</h3>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Average response time: 24h</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4 group-focus-within:text-accent transition-colors">Full Name</label>
                                        <input 
                                            name="name" 
                                            type="text" 
                                            required 
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 text-white placeholder:text-gray-700 outline-none focus:border-accent/50 focus:bg-accent/5 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4 group-focus-within:text-accent transition-colors">Email Address</label>
                                        <input 
                                            name="email" 
                                            type="email" 
                                            required 
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 text-white placeholder:text-gray-700 outline-none focus:border-accent/50 focus:bg-accent/5 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4 group-focus-within:text-accent transition-colors">Subject</label>
                                    <input 
                                        name="subject" 
                                        type="text" 
                                        required 
                                        placeholder="Web App Architecture" 
                                        className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 text-white placeholder:text-gray-700 outline-none focus:border-accent/50 focus:bg-accent/5 transition-all text-sm font-medium"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 ml-4 group-focus-within:text-accent transition-colors">Project Brief</label>
                                    <textarea 
                                        name="message" 
                                        rows="5" 
                                        required 
                                        placeholder="Tell me about your vision..."
                                        className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-6 text-white placeholder:text-gray-700 outline-none focus:border-accent/50 focus:bg-accent/5 transition-all text-sm font-medium resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    disabled={status === 'loading'}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-6 rounded-3xl font-black text-white uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-4 transition-all duration-300 relative overflow-hidden ${
                                        status === 'success' ? 'bg-green-600' : 'bg-gradient'
                                    }`}
                                >
                                    <AnimatePresence mode="wait">
                                        {status === 'loading' ? (
                                            <motion.div 
                                                key="loading" 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Loader2 className="animate-spin" size={20} /> Transmitting...
                                            </motion.div>
                                        ) : status === 'success' ? (
                                            <motion.div 
                                                key="success" 
                                                initial={{ y: 20, opacity: 0 }} 
                                                animate={{ y: 0, opacity: 1 }} 
                                                exit={{ y: -20, opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <CheckCircle2 size={20} /> Message Sent!
                                            </motion.div>
                                        ) : status === 'error' ? (
                                            <motion.div 
                                                key="error" 
                                                initial={{ y: 20, opacity: 0 }} 
                                                animate={{ y: 0, opacity: 1 }} 
                                                exit={{ y: -20, opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <AlertCircle size={20} /> Resubmit
                                            </motion.div>
                                        ) : (
                                            <motion.div 
                                                key="idle" 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                Launch Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>

                                {status === 'error' && (
                                    <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center mt-4">
                                        Error: {errorMessage}
                                    </p>
                                )}
                            </form>
                        </motion.div>

                        {/* Visual Decoration */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactMethod({ Icon, label, value, href }) {
    return (
        <a href={href} className="flex items-center gap-6 group">
            <div className="p-5 bg-white/5 rounded-3xl text-accent border border-white/5 group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Icon size={24} />
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-black group-hover:text-accent transition-colors mb-1">{label}</p>
                <p className="text-xl font-bold text-white group-hover:text-accent/80 transition-colors tracking-tight">{value}</p>
            </div>
        </a>
    );
}
