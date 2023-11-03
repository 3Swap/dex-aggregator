import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { PiCaretRightBold } from 'react-icons/pi'
import { TfiMenu } from 'react-icons/tfi'
import { BsFillMoonFill, BsDiscord } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'
import { AiFillInfoCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'


export const links = [
    {
        title: "Theme",
        type: 'function',
        icon: <BsFillMoonFill size={24} color="#fff" />
    },
    {
        url: 'https://twitter.com',
        type: "link",
        title: 'Twitter',
        icon: <RiTwitterXFill size={24} color="#fff" />
    },
    {
        url: 'https://discord.com',
        type: "link",
        title: 'Discord',
        icon: <BsDiscord size={24} color="#fff" />
    },
    {
        url: '/',
        type: "link",
        title: 'About',
        icon: <AiFillInfoCircle size={24} color="#fff" />
    }
]


export default function Navbar({ visibleLink }: any) {
    const [bgOpen, setBgOpen] = useState(false);
    const [openDropdown, setDropdown] = useState(false);

    function toggleDropdown() {
        setDropdown(!openDropdown)
    }


    return (
        <div className="w-full flex justify-between items-center pt-[1rem] px-5 z-10">
            <Link href="/">
                <Image src="/3swap.svg" width={796} height={208} alt="3swap" className="w-auto h-10" />
            </Link>
            <div className={`items-center gap-3 ${visibleLink ? "flex" : "hidden"}`}>
                <div className="items-center gap-3 hidden sm:flex">
                    <p className="text-white font-bold text-xl">EN</p>
                    <Image src="/bg/world.svg" width={30} height={30} alt="world icon" />
                </div>
                <Link href="/exchange" className="px-6 py-2 bg-[#4500A0] text-white rounded-lg shadow-md inline-flex items-center">
                    Launch dApp <PiCaretRightBold />
                </Link>
            </div>
            <div className={`${visibleLink ? "hidden" : "flex relative"}`}>
                <div className={`${bgOpen ? "bg-[#fff]/[.11]" : ""} p-3 rounded-full hover:cursor-pointer`}
                    onMouseOver={() => setBgOpen(true)}
                    onMouseLeave={() => setBgOpen(false)}
                    onClick={toggleDropdown}
                >
                    <TfiMenu size={30} className="hover:cursor-pointer text-purple-600" />
                </div>


                {openDropdown && (
                    <motion.div className="absolute w-36 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md h-fit py-3 px-2 flex flex-col items-center justify-start gap-y-5 right-0 top-16 rounded-xl">
                        {
                            links.map((element, index) => {
                                if (element.type === "function") {
                                    const { icon, title } = element;
                                    return (
                                        <button className="flex gap-x-3 items-center justify-first py-2 px-3 rounded-md text-white w-full hover:bg-[#fff]/[.11]" key={index}>
                                            {icon}
                                            {title}
                                        </button>
                                    )
                                }

                                if (element.type === "link") {
                                    const { url, title, icon } = element;
                                    return (
                                        <Link className="flex gap-x-3 items-center justify-first py-2 px-3 rounded-md text-white w-full hover:bg-[#fff]/[.11]" href={url ? url : '/'} key={index}>
                                            {icon}
                                            {title}
                                        </Link>
                                    )
                                }
                            })
                        }
                    </motion.div>
                )}
            </div>
        </div>
    )
}