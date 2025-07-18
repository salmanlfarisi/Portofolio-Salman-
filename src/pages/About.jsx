import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen px-6 py-28 bg-black text-white flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          About <span className="text-pink-500">Me</span>
        </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* Avatar or Illustration */}
        <motion.img
          src="/assets/VMP00104.JPG"
          alt="Avatar"
          className="w-48 h-48 rounded-full object-cover border-4 border-pink-500 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed max-w-xl text-justify"
        >
          <p>
            Assalamu'alaikum I’m{" "}
            <span className="font-semibold text-pink-400">Salman Alfarisi</span>
            , a full-stack web developer with a strong passion for building
            clean, functional, and impactful web applications. I enjoy creating
            user experiences that are not only smooth but also meaningful. I’m
            currently studying Web Development at Sekolah Tinggi Terpadu Nurul
            Fikri, where I continue to sharpen my skills in both frontend and
            backend technologies. I’ve joined the MSIB program at Dicoding,
            where I focused on modern frontend development using JavaScript,
            React, and RESTful APIs. I also had the opportunity to join the SIB
            program at NF Academy, which helped me dive deeper into full-stack
            development and real-world project building. I love solving problems
            through code, collaborating with others, and continuously learning
            to become a better developer every day.{" "}
          </p>
          <p className="mt-4">
            With a strong foundation in JavaScript, React, and modern UI/UX
            principles, I enjoy building applications that not only work
            flawlessly, but also leave a lasting impression.
          </p>
        </motion.div>
      </div>
    </div>
    </>
  );
}
