import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../styles/style.css'; // Certifique-se de que o caminho está correto

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section contact-info">
            <h3>Contato</h3>
            <p>Email: carlosepgoncalves63@gmail.com</p>
            <p>Telefone: (51) 99438-0009</p>
            <p>Endereço: Porto Alegre</p>
          </div>
          <div className="footer-section">
            <h3>Links Úteis</h3>
            <a href="/">Home</a>
            <a href="/sobre-mim">Sobre Mim</a>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
              <a href="import project3 from '../assets/images/project3.png';" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Cink Sano. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
