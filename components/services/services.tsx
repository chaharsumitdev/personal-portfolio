import Image from "next/image"

export default function services() {
    return (
        <div className="py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-16 overflow-x-hidden">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[96px] text-black mb-6 sm:mb-8 md:mb-10 font-bold break-words">
                Services
            </h2>
            <ul className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-4">
                <li className="flex flex-col lg:flex-row rounded-2xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-4 lg:py-16 text-black gap-6 sm:gap-8 md:gap-10">
                    <div className="flex-1 w-full">
                        <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl border-l-2 border-black pl-4 break-words">Web & Mobile App Development</h4>
                    </div>
                    <div className="flex-1 w-full text-base sm:text-lg md:text-xl font-semibold">
                        <p className="break-words">Delivering end-to-end web and mobile applications, from product architecture and feature development to deployment, performance optimization, and scaling.</p>
                    </div>
                    <div className="flex flex-1 w-full lg:justify-end">
                        <Image
                            src="/react-native.jpeg"
                            alt="Web & Mobile App Development"
                            width={250}
                            height={250}
                            className="rounded-lg w-full lg:w-auto lg:max-w-[250px] h-auto aspect-square object-cover"
                        />
                    </div>
                </li>
                <li className="flex flex-col lg:flex-row rounded-2xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-4 lg:py-16 text-black gap-6 sm:gap-8 md:gap-10">
                    <div className="flex-1 w-full">
                        <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl border-l-2 border-black pl-4 break-words">Backend Development</h4>
                    </div>
                    <div className="flex-1 w-full text-base sm:text-lg md:text-xl font-semibold">
                        <p className="break-words">Designing and implementing robust backend systems using Node.js, with a strong focus on secure APIs, authentication, data integrity, and handling high-concurrency traffic.</p>
                    </div>
                    <div className="flex flex-1 w-full lg:justify-end">
                        <Image
                            src="/backend.jpeg"
                            alt="Backend Development"
                            width={250}
                            height={250}
                            className="rounded-lg w-full lg:w-auto lg:max-w-[250px] h-auto aspect-square object-cover"
                        />
                    </div>
                </li>
                <li className="flex flex-col lg:flex-row rounded-2xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-4 lg:py-16 text-black gap-6 sm:gap-8 md:gap-10">
                    <div className="flex-1 w-full">
                        <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl border-l-2 border-black pl-4 break-words">CMS & Admin Platforms</h4>
                    </div>
                    <div className="flex-1 w-full text-base sm:text-lg md:text-xl font-semibold">
                        <p className="break-words">Developing custom CMS and admin platforms that enable teams to manage content, operations, and workflows efficiently without constant engineering involvement.</p>
                    </div>
                    <div className="flex flex-1 w-full lg:justify-end">
                        <Image
                            src="/cms.jpeg"
                            alt="CMS & Admin Platforms"
                            width={250}
                            height={250}
                            className="rounded-lg w-full lg:w-auto lg:max-w-[250px] h-auto aspect-square object-cover"
                        />
                    </div>
                </li>
            </ul>
        </div>
    )
}