import Head from "next/head";
import Layout from "@/layouts/Swap";
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
            <Navbar />
            <div className="my-[5rem] py-[5rem] flex flex-col justify-center items-center">
                <LiFiWidgetNext />
            </div>
        </div>
    );
}

export default Swap;