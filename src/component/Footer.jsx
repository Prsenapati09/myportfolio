import React from "react";
import {LinkedinIcon,Github,MapPin, Mail, LocateIcon, LocationEdit} from 'lucide-react'
import {NavLink} from 'react-router'
const Footer = () => {
  return (
    <footer className=" bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Pravat ranjan <span className="text-indigo-500">Senapati</span>
          </h2>
          <p className="mt-3 text-sm">
            Full Stack Developer passionate about building modern web
            applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <NavLink to='/'>
            <li className="hover:text-indigo-500 cursor-pointer">Home</li>
            </NavLink>
            <NavLink to='/About'>
            <li className="hover:text-indigo-500 cursor-pointer">About</li>
            </NavLink>
            <NavLink to="/Projects">
            <li className="hover:text-indigo-500 cursor-pointer">Projects</li>
            </NavLink>
            <NavLink to="/Contact">
            <li className="hover:text-indigo-500 cursor-pointer">Contact</li>
            </NavLink>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><Mail/> Email: prsenapati595@gmail.com</li>
            <li className="flex gap-2"><MapPin/> Location: keonjar ,odisha, India</li>
            <li className="flex gap-4 mt-3">
              <a className="hover:text-black-500" href="https://github.com/Prsenapati09"><Github/></a>
              <a className="hover:text-blue-500" href="https://www.linkedin.com/in/pravat-ranjan-senapati-6a182626a/"><LinkedinIcon/></a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Pravat ranjan Senapati. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
