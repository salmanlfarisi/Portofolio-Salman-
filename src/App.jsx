import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from "./pages/Skills";
import Certificate from './pages/Certificate';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills/>} />  
        <Route path="/certificates" element={<Certificate/>} />  
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;