'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Send, MapPin, CheckCircle2, AlertCircle, Loader2,
    MessageSquareText, Linkedin, Github, Copy, Check,
    Wifi, Server, Inbox,
} from 'lucide-react';
import { useState, useCallback, useRef, useEffect } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { fadeUp, fadeLeft, fadeRight } from '@/lib/motion';

const contactMethods = [
    { Icon: Mail, label: 'Direct Email', value: 'rahulkhandke71@gmail.com', href: 'mailto:rahulkhandke71@gmail.com', copyable: true },
    { Icon: MapPin, label: 'Location', value: 'Bangalore, India', href: '#', copyable: false },
];

const socialLinks = [
    { Icon: Linkedin, href: 'https://linkedin.com/in/rahulkhandke', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/rahul3003', label: 'GitHub' },
];

const SEND_STEPS = [
    { id: 'validate', label: 'Validating', Icon: CheckCircle2 },
    { id: 'connect', label: 'SMTP', Icon: Server },
    { id: 'send', label: 'Sending', Icon: Send },
    { id: 'done', label: 'Done', Icon: Inbox },
];

const MAX_MESSAGE = 2000;

export default function Contact() {
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [sendStep, setSendStep] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [touched, setTouched] = useState({});
    const [copied, setCopied] = useState(false);
    const [toast, setToast] = useState(null);
    const formRef = useRef(null);
    const stepTimers = useRef([]);

    const showToast = useCallback((type, text) => {
        setToast({ type, text });
        setTimeout(() => setToast(null), 4500);
    }, []);

    const clearStepTimers = () => {
        stepTimers.current.forEach(clearTimeout);
        stepTimers.current = [];
    };

    useEffect(() => () => clearStepTimers(), []);

    const errors = {
        name: !formData.name.trim() ? 'Name is required' : formData.name.trim().length < 2 ? 'Name is too short' : '',
        email: !formData.email.trim() ? 'Email is required' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'Invalid email' : '',
        subject: !formData.subject.trim() ? 'Subject is required' : '',
        message: !formData.message.trim() ? 'Message is required' : formData.message.length > MAX_MESSAGE ? `Max ${MAX_MESSAGE} characters` : '',
    };

    const isValid = Object.values(errors).every((e) => !e);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (status === 'error') setStatus('idle');
    };

    const handleBlur = (field) => setTouched((prev) => ({ ...prev, [field]: true }));

    const simulateSendProgress = () => {
        clearStepTimers();
        setSendStep(0);
        [400, 900, 1400].forEach((delay, i) => {
            stepTimers.current.push(setTimeout(() => setSendStep(i + 1), delay));
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, subject: true, message: true });
        if (!isValid) { showToast('error', 'Please fix the highlighted fields.'); return; }

        setStatus('loading');
        setErrorMessage('');
        simulateSendProgress();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (response.ok) {
                clearStepTimers();
                setSendStep(3);
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTouched({});
                formRef.current?.reset();
                showToast('success', 'Message sent! Check your inbox for confirmation.');
                setTimeout(() => { setStatus('idle'); setSendStep(0); }, 5000);
            } else {
                clearStepTimers();
                setSendStep(0);
                setErrorMessage(result.message || 'Something went wrong');
                setStatus('error');
                showToast('error', result.message || 'Failed to send message.');
            }
        } catch {
            clearStepTimers();
            setSendStep(0);
            setErrorMessage('Cannot reach server. Try again later.');
            setStatus('error');
            showToast('error', 'Network error. Please try again.');
        }
    };

    const copyEmail = async () => {
        await navigator.clipboard.writeText('rahulkhandke71@gmail.com');
        setCopied(true);
        showToast('success', 'Email copied!');
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section-padding px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/8 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent-secondary/8 blur-[140px] rounded-full pointer-events-none" />

            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -16, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -16, x: '-50%' }}
                        className={`fixed top-24 left-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl border backdrop-blur-xl text-sm font-semibold ${
                            toast.type === 'success'
                                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                : 'bg-red-500/10 border-red-500/30 text-red-400'
                        }`}
                    >
                        {toast.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                        {toast.text}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <SectionHeader
                            eyebrow="Get in Touch"
                            title="Start a"
                            highlight="Project"
                            description="Available for freelance and full-time work. Messages deliver instantly via SMTP."
                        />

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-60" />
                                <span className="relative rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Available for work</span>
                        </motion.div>

                        <div className="space-y-5">
                            {contactMethods.map((method, idx) => (
                                <ContactMethod key={idx} {...method} copied={copied} onCopy={copyEmail} />
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 glass-card rounded-xl text-gray-500 hover:text-accent transition-colors"
                                >
                                    <social.Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="lg:col-span-7"
                    >
                        <div className="gradient-border rounded-3xl">
                            <div className="rounded-3xl p-7 md:p-10 relative overflow-hidden">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2.5 bg-accent/15 rounded-xl text-accent">
                                        <MessageSquareText size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white">Send a Message</h3>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                                            <Wifi size={11} className="text-green-500" />
                                            Real-time SMTP
                                        </p>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {status === 'loading' && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mb-6 overflow-hidden"
                                        >
                                            <div className="flex justify-between gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                                {SEND_STEPS.map((step, i) => (
                                                    <div key={step.id} className="flex flex-col items-center gap-1.5 flex-1">
                                                        <div className={`p-1.5 rounded-lg transition-all ${i <= sendStep ? 'bg-accent/20 text-accent' : 'bg-white/5 text-gray-600'}`}>
                                                            {i < sendStep ? <Check size={12} /> : i === sendStep ? <Loader2 size={12} className="animate-spin" /> : <step.Icon size={12} />}
                                                        </div>
                                                        <span className={`text-[8px] font-bold uppercase tracking-wider ${i <= sendStep ? 'text-accent' : 'text-gray-600'}`}>{step.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField label="Full Name" name="name" type="text" placeholder="John Doe" value={formData.name} error={touched.name && errors.name} onChange={handleChange} onBlur={() => handleBlur('name')} />
                                        <FormField label="Email" name="email" type="email" placeholder="john@example.com" value={formData.email} error={touched.email && errors.email} onChange={handleChange} onBlur={() => handleBlur('email')} />
                                    </div>
                                    <FormField label="Subject" name="subject" type="text" placeholder="Web App Architecture" value={formData.subject} error={touched.subject && errors.subject} onChange={handleChange} onBlur={() => handleBlur('subject')} />

                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Project Brief</label>
                                            <span className={`text-[10px] font-bold tabular-nums ${formData.message.length > MAX_MESSAGE ? 'text-red-400' : 'text-gray-600'}`}>
                                                {formData.message.length}/{MAX_MESSAGE}
                                            </span>
                                        </div>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            required
                                            placeholder="Your vision, timeline, and budget..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur('message')}
                                            className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 outline-none text-sm resize-none transition-colors ${
                                                touched.message && errors.message ? 'border-red-500/50' : 'border-white/8 focus:border-accent/50 focus:bg-accent/5'
                                            }`}
                                        />
                                        {touched.message && errors.message && <p className="text-[10px] text-red-400 font-semibold">{errors.message}</p>}
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        whileHover={status !== 'loading' ? { scale: 1.01 } : {}}
                                        whileTap={status !== 'loading' ? { scale: 0.99 } : {}}
                                        className={`w-full py-4 rounded-xl font-black text-white uppercase tracking-widest text-sm flex items-center justify-center gap-2 disabled:opacity-60 ${
                                            status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-600/80' : 'bg-gradient btn-glow'
                                        }`}
                                    >
                                        <AnimatePresence mode="wait">
                                            {status === 'loading' && (
                                                <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                    <Loader2 className="animate-spin" size={16} /> Sending...
                                                </motion.span>
                                            )}
                                            {status === 'success' && (
                                                <motion.span key="s" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                    <CheckCircle2 size={16} /> Delivered!
                                                </motion.span>
                                            )}
                                            {status === 'error' && (
                                                <motion.span key="e" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                    <AlertCircle size={16} /> Try Again
                                                </motion.span>
                                            )}
                                            {status === 'idle' && (
                                                <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                    Send Message <Send size={16} />
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.button>

                                    {status === 'error' && errorMessage && (
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-400 text-center">{errorMessage}</motion.p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FormField({ label, name, type, placeholder, value, error, onChange, onBlur }) {
    return (
        <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">{label}</label>
            <input
                name={name}
                type={type}
                required
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 outline-none text-sm transition-colors ${
                    error ? 'border-red-500/50' : 'border-white/8 focus:border-accent/50 focus:bg-accent/5'
                }`}
            />
            {error && <p className="text-[10px] text-red-400 font-semibold">{error}</p>}
        </div>
    );
}

function ContactMethod({ Icon, label, value, href, copyable, copied, onCopy }) {
    return (
        <motion.div whileHover={{ x: 4 }} className="flex items-center gap-4 group">
            <div className="p-3 glass-card rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-0.5">{label}</p>
                {copyable ? (
                    <div className="flex items-center gap-2">
                        <a href={href} className="text-base font-bold text-white hover:text-accent transition-colors truncate">{value}</a>
                        <button type="button" onClick={onCopy} className="p-1 rounded-md bg-white/5 text-gray-500 hover:text-accent transition-colors" aria-label="Copy email">
                            {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                        </button>
                    </div>
                ) : (
                    <p className="text-base font-bold text-white">{value}</p>
                )}
            </div>
        </motion.div>
    );
}
