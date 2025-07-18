import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on top of Home only
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100 && location.pathname === "/") {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    handleScroll(); // check on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        showNavbar ? "top-0 opacity-100" : "-top-24 opacity-0"
      } bg-gray-900/80 backdrop-blur text-white shadow-md`}
    >
      <div className="flex items-center justify-between p-4 px-6 md:px-10">
        {/* Logo */}
        <Link to="/" onClick={() => setIsMobileOpen(false)}>
          <img
            src="/assets/Logo salman.png"
            alt="Salman Logo"
            className="h-20 md:h-20 w-20 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm md:text-base font-medium">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/certificates">Certificate</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-center bg-gray-900/90 text-white">
          <Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link>
          <Link to="/portfolio" onClick={() => setIsMobileOpen(false)}>Portfolio</Link>
          <Link to="/skills" onClick={() => setIsMobileOpen(false)}>Skills</Link>
          <Link to="/certificates" onClick={() => setIsMobileOpen(false)}>Certificate</Link>
          <Link to="/about" onClick={() => setIsMobileOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
