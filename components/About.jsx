'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div
          className="flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="w-80 h-80 md:w-[22rem] md:h-[22rem] relative rounded-2xl overflow-hidden shadow-xl border-4 border-blue-100">
            <Image
              src="./profile_picture.png"
              alt="My Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* About Content */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            I'm a passionate web developer and AI enthusiast with a foundation in Electronics & Telecommunication.
            My work blends creative design with clean, scalable code to deliver interactive, user-friendly digital experiences.
          </p>
          <p className="text-base text-gray-600 mb-6">
            I specialize in modern frameworks like <strong>React.js</strong> and <strong>Next.js</strong> with Tailwind CSS for styling.
            I love solving problems, building fast websites, and learning new technologies to stay ahead in the ever-evolving tech world.
          </p>

          {/* Resume Button */}
          <a
            href="./resume.pdf"
            download
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
