import React from 'react';
import Navbar from '../Components/NavBar';
import HeroSection from '../Components/Hero';
import Features from '../Components/Features';
import AboutUs from '../Components/AboutUs';
import CTA from '../Components/CallToAction';
import ContactForm from '../Components/ContactUs';
import Footer from '../Components/Footer';
import { Element } from 'react-scroll';
import './Landing.css';

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Navbar />
      <Element name="hero-section">
        <HeroSection />
      </Element>
      <Element name="features-section">
        <Features />
      </Element>
      <Element name="team-section">
        <AboutUs />
      </Element>
      <Element name="cta-section">
        <CTA />
      </Element>
      <Element name="contact-section">
        <ContactForm />
      </Element>
      <Footer />
    </div>
  );
};

export default LandingPage;
