import React from "react";

const educationData = [
  {
    degree: "Bachelor of Computer Application (Bca)",
    field: "Computer Science & Engineering",
    institution: "NC Autonomous College ",
    year: "2023 – 2026",
    description:
      "Focused on core computer science subjects including Data Structures, Web Development, Databases, and Software Engineering.",
  },
  {
    degree: "Higher Secondary (12th)",
    field: "Science Stream",
    institution: "PMV Higher Secondary School",
    year: "2021 – 2023",
    description:
      "Studied Physics, Chemistry, and Mathematics with emphasis on problem-solving and analytical thinking.",
  },
];

const Education = () => {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-indigo-500">Education</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Academic background that shaped my technical foundation.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="
                bg-gray-900 border border-gray-800 rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-2 hover:border-indigo-500
                hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
              "
            >
              <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-400">
                {edu.year}
              </span>

              <h3 className="text-xl font-semibold mb-1">
                {edu.degree}
              </h3>
              <p className="text-indigo-400 mb-1">
                {edu.field}
              </p>
              <p className="text-gray-400 text-sm mb-4">
                {edu.institution}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
