'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/lib/types';
import Link from 'next/link';

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="hover:border-primary/50 transition-all">
                <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                {experience.companyUrl ? (
                                    <Link
                                        href={experience.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-primary transition-colors"
                                    >
                                        <Building2 className="h-5 w-5" />
                                        <h3 className="text-xl font-semibold">{experience.company}</h3>
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Building2 className="h-5 w-5" />
                                        <h3 className="text-xl font-semibold">{experience.company}</h3>
                                    </div>
                                )}
                            </div>

                            <p className="text-lg font-medium text-primary mb-2">
                                {experience.position}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span>{experience.period}</span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {experience.location}
                                </span>
                                {experience.current && (
                                    <Badge variant="default">Atual</Badge>
                                )}
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                        {experience.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground flex gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Achievements */}
                    {experience.achievements && experience.achievements.length > 0 && (
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold mb-3">Principais Conquistas:</h4>
                            <ul className="space-y-2">
                                {experience.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technologies */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3">Tecnologias Utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
