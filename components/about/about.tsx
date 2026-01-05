"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "I build product systems that help startups move faster, scale reliably, and turn complex workflows into simple user experiences. My work focuses on making products easier to operate, easier to extend, and measurably better for the teams and users relying on them.";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 10); // Adjust speed by changing this value (lower = faster)

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="flex w-full py-8 px-4 sm:py-12 sm:px-8 md:py-24 md:px-16 min-h-screen md:min-h-[100vh]">
            <div className="flex flex-col md:flex-row w-full gap-4 md:gap-0">
                <div className="flex-1 flex flex-col gap-8 md:justify-between md:gap-0">
                    <h1 className="text-black font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] leading-tight break-words order-1 md:order-2 text-center md:text-left">
                        SUMIT <br className="hidden md:block" />CHAHAR
                    </h1>
                    <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-8 max-w-full md:max-w-2xl order-2 md:order-1">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                    </p>
                </div>
                <div className="w-full sm:max-w-[220px] md:max-w-[280px] flex flex-col items-center md:items-end order-3">
                    <div className="w-full sm:max-w-[220px] md:max-w-[280px] mb-6 md:mb-[250px]">
                        <Image
                            src="/sumit.PNG"
                            alt="About"
                            width={280}
                            height={672}
                            className="rounded-lg w-full h-auto aspect-[5/6] object-cover"
                        />
                    </div>
                    <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-[280px] text-center md:text-right font-bold">
                        A Software Engineer creating Intuitive Digital Experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}