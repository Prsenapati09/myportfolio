
import { NavLink } from "react-router";
import { Download } from "lucide-react";
import profileImg from "../assets/myimage.jpeg";


export default function About() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs text-ash">02 / about</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.9] tracking-wide sm:text-8xl text-paper">
        A DEVELOPER
        <br />
        WHO SHIPS<span className="text-flare">.</span>
      </h1>

      <div className="mt-16 grid gap-14 md:grid-cols-[300px_1fr] md:items-start">
        {/* photo with offset frame */}
        <div className="group relative w-full max-w-75">
          <div className="absolute inset-0 translate-x-4 translate-y-4 border border-flare transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
          <img
            src={profileImg}
            alt="Pravat Ranjan Senapati, portrait"
            className="relative aspect-4/5 w-full border border-edge object-cover transition-all duration-500 group-hover:grayscale-0"
          />
        </div>

        <div>
          <div className="space-y-5 text-lg leading-relaxed text-ash">
            <p>
              I&apos;m <span className="text-paper font-medium">Pravat Ranjan Senapati</span>, a
              passionate Full Stack Developer focused on building efficient,
              scalable, and user-friendly web applications.
            </p>
            <p>
              I enjoy working with modern technologies like React, Node.js,
              MongoDB, and Tailwind CSS. I&apos;m constantly learning and improving my
              skills by building real-world projects.
            </p>
            <p>
              Actively upskilling in the latest AI advancements and exploring how to seamlessly integrate artificial intelligence into modern web applications.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1W6GkkyRc1Vpa3Vj5hYjYT5lMuvwwK_jV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-flare px-7 py-4 font-medium text-void transition-transform duration-200 hover:scale-[1.03]"
            >
              <Download
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download resume
            </a>

            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-full border border-edge px-7 py-4 font-medium text-paper transition-colors duration-200 hover:border-flare hover:text-flare"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}