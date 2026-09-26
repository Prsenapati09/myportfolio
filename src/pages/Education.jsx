
import { GraduationCap } from "lucide-react";

const history = [
  {
    year: "2023 — 2026",
    title: "Bachelor of Computer application ",
    place: "N.c autonomous college",
    detail:
      "Data structures, DBMS, operating systems, and a final-year project that taught me more about deadlines than databases.",
    score: "8.5 CGPA",
  },
  {
    year: "2021 — 2023",
    title: "Higher Secondary, Science",
    place: "Patitapaban higher seconday school",
    detail: "Physics, Chemistry, Mathematics ",
    score: "57%",
  },
];

export default function Education() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs text-ash">03 / education</p>
      {/* <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-wide sm:text-8xl">
        WHERE IT
        <br />
        STARTED<span className="text-flare">.</span>
      </h1> */}

      <div className="mt-20 border-l border-edge pl-8 sm:pl-12">
        {history.map((h) => (
          <article key={h.title} className="group relative pb-16 last:pb-0">
            <span className="absolute -left-10.25 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-edge bg-void transition-colors duration-300 group-hover:border-flare sm:-left-14.25">
              <span className="h-1.5 w-1.5 rounded-full bg-flare" />
            </span>

            <div className="flex flex-wrap items-center gap-4">
              <p className="font-mono text-sm text-flare">{h.year}</p>
              <span className="rounded-full border border-edge px-3 py-1 font-mono text-xs text-ash">
                {h.score}
              </span>
            </div>

            <h2 className="mt-3 font-display text-3xl tracking-wide sm:text-5xl">
              {h.title.toUpperCase()}
            </h2>

            <p className="mt-2 flex items-center gap-2 text-ash">
              <GraduationCap size={16} className="text-flare" />
              {h.place}
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-ash">{h.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}