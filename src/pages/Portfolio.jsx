import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "NutriGuide",
    description: "NutriGuide hadir sebagai solusi modern untuk membantu Anda mengelola asupan nutrisi harian...",
    image: "/assets/nutriguide.png",
    link: "https://relystrix-code.github.io/NutriGuide/",
  },
  {
    title: "eRoom",
    description: "eRoom adalah aplikasi berbasis web yang memfasilitasi peminjaman ruangan kampus...",
    image: "/assets/eRoom.png",
    link: "https://github.com/salmanlfarisi/Final-e-Room",
  },
  {
    title: "Portofolio Web",
    description: "Website portofolio pribadi untuk menampilkan profil Salman Alfarisi...",
    image: "/assets/Logo salman.png",
    link: "https://https://portofolio-salman-gray.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-28 px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-pink-500">Portfolio</span>
        </h1>

        {/* Projects Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-pink-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-50 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-300 mt-2 flex-1">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-full text-white text-sm font-semibold text-center transition"
                >
                  View Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
