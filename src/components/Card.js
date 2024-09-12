import React from 'react';
import '../styles/style.css';  // Caminho ajustado para apontar para a pasta correta

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
