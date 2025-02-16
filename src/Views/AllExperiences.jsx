import { motion } from 'framer-motion';

function AllExperiences({ heading, date, location }) {
    return (<>
        <motion.div
            // key={key}
            // initial={{ opacity: 0, scale: 0.9, }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5, ease: "easeInOut" }}
            // whileHover={{
            //     scale: 1.04,
            // }}
            className="all-exp flex flex-col gap-[0.8rem] bg-[#191325] p-[20px] rounded-2xl hover:bg-gradient-to-r hover:from-[#8750f7] hover:to-[#2a1454] p-[20px] transition-all duration-500" >
            <p style={{
                // color: 'rgb(129 89 205)',

            }} className="date text-xl font-semibold hover:text-white transition-all duration-500">{date}</p>
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p>{location}</p>
            <style>
                {`
                        .date{
                        color: rgb(129 89 205)
                        }
                        .all-exp:hover .date {
                        color: white;
                }

                    `}
            </style>
        </motion.div>



    </>);
}

export default AllExperiences;