import { motion } from 'framer-motion';

export const Oramper = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <iframe src="https://onramp.money/main/sell/?appId=761602"
            className='rounded-lg h-screen w-[375px] shadow-md'
            ></iframe>
        </motion.div>
    )
}