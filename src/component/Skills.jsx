
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiPostman,SiExpress } from "react-icons/si";
import { VscCode } from "react-icons/vsc";


const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 color="#E85D3F" /> },
      { name: "CSS", icon: <FaCss3Alt color="#2F6FED"/> },
      { name: "JavaScript", icon: <FaJs color="#F4C430" /> },
      { name: "React.js", icon: <FaReact color="#22D3EE"/> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#14B8A6" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#3FAF5A" /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#5A4FCF" /> },
      { name: "MySQL", icon: <SiMysql color="#0E7490" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt  color="#F05133"/> },
      { name: "GitHub", icon: <FaGithub color="#181717"/> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "VS Code", icon: <VscCode color="#2979FF" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <FaPython color="#5A4FCF" /> },
      { name: "JavaScript", icon: <FaJs color="#F4C430" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-indigo-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 border-l-4 rounded-2xl p-6 border-indigo-500 transition hover:scale-103 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
            >
              <h3 className="text-xl text-indigo-500 font-semibold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="
                      flex items-center gap-2
                      px-4 py-1.5 text-sm font-semibold rounded-full
                      bg-gray-800 border border-gray-700
                      hover:border-indigo-500 hover:text-indigo-400
                      transition
                    "
                  >
                    <span className="text-white text-base">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
