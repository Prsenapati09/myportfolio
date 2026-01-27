import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 text-white flex items-center">
      <div className="container px-6 md:px-30 mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-sm bg-indigo-600/20 text-indigo-400 rounded-full">
             Welcome to my portfolio
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-indigo-500">Pravat</span>
            <br />
            Full Stack Developer
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            I build modern, scalable, and user-friendly web applications using
            React, Node.js, MongoDB, and Tailwind CSS.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4">
            <NavLink to="/Projects">
            <button className="px-4 py-2 md:px-5 md:py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg font-medium">
              View Projects
            </button>
            </NavLink>
            <NavLink to="/Contact">
            <button className="px-5 py-2 md:px-5 md:py-3 border border-gray-600 hover:border-indigo-500 transition rounded-lg font-medium">
              Contact Me
            </button>
            </NavLink>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-6">
            <div>
              <h2 className="text-2xl font-bold text-indigo-500">2+</h2>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-indigo-500">Fresher</h2>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-indigo-500">100%</h2>
              <p className="text-sm text-gray-400">Learning Mindset</p>
            </div>
          </div>
        </div>

        {/* Right Design Card */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              What I Do 🚀
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-indigo-500">✔</span>
                Frontend Development (React, Tailwind)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-500">✔</span>
                Backend APIs (Node.js, Express)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-500">✔</span>
                Database Design (MongoDB)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-500">✔</span>
                Authentication & Security (JWT)
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
