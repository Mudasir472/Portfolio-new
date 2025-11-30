import { motion, AnimatePresence } from 'framer-motion';

import muddu from "../assets/mudd.jpg";
import AwardDesc from './AwardDesc';


function Achievements() {
    const projects = [
        {
            img: muddu,
            heading: "Six Phrase Edu Tech",
            desc: "Awarded for delivering outstanding performance and dedication as a Senior Technical Trainer, significantly contributing to the success of students in web development and programming courses.",
            link: "#",
        },
    ];

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
                        Awards & Achievements
                    </h1>
                    <p className="w-full sm:w-4/5 lg:w-3/5 text-center">
                        A showcase of my key milestones, recognitions, and contributions earned through consistent performance, dedication, and impact in training, development, and technical excellence.
                    </p>

                </div>

                <div className="grid mt-[19px] grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                whileHover={{ scale: 1.04 }}
                            >

                                <AwardDesc
                                    key={index}
                                    link={project.link}
                                    img={project.img}
                                    heading={project.heading}
                                    desc={project.desc}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default Achievements;
