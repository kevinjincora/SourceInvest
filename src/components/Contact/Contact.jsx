import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2>Get in Touch</h2>
        <p className="contact-description">
          Ready to build your property portfolio? Contact us to discuss your investment goals.
        </p>
        <div className="contact-form-container">
          {submitted ? (
            <p className="success-message fade-in">Thank you for your message! We'll get back to you soon.</p>
          ) : (
            <div className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button onClick={handleSubmit} className="cta-button">
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;