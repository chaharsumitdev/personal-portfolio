"use client";

import Image from "next/image";

export default function AnimatedArrow() {
    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-4">
            <div className="animate-bounce bg-white p-4 rounded-full shadow-lg">
                <Image
                    src="/double-arrow-bottom.svg"
                    alt="Scroll down"
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                />
            </div>
        </div>
    );
}