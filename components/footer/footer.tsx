import Image from "next/image"

export default function Footer() {
    return (
        <div className="w-full py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-16 overflow-x-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-0 mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[96px] leading-tight flex-1 text-black break-words text-center sm:text-left">
                    Let&apos;s Connect<br />Now!
                </h2>
                <a
                    href="mailto:chahar.sumit888@gmail.com"
                    className="flex items-center gap-3 sm:gap-4 bg-black border-2 border-white p-3 sm:p-4 rounded-full self-center animate-[button-animate_1s_ease-in-out_infinite] hover:opacity-90 transition-opacity cursor-pointer w-fit"
                >
                    <div className="p-3 sm:p-4 bg-white rounded-full w-fit">
                        <Image
                            src="/double-right-arrow.svg"
                            alt="Contact"
                            width={24}
                            height={24}
                            className="animate-[arrow-point_1s_ease-in-out_infinite]"
                        />
                    </div>
                    <p className="text-white text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">Hire Me!</p>
                </a>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 border-t-2 border-black py-4 sm:py-5 md:py-6">
                <ul className="flex flex-wrap w-full gap-4 sm:gap-5 md:gap-6 text-black justify-center sm:justify-between">
                    <li className="w-full sm:w-auto text-center sm:text-left">
                        <a href="mailto:chahar.sumit888@gmail.com" className="hover:text-black transition-colors break-all sm:break-normal">
                            chahar.sumit888@gmail.com
                        </a>
                    </li>
                    <li className="w-full sm:w-auto text-center sm:text-left">
                        <a
                            href="https://www.linkedin.com/in/sumit-chahar-4387a4183/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                        >
                            Linkedin
                        </a>
                    </li>
                    <li className="w-full sm:w-auto text-center sm:text-left">
                        <a
                            href="https://github.com/chaharsumitdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                        >
                            Github
                        </a>
                    </li>
                    <li className="w-full sm:w-auto text-center sm:text-left">
                        <a
                            href="https://github.com/chaharsumit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                        >
                            Github Graveyard
                        </a>
                    </li>
                    <li className="w-full sm:w-auto text-center sm:text-left">
                        <a href="tel:+917837723658" className="hover:text-black transition-colors whitespace-nowrap">
                            +91-7837723658
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}