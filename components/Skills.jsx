'use client';

import {
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDatabase,
  FaCuttlefish, FaJava
} from 'react-icons/fa';
import {
  SiTailwindcss, SiJavascript, SiMongodb, SiNextdotjs, SiTypescript,
  SiFirebase, SiCplusplus, SiExpress, SiMysql
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: FaHtml5, category: 'Frontend', color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, category: 'Frontend', color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: 'text-blue-600' },
  { name: 'React', icon: FaReact, category: 'Frontend', color: 'text-cyan-500' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: 'text-black dark:text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', color: 'text-sky-400' },
  { name: 'Node.js', icon: FaNodeJs, category: 'Backend', color: 'text-green-600' },
  { name: 'Express.js', icon: SiExpress, category: 'Backend', color: 'text-gray-700 dark:text-white' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: 'text-green-500' },
  { name: 'MySQL', icon: SiMysql, category: 'Database', color: 'text-blue-700' },
  { name: 'Firebase', icon: SiFirebase, category: 'Backend', color: 'text-yellow-500' },
  { name: 'Python', icon: FaPython, category: 'Backend', color: 'text-yellow-600' },
  { name: 'Git', icon: FaGitAlt, category: 'Tools', color: 'text-orange-600' },
  { name: 'GitHub', icon: FaGithub, category: 'Tools', color: 'text-gray-800 dark:text-white' },
  { name: 'C', icon: FaCuttlefish, category: 'Languages', color: 'text-blue-700' },
  { name: 'C++', icon: SiCplusplus, category: 'Languages', color: 'text-purple-600' },
  { name: 'Java', icon: FaJava, category: 'Languages', color: 'text-red-600' },
  { name: 'SQL', icon: FaDatabase, category: 'Database', color: 'text-indigo-600' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6 md:px-16 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-blue-600 dark:text-white mb-4">Technical Skills</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          My current tech stack and tools that I frequently work with to develop full-stack applications.
        </p>

        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map(({ name, icon: Icon, color }, i) => (
            <div
              key={name}
              className="group bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md
              hover:scale-[1.04] transition-all duration-300
              hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.7)]"
              data-aos="zoom-in"
              data-aos-delay={i * 40}
            >
              <div className="text-3xl mb-2 flex justify-center">
                <Icon className={`${color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-white">{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
