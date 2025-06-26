'use client';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:you@example.com" className="hover:text-blue-600 transition">abhayayare29@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <FaLinkedin className="text-blue-500" />
            <a href="https://linkedin.com/in/abhay-ayare" target="_blank" className="hover:text-blue-600 transition">LinkedIn</a>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <FaGithub className="text-blue-500" />
            <a href="https://github.com/AbhayAyare" target="_blank" className="hover:text-blue-600 transition">GitHub</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Sections</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/resume.pdf" className="hover:text-blue-500" target="_blank">My Resume</a></li>
            <li><a href="https://leetcode.com/abhay6116" className="hover:text-blue-500" target="_blank">LeetCode</a></li>
            <li><a href="https://github.com/AbhayAyare" className="hover:text-blue-500" target="_blank">Repositories</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-600">Follow Me</h3>
          <div className="flex gap-4 text-xl text-blue-500">
            <a href="https://linkedin.com/in/abhay-ayare" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/AbhayAyare" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/true.living_29_" target="_blank"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Abhay Ayare • All rights reserved.
      </div>
    </footer>
  );
}
