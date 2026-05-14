/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SpaceBackground from "./components/SpaceBackground";

const HomePage = () => (
  <>
    <Hero />
    <LogoSlider />
    <Showcase />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Testimonials />
    <Pricing />
    <Resume />
    <Contact />
  </>
);

const AboutPage = () => (
  <div className="pt-32 min-h-screen">
    <About />
  </div>
);

const ServicesPage = () => (
  <div className="pt-32 min-h-screen">
    <Services />
  </div>
);

const SkillsPage = () => (
  <div className="pt-32 min-h-screen">
    <Skills />
  </div>
);

const PortfolioPage = () => (
  <div className="pt-32 min-h-screen">
    <Projects />
  </div>
);

const PricingPage = () => (
  <div className="pt-32 min-h-screen">
    <Pricing />
  </div>
);

const ContactPage = () => (
  <div className="pt-32 min-h-screen">
    <Contact />
  </div>
);

export default function App() {
  return (
    <Router>
      <main className="relative selection:bg-accent selection:text-white" id="main">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        <ScrollToTop />
        
        <SpaceBackground />
      </main>
    </Router>
  );
}
