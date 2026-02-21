'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeading from '@/components/shared/SectionHeading';
import SkillCard from '@/components/skills/SkillCard';
import { Button } from '@/components/ui/button';
import { skillGroups } from '@/lib/constants/skills';
import { SkillCategory } from '@/lib/types';

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');

    const categories = [
        { value: 'all' as const, label: 'Todas' },
        { value: 'backend' as const, label: 'Backend' },
        { value: 'frontend' as const, label: 'Frontend' },
        { value: 'mobile' as const, label: 'Mobile' },
        { value: 'database' as const, label: 'Database' },
        { value: 'cloud' as const, label: 'Cloud' },
        { value: 'tools' as const, label: 'Ferramentas' },
    ];

    const filteredSkills =
        selectedCategory === 'all'
            ? skillGroups.flatMap((group) => group.skills)
            : skillGroups.find((group) => group.category === selectedCategory)?.skills || [];

    return (
        <section id="skills" className="section-container bg-muted/30">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Habilidades Técnicas"
                    subtitle="Tecnologias e ferramentas que domino e utilizo no dia a dia"
                />

                {/* Category Filter */}
                <AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category.value}
                                variant={selectedCategory === category.value ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setSelectedCategory(category.value)}
                            >
                                {category.label}
                            </Button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredSkills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                {/* Summary Stats */}
                <AnimatedSection delay={0.3}>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-primary mb-2">5+</p>
                            <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary mb-2">20+</p>
                            <p className="text-sm text-muted-foreground">Projetos Completos</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary mb-2">15+</p>
                            <p className="text-sm text-muted-foreground">Tecnologias</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary mb-2">10k+</p>
                            <p className="text-sm text-muted-foreground">Linhas de Código</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
