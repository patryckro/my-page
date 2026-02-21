'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface NavigationProps {
    activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
    const t = useTranslations('nav');

    const navItems = [
        { href: '#', section: '' as const, labelKey: 'home' },
        { href: '#about', section: 'about' as const, labelKey: 'about' },
        { href: '#skills', section: 'skills' as const, labelKey: 'skills' },
        { href: '#projects', section: 'projects' as const, labelKey: 'projects' },
        { href: '#experience', section: 'experience' as const, labelKey: 'experience' },
        { href: '#contact', section: 'contact' as const, labelKey: 'contact' },
    ];

    return (
        <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
                const isActive = activeSection === item.section;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive ? 'text-primary' : 'text-muted-foreground'
                            }`}
                    >
                        {t(item.labelKey)}
                        {isActive && (
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}
