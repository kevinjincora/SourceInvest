import React from 'react';
import './styles/Opportunities.css';

function Opportunities() {
  return (
    <section id="opportunities" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2>Our Investment Opportunities</h2>
        <p className="opportunities-description">
          Explore a range of property investments tailored to your goals, from pre-construction to tenanted properties in high-growth markets.
        </p>
        <div className="opportunities-grid">
          <div className="opportunity-card">
            <img src="https://via.placeholder.com/400x300?text=Pre-Construction" alt="Pre-Construction" />
            <h3>Pre-Construction</h3>
            <p>Invest early to benefit from capital appreciation during the build cycle.</p>
          </div>
          <div className="opportunity-card">
            <img src="https://via.placeholder.com/400x300?text=Ready-to-Rent" alt="Ready-to-Rent" />
            <h3>Ready-to-Rent</h3>
            <p>Complete properties ready for immediate rental income.</p>
          </div>
          <div className="opportunity-card">
            <img src="https://via.placeholder.com/400x300?text=Tenanted" alt="Tenanted" />
            <h3>Tenanted Properties</h3>
            <p>Instant cash flow with tenants already in place.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }} 
            className="cta-button"
          >
            View Latest Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}

export default Opportunities;