import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useTabRerouter } from "@/hooks/tabs";
import { useMemo, useState } from "react";
import ToggleButton from '@/components/Button/ToggleButton';
import { AnimatePresence } from "framer-motion";

enum Route {
    LIFI = 'exchange',
    ORAMPER = 'oramper',
    STAKING = 'staking-pool',
    RANGO = 'rango' 
}

const Swap = () => {
    const { query, push } = useRouter();
    const { id } = query;
    const RenderedChild = useTabRerouter(id as Route);
    const route = useMemo(() => (id as Route) || Route.LIFI, [id]);
    
    // State for the secondary selection within the 'Exchange' option
    const [exchangeOption, setExchangeOption] = useState('Rango');

    // Determine if the secondary toggle should be visible
    const showSecondaryToggle = route === Route.RANGO || route === Route.LIFI;

    // Handle clicking on the secondary toggle buttons
    const handleSecondaryToggle = (option: 'Rango' | 'LiFi') => {
        const newRoute = option === 'Rango' ? Route.RANGO : Route.LIFI;
        push(`/${newRoute}`);
        setExchangeOption(option);
    };

    return (
        <div className="flex justify-start items-center h-screen flex-col">
            <Head>
                <title>3Swap | Dex Aggregator Swap</title>
            </Head>
            <Navbar visibleLink={false} />
            <div className="flex justify-center items-center py-12 w-full flex-col">
                {/* Main toggle buttons */}
                <div className="flex justify-center items-center rounded-[30px] bg-[#fff]/[.11] py-1 px-1">
                    <ToggleButton isActive={route === Route.RANGO || route === Route.LIFI} onClick={() => push(`/${Route.LIFI}`)}>
                        <span>Exchange</span>
                    </ToggleButton>
                    <ToggleButton isActive={route === Route.ORAMPER} onClick={() => push(`/${Route.ORAMPER}`)}>
                        <span>Buy</span>
                    </ToggleButton>
                    <ToggleButton isActive={route === Route.STAKING} onClick={() => push(`/${Route.STAKING}`)}>
                        <span>Staking Pool</span>
                    </ToggleButton>
                </div>
                
                {/* Conditional rendering for secondary toggle buttons */}
                {showSecondaryToggle && (
                    <div className="flex justify-center items-center mt-4">
                        <ToggleButton isActive={exchangeOption === 'Rango'} onClick={() => handleSecondaryToggle('Rango')}>
                            <span>Rango</span>
                        </ToggleButton>
                        <ToggleButton isActive={exchangeOption === 'LiFi'} onClick={() => handleSecondaryToggle('LiFi')}>
                            <span>LiFi</span>
                        </ToggleButton>
                    </div>
                )}
            </div>
            <div className="mb-[5rem] pb-[5rem] flex flex-col justify-center items-center">
                <AnimatePresence mode='wait'>
                    <RenderedChild />
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Swap;
