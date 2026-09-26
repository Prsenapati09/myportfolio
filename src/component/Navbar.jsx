
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { to: "/", label: "Home", index: "01" },
  { to: "/about", label: "About", index: "02" },
  { to: "/education", label: "Education", index: "03" },
  { to: "/skills", label: "Skills", index: "04" },
  { to: "/projects", label: "Project", index: "05" },
  { to: "/contact", label: "Contact", index: "06" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true; 
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-void/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-mono text-2xl tracking-wide text-paper"
        >
          Pravat<span className="text-flare">.</span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-9 font-mono text-sm md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-200 ${
                  isActive ? "text-flare" : "text-ash hover:text-paper"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* right side: theme toggle + mobile trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-edge p-2 text-ash transition-colors duration-200 hover:text-flare"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="text-paper md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-edge bg-void px-6 pb-6 pt-2 font-mono text-sm md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-1 transition-colors duration-200 ${
                    isActive ? "text-flare" : "text-ash hover:text-paper"
                  }`
                }
              >
                <span className="mr-2 text-ash/60">{l.index}</span>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}