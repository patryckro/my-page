'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeading from '@/components/shared/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/constants/projects';
import { ProjectCategory } from '@/lib/types';

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
    const [showAll, setShowAll] = useState(false);

    const categories: Array<{ value: ProjectCategory | 'all'; label: string }> = [
        { value: 'all', label: 'Todos' },
        { value: 'fullstack', label: 'Full-Stack' },
        { value: 'backend', label: 'Backend' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'mobile', label: 'Mobile' },
    ];

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    const displayedProjects = showAll
        ? filteredProjects
        : filteredProjects.slice(0, 6);

    return (
        <section id="projects" className="section-container">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Projetos em Destaque"
                    subtitle="Alguns dos projetos que desenvolvi ao longo da minha carreira"
                />

                {/* Category Filter */}
                <AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category.value}
                                variant={selectedCategory === category.value ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => {
                                    setSelectedCategory(category.value);
                                    setShowAll(false);
                                }}
                            >
                                {category.label}
                            </Button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Show More Button */}
                {filteredProjects.length > 6 && (
                    <AnimatedSection>
                        <div className="text-center">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? 'Ver Menos' : `Ver Todos (${filteredProjects.length})`}
                            </Button>
                        </div>
                    </AnimatedSection>
                )}

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <AnimatedSection>
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">
                                Nenhum projeto encontrado nesta categoria.
                            </p>
                        </div>
                    </AnimatedSection>
                )}
            </div>
        </section>
    );
}
