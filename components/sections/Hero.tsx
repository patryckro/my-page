'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { socialLinks } from '@/lib/constants/social';
import { ScrollDownIndicator } from '../ui/scroll-indicator';
import { ElementType } from 'react';

export default function Hero() {

    const iconMap: Record<string, ElementType> = {
        github: Github,
        linkedin: Linkedin,
        mail: Mail,
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Gradient Blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-primary font-mono text-sm md:text-base mb-4"
                    >
                        Olá, meu nome é
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-4"
                    >
                        Patryck Moulaz
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-muted-foreground"
                    >
                        Desenvolvedor{' '}
                        <span className="gradient-text">Full-Stack .NET</span>
                    </motion.h2>

                    {/* Tech Stack */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-8"
                    >
                        <strong>C#</strong> • <strong>ASP.NET Core</strong> •{' '}
                        <strong>React</strong> • <strong>TypeScript</strong> •{' '}
                        <strong>SQL Server</strong>
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Especializado em criar soluções escaláveis e robustas.
                        Atualmente desenvolvendo sistemas governamentais de compliance e
                        vigilância sanitária no Rio de Janeiro.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    >
                        <Button size="lg" asChild>
                            <Link href="#projects">Ver Projetos</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="#contact">Entre em Contato</Link>
                        </Button>
                        <Button size="lg" variant="ghost" asChild>
                            <a href="/curriculo.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Baixar CV
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center justify-center gap-6"
                    >
                        {socialLinks.map((social) => {
                            const Icon = iconMap[social.icon] || Mail;
                            return (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target={social.url.startsWith('http') ? '_blank' : undefined}
                                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                                    aria-label={social.name}
                                >
                                    <Icon size={24} />
                                </Link>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <ScrollDownIndicator section="about" />
            </div>
        </section>
    );
}
