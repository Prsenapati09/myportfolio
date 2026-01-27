import React from "react";
import {Database,CakeSlice} from "lucide-react"
import {FaJs,FaReact,FaNodeJs}  from "react-icons/fa";
import { SiTailwindcss, SiMongodb,SiExpress } from "react-icons/si";
const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and Tailwind CSS showcasing projects and skills.",
    tech: [
      {item:"React",icon:<FaReact/>},
      {item: "Tailwind Css",icon:<SiTailwindcss/>},
      {item: "JavaScript",icon:<FaJs/>}
    ],
    live: "https://myportfolio135.vercel.app",
    github: "https://github.com/Prsenapati09/myportfolio",
  },
  {
    logo:<CakeSlice/>,
    title: "Bakery Site",
    description:
      "JWT based login, register, and forgot password system using Node.js and MongoDB.",
    tech: [
      {item:"React",icon:<FaReact/>},
      {item: "Tailwind Css",icon:<SiTailwindcss/>},
      {item: "JavaScript",icon:<FaJs/>}
    ],
    // tech: ["reactjs", "Tailwind Css", "Javascript"],
    live: "https://pr-bakery.vercel.app/",
    github: "https://github.com/Prsenapati09/Bakery-App",
  },
  {
    logo:<Database/>,
    title: "CRUD Web App",
    description:
      "Backend CRUD application with REST APIs and database integration.",
    techicons :[<FaNodeJs/>,<FaReact/>],
    tech: [
      {item:"Node js",icon:<FaNodeJs/>},
      {item: "Express js",icon:<SiExpress/>},
      {item: "MongoDB Atlas",icon:<SiMongodb/>}
    ],
    // tech: ["Node.js","Express js", "MongoDB Atlas"],
    live: "https://github.com/Prsenapati09/BookStore",
    github: "https://github.com/Prsenapati09/BookStore",
  },
  
];

const Projects = () => {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-indigo-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Some of the projects I have built using modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition flex flex-col hover:-translate-y-2 duration-100"
            >
              <h3 className="m-2.5">{project.logo}</h3>
              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700 flex items-center gap-1.5"
                  >
                  {item.icon}{item.item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-linear-to-r from-indigo-500 to-blue-500 hover:bg-indigo-700 transition rounded-lg text-sm font-semibold"
                >
                  Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2 border border-gray-700 hover:border-indigo-500 transition rounded-lg text-sm font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
