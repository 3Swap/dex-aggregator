import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { OnrampWebSDK } from '@onramp.money/onramp-web-sdk';
import { LoadingIndicator } from '@/components/Loading';

const OnrampWidget = () => {
    useEffect(() => {
        // Initialize Onramp SDK
        const onrampInstance = new OnrampWebSDK({
            appId: 761602, 
            coinCode: 'usdt',
            network: 'erc20',
            fiatAmount: 1000,
            flowType: 2,
            walletAddress: '0xF62bf9E069B08a6e479208A36aDFE668701BCD94'
        });

        // Show the widget when ready
        onrampInstance.show();

        // Clean up the widget when the component is unmounted
        return () => {
            onrampInstance.close();
        };
    }, []); 

    return <LoadingIndicator />;
};

export const Oramper = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <OnrampWidget />
        </motion.div>
    )
}