import '../globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
});

const locales = ['pt-BR', 'en-US'];

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
    title: 'Patryck Moulaz - Desenvolvedor Full-Stack .NET',
    description:
        'Portfólio de Patryck Moulaz, desenvolvedor full-stack especializado em .NET, C#, ASP.NET Core, React e React Native.',
    keywords: [
        'desenvolvedor',
        'full-stack',
        '.NET',
        'C#',
        'ASP.NET Core',
        'React',
        'TypeScript',
        'React Native',
    ],
    authors: [{ name: 'Patryck Moulaz' }],
    openGraph: {
        title: 'Patryck Moulaz - Desenvolvedor Full-Stack .NET',
        description:
            'Portfólio de Patryck Moulaz, desenvolvedor full-stack especializado em .NET, C#, ASP.NET Core, React e React Native.',
        type: 'website',
        locale: 'pt_BR',
        siteName: 'Patryck Moulaz',
    },
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Validate locale
    const { locale } = await params;

    setRequestLocale(locale);

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="flex min-h-screen flex-col">
                            <Header />
                            <main className="flex-1 pt-16">{children}</main>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
