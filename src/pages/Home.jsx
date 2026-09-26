
import { Link } from "react-router";
import { ArrowDownRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24">
        <div
          className="flex animate-rise items-center gap-2 font-mono text-xs text-ash opacity-0"
          style={{ animationDelay: "60ms" }}
        >
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-flare" />
          available for work
        </div>

        <h1 className="mt-8 font-display text-[13vw] leading-[0.82] tracking-tight sm:text-[10vw]">
          <span
            className="block animate-rise opacity-0"
            style={{ animationDelay: "140ms" }}
          >
            FULLSTACK
          </span>
          <span
            className="block animate-rise text-flare opacity-0 mt-2.5 sm:mt-0"
            style={{ animationDelay: "260ms" }}
          >
            DEVELOPER
          </span>
        </h1>

        <div
          className="mt-12 grid animate-rise gap-10 opacity-0 sm:grid-cols-[1fr_auto] sm:items-end"
          style={{ animationDelay: "400ms" }}
        >
          <p className="max-w-md text-lg leading-relaxed text-ash">
            Hello! I'm Pravat , a passionate developer dedicated to building smart, modern, and user-friendly web applications. Currently, I am actively upskilling in the latest AI advancements and exploring .
          </p>

          <Link
            to="/projects"
            className="group flex items-center gap-3 self-start rounded-full bg-flare px-7 py-4 font-medium text-void transition-transform duration-200 hover:scale-[1.03] sm:self-auto"
          >
            See the work
            <ArrowDownRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px border-b border-edge bg-edge sm:grid-cols-3">
        {[
          { value: "Fresher", label: "Years of Experience" },
          { value: "5+", label: "Projects shipped" },
          { value: "100%", label: "Learning Mindset" },
        ]
        .map((stat) => (
          <div key={stat.label} className="bg-void px-6 py-12">
            <p className="font-display text-6xl text-flare">{stat.value}</p>
            <p className="mt-2 font-mono text-xs text-ash">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}