import Image from "next/image"

export default function Skills() {
    return (
        <div className="w-full py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-16 overflow-x-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[96px] text-black font-bold text-center leading-[1.25] mb-6 sm:mb-8 md:mb-10 break-words">
                I USE <br />MODERN TECH STACK
            </h1>
            <div className="flex-1">
                <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl px-0 sm:px-4 md:px-8 lg:px-16 mb-6 sm:mb-8 text-center font-semibold break-words">
                    I work with a modern, production-ready tech stack focused on scalability, performance, and long-term maintainability. My day-to-day tools include React, Next.js, and React Native on the frontend, with Node.js powering backend services and APIs. I've worked extensively with PostgreSQL and MongoDB for data-heavy applications, along with custom CMS platforms like Payload. This stack allows me to build fast, reliable systems that handle real-world traffic, complex workflows, and evolving product requirements without sacrificing developer experience or code quality.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/react-icon.svg"
                            alt="React"
                            width={120}
                            height={120}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/nextjs.svg"
                            alt="Next.js"
                            width={120}
                            height={120}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/typescript.svg"
                            alt="TypeScript"
                            width={120}
                            height={120}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/nodejs.svg"
                            alt="Node.js"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/python.svg"
                            alt="Python"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/sql.svg"
                            alt="SQL"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/figma.svg"
                            alt="Figma"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/sanity.svg"
                            alt="Sanity"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/aws.svg"
                            alt="AWS"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/webflow.svg"
                            alt="Webflow"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/git.svg"
                            alt="Git"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                    <div className="flex flex-1 min-w-[33.333%] lg:min-w-[20%] items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px] py-4 sm:py-0">
                        <Image
                            src="/docker.svg"
                            alt="Docker"
                            width={100}
                            height={100}
                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}