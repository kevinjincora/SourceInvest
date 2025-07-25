import React, { useState, useEffect } from 'react';
import './styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-3xl font-bold">Source Investments</div>
        <div className="space-x-6 text-white">
          <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="hover:text-gray-300">Home</a>
          <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="hover:text-gray-300">About</a>
          <a href="#opportunities" onClick={(e) => smoothScroll(e, 'opportunities')} className="hover:text-gray-300">Opportunities</a>
          <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;