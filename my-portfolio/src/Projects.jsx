import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard.jsx';

// Project data
const projectData = [
  {
    id: 1,
    title: "HAB Taxi Services System",
    description: "This comprehensive application is tailored to streamline and manage key operations of the HAB Taxi Services business. It offers robust features for employee management, revenue tracking, expense recording, car rentals, and more. Whether you're managing day-to-day activities or overseeing financial data, this system ensures efficiency and organization. Explore this README for a detailed guide on setting up, using, and navigating the system's features.",
    link: "https://github.com/CRose1497/Taxi-Services-App",
    image: "/images/Taxi_Sample.png",
  },
  {
    id: 2,
    title: "Dog Image Gallery",
    description: "Discover the joy of hundreds of dog breeds with my Dog Image Gallery! Whether you’re searching for a specific breed or exploring new ones, this gallery has you covered. Simply enter the breed name or choose from a dropdown list to find your favorite dogs. Customize your experience by selecting the number of images you want to see with our convenient counter selector. For those feeling adventurous, click the Surprise Me button and let fate choose a breed for you. Dive in and enjoy endless canine cuteness!",
    link: "https://github.com/CRose1497/Dog-Image-Gallery",
    image: "/images/Dog_Gallery.png", 
  },
  {
    id: 3,
    title: "Retro Diner Web Application",
    description: "Explore the full range of culinary delights with our interactive menu that lets you browse dishes, customize orders, and discover your next favorite meal with ease. Our user-friendly interface makes it simple to navigate through starters, mains, desserts, and beverages, complete with detailed descriptions and high-quality images.",
    link: "https://github.com/CRose1497/Restaurant-Web-Page",
    image: "/images/Diner_App.png",
  },
];

// useEffect hook to run code on component mount
const Projects = () => {
  useEffect(() => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.style.backgroundColor = '#2c2f3a'; 
    }

    // Function to handle scrolling
    const handleScroll = () => {
      console.log('User is scrolling through the projects section');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      {projectData.length > 0 ? (
        <div className="projects-grid">
          {projectData.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              link={project.link} 
              image={project.image} 
            />
          ))}
        </div>
      ) : (
        <p>No projects available</p>
      )}
    </section>
  );
};

export default Projects;
