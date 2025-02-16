import { Link } from "react-router-dom";

function WorkProjects({ img, heading, desc, link }) {
    return (
        <div className="work relative overflow-hidden border-2 border-[#2a1454] group w-full h-96 rounded-2xl">
            <img
                className="h-full w-full rounded-xl object-cover border-2 border-[#2a1454] hover:border-[#8750f7]"
                src={img}
                alt="Project"
            />
            <Link to={`${link}`} target="_blank" rel="noopener noreferrer">
                <div className="absolute cursor-pointer bottom-0 left-0 w-full h-28 p-6 flex items-center justify-between bg-gradient-to-r from-[#8750f7] to-[#2a1454] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
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
