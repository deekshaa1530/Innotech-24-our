import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Swasthya</h1>
          <p>Your health, our priority.Get all information about your health at once</p>
          <a href="#login" className="cta-button">Get Started</a>
        </div>
      </header>
      <section className="highlights-section">
        <div className="highlight">
          <h3>Trusted Hospitals</h3>
          <p>Find and connect with top hospitals near you.</p>
        </div>
        <div className="highlight">
          <h3>Expert Medications</h3>
          <p>Access verified medications and prescriptions.</p>
        </div>
        <div className="highlight">
          <h3>Comprehensive Care</h3>
          <p>Explore wellness tips and health guides curated by professionals.</p>
        </div>
      </section>
      <footer className="footer">
        <p>© 2024 Swasthya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
