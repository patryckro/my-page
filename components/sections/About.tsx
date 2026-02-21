'use client';

import Image from 'next/image';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeading from '@/components/shared/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Código limpo, testável e bem documentado seguindo as melhores práticas',
    },
    {
        icon: Rocket,
        title: 'Performance',
        description: 'Foco em otimização e escalabilidade das aplicações',
    },
    {
        icon: Users,
        title: 'Colaboração',
        description: 'Trabalho em equipe e comunicação efetiva em projetos ágeis',
    },
    {
        icon: Award,
        title: 'Qualidade',
        description: 'Comprometimento com excelência e entrega de valor',
    },
];

export default function About() {
    return (
        <section id="about" className="section-container">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Sobre Mim"
                    subtitle="Conheça um pouco mais sobre minha trajetória e experiência"
                />

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image */}
                    <AnimatedSection direction="left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
                            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/20">
                                <Image
                                    src="/my-page/images/profile.png"
                                    alt="Patryck Moulaz"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Content */}
                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="space-y-4">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Sou um <strong className="text-foreground">desenvolvedor full-stack</strong> apaixonado
                                por tecnologia e resolução de problemas complexos. Com mais de{' '}
                                <strong className="text-foreground">5 anos de experiência</strong>, venho construindo
                                soluções robustas e escaláveis utilizando o ecossistema <strong className="text-foreground">.NET</strong> e
                                tecnologias modernas de frontend.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Atualmente, trabalho no <strong className="text-foreground">Governo do Rio de Janeiro</strong>,
                                desenvolvendo sistemas críticos de vigilância sanitária que impactam
                                diretamente a vida de milhares de pessoas. Minha expertise abrange desde
                                a arquitetura de APIs RESTful e GraphQL até o desenvolvimento de
                                aplicações mobile com Flutter e React Native.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Acredito que bom código é aquele que é fácil de entender, manter e
                                escalar. Por isso, estou sempre estudando novas tecnologias e buscando
                                aplicar as melhores práticas de desenvolvimento em cada projeto.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((highlight, index) => (
                        <AnimatedSection key={highlight.title} delay={index * 0.1}>
                            <Card className="h-full hover:border-primary/50 transition-colors">
                                <CardContent className="p-6">
                                    <highlight.icon className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {highlight.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
