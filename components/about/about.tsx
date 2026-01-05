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
        <div className="flex w-full py-24 px-16 justify-between h-[100vh]">
            <div className="flex w-full h-full">
                <div className="flex-1 flex flex-col h-full justify-between">
                    <p className="text-black text-3xl mb-8 max-w-2xl">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                    </p>
                    <h1 className="text-black font-semibold text-[120px] leading-tight">SUMIT <br />CHAHAR</h1>
                </div>
                <div className="max-w-[250px]">
                    <Image
                        src="/sumit.png"
                        alt="About"
                        width={250}
                        height={600}
                        className="rounded-lg w-[250px] h-[300px] mb-[250px] object-cover"
                    />
                    <p className="text-black text-xl max-w-[250px] text-right ml-auto font-bold">
                        A Software Engineer creating Intuitive Digital Experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}