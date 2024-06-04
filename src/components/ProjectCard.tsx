import React from 'react';
import { Project } from '../models/Project';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <h2>{project.title}</h2>
      <p>{project.description}</p><br />
      <div className='link-net'>
        <span role="img" aria-label="phone"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={{ width: '30px', height: '30px', marginRight: '5px' }} /></span>
        <a href={project.url} target="_blank" rel="noopener noreferrer">Ver my poyecto en Git</a><br />
        <span role="img" aria-label="phone"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Netlify" style={{ width: '30px', height: '30px', marginRight: '5px' }} /></span>
        <a href={project.visulurl} target="_blank" rel="noopener noreferrer">Ver my poyecto en netlify</a>
      </div>
    </div>
  );
};

export default ProjectCard;
