import imgg from "../assets/professional.jpg"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function FrontPage() {
    return (
        <>
            <div className="frontpage my-[30px] h-auto flex flex-col items-center justify-center container mx-auto px-4">
                <div className="pageMain flex flex-wrap items-center justify-between">
                    {/* Left Section */}
                    <div className="left flex flex-col gap-[2rem] w-full lg:w-[45%]">
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#ddd] text-center lg:text-left">I am Mudasir Bhat</h2>
                        <h1
                            style={{
                                background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            className="text-[2rem] md:text-[3rem] font-[1000] text-center lg:text-left"
                        >
                            Next-Level Web Developer.
                        </h1>

                        <p className="text-base md:text-xl text-center lg:text-left">
                            I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                        </p>

                        {/* CV and Socials */}
                        <div className="cv flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Link to={`https://drive.google.com/file/d/17h5NHUFeLmjPiqfcMKpYt3nQC5EJTvvz/view?usp=sharing`} target="_blank" rel="noopener noreferrer">
                                <button className="cursor-pointer capitalize font-medium border border-[#8750f7] text-[#8750f7] w-[160px] p-[10px] rounded-3xl transition duration-300 ease-in-out hover:bg-[#8750f7] hover:text-white">
                                    Download CV <span><i className="bi bi-download text-xl"></i></span>
                                </button>
                            </Link>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                {[
                                    { link: "https://x.com/MudduBhat", icon: "bi-twitter" },
                                    { link: "https://www.linkedin.com/in/mudasir-bhat-553119228/", icon: "bi-linkedin" },
                                    { link: "https://github.com/Mudasir472", icon: "bi-github" },
                                    { link: "https://www.instagram.com/bhat_muddu_/", icon: "bi-instagram" },
                                ].map((social, idx) => (
                                    <Link key={idx} to={social.link} target="_blank" rel="noopener noreferrer">
                                        <div className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center border border-[#8750f7] text-[#8750f7] rounded-full transition duration-300 ease-in-out hover:bg-[#8750f7] hover:text-white">
                                            <i className={`bi ${social.icon}`}></i>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="right mt-8 lg:mt-0 w-full lg:w-[45%] flex justify-center lg:justify-end">
                        <motion.div
                            className="w-full max-w-[20rem] sm:max-w-[20rem] border-2 border-[#2a1454] rounded-[38px] overflow-hidden"
                            initial={{ rotate: 4 }}
                            whileHover={{
                                rotate: 0,
                                scale: 1.05,
                                borderColor: "#8750f7",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <img
                                className="w-full h-auto object-cover"
                                src={imgg}
                                alt="Profile Picture"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full mt-8">
                    <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-between">
                        {["MENTOR(MERN)", "MERN stack Trainer and developer", "Passionate About Tech"].map((text, idx) => (
                            <p key={idx} className="font-bold text-xl md:text-2xl text-center">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}

export default FrontPage;