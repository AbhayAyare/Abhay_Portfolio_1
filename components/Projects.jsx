'use client';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js and Tailwind CSS showcasing my skills, education, and contact info.',
    link: 'https://yourportfolio.com',
    github: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Matrix Astronomy Club Web App',
    description: 'A full-stack website for the Matrix Astronomy Club built with **Next.js 15**, **React**, and **Firebase**. It includes a dynamic public-facing site and a secure admin panel with full content management. Optimized for performance, responsiveness, and maintainability.',
    link: '',
    github: 'https://github.com/yourusername/milk-analyzer',
  },
  {
    title: 'AstroVision',
    description: 'A weather forecast app AstroVision is a desktop AI-powered stargazing assistant that uses your webcam and machine learning to detect constellations in real time. It includes a fun quiz mode for learning. using React and OpenWeatherMap API with real-time search and responsive design.',
    link: '',
    github: 'https://github.com/yourusername/weather-app',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 md:px-16 border-t border-blue-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Projects</h2>
        <p className="text-lg text-gray-600 mb-16">
          A selection of real-world projects that demonstrate my abilities in web development and problem solving.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 shadow-md rounded-xl p-6 text-left transition hover:shadow-blue-200"
              data-aos="zoom-in-up"
              data-aos-delay={i * 150}
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4 text-blue-600">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-blue-800 transition"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-800 transition"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
