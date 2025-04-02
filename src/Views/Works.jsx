import { motion, AnimatePresence } from 'framer-motion';

import React, { useState } from "react";
import WorkProjects from "./WorkProjects";
import shop1 from "../assets/shop1.png";
import wanderlust1 from "../assets/wanderlust1.png";
import zakat1 from "../assets/zakat1.png";
import electronics2 from "../assets/electronics2.png";
import studyMart from "../assets/studyMart.png";
import studyHive from "../assets/studyHive.png";


function Works() {
    const [selected, setSelected] = useState("All");
    const [hovered, setHovered] = useState(0);
    const projects = [
        {
            img: studyHive,
            heading: "StyleHive",
            desc: "StyleHive is a fashion and lifestyle platform where users can discover, share, and explore the latest trends, outfits, and accessories.",
            category: ["All", "FullStack"],
            link: "https://style-hive-an-fashion-ecommerce.vercel.app/",
        },
        {
            img: studyMart,
            heading: "StudyMart",
            desc: "Online Learning Platform",
            category: ["All", "FullStack"],
            link: "https://study-mart-a-learning-management-system.vercel.app/",
        },
        {
            img: zakat1,
            heading: "ZakatCare",
            desc: "A Collection and Distribution System",
            category: ["All", "FullStack"],
            link: "https://zakat-care.vercel.app",
        },
        {
            img: wanderlust1,
            heading: "Wanderlust",
            desc: "A Journey Hub",
            category: ["All", "Backend"],
            link: "https://github.com/Mudasir472/Wanderlust-Backend",
        },
        {
            img: electronics2,
            heading: "Muddu-Electronics",
            desc: "An E-Commerce Website",
            category: ["All", "Frontend"],
            link: "https://github.com/Mudasir472/Muddu-electronics-Backend",
        },
        {
            img: shop1,
            heading: "ShopOP: A Shopping Website",
            desc: "Frontend of a Shopping Website",
            category: ["All", "Frontend"],
            link: "https://mudasir472.github.io/Shop-OP/",
        },
    ];

    // Filter projects based on the selected category
    const filteredProjects =
        selected === "All"
            ? projects
            : projects.filter((project) => project.category.includes(selected));

    return (
        <div id="works" className="works container mx-auto pt-4 px-4 sm:px-8">
            <div className="worksMain flex flex-col gap-4 my-16 mb-28">
                <div className="flex flex-col gap-4 items-center">
                    <h1
                        style={{
                            background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
                    >
                        My Recent Works
                    </h1>
                    <p className="w-full sm:w-4/5 lg:w-3/5 text-center">
                        Showcasing a collection of my latest projects, reflecting creativity, functionality, and a commitment to excellence. Each work highlights my expertise and dedication to delivering impactful solutions.
                    </p>
                    <div className="flex items-center justify-between w-full sm:w-3/5 lg:w-1/3 p-2 my-6 h-12 rounded-2xl bg-black">
                        {["All", "Frontend", "FullStack", "Backend"].map((category) => (
                            <div
                                key={category}
                                className={`h-10 px-4 flex items-center justify-center rounded-2xl ${selected === category
                                    ? "bg-gradient-to-r from-[#8750f7] to-[#2a1454]"
                                    : "bg-transparent"
                                    } transition-all duration-500 cursor-pointer`}
                                onClick={() => setSelected(category)}
                            >
                                <p className="text-sm sm:text-base">{category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                whileHover={{ scale: 1.04 }}
                            >
                                <WorkProjects
                                    key={index}
                                    index={index + 1}
                                    img={project.img}
                                    heading={project.heading}
                                    desc={project.desc}
                                    link={project.link}
                                    hovered={hovered}
                                    setHovered={setHovered}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default Works;
