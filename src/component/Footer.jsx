
import { Github, Linkedin, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Prsenapati09" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pravat-ranjan-senapati-6a182626a/" }
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className=" flex flex-col border-edge pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-ash">
            © {new Date().getFullYear()} — designed and built by me, in a text editor.
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-edge p-3 text-ash transition-colors duration-200 hover:border-flare hover:text-flare"
              >
                <Icon size={16} />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="rounded-full border border-edge p-3 text-ash transition-colors duration-200 hover:border-flare hover:text-flare"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}