import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const heroImageRef = useRef(null);

  // useEffect hook to run code on component mount
  useEffect(() => { const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.style.backgroundColor = '#2c2f3a'; // Change background color of hero section
    }

    // Add event listeners to hero image
    if (heroImageRef.current) {
      heroImageRef.current.addEventListener('mouseover', () => {
        heroImageRef.current.style.transform = 'scale(1.05)';
        heroImageRef.current.style.transition = 'transform 0.3s ease-in-out';
      });

      heroImageRef.current.addEventListener('mouseout', () => {
        heroImageRef.current.style.transform = 'scale(1)';
      });
    }
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Christian.</h1>
        <p className="hero-intro">
          A dedicated software development student at Keyin College with a passion for creating innovative and efficient solutions.
          Welcome to my portfolio, where you can explore my projects and learn more about my journey in the world of technology.
        </p>

        <a href="Projects" aria-label="View My Work section" className="btn-primary">
          My Projects
        </a>
      </div>
      <img ref={heroImageRef} src="/images/IMG_7895.jpeg" alt="Profile Photo" className="hero-image" />
    </div>
  );
};

export default Hero;
