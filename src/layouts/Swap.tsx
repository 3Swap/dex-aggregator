import { Navbar } from "@/components/Navbar/exchange"
import { Footer } from "@/components/Footer/exchange"


export default function Layout({ children }: any) {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}