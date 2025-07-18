import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function Certificate() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Certificates Section */}
      <div className="pt-28 px-6 pb-20 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-pink-400">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-50 w-full object-cover"
              />
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1 mb-4">
                  Issued by {cert.issuer}
                </p>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-full text-white text-sm font-semibold text-center transition"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
