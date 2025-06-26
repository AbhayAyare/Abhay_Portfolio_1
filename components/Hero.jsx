'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'; // React Icons

const roles = [
  "Passionate Web Developer",
  "AI Enthusiast",
  "Focused on UI/UX & Performance",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 overflow-hidden"
    >
      {/* Blobs + particles background */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-300 rounded-full blur-3xl opacity-30 animate-blob1" />
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-pink-300 rounded-full blur-2xl opacity-20 animate-blob2" />
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-3xl opacity-20 -translate-x-1/2 animate-blob3" />
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-10 blur-sm animate-drift"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i * 1.7) % 10}s`,
              animationDuration: `${15 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Hello, I'm <span className="text-blue-600">Abhay</span>
          </h1>

          <p className="text-lg text-gray-700 mb-2 h-[32px]">
            <span className="inline-block animate-fade">{roles[index]}</span>
          </p>

          <p className="text-base text-gray-600 mt-2 mb-6 max-w-xl">
            I'm a dedicated full-stack web developer with a passion for clean code,
            intelligent systems, and building elegant user experiences with performance in mind.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://linkedin.com/in/abhay-ayare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AbhayAyare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/Abhay6116"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-600 transition text-2xl"
            >
              <FaCode />
            </a>
          </div>
        </div>

        {/* Image Right */}
        <div className="flex justify-center">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-white shadow-xl animate-float">
            <Image
              src="/me.jpg"
              alt="My Photo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
