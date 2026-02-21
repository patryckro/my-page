import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>; // 2. Adicione a tipagem
}) {
    const { locale } = await params;

    setRequestLocale(locale);

    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
        </>
    );
}
