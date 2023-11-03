
import Navbar from "@/components/Navbar"
import { Footer } from '@/components/Footer'
import Head from "next/head"

export default function Layout({ children, pageTitle }: any) {
    return (
        <>
            <Head>
                <title>3Swap | {pageTitle ? pageTitle : "Default Layout Page"}</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}