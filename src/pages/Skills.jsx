
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
import { SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiExpress } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Cpu, Layout, Server, Database, Wrench } from "lucide-react"; // Added Lucide icons for group headers

const skillsData = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML", icon: <FaHtml5 color="#E85D3F" /> },
      { name: "CSS", icon: <FaCss3Alt color="#2F6FED" /> },
      { name: "JavaScript", icon: <FaJs color="#F4C430" /> },
      { name: "React.js", icon: <FaReact color="#22D3EE" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#14B8A6" /> },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#3FAF5A" /> },
      { name: "Express.js", icon: <SiExpress className="text-ash" /> },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#5A4FCF" /> },
      { name: "MySQL", icon: <SiMysql color="#0E7490" /> },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05133" /> },
      { name: "GitHub", icon: <FaGithub className="text-paper" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "VS Code", icon: <VscCode color="#2979FF" /> },
    ],
  },
  {
    title: "Languages",
    icon: Cpu,
    skills: [
      { name: "Python", icon: <FaPython color="#5A4FCF" /> },
      { name: "JavaScript", icon: <FaJs color="#F4C430" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs text-ash">04 / skills</p>
        
        {/* Skills Grid matching your structural layout */}
        <div className="grid gap-px bg-edge sm:grid-cols-2 sm:mt-7 lg:grid-cols-3">
          {skillsData.map(({ icon: Icon, title, skills }) => (
            <div key={title} className="bg-void p-8 transition-colors duration-200">
              <Icon size={22} className="text-flare" />
              
              <h3 className="mt-5 font-display text-2xl tracking-wide text-paper">
                {title.toUpperCase()}
              </h3>

              {/* Skills Badge List */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 rounded-md border border-edge bg-char/50 px-3 py-1.5 font-mono text-xs text-ash transition-colors duration-200 hover:border-flare hover:text-paper"
                  >
                    <span className="text-base">{skill.icon}</span>
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
}