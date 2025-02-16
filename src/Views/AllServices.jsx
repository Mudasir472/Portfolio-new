import { motion } from 'framer-motion';

function AllServices({ title, index, description, hovered, setHovered }) {
    const isHovered = hovered === index;
    const isFirst = index === 0 + 1 && hovered === null; 
    return (<>
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
            className={`allservices rounded-xl border-b w-full p-[20px] h-[6.5rem] border-b-[#8750f7] flex items-center justify-between gap-[2rem] ${isHovered || isFirst
                ? "bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] text-white"
                : "bg-transparent "
                }`}
        >
            <div className="flex items-center ">
                <p className={`text-2xl font-bold text-[#8750f7] hover:text-white ${hovered ? "text-white" : "text-[#8750f7]"}`}>{index}</p>
                <h3 className="ms-4 w-[16rem] text-2xl font-bold">{title}</h3>
            </div>
            <p className="w-[45%]">{description}</p>
            <p><i className="bi bi-arrow-up-right text-2xl"></i></p>
        </motion.div>
    </>);
}

export default AllServices;