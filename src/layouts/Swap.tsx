import { Navbar } from "@/components/Navbar/Swap"
import { Footer } from "@/components/Footer/Swap"


export default function Layout({children}:any){
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <Navbar />
            {children}
            <Footer />
        </div>        
    )
}