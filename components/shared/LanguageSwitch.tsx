'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LanguageSwitch() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChangeLocale = (newLocale: string) => {
        // Remove o locale atual do pathname
        const pathWithoutLocale = pathname.replace(`/${locale}`, '');
        // Navega para o novo locale
        router.push(`/${newLocale}${pathWithoutLocale}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Change language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleChangeLocale('pt-BR')}>
                    <span className="mr-2">🇧🇷</span>
                    <span>Português</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleChangeLocale('en-US')}>
                    <span className="mr-2">🇺🇸</span>
                    <span>English</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
