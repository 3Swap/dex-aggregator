import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"


export default function Layout({ children }: any) {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}