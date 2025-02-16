import reactjs from "../assets/reactjs.svg"
function AllSkills({ name, img, hoverImg, completed }) {
    return (
        <div className="allskills flex flex-col items-center gap-3">
            {/* Skill Card */}
            <div className="h-[150px] w-[130px] md:h-[199px] md:w-[171px] flex flex-col items-center justify-center bg-[#251634] rounded-2xl group transition-all duration-500 ease-in-out hover:bg-[#50328d]">
                {/* Animated Image */}
                <img
                    className="h-[70px] md:h-[100px] transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-4"
                    src={img}
                    alt={name}
                />
                {/* Completed Text */}
                <p className="font-bold mt-2 md:mt-3 text-[#747779] text-sm md:text-xl transition-colors duration-500 ease-in-out group-hover:text-white">
                    {completed}
                </p>
            </div>
            {/* Skill Name */}
            <p className="text-[#8750f7] text-sm md:text-xl font-medium">{name}</p>
        </div>
    );
}

export default AllSkills;