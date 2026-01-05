import Image from "next/image"

export default function Footer() {
    return (
        <div className="w-full py-24 px-16">
            <div className="flex mb-20">
                <h2 className="text-[96px] leading-tight flex-1 text-black">Let&apos;s Connect<br />Now!</h2>
                <a
                    href="mailto:chahar.sumit888@gmail.com"
                    className="flex items-center gap-4 bg-black border-2 border-white p-4 rounded-full self-center animate-[button-animate_1s_ease-in-out_infinite] hover:opacity-90 transition-opacity cursor-pointer"
                >
                    <div className="p-4 bg-white rounded-full w-fit">
                        <Image
                            src="/double-right-arrow.svg"
                            alt="About"
                            width={24}
                            height={24}
                            className="animate-[arrow-point_1s_ease-in-out_infinite]"
                        />
                    </div>
                    <p className="text-white text-lg font-semibold">Hire Me!</p>
                </a>
            </div>
            <div className="flex gap-10 border-t-2 border-black py-6">
                <ul className="flex w-full gap-6 text-black justify-between">
                    <li>
                        <a href="mailto:chahar.sumit888@gmail.com" className="hover:text-black transition-colors">
                            chahar.sumit888@gmail.com
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/sumit-chahar-4387a4183/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                        >
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/chaharsumitdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/chaharsumit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                        >
                            Github Graveyard
                        </a>
                    </li>
                    <li>
                        <a href="tel:+917837723658" className="hover:text-black transition-colors">
                            +91-7837723658
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}