'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, useSpring } from 'framer-motion';

const CURSOR_ZONE_SELECTOR = '.cursor-zone';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isInZone, setIsInZone] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) return;

        const isInsideZone = (target) => target?.closest?.(CURSOR_ZONE_SELECTOR);

        const mouseMove = (e) => {
            const inZone = !!isInsideZone(e.target);
            setIsInZone(inZone);
            if (inZone) {
                setMousePosition({ x: e.clientX, y: e.clientY });
            }
        };

        const handleMouseOver = (e) => {
            if (!isInsideZone(e.target)) {
                setIsHovering(false);
                return;
            }

            const target = e.target;
            setIsHovering(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                !!target.closest('button') ||
                !!target.closest('a')
            );
        };

        const handleMouseLeave = () => setIsInZone(false);

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const galaxySize = 25;
    const electrons = useMemo(() => {
        if (!mounted) return [];
        return [...Array(galaxySize)].map((_, i) => ({
            delay: Math.random() * 0.5,
            radius: 40 + Math.random() * 120,
            duration: 3 + Math.random() * 5,
            color: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#ec4899' : '#00d2ff',
            size: 2 + Math.random() * 5,
            tilt: Math.random() * 360,
        }));
    }, [mounted]);

    if (!mounted || !isInZone) return null;

    const cursorSize = isHovering ? 150 : 40;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            <motion.div
                className="fixed top-0 left-0 rounded-full blur-[80px] opacity-30 z-0"
                animate={{
                    width: 300,
                    height: 300,
                    x: mousePosition.x - 150,
                    y: mousePosition.y - 150,
                    background: isHovering
                        ? 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)'
                        : 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 100 }}
            />

            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full z-50 shadow-[0_0_20px_#fff,0_0_40px_#8b5cf6,0_0_60px_#ec4899]"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 2 : 1,
                    rotate: isHovering ? 180 : 0,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            />

            <motion.div
                className="fixed top-0 left-0 border border-white/20 rounded-full z-40 backdrop-blur-[2px]"
                animate={{
                    width: cursorSize,
                    height: cursorSize,
                    x: mousePosition.x - cursorSize / 2,
                    y: mousePosition.y - cursorSize / 2,
                    borderColor: isHovering ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
                    borderWidth: isHovering ? 2 : 1,
                }}
            />

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="fixed top-0 left-0"
                style={{ x: mousePosition.x, y: mousePosition.y }}
            >
                {electrons.map((config, i) => (
                    <OrbitingElectron
                        key={i}
                        config={config}
                        mouse={{ x: 0, y: 0 }}
                        isHovering={isHovering}
                    />
                ))}
            </motion.div>

            <TrailingLight mouse={mousePosition} />
        </div>
    );
}

function OrbitingElectron({ config, mouse, isHovering }) {
    const x = useSpring(mouse.x, { damping: 30, stiffness: 150 });
    const y = useSpring(mouse.y, { damping: 30, stiffness: 150 });

    useEffect(() => {
        x.set(mouse.x);
        y.set(mouse.y);
    }, [mouse, x, y]);

    return (
        <motion.div
            className="fixed top-0 left-0 z-30"
            style={{ x, y, translateX: '-50%', translateY: '-50%', rotate: config.tilt }}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: config.duration, repeat: Infinity, ease: 'linear' }}
                style={{
                    width: config.radius * (isHovering ? 1.4 : 1) * 2,
                    height: config.radius * (isHovering ? 1.4 : 1) * 2,
                }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                        width: config.size,
                        height: config.size,
                        backgroundColor: config.color,
                        boxShadow: `0 0 15px ${config.color}, 0 0 30px ${config.color}`,
                        mixBlendMode: 'screen',
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

function TrailingLight({ mouse }) {
    const trailCount = 10;
    return (
        <>
            {[...Array(trailCount)].map((_, i) => (
                <LightParticle key={i} index={i} mouse={mouse} total={trailCount} />
            ))}
        </>
    );
}

function LightParticle({ index, mouse, total }) {
    const x = useSpring(mouse.x, { damping: 15 + index * 5, stiffness: 100 - index * 8 });
    const y = useSpring(mouse.y, { damping: 15 + index * 5, stiffness: 100 - index * 8 });

    useEffect(() => {
        x.set(mouse.x);
        y.set(mouse.y);
    }, [mouse, x, y]);

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full z-20"
            style={{
                x,
                y,
                width: 4 - (index / total) * 3,
                height: 4 - (index / total) * 3,
                backgroundColor: '#fff',
                opacity: (1 - index / total) * 0.5,
                boxShadow: '0 0 10px #fff',
            }}
        />
    );
}
