function Contact() {
    return (
        <>
            <div id="contact" className="contact bg-[#050709]">
                <div className="contactMain flex flex-col md:flex-row items-center container mx-auto justify-between py-[5rem] px-4 gap-8">
                    {/* Left Section */}
                    <div className="left w-full md:w-[60%]">
                        <div className="w-full bg-[#140c1c] p-[3rem] rounded-2xl shadow-lg">
                            <h1 className="text-3xl font-bold text-center text-purple-500 mb-4">
                                Let's work together!
                            </h1>
                            <div className="flex items-center justify-center">
                                <p className="text-center text-white mb-6 w-[90%] text-sm md:text-base">
                                    I design and code beautifully simple things and I love what I do. Just simple like that!
                                </p>
                            </div>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="bg-[#050709] text-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="bg-[#050709] text-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="bg-[#050709] text-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        className="bg-[#050709] text-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    />
                                </div>
                                <div className="mt-4">
                                    <textarea
                                        placeholder="Message"
                                        rows="4"
                                        className="w-full bg-[#050709] text-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-6 w-full md:w-[30%] bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="right w-full md:w-[37%]">
                        <div className="flex flex-col gap-[2rem]">
                            {/* Phone */}
                            <div className="flex items-center gap-[2rem]">
                                <a
                                    href="tel:6006189840"
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-500"
                                >
                                    <i className="bi bi-telephone-outbound text-xl text-white"></i>
                                </a>
                                <div className="flex flex-col">
                                    <p className="font-medium text-white">Phone</p>
                                    <p>
                                        <a href="tel:6006189840" className="text-purple-400">6006189840</a>
                                    </p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-center gap-[2rem]">
                                <a
                                    href="mailto:bhatmuddu472@gmail.com"
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-500"
                                >
                                    <i className="bi bi-envelope text-xl text-white"></i>
                                </a>
                                <div className="flex flex-col">
                                    <p className="font-medium text-white">Email</p>
                                    <p>
                                        <a
                                            href="mailto:bhatmuddu472@gmail.com"
                                            className="text-purple-400"
                                        >
                                            bhatmuddu472@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="flex items-center gap-[2rem]">
                                <a
                                    href="https://maps.app.goo.gl/Zf9GXebhWTPhiJMc6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-500"
                                >
                                    <i className="bi bi-geo-alt text-xl text-white"></i>
                                </a>
                                <div className="flex flex-col">
                                    <p className="font-medium text-white">Location</p>
                                    <p>
                                        <a
                                            href="https://maps.app.goo.gl/Zf9GXebhWTPhiJMc6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-400"
                                        >
                                            Gachibowli Hyderabad
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
