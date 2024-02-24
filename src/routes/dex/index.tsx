import dynamic from 'next/dynamic';
import { LoadingIndicator } from '@/components/Loading';
import { motion } from 'framer-motion';

// Dynamically import the Widget component
const LiFIWidget = dynamic(
    () => import('@/components/lifiWidget').then((module) => module.Widget) as any,
    {
        ssr: false,
        loading: () => <LoadingIndicator />,
    },
);

// Dynamically import another component
const RangoWidget = dynamic(
    () => import('@/components/rangoWidget').then((module) => module.App) as any,
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
            <LiFIWidget />
        </motion.div>
    )
}

export const RangoWidgetNext = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <RangoWidget />
        </motion.div>
    )
}
