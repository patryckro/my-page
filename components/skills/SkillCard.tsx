'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Skill } from '@/lib/types';

interface SkillCardProps {
    skill: Skill;
    index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
        >
            <Card className="h-full hover:border-primary/50 transition-all cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    {/* Icon placeholder - você pode usar react-icons ou lucide-react */}
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                            {skill.icon ? <skill.icon /> : <></>}
                        </span>
                    </div>

                    <div className="flex-1">
                        <h3 className="font-semibold mb-2">{skill.name}</h3>
                        {skill.yearsOfExperience && (
                            <p className="text-sm text-muted-foreground">
                                {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'ano' : 'anos'}
                            </p>
                        )}
                    </div>

                    {/* Proficiency Bar */}
                    <div className="w-full">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>Proficiência</span>
                            <span>{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                transition={{ duration: 1, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="h-full bg-primary rounded-full"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
