'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
        >
            <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-all">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-110 duration-300"
                    />
                    {project.featured && (
                        <Badge className="absolute top-4 right-4 bg-primary">
                            Destaque
                        </Badge>
                    )}
                </div>

                <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-semibold line-clamp-2">
                            {project.title}
                        </h3>
                        <Badge variant="outline" className="shrink-0">
                            {project.category}
                        </Badge>
                    </div>

                    {project.startDate && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>
                                {new Date(project.startDate).toLocaleDateString('pt-BR', {
                                    month: 'short',
                                    year: 'numeric',
                                })}
                                {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString('pt-BR', {
                                    month: 'short',
                                    year: 'numeric',
                                })}`}
                            </span>
                        </div>
                    )}
                </CardHeader>

                <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 5 && (
                            <Badge variant="secondary" className="text-xs">
                                +{project.technologies.length - 5}
                            </Badge>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="gap-2 pt-4 border-t">
                    {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild className="flex-1">
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Código
                            </Link>
                        </Button>
                    )}
                    {project.liveUrl && (
                        <Button variant="default" size="sm" asChild className="flex-1">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                            </Link>
                        </Button>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                        <Button variant="outline" size="sm" disabled className="flex-1">
                            Projeto Privado
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
