'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeading from '@/components/shared/SectionHeading';
import Timeline from '@/components/experience/Timeline';
import { experiences } from '@/lib/constants/experience';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Experience() {
    const totalYears = new Date().getFullYear() - 2022; // Ajuste conforme sua experiência

    return (
        <section id="experience" className="section-container bg-muted/30">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Experiência Profissional"
                    subtitle={`${totalYears}+ anos desenvolvendo soluções que fazem a diferença`}
                />

                {/* Summary Stats */}
                <AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary mb-2">{totalYears}+</p>
                            <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary mb-2">{experiences.length}</p>
                            <p className="text-sm text-muted-foreground">Empresas</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary mb-2">10+</p>
                            <p className="text-sm text-muted-foreground">Projetos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-primary mb-2">20+</p>
                            <p className="text-sm text-muted-foreground">Tecnologias</p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Timeline */}
                <Timeline experiences={experiences} />

                {/* Download CV */}
                <AnimatedSection delay={0.3}>
                    <div className="text-center mt-16">
                        <Button size="lg" asChild>
                            <a href="/curriculo.pdf" download>
                                <Download className="mr-2 h-5 w-5" />
                                Baixar Currículo Completo
                            </a>
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
