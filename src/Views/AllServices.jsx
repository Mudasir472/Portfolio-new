import { motion } from "framer-motion";

function AllServices({ title, index, description, hovered, setHovered }) {
    const isHovered = hovered === index;
    const isFirst = index === 1 && hovered === null;

    return (
        <>
            <motion.div
                key={index}
                onMouseEnter={() => setHovered(index)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                    opacity: isHovered ? 1 : 0.9,
                    scale: isHovered ? 1.03 : 1,
                    boxShadow: isHovered
                        ? "0px 8px 24px rgba(135, 80, 247, 0.2)"
                        : "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                className={`allservices rounded-xl border border-[#8750f7] lg:border-b lg:border-x-0 lg:border-t-0 w-full p-4 sm:p-6 h-auto flex flex-col sm:flex-row items-center justify-between gap-4 ${isHovered || isFirst
                        ? "bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] text-white"
                        : "bg-transparent"
                    }`}
            >
                <div className="flex items-center gap-4">
                    <p
                        className={`text-lg md:text-xl font-bold ${isHovered ? "text-white" : "text-[#8750f7]"
                            }`}
                    >
                        {index}
                    </p>
                    <h3 className="text-base md:text-lg w-[16rem] font-bold">{title}</h3>
                </div>
                <p className="text-sm md:text-base text-center sm:text-left w-full lg:w-[62%]">{description}</p>
                <p>
                    <i className="bi bi-arrow-up-right text-lg md:text-xl"></i>
                </p>
            </motion.div>
        </>
    );
}

export default AllServices;
