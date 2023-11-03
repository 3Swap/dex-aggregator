import { motion } from 'framer-motion';
import InDevelopment from '../InDevelopment';

export const Oramper = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <InDevelopment />
        </motion.div>
    )
}