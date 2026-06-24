'use client';
import Header from './portfolio/Header';
import Hero from './portfolio/Hero';
import Marquee from './portfolio/Marquee';
import About from './portfolio/About';
import Stack from './portfolio/Stack';
import Projects from './portfolio/Projects';
import Metrics from './portfolio/Metrics';
import Services from './portfolio/Services';
import Contact from './portfolio/Contact';

export default function Portfolio() {
  return (
    <div className="bg-d-bg text-d-text">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Projects />
      <Metrics />
      <Services />
      <Contact />
    </div>
  );
}
