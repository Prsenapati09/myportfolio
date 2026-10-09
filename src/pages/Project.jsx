

import { ExternalLink, Github, Circle } from "lucide-react";
import { FaJs, FaReact, FaNodeJs, FaBriefcase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { CakeSlice } from "lucide-react";

const projects = [
  {
    logo: <FaNodeJs size={23} className="text-[#339933]" />,
    title: "Mark Down Editor",
    description:
      " Mark down editor . Here you can creat, preview and edit the markdown file . Production style application . ",
    tech: [
      { item: "React", icon: <FaReact size={16} className="text-[#61DAFB]" /> },
      { item: "Node.js", icon: <FaNodeJs size={16} className="text-[#339933]" /> },
      { item: "Express.js", icon: <SiExpress size={16} className="text-paper" /> },
      { item: "MongoDB", icon: <SiMongodb size={16} className="text-[#47A248]" /> },
    ],
    live: "https://folio-mark-down.vercel.app/",
    github: "https://github.com/Prsenapati09/MarkDown-editor",
  },
  {
    logo: <FaNodeJs size={23} className="text-[#339933]" />,
    title: "Digital Library Management",
    description:
      "Full-stack library system with secure role-based authentication, an administrative dashboard, and real-time document viewing.",
    tech: [
      { item: "React", icon: <FaReact size={16} className="text-[#61DAFB]" /> },
      { item: "Node.js", icon: <FaNodeJs size={16} className="text-[#339933]" /> },
      { item: "Express.js", icon: <SiExpress size={16} className="text-paper" /> },
      { item: "MongoDB", icon: <SiMongodb size={16} className="text-[#47A248]" /> },
    ],
    live: "https://fullstack-library-management.vercel.app/",
    github: "https://github.com/Prsenapati09/FullStack-LibraryManagement",
  },
  {
    logo: <FaBriefcase size={23} className="text-flare" />,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and Tailwind CSS showcasing projects, skills, and professional experience. integrat Goole sheets in my contact page .",
    tech: [
      { item: "React", icon: <FaReact size={16} className="text-[#61DAFB]" /> },
      { item: "Tailwind CSS", icon: <SiTailwindcss size={16} className="text-[#38BDF8]" /> },
      { item: "JavaScript", icon: <FaJs size={16} className="text-[#F7DF1E]" /> },
    ],
    live: "https://prsenapati.vercel.app",
    github: "https://github.com/Prsenapati09/myportfolio",
  },

  {
    logo: <CakeSlice size={23} className="text-flare" />,
    title: "Bakery Site",
    description:
      "Digital storefront showcasing products and services from a local bakery shop with responsive layouts.",
    tech: [
      { item: "React", icon: <FaReact size={16} className="text-[#61DAFB]" /> },
      { item: "Tailwind CSS", icon: <SiTailwindcss size={16} className="text-[#38BDF8]" /> },
      { item: "JavaScript", icon: <FaJs size={16} className="text-[#F7DF1E]" /> },
    ],
    live: "https://pr-bakery.vercel.app/",
    github: "https://github.com/Prsenapati09/Bakery-App",
  },
  {
    logo: <FaNodeJs size={23} className="text-[#339933]" />,
    title: "CRUD Web App",
    description:
      "Backend CRUD application featuring REST APIs and database integration for book management.",
    tech: [
      { item: "Node.js", icon: <FaNodeJs size={16} className="text-[#339933]" /> },
      { item: "Express.js", icon: <SiExpress size={16} className="text-paper" /> },
      { item: "MongoDB", icon: <SiMongodb size={16} className="text-[#47A248]" /> },
    ],
    live: "https://github.com/Prsenapati09/BookStore",
    github: "https://github.com/Prsenapati09/BookStore",
  },
  {
    logo: <FaNodeJs size={23} className="text-[#339933]" />,
    title: "User Authentication",
    description:
      "Backend service handling user registration, JWT authentication, bcrypt password hashing, rate limiting, and Cloudinary storage.",
    tech: [
      { item: "Node.js", icon: <FaNodeJs size={16} className="text-[#339933]" /> },
      { item: "Express.js", icon: <SiExpress size={16} className="text-paper" /> },
      { item: "MongoDB", icon: <SiMongodb size={16} className="text-[#47A248]" /> },
    ],
    live: "https://github.com/Prsenapati09/UserModule-Backend",
    github: "https://github.com/Prsenapati09/UserModule-Backend",
  },
  {
    logo: <FaNodeJs size={23} className="text-[#339933]" />,
    title: "URL Shortener",
    description:
      "Backend utility converting long target URLs into compact redirect tokens with click tracking.",
    tech: [
      { item: "Node.js", icon: <FaNodeJs size={16} className="text-[#339933]" /> },
      { item: "Express.js", icon: <SiExpress size={16} className="text-paper" /> },
      { item: "MongoDB", icon: <SiMongodb size={16} className="text-[#47A248]" /> },
    ],
    live: "https://github.com/Prsenapati09/Urlshortner",
    github: "https://github.com/Prsenapati09/Urlshortner",
  },

  
];

export default function Projects() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs text-ash">05 / projects</p>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <h1 className="font-display text-5xl leading-[0.9] tracking-wide sm:text-8xl text-paper">
          FEATURED
          <br />
          PROJECTS<span className="text-flare">.</span>
        </h1>
      </div>

      {/* Projects Grid Layout */}
      <div className="mt-16 grid gap-px bg-edge sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between  bg-void p-8 transition-colors duration-200"
          >
            <div>
              {/* Top Row: Icon + Links */}
              <div className="flex items-center justify-between ">
                <div className="rounded-xl border border-edge bg-char p-3">
                  {project.logo}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live preview"
                    className="rounded-full border border-edge p-2 text-ash transition-colors duration-200 hover:border-flare hover:text-flare"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repository"
                    className="rounded-full border border-edge p-2 text-ash transition-colors duration-200 hover:border-flare hover:text-flare"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h2 className="mt-6 font-display text-2xl tracking-wide text-paper">
                {project.title.toUpperCase()}
              </h2>

              {/* Description */}
              <p className="mt-3 font-mono text-xs leading-relaxed text-ash">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t.item}
                  className="flex items-center gap-1.5 rounded-full border border-edge bg-char/50 px-3 py-1 font-mono text-xs text-ash"
                >
                  {t.icon}
                  {t.item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}