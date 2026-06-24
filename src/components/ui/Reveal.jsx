'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

export default function Reveal({ children, className = '', delay = 0, variant = fadeUp }) {
    return (
        <motion.div
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
