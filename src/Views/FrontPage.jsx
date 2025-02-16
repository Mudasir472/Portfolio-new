import imgg from "../assets/photo.png"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function FrontPage() {
    return (<>
        <div className="frontpage my-[30px] h-[39rem] flex flex-col items- justify-center container mx-auto">
            <div className="pageMain flex items-center justify-between">
                <div className="left flex flex-col gap-[2rem] w-[39%]">
                    <h2 className="text-2xl font-extrabold text-[#ddd]">I am Mudasir Bhat</h2>
                    <h1
                        style={{
                            background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        className="text-[3rem] font-[1000]"
                    >
                        Next-Level Web Developer.
                    </h1>

                    <p className="text-xl">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                    <div className="cv flex items-center gap-[3rem]">
                        {/* Download CV Button */}
                        <Link to={`https://drive.google.com/file/d/1bWheIPzsw_NHMHL0KCHFSgbJ-B4308Qh/view`} target="_blank" rel="noopener noreferrer">
                            <button className="cursor-pointer capitalize font-medium border border-[#8750f7] text-[#8750f7] w-[194px] p-[13px] rounded-3xl transition duration-300 ease-in-out hover:bg-[#8750f7] hover:text-white">
                                download CV <span><i className="bi bi-download text-xl"></i></span>
                            </button>
                        </Link>
                        {/* Social Icons */}
                        <Link to={`https://x.com/MudduBhat`} target="_blank" rel="noopener noreferrer">
                            <div className="cursor-pointer twitter w-[35px] h-[35px] flex items-center justify-center border border-[#8750f7] text-[#8750f7] rounded-full transition duration-300 ease-in-out hover:bg-[#8750f7] hover:text-white">
                                <i className="bi bi-twitter"></i>
                            </div>

                        </Link>
                        <Link to={`https://www.linkedin.com/in/mudasir-bhat-553119228/`} target="_blank" rel="noopener noreferrer">
                            <div className="cursor-pointer linkedin w-[35px] h-[35px] flex items-center justify-center border border-[#8750f7] text-[#8750f7] rounded-full transition duration-300 ease-in-out hover:bg-[#8750f7] hover:text-white">
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </Link>
                        <Link to={`https://github.com/Mudasir472`} target="_blank" rel="noopener noreferrer">
                            <div className="cursor-pointer github w-[35px] h-[35px] flex items-center justify-center border border-[#8750f7] text-[#8750f7] rounded-full transition duration-300 ease-in-out hover:bg-[#8750f7] hover:text-white">
                                <i className="bi bi-github"></i>
                            </div>
                        </Link>
                        <Link to={`https://www.instagram.com/bhat_muddu_/`} target="_blank" rel="noopener noreferrer">
                            <div className="cursor-pointer insta w-[35px] h-[35px] flex items-center justify-center border border-[#8750f7] text-[#8750f7] rounded-full transition duration-300 ease-in-out hover:bg-[#8750f7] hover:text-white">
                                <i className="bi bi-instagram"></i>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className="right me-[7rem]">
                    <div className="photo">
                        <motion.div
                            className="h-[25rem] border-2 border-[#2a1454] rounded-[38px] overflow-hidden"
                            initial={{ rotate: 4 }} // Initial rotation
                            whileHover={{
                                rotate: 0, // Reset to 0 on hover
                                scale: 1.05, // Slight zoom on hover
                                borderColor: "#8750f7", // Change border color on hover
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                        >
                            <img
                                className="h-full w-full object-cover"
                                src={imgg}
                                alt="Rotating example"
                            />
                        </motion.div>
                    </div>

                </div>

            </div>
            <div>
                <div className="flex h-[10rem] items-center container justify-between ">
                    <p className="font-bold text-3xl">Final-year student</p>
                    <p className="font-bold text-3xl">MERN stack developer</p>
                    <p className="font-bold text-3xl">Passionate About Tech</p>
                </div>
            </div>
        </div>
    </>);
}

export default FrontPage;