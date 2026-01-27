import { useState } from "react";
import { NavLink } from "react-router";
import { CgMenuRightAlt } from "react-icons/cg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          MY<span className="text-indigo-500">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-semibold text-[18px]">
      
          <NavLink to="/"
          className={({ isActive }) =>
            `relative inline-block cursor-pointer transition-colors duration-300
            ${isActive ? "text-indigo-500" : "text-white-400 hover:text-amber-400"}`
          }>
          {({ isActive }) => (
          <>
          Home
            {isActive && (
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </>
            )}
          </NavLink>
          <NavLink to="/About"
          className={({ isActive }) =>
            `relative inline-block cursor-pointer transition-colors duration-300
            ${isActive ? "text-indigo-500" : "text-white-400 hover:text-amber-400"}`
          }>
          {({ isActive }) => (
          <>
          About
            {isActive && (
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </>
            )}
          </NavLink>
          <NavLink to="/Education"
          className={({ isActive }) =>
            `relative inline-block cursor-pointer transition-colors duration-300
            ${isActive ? "text-indigo-500" : "text-white-400 hover:text-amber-400"}`
          }>
          {({ isActive }) => (
          <>
          Education
            {isActive && (
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </>
            )}
          </NavLink>
          <NavLink to="/Skills"
          className={({ isActive }) =>
            `relative inline-block cursor-pointer transition-colors duration-300
            ${isActive ? "text-indigo-500" : "text-white-400 hover:text-amber-400"}`
          }>
          {({ isActive }) => (
          <>
          Skills
            {isActive && (
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </>
            )}
          </NavLink>
          <NavLink to='/Projects'
          className={({ isActive }) =>
            `relative inline-block cursor-pointer transition-colors duration-300
            ${isActive ? "text-indigo-500" : "text-white-400 hover:text-amber-400"}`
          }>
          {({ isActive }) => (
          <>
          Projects
            {isActive && (
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </>
            )}
          </NavLink>
          <NavLink to='/Contact'
          className={({ isActive }) =>
            `relative inline-block cursor-pointer transition-colors duration-300
            ${isActive ? "text-indigo-500" : "text-white-400 hover:text-amber-400"}`
          }>
          {({ isActive }) => (
          <>
          Contact
            {isActive && (
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 rounded-full" />
            )}
          </>
            )}
          </NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CgMenuRightAlt />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700 dark:text-gray-200 font-medium">
            <NavLink to="/"> 
            <li onClick={()=> setIsOpen(false)}>Home</li> 
            </NavLink>

            <NavLink to="/About">
             <li onClick={()=> setIsOpen(false)}>About</li>
             </NavLink>

            <NavLink to="/Skills"> 
            <li onClick={()=> setIsOpen(false)}>Skills</li>
            </NavLink>

            <NavLink to="/Projects">
             <li onClick={()=> setIsOpen(false)}>Projects</li>
             </NavLink>

            <NavLink to="/Contact">
            <li onClick={()=> setIsOpen(false)}>Contact</li>
            </NavLink>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
