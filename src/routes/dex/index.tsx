import dynamic from 'next/dynamic';
import { LoadingIndicator } from '@/components/Loading';
import { motion } from 'framer-motion';

const Widget = dynamic(
    () => import('@/components/Widget').then((module) => module.Widget) as any,
    {
        ssr: false,
        loading: () => <LoadingIndicator />,
    },
);

export const LiFiWidgetNext = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Widget />
        </motion.div>
    )
}