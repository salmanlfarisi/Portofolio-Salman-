// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-28 px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact <span className="text-pink-500">Me</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
}
