import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function WorkProjects({ img, heading, desc, link, hovered, index, setHovered }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if mobile

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleTouch = () => {
        if (isMobile) {
            setHovered(hovered === index ? null : index); // Toggle on tap
        }
    };

    return (
        <div
            onMouseEnter={() => !isMobile && setHovered(index)}
            onMouseLeave={() => !isMobile && setHovered(null)}
            onClick={handleTouch} // Handle tap on mobile
            className="work relative overflow-hidden border-2 border-[#2a1454] group w-full h-96 rounded-2xl"
        >
            <img
                className="h-full w-full rounded-xl object-cover border-2 border-[#2a1454] group-hover:border-[#8750f7] transition-all ease-in-out duration-300"
                src={img}
                alt="Project"
            />
            <Link to={link} target="_blank" rel="noopener noreferrer">
                <div
                    className={`absolute bottom-0 left-0 w-full h-28 p-6 flex items-center justify-between bg-gradient-to-r from-[#8750f7] to-[#2a1454] 
                    transform transition-all ease-in-out duration-300
                    ${hovered === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                >
                    <div className="flex flex-col">
                        <h2 className="text-lg sm:text-xl font-bold text-white">{heading}</h2>
                        <p className="text-sm sm:text-base text-white">{desc}</p>
                    </div>
                    <div>
                        <i className="bi bi-arrow-up-right text-2xl text-white"></i>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default WorkProjects;
