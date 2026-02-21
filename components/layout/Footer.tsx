import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/lib/constants/social';
import { Separator } from '@/components/ui/separator';
import { ElementType } from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const iconMap: Record<string, ElementType> = {
        github: Github,
        linkedin: Linkedin,
        mail: Mail,
    };

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold">
                                <span className="text-primary">{'<'}</span>
                                Patryck
                                <span className="text-primary">{' />'}</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Desenvolvedor Full-Stack .NET especializado em criar soluções
                            escaláveis e robustas.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/#about"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#projects"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Projetos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#experience"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Experiência
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Redes Sociais</h3>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon] || Mail;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        aria-label={social.name}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Patryck Moulaz. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
