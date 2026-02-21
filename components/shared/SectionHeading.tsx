import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
}

export default function SectionHeading({
    title,
    subtitle,
    align = 'center',
}: SectionHeadingProps) {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <AnimatedSection className={`mb-12 ${alignClasses[align]}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </AnimatedSection>
    );
}
