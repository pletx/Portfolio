import React from 'react';
import Card from '../../components/Cards/Card';
import "./Projects.css"
function Projects() {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Description du projet 1',
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2',
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2',
    },

  ];

  return (
    <section className='projects-background'>
      <div id="projects">
        <h2>Projects</h2>
        <div className="card-container">
          {projects.map((project, index) => (
            <Card key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </section>

  );
}

export default Projects;
