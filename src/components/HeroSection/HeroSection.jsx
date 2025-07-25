import React from 'react';
import './styles/Hero.css';

function Hero() {
  return (
    <section className="hero-bg" id="home">
      <div className="overlay">
        <div className="container mx-auto px-6">
          <h1 className="fade-in">Creating Wealth Through Property</h1>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>
            Source Investments specializes in sourcing and managing UK and UAE property investments for long-term wealth creation.
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }} 
            className="cta-button fade-in" 
            style={{ animationDelay: '0.4s' }}
          >
            Discover Investment Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;