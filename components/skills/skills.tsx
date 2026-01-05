import Image from "next/image"

export default function Skills() {
    return (
        <div className="w-full py-24 px-16">
            <h1 className="text-[96px] text-black font-bold text-center leading-[1.25] mb-10">I USE <br />MODERN TECH STACK</h1>
            <div className="flex-1">
                <p className="text-black text-xl px-16 mb-8 text-center font-semibold">I work with a modern, production-ready tech stack focused on scalability, performance, and long-term maintainability. My day-to-day tools include React, Next.js, and React Native on the frontend, with Node.js powering backend services and APIs. I’ve worked extensively with PostgreSQL and MongoDB for data-heavy applications, along with custom CMS platforms like Payload. This stack allows me to build fast, reliable systems that handle real-world traffic, complex workflows, and evolving product requirements without sacrificing developer experience or code quality.</p>
                <div className="flex">
                    <div className="flex flex-1 items-center justify-center h-[276px]">
                        <Image
                            src="/react-icon.svg"
                            alt="About"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[276px]">
                        <Image
                            src="/nextjs.svg"
                            alt="About"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[276px]">
                        <Image
                            src="/typescript.svg"
                            alt="About"
                            width={120}
                            height={120}
                        />
                    </div>
                </div>
                <div className="flex wrap">
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/nodejs.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/python.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/sql.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/figma.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/sanity.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/aws.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/webflow.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/git.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center h-[240px]">
                        <Image
                            src="/docker.svg"
                            alt="About"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}