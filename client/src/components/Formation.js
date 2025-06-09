import React, { useState, useEffect } from 'react';
import './Formation.css';

const Formation = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await fetch('/api/formations/', {
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des formations');
        }
        const data = await response.json();
        setFormations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <section id="formation" className="formation-section">
      <h2>Formation</h2>
      <div className="formation-container">
        {formations.map((formation) => (
          <div key={formation.id} className="formation-card">
            <h3>{formation.title}</h3>
            <h4>{formation.institution}</h4>
            <p className="date">
              {new Date(formation.start_date).toLocaleDateString()} - 
              {formation.end_date ? new Date(formation.end_date).toLocaleDateString() : 'Présent'}
            </p>
            <p className="description">{formation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formation; 