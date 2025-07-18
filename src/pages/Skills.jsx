import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "text-blue-400" },
  { name: "JavaScript", icon: <FaJs />, level: 85, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, level: 80, color: "text-cyan-400" },
  { name: "Laravel", icon: <FaLaravel />, level: 75, color: "text-red-500" },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Skills Content */}
      <div className="pt-28 px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-pink-500">Skills</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-900 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
                <h2 className="text-xl font-semibold">{skill.name}</h2>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-pink-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
