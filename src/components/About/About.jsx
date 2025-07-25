import React from 'react';
import './styles/About.css';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2>Why Choose Source Investments?</h2>
        <p className="about-description">
          Since 2014, Source Investments has been helping clients build high-performing property portfolios. Our end-to-end service, from sourcing to management, ensures you maximize returns with minimal effort.
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Expert Sourcing</h3>
            <p>We handpick the best UK and UAE properties through our trusted network of developers and agents.</p>
          </div>
          <div className="feature-item">
            <h3>Comprehensive Management</h3>
            <p>Our in-house team, The Home Cloud, manages tenancies and maintenance for hassle-free investing.</p>
          </div>
          <div className="feature-item">
            <h3>Proven Track Record</h3>
            <p>Our clients have seen significant capital appreciation and stable rental yields.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;