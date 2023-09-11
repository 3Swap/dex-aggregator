import Image from "next/image"
import Link from "next/link"

export default function Navbar({ }) {
    return (
        <div className="w-full flex justify-between items-center pt-[1rem] px-5 z-10">
            <div>
                <Image src="/3swap.svg" width={796} height={208} alt="3swap" className="w-auto h-10" />
            </div>
            <div>
                <Link href="/" className="px-6 py-2 bg-[#4500A0] text-white rounded-lg shadow-md">
                    Launch dApp {'>'}
                </Link>
            </div>
        </div>
    )
}