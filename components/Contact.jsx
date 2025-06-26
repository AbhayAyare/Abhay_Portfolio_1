'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 md:px-16 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start" data-aos="fade-up">
        {/* LEFT: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-700">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" /> abhayayare29@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-blue-500" /> +91 7219690903
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" /> Kolhapur, Maharashtra, India
            </p>
          </div>

          <div className="flex gap-6 mt-6 text-2xl text-blue-600">
            <a href="https://linkedin.com/in/abhay-ayare" target="_blank" className="hover:text-blue-800">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AbhayAyare" target="_blank" className="hover:text-blue-800">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 resize-none placeholder-transparent focus:outline-none focus:border-blue-500"
              required
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
