import { useState } from 'react';
import { motion } from 'framer-motion';
import { LoadingIndicator } from '@/components/Loading'

export const Oramper = () => {
    const [isLoading, setIsLoading] = useState(true)


    function handleIframeLoad() {
        setIsLoading(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {isLoading && <LoadingIndicator />}
            <iframe src="https://onramp.money/main/sell/?appId=761602"
                className='rounded-lg h-screen w-[375px] shadow-md'
                onLoad={handleIframeLoad}
                style={{ display: isLoading ? 'none' : 'block' }}
            ></iframe>
        </motion.div>
    )
}