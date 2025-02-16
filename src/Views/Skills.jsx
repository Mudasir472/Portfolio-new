import AllSkills from "./AllSkills";

import reactjs from "../assets/reactjs.svg"
import git from "../assets/git.svg"
import github from "../assets/github.svg"
import mongo from "../assets/mongo.svg"
import node from "../assets/node.svg"
import tailwind from "../assets/tailwind.svg"
import java from "../assets/java.svg"
import bootstrap from "../assets/bootstrap.svg"
import redux from "../assets/redux.svg"
import js from "../assets/js.webp"

function Skills() {
    const skills = [
        {
            name: "React",
            img: reactjs,
            completed: "85%"

        },
        {
            name: "Java",
            img: java,
            completed: "75%"
        },
        {
            name: "Javascript",
            img: js,
            completed: "85%"
        },
        {
            name: "Redux Toolkit",
            img: redux,
            completed: "80%"
        },
        {
            name: "Tailwind",
            img: tailwind,
            completed: "90%"
        },
        {
            name: "Bootstrap",
            img: bootstrap,
            completed: "95%"
        },
        {
            name: "Github",
            img: github,
            completed: "90%"
        },
        {
            name: "MongoDB",
            img: mongo,
            completed: "85%"
        },
        {
            name: "Nodejs",
            img: node,
            completed: "80%"
        },
        {
            name: "Git",
            img: git,
            completed: "88%"
        },
    ]
    return (
        <div id="skill" className="skills container mx-auto px-4">
            <div className="skillsMain flex flex-col gap-4 items-center py-20">
                {/* Title */}
                <h1
                    style={{
                        background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    className="text-4xl font-extrabold text-center"
                >
                    My Skills
                </h1>

                {/* Description */}
                <p className="w-full sm:w-3/4 md:w-1/2 text-center text-gray-500">
                    A versatile blend of technical and creative expertise, focused on
                    delivering impactful solutions with precision and innovation.
                </p>

                {/* Skills Grid */}
                <div className="flex items-center flex-wrap gap-6 justify-center mt-8">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <AllSkills
                                name={skill.name}
                                img={skill.img}
                                completed={skill.completed}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;