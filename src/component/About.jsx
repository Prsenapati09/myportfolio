
import { NavLink } from "react-router";
import profileImg from "../assets/myimage.jpeg";
const About = () => {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/30 rounded-2xl blur-2xl"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border border-gray-700 shadow-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-indigo-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I'm <span className="text-white font-medium">Pravat ranjan Senapati</span> , a
            passionate Full Stack Developer focused on building efficient,
            scalable, and user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I enjoy working with modern technologies like React, Node.js,
            MongoDB, and Tailwind CSS. I'm constantly learning and improving my
            skills by building real-world projects.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              `React`,
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 text-sm border border-gray-700 rounded-full hover:border-indigo-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
          
              <NavLink to='https://drive.google.com/file/d/1-EFKk7tch33C3EfdSo0uRU9ZL7i4r7r5/view?usp=sharing'>
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700  transition rounded-lg">
                  Download CV
                </button>
              </NavLink>
            
            
            <NavLink to='/Contact'>
            <button className="px-6 py-3 border border-gray-600 hover:border-indigo-500 transition rounded-lg">
              Contact Me
            </button>
            </NavLink>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
