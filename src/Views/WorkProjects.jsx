import { Link } from "react-router-dom";

function WorkProjects({ img, heading, desc, link }) {
    return (
        <div className="work relative overflow-hidden border-2 border-[#2a1454] group w-[38rem] h-[24rem] rounded-2xl">
            <img
                className="h-full w-full rounded-xl object-cover border-2 border-[#2a1454] hover:border-[#8750f7]"
                src={img}
                alt="Project"
            />

            {/* Hidden Details (slide-in effect on hover) */}
            <Link to={`${link}`} target="_blank" rel="noopener noreferrer">
                <div className="absolute cursor-pointer bottom-0 left-0 w-full h-[6.5rem] p-[22px] flex items-center justify-between bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:bottom-1 rounded-2xl translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-white">{heading}</h2>
                        <p className="text-xl text-white">{desc}</p>
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
