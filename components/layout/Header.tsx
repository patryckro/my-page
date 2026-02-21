'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import ThemeToggle from '@/components/shared/ThemeToggle';
import LanguageSwitch from '@/components/shared/LanguageSwitch';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['about', 'skills', 'projects', 'experience'];
            const scrollPosition = window.scrollY + 120; // compensa o header

            let currentSection = '';

            for (const section of sections) {
                const el = document.getElementById(section);
                if (!el) continue;

                const offsetTop = el.offsetTop;
                const offsetBottom = offsetTop + el.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    currentSection = section;
                    break;
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // inicial

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="#" className="flex items-center">
                        <span className="text-2xl font-bold">
                            <span className="text-primary">{'<'}</span>
                            Patryck
                            <span className="text-primary">{' />'}</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <Navigation activeSection={activeSection} />

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-2">
                        <ThemeToggle />
                        <LanguageSwitch />
                    </div>

                    {/* Mobile Menu */}
                    <MobileMenu activeSection={activeSection} />
                </div>
            </div>
        </motion.header>
    );
}
