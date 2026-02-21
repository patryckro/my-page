'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/lib/types';
import ExperienceCard from './ExperienceCard';

interface TimelineProps {
    experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
    return (
        <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12">
                {experiences.map((experience, index) => (
                    <div
                        key={experience.id}
                        className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Timeline Dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10"
                        />

                        {/* Content */}
                        <div className="w-full md:w-[calc(50%-2rem)]">
                            <ExperienceCard experience={experience} index={index} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
