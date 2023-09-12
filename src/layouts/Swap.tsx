import { Navbar } from "@/components/Navbar/Swap"
import { Footer } from "@/components/Footer/Swap"


export default function Layout({children}:any){
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>        
    )
}