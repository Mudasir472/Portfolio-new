import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function AwardDesc({ img, heading, desc, link = '#', hovered }) {

    return (
        <div

            className="work relative overflow-hidden border-2 border-[#2a1454] group w-full h-96 rounded-2xl"
        >
            <img
                className="h-full w-full rounded-xl object-cover border-2 border-[#2a1454] group-hover:border-[#8750f7] transition-all ease-in-out duration-300"
                src={img}
                alt="Project"
            />
            <>
                <div
                    className={`absolute bottom-0 left-0 w-full h-28 p-6 flex items-center justify-between bg-gradient-to-r from-[#8750f7] to-[#2a1454] 
                    transform transition-all ease-in-out duration-300
                    `}
                >
                    <div className="flex flex-col">
                        <h2 className="text-lg sm:text-xl font-bold text-white">{heading}</h2>
                        <p className="text-sm sm:text-base text-white">{desc}</p>
                    </div>
                    <div>
                        <i className="bi bi-arrow-up-right text-2xl text-white"></i>
                    </div>
                </div>
            </>
        </div>
    );
}

export default AwardDesc;
