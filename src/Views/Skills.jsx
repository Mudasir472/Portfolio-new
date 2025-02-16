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
    return (<>
        <div id="skill" className="skills container mx-auto">
            <div className="skillsMain flex flex-col gap-[1rem] items-center py-[5rem]">
                <h1
                    style={{
                        background: "linear-gradient(90deg, #8750f7 0%, #fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    className="text-[2.5rem] font-[900]"
                >
                    My Skills
                </h1>
                <p className="w-[44%] text-center">A versatile blend of technical and creative expertise, focused on delivering impactful solutions with precision and innovation.</p>
                <div className="flex items-center flex-wrap w-full gap-[3rem] mt-[3rem]">
                    {
                        skills.map((skill, index) => (
                            <div key={index}>
                                <AllSkills
                                    name={skill.name}
                                    img={skill.img}
                                    completed={skill.completed}
                                />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    </>);
}

export default Skills;