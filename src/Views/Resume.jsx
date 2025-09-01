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
            heading: "Intern, MERN Stack, Opam Technologies",
            date: "Feb 2025 - May 2024",
            location: "Hyderabad (Remote), India",
        },
        {
            heading: "Participant, IDE Bootcamp",
            date: "January 2024",
            location: "Hyderabad, India",
        },
    ]

    const education = [
        {
            heading: "B-Tech(CS & IT), (8.48 cgpa)",
            location: "Hyderabad, India",
            date: "2020-2023",
            score: "8.48 CGPA",
        },
        {
            heading: "Intermediate (PCM),(86.6%)",
            location: "J&K, India",
            date: "2020-2022",
            score: "86.6%",
        },
        {
            heading: "Matriculation(72%)",
            location: "J&K, India",
            date: "2015-2017",
            score: "72%",
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

    return (
        <>
            <div id="resume" className="resume bg-[#050709] pt-[6rem] pb-[4rem]">
                <div className="resumeMain grid gap-[3rem] container mx-auto pb-[5rem] md:grid-cols-2">
                    {/* Experience Section */}
                    <div className="experience flex flex-col gap-[2rem]">
                        <p
                            style={{
                                background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            className="text-[3rem] font-[700] flex items-center"
                        >
                            <i className="bi bi-award text-[3rem] me-4"></i>
                            My Experience
                        </p>
                        <div className="flex flex-col gap-[2rem]">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
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

                    {/* Education Section */}
                    <div className="education flex flex-col gap-[2rem]">
                        <p
                            style={{
                                background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            className="text-[3rem] font-[700] flex items-center"
                        >
                            <i className="bi bi-mortarboard text-[3rem] me-4"></i>
                            My Education
                        </p>
                        <div className="flex flex-col gap-[2rem]">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
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

                {/* Second Row */}
                <div className="resumeMain grid gap-[3rem] container mx-auto md:grid-cols-2">
                    {/* Interests Section */}
                    <div className="interests flex flex-col gap-[2rem]">
                        <p
                            style={{
                                background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            className="text-[3rem] font-[700] flex items-center"
                        >
                            <i className="bi bi-lightbulb-fill text-[3rem] me-4"></i>
                            Interests
                        </p>
                        <div className="flex flex-col gap-[2rem]">
                            {interests.map((int, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                >
                                    <AllExperiences key={index} heading={int.heading} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Section */}
                    <div className="professional flex flex-col gap-[2rem] mb-[3rem]">
                        <p
                            style={{
                                background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            className="text-[3rem] font-[700] flex items-center"
                        >
                            <i className="bi bi-file-person-fill text-[3rem] me-4"></i>
                            Professional
                        </p>
                        <div className="flex flex-col gap-[2rem]">
                            {professional.map((pro, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                >
                                    <AllExperiences key={index} heading={pro.heading} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;