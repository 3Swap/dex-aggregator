import Link from "next/link"
import { PiCaretRightBold } from 'react-icons/pi'
import Toast from 'awesome-toast-component'

export const Footer = () => {
    return (
        <div className="h-fit py-[3.5rem] sm:px-10 px-7 w-full flex justify-center flex-col items-center gap-y-2 text-white">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 sm:h-[35vh] h-[45vh] w-[85%] mx-auto flex flex-col items-center justify-center gap-y-3 rounded-lg">
                <h3 className="font-bold sm:text-3xl Nunito_Sans text-center">Subscribe to 3Swap newsletter</h3>
                <p>Get the latest news and updates</p>
                <button onClick={() => {
                    new Toast("Feature in Development")
                }} className="inline-flex justify-center gap-x-1 py-4 sm:px-[5rem] px-12 border rounded-[20px] border-white items-center sm:text-semibold text-sm">
                    Subscribe <PiCaretRightBold />
                </button>
            </div>
            <p className="text-[#1E1E1E]/50 font-medium text-md">&copy; 2023 3Swap, All Rights Reserved.</p>
        </div>
    )
}