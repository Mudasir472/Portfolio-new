import React, { useState, useEffect } from "react";

const CircularScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / windowHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className="fixed right-4 bottom-4 w-16 h-16 flex items-center justify-center cursor-pointer"
            onClick={scrollToTop}
        >
            <div
                className="relative w-full h-full rounded-full border-4 border-gray-300"
                style={{
                    background: `conic-gradient(#4f46e5 ${scrollProgress}%, #e5e7eb ${scrollProgress}%)`,
                }}
            >
                <div className="absolute inset-1 flex items-center justify-center bg-white rounded-full">
                    <span className="text-xs font-medium text-gray-800">{Math.round(scrollProgress)}%</span>
                </div>
            </div>
        </div>
    );
};

export default CircularScrollProgress;
