import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Portfolio from "./Portfolio";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

const certificates = [
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding",
    image: "/images/Belajar Dasar Git dengan GitHub.png",
    pdf: "/sertifikat/Belajar Dasar Git dengan GitHub.pdf",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    image: "/images/Belajar Dasar Pemrograman Web.png",
    pdf: "/sertifikat/Belajar Dasar Pemrograman Web.pdf",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    image: "/images/Belajar Dasar Pemrograman JavaScript.png",
    pdf: "/sertifikat/Belajar Dasar Pemrograman JavaScript.pdf",
  },
  {
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding",
    image: "/images/Belajar Fundamental Front-End Web Development.png",
    pdf: "/sertifikat/Belajar Fundamental Front-End Web Development.pdf",
  },
  {
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding",
    image: "/images/Pengenalan ke Logika Pemrograman (Programming Logic 101).png",
    pdf: "/sertifikat/Pengenalan ke Logika Pemrograman (Programming Logic 101).pdf",
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding",
    image: "/images/Belajar Membuat Front-End Web untuk Pemula.png",
    pdf: "/sertifikat/Belajar Membuat Front-End Web untuk Pemula.pdf",
  },
];

export default function Home() {
  const fullText = "Asssalamu'alaikum, I’m Salman Alfarisi";
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(timer);
        setTypingDone(true);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const beforeName = "Assalamu'alaikum, I’m ";
  const name = "Salman Alfarisi";

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-center px-10 md:px-20 text-white bg-gradient-to-r from-black/80 via-black/60 to-transparent">
          {/* Left Text */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-bold whitespace-pre-wrap"
            >
              {typingDone ? (
                <>
                  {beforeName}
                  <span className="text-pink-400">{name}</span>
                </>
              ) : (
                <>
                  <span className="text-pink-400">{typedText}</span>
                  <span className="border-r-2 border-pink-400 animate-pulse ml-1" />
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="mt-4 text-xl md:text-2xl max-w-xl"
            >
              SIB Front-End and Back-End Developer Cycle 7 at Dicoding Indonesia || Informatics Engineering Student at Sekolah Tinggi Teknologi Terpadu Nurul Fikri || Design Web Enthusiast and Front-End Web Development Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="mt-6 flex gap-5 text-2xl"
            >
              <a href="https://instagram.com/tcallmeris" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/salman-alfarisi-886630251" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaLinkedin /></a>
              <a href="https://github.com/salmanlfarisi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition"><FaGithub /></a>
              <a href="https://wa.me/6285772649631" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaWhatsapp /></a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="mt-8"
            >
              <a
                href="#portfolio"
                className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full text-white font-semibold shadow-lg transition"
              >
                View My Work
              </a>
            </motion.div>
          </div>

          {/* Avatar & Icons */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex-1 mt-10 md:mt-0 flex justify-center items-center relative"
          >
            <img
              src="/assets/VMP00104.JPG"
              alt="Avatar"
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-pink-500 shadow-lg hover:scale-105 transition duration-500 z-10"
            />
            <div className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl text-orange-500"><FaHtml5 /></div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl text-blue-500"><FaCss3Alt /></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl text-yellow-400"><FaJs /></div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl text-cyan-400"><FaReact /></div>
              <div className="absolute top-[10%] right-[15%] text-2xl text-red-500"><FaLaravel /></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other Sections */}
      <section id="portfolio"><Portfolio /></section>
      <section id="skills"><Skills /></section>

      {/* Certificates Preview */}
      <section id="certificates-preview" className="py-20 px-6 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {certificates.slice(0, 3).map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-50 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">Issued by {cert.issuer}</p>
                {cert.pdf && (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-full text-white text-sm font-semibold transition"
                  >
                    View Details
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/certificates"
            className="inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold transition"
          >
            Selengkapnya
          </Link>
        </div>
      </section>

      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
