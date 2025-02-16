import { motion } from 'framer-motion';

function AllExperiences({ heading, date, location }) {
    return (
        <motion.div
            className="all-exp flex flex-col gap-[0.8rem] bg-[#191325] p-[20px] rounded-2xl hover:bg-gradient-to-r hover:from-[#8750f7] hover:to-[#2a1454] transition-all duration-500"
        >
            {date && (
                <p className="date text-xl font-semibold transition-all duration-500">
                    {date}
                </p>
            )}
            <h2 className="text-2xl font-bold">{heading}</h2>
            {location && <p>{location}</p>}
        </motion.div>
    );
}

export default AllExperiences;