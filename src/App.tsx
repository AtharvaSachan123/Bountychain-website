import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Commands from './components/Commands';
import Workflow from './components/Workflow';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll animations for sections
    gsap.utils.toArray<HTMLElement>('.animate-section').forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bounty-darker">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Installation />
        <Commands />
        <Workflow />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}

export default App;
