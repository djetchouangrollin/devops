import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('/api/experiences/', {
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des expériences');
        }
        const data = await response.json();
        setExperiences(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <section id="experience" className="experience-section">
      <h2>Expériences Professionnelles</h2>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="date">
              {new Date(exp.start_date).toLocaleDateString()} - 
              {exp.end_date ? new Date(exp.end_date).toLocaleDateString() : 'Présent'}
            </p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 