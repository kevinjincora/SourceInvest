import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="footer-text">Source Investments | Creating and protecting wealth through property</p>
        <p className="footer-text">8 St James's Square, London, SW1Y 4JU, UK</p>
        <p className="footer-text">Contact us: <a href="mailto:info@sourceinvestments.com" className="footer-link">info@sourceinvestments.com</a></p>
        <div className="footer-social-links">
          <a href="https://facebook.com" className="footer-link">Facebook</a>
          <a href="https://linkedin.com" className="footer-link">LinkedIn</a>
        </div>
        <p className="footer-copyright"></p>
      </div>
    </footer>
  );
}

export default Footer;