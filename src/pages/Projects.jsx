
import { projects } from "../constants/index.js";

export const Projects = () => {
  return (
    <section
      className="projects-section py-24"
      style={{ background: "linear-gradient(to bottom,#111827, #1f2937)" }}
    >
      {/* Section Container */}
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <div className="text-center mb-40">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 bg-[#5bc0be] bg-clip-text text-transparent">
            PROJECTS
          </h2>
          <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Project List */}
        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center gap-10 bg-gray-900 p-10 rounded-3xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Project Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-72 h-72 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Details */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-9 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 px-5 py-2 text-sm font-semibold text-indigo-300 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-teal-400 to-emerald-500 text-white px-10 py-3 rounded-md font-medium hover:from-teal-500 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-emerald-400/40"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
