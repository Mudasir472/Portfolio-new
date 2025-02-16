import AllExperiences from "./AllExperiences";
import { motion } from 'framer-motion';

function Resume() {
    const experiences = [
        {
            heading: "Intern, Web Developer, MietY MANUU",
            date: "Mar 2024 - June 2024",
            location: "Hyderabad, India",
        },
        {
            heading: "Participant, IDE Bootcamp",
            date: "January 2024",
            location: "Hyderabad, India",
        },
    ]

    const education = [
        {
            heading: "B-Tech (CS & IT)",
            location: "Hyderabad, India",
            date: "2021-2024",
            score: "8.51 CGPA",
        },
        {
            heading: "Intermediate (PCM)(86.6%)",
            location: "J&K, India",
            date: "2019-2021",
            score: "86.6%",
        },
    ];
    const professional = [
        {
            heading: "Good communication",
        },
        {
            heading: "Team player",

        },
        {
            heading: "Strong problem solver",

        },
    ];
    const interests = [
        {
            heading: "Photography",
        },
        {
            heading: "Travelling",
        },
        {
            heading: "Gymming",
        },
    ];

    return (<>
        <div id="resume" className="resume bg-[#050709] pt-[6rem] pb-[4rem]">
            <div className="resumeMain flex justify-between gap-[3rem] container mx-auto pb-[5rem]">
                <div className="experience w-1/2 flex flex-col  gap-[2rem]  ">
                    <p style={{
                        background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}><i class="bi bi-award text-[3rem] me-4"></i><span className="text-[3rem] font-[700]">My Experience</span></p>
                    <div className="flex flex-col gap-[2rem]">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                whileHover={{
                                    scale: 1.02,
                                }}
                            >
                                <AllExperiences
                                    key={index}
                                    heading={exp.heading}
                                    date={exp.date}
                                    location={exp.location}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="education w-1/2 flex flex-col gap-[2rem] ">
                    <p style={{
                        background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}><i class="bi bi-mortarboard text-[3rem] me-4"></i><span className="text-[3rem] font-[700]">My Education</span></p>
                    <div className="flex flex-col gap-[2rem]">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                whileHover={{
                                    scale: 1.02,
                                }}
                            >
                                <AllExperiences

                                    key={index}
                                    heading={edu.heading}
                                    date={edu.date}
                                    location={edu.location}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="resumeMain flex justify-between gap-[3rem] container mx-auto">
                <div className="experience w-1/2 flex flex-col  gap-[2rem]  ">
                    <p style={{
                        background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}><i class="bi bi-lightbulb-fill text-[3rem] me-4"></i><span className="text-[3rem] font-[700]">Interests</span></p>
                    <div className="flex flex-col gap-[2rem]">
                        {interests.map((int, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                whileHover={{
                                    scale: 1.02,
                                }}
                            >
                                <AllExperiences
                                    key={index}
                                    heading={int.heading}

                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="education w-1/2 flex flex-col gap-[2rem] mb-[3rem]">
                    <p style={{
                        background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}><i class="bi bi-file-person-fill text-[3rem] me-4"></i><span className="text-[3rem] font-[700]">Professional</span></p>
                    <div className="flex flex-col gap-[2rem]">
                        {professional.map((pro, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                whileHover={{
                                    scale: 1.02,
                                }}
                            >
                                <AllExperiences
                                    key={index}
                                    heading={pro.heading}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Resume;