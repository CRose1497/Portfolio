import React from 'react';

const ProjectCard = ({ title, description, link, image }) => (
  <div className="project-card">
    {image && (
      <img 
        src={image} 
        alt={`${title} screenshot`} 
        className="project-image" 
      />
    )}
    <h3>{title || 'No title'}</h3>
    <p>{description || 'No description available'}</p>
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-link"
        aria-label={`View project titled ${title}`}
      >
        View Project
      </a>
    )}
  </div>
);

export default ProjectCard;
