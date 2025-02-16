import React, { useEffect, useState } from "react";
import M from "../assets/Muddu.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons

const Navbar = () => {
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className=" text-white">
            <div className="flex items-center justify-between py-4 px-4 container mx-auto">
                {/* Logo and email */}
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <img className="h-[56px]" src={M} alt="Logo" />
                    </Link>
                    <p className="text-sm hidden sm:block">bhatmuddu472@gmail.com</p>
                </div>

                {/* Hamburger menu icon */}
                <div className="sm:hidden">
                    {isMenuOpen ? (
                        <X className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <Menu className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
                    )}
                </div>

                {/* Navigation Links */}
                <div
                    className={`flex-col sm:flex-row sm:flex items-center gap-8 absolute sm:static top-16 left-0 right-0 sm:top-auto sm:left-auto sm:right-auto bg-gray-900 sm:bg-transparent transition-all duration-300 ${isMenuOpen ? "flex" : "hidden"
                        }`}
                >
                    <a
                        href="#services"
                        className={`pb-[3px] hover:text-gray-300 ${currentRoute === "#services" ? "border-b-3 border-[#6434c0]" : ""
                            }`}
                    >
                        Services
                    </a>
                    <a
                        href="#works"
                        className={`pb-[3px] hover:text-gray-300 ${currentRoute === "#works" ? "border-b-3 border-[#6434c0]" : ""
                            }`}
                    >
                        Resume
                    </a>
                    <a
                        href="#skill"
                        className={`pb-[3px] hover:text-gray-300 ${currentRoute === "#skill" ? "border-b-3 border-[#6434c0]" : ""
                            }`}
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className={`pb-[3px] hover:text-gray-300 ${currentRoute === "#contact" ? "border-b-3 border-[#6434c0]" : ""
                            }`}
                    >
                        Contact
                    </a>

                    {/* Hire Me Button */}
                    <a href="/#contact" className="sm:ml-4">
                        <button className="cursor-pointer bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-500 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:opacity-90">
                            Hire Me!
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
