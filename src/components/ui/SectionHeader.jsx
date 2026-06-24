'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function SectionHeader({ eyebrow, title, highlight, description, align = 'left', className = '' }) {
    const isCenter = align === 'center';

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`mb-16 md:mb-20 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
        >
            {eyebrow && (
                <motion.div variants={fadeUp} className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}>
                    <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-accent">
                        {eyebrow}
                    </span>
                    {!isCenter && <span className="h-px w-8 bg-gradient-to-r from-accent-secondary to-transparent hidden sm:block" />}
                </motion.div>
            )}
            <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95]"
            >
                {title}{' '}
                {highlight && <span className="text-gradient">{highlight}</span>}
            </motion.h2>
            {description && (
                <motion.p
                    variants={fadeUp}
                    className={`mt-5 text-gray-400 text-base md:text-lg leading-relaxed font-medium ${isCenter ? 'mx-auto' : ''}`}
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
}
