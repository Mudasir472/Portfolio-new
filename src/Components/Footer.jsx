import { Link } from "react-router-dom";
import M from "../assets/Muddu.png"
function Footer() {
    return (<>
        <footer className=" container mx-auto py-[4rem] footer footer-center bg-base-300 text-base-content p-4">
            <div className="flex flex-col items-center gap-[2rem]">
                <img className="h-[100px]" src={M} alt="" />
                <div className="flex items-center gap-[2rem]">
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
                    <Link to={`https://x.com/MudduBhat`} target="_blank" rel="noopener noreferrer">
                        <div className="cursor-pointer twitter w-[35px] h-[35px] flex items-center justify-center border border-[#8750f7] text-[#8750f7] rounded-full transition duration-300 ease-in-out hover:bg-[#8750f7] hover:text-white">
                            <i className="bi bi-twitter"></i>
                        </div>

                    </Link>
                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span>Mudasir</span></p>
            </div>
        </footer>
    </>);
}

export default Footer;