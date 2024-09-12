import React from 'react';
import '../styles/about.css';  

import aboutImage from '../assets/images/eu.jpg';  

const SobreMim = () => {
  return (
    <div className="about-container">
      <main className="about-content">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-section">
          <img
            className="about-image"
            src={aboutImage}  
            alt="Minha Imagem"
          />
          <div className="about-text">
            <p>
              Olá! Eu sou Carlos, tenho 18 anos, já fiz vários cursos e dominei diversos frameworks e linguagens de programação. Sou um desenvolvedor focado em aprender cada vez mais.
              Com experiência em back-end e front-end, eu sempre busco aprender e aplicar novos conhecimentos para criar novos projetos me desafiando.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SobreMim;
