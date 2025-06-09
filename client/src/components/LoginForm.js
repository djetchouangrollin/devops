import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirection vers l'interface d'administration Django
        window.location.href = 'http://localhost/admin/';
      } else {
        setError(data.message || 'Erreur de connexion');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Nom d'utilisateur"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Mot de passe"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginForm; 