import Head from "next/head";
import dynamic from 'next/dynamic';
import { LoadingIndicator } from '@/components/Loading';
import Navbar from "@/components/Navbar";

export const LiFiWidgetNext = dynamic(
    () => import('@/components/Widget').then((module) => module.Widget) as any,
    {
        ssr: false,
        loading: () => <LoadingIndicator />,
    },
);



const Swap = () => {
    return (
        <div className="flex justify-start items-center h-screen flex-col">
            <Head>
                <title>3Swap | Dex Aggregator Swap</title>
            </Head>
            <Navbar visibleLink={false} />
            <div className="my-[5rem] py-[5rem] flex flex-col justify-center items-center space-y-3">
                <h3 className="text-3xl text-white font-semibold">Cross-Chain Bridge & Swap</h3>
                <LiFiWidgetNext />
            </div>
        </div>
    );
}

export default Swap;