'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ThemeToggle from '@/components/shared/ThemeToggle';
import LanguageSwitch from '@/components/shared/LanguageSwitch';

interface MobileMenuProps {
    activeSection: string;
}

export default function MobileMenu({ activeSection }: MobileMenuProps) {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();
    const t = useTranslations('nav');

    const navItems = [
        { href: '#', section: '' as const, label: t('home') },
        { href: '#about', section: 'about' as const, label: t('about') },
        { href: '#skills', section: 'skills' as const, label: t('skills') },
        { href: '#projects', section: 'projects' as const, label: t('projects') },
        { href: '#experience', section: 'experience' as const, label: t('experience') },
        { href: '#contact', section: 'contact' as const, label: t('contact') },
    ];

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                    {navItems.map((item) => {
                        const isActive =
                            activeSection === item.section || pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`text-lg font-medium transition-colors ${isActive
                                    ? 'text-primary'
                                    : 'text-muted-foreground hover:text-primary'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}

                    <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                        <ThemeToggle />
                        <LanguageSwitch />
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
