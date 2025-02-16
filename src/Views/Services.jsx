import { useState } from "react";
import AllServices from "./AllServices";

function Services() {
    const [hovered, setHovered] = useState(0);
    const servicesData = [
        {
            id: 1,
            title: "Web Development",
            description: "Creating modern, responsive, and user-friendly websites tailored to your needs, ensuring functionality, aesthetics, and seamless performance.",
        },
        {
            id: 2,
            title: "Content Writing",
            description: "Crafting engaging, clear, and impactful content tailored to captivate your audience and effectively convey your message.",
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Designing intuitive, visually appealing, and user-centric interfaces to deliver seamless and engaging user experiences.",
        },
    ];
    return (<>
        <div id="services" className="services container mx-auto pt-[2rem]">
            <div className="servicesMain flex flex-col gap-[1rem] items-center mb-[3rem]">
                <h1
                    style={{
                        background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    className="text-[2.5rem] font-[900]"
                >
                    My Quality Services
                </h1>
                <p className="w-[44%] text-center">Delivering reliable, efficient, and result-driven solutions with a focus on excellence and customer satisfaction.</p>
                <div className="w-full my-[2rem]">
                    {servicesData.map((service, index) => (
                        <AllServices
                            key={index}
                            index={index + 1}
                            title={service.title}
                            description={service.description}
                            hovered={hovered} // Pass the current hovered index
                            setHovered={setHovered} // Pass the setter function
                        />
                    ))}
                </div>
            </div>
        </div>
    </>);
}

export default Services;