import { motion } from 'framer-motion';

type Props = {
    className: string;
    children: React.ReactNode;
};

const AnimationContainer = ({ className, children }: Props) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimationContainer;
