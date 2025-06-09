import React, { useState, useEffect } from 'react';
import './Project.css';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects/', {
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des projets');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <section id="projects" className="projects-section">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.image && (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
            <h3>{project.title}</h3>
            <p className="technologies">{project.technologies}</p>
            <p className="description">{project.description}</p>
            <div className="project-links">
              {project.github_link && (
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.live_link && (
                <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                  Voir le projet
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project; 