import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

const scrollToAbout = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
};


export function ScrollDownIndicator({ section }: { section: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToAbout(section)}
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
            >
                <span className="text-sm text-muted-foreground">Role para baixo</span>
                <ArrowDown className="text-primary" size={24} />
            </motion.div>
        </motion.div>
    );
}

export function ScrollUpIndicator({ section }: { section: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToAbout(section)}
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
            >
                <span className="text-sm text-muted-foreground">Role para cima</span>
                <ArrowUp className="text-primary" size={24} />
            </motion.div>
        </motion.div>
    );
}