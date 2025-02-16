import React, { useEffect, useState } from "react";
import M from "../assets/Muddu.png"
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);

    const [currentRoute, setCurrentRoute] = useState("");

    useEffect(() => {
        const updateRoute = () => {
            setCurrentRoute(window.location.hash);
        };

        // Set the initial route
        updateRoute();

        // Listen to hash changes
        window.addEventListener("hashchange", updateRoute);

        // Cleanup listener
        return () => {
            window.removeEventListener("hashchange", updateRoute);
        };
    }, []);
    console.log(currentRoute);

    return (
        <nav className="">
            <div className="flex  items-center justify-between  py-4 container mx-auto">
                <div className="flex items-center gap-4">
                    <Link to={'/'}>
                        {/* <div className="rounded-full bg-[#6140a0] w-[52px] h-[52px] flex items-center justify-center cursor-pointer  text-white p-2">
                            <span className=" font-bold text-2xl">M</span>
                        </div> */}
                        <img className="h-[56px]" src={M} alt="" />
                    </Link>
                    <p className="text-white text-sm">bhatmuddu472@gmail.com</p>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-8 text-white text-sm">
                    <a
                        href="#services"
                        className={`pb-[3px] hover:text-gray-300 ${currentRoute === "#services" ? "border-b-3  border-[#6434c0]" : ""
                            }`}
                    >Services</a>
                    <a
                        href="#works"
                        className={` pb-[3px] hover:text-gray-300 ${currentRoute === "#works" ? "border-b-3 border-[#6434c0]" : ""
                            }`}
                    >Resume</a>
                    <a
                        href="#skill"
                        className={` pb-[3px] hover:text-gray-300 ${currentRoute === "#skill" ? "border-b-3 border-[#6434c0]" : ""
                            }`}
                    >Skills</a>
                    <a
                        href="#contact"
                        className={`pb-[3px] hover:text-gray-300  ${currentRoute === "#contact" ? "border-b-3 border-[#6434c0]" : ""
                            }`}
                    >Contact</a>
                </div>

                {/* Hire Me Button */}
                <a href='/#contact'>
                    <button className="cursor-pointer bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-500  text-white font-medium px-6 py-2 rounded-full shadow-lg hover:opacity-90">
                        Hire Me!
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
