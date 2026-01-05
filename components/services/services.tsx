import Image from "next/image"

export default function services() {
    return (
        <div className="py-24 px-16">
            <h2 className="text-[96px] text-black mb-10 font-bold">
                Services
            </h2>
            <ul className="flex flex-col gap-4">
                <li className="flex rounded-2xl px-4 py-16 text-black gap-10">
                    <div className="flex-1">
                        <h4 className="font-bold text-5xl border-l-2 border-black pl-4">Web & Mobile App Development</h4>
                    </div>
                    <div className="flex-1 text-xl font-semibold">
                        <p>Delivering end-to-end web and mobile applications, from product architecture and feature development to deployment, performance optimization, and scaling.</p>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <Image
                            src="/react-native.jpeg"
                            alt="About"
                            width={250}
                            height={250}
                            className="rounded-lg w-[250px] h-[250px]"
                        />
                    </div>
                </li>
                <li className="flex rounded-2xl px-4 py-16 text-black gap-10">
                    <div className="flex-1">
                        <h4 className="font-bold text-5xl border-l-2 border-black pl-4">Backend Development</h4>
                    </div>
                    <div className="flex-1 text-xl font-semibold">
                        <p>Designing and implementing robust backend systems using Node.js, with a strong focus on secure APIs, authentication, data integrity, and handling high-concurrency traffic.</p>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <Image
                            src="/backend.jpeg"
                            alt="About"
                            width={250}
                            height={250}
                            className="rounded-lg w-[250px] h-[250px]"
                        />
                    </div>
                </li>
                <li className="flex rounded-2xl px-4 py-16 text-black gap-10">
                    <div className="flex-1">
                        <h4 className="font-bold text-5xl border-l-2 border-black pl-4">CMS & Admin Platforms</h4>
                    </div>
                    <div className="flex-1 text-xl font-semibold">
                        <p>Developing custom CMS and admin platforms that enable teams to manage content, operations, and workflows efficiently without constant engineering involvement.</p>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <Image
                            src="/cms.jpeg"
                            alt="About"
                            width={250}
                            height={250}
                            className="rounded-lg w-[250px] h-[250px]"
                        />
                    </div>
                </li>
            </ul>
        </div>
    )
}