import React from "react";
import "./App.css";

function Homepage() {
  return (
    <div className="homepage-wrapper">
      {/* Header */}
      <header className="header">
        <div className="logo">Source Investments</div>
        <nav className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#clients">Who We Work With</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-cta">
          <span>020 8895 6128</span>
          <button className="login-btn">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Creating and protecting wealth through property</h1>
        <p>Your trusted partner in property investment and management.</p>
        <button className="cta-button">Book a Call</button>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h2>5000+</h2>
          <p>Registered Investors</p>
        </div>
        <div className="stat-item">
          <h2>10+</h2>
          <p>Years in Business</p>
        </div>
        <div className="stat-item">
          <h2>25+</h2>
          <p>Cities Invested In</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="service-card">
          <h3>New Investors</h3>
          <p>Start building your property portfolio with our expert guidance.</p>
        </div>
        <div className="service-card">
          <h3>Portfolio Landlords</h3>
          <p>Expand and manage your growing property investments effortlessly.</p>
        </div>
        <div className="service-card">
          <h3>International Buyers</h3>
          <p>Invest in UK property from anywhere in the world with our support.</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2>How We Work</h2>
        <div className="process-steps">
          <div className="step">Find Investments</div>
          <div className="step">Tenanting & Management</div>
          <div className="step">Sell On Demand</div>
          <div className="step">Book a Call</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-card">
            <h4>Tom Jewell</h4>
            <p>Co-Founder</p>
          </div>
          <div className="team-card">
            <h4>Ollie Smith</h4>
            <p>Co-Founder</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">"Fantastic service!" - Ben S</div>
        <div className="testimonial">"Highly recommended." - Charlie P</div>
        <div className="testimonial">"A seamless experience." - Jonathan T</div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to invest?</h2>
        <button className="cta-button">Book a Call</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* <div>© 2025 Source Investments. All rights reserved.</div> */}
        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;