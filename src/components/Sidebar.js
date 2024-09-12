import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import '../styles/style.css'; 

import logoImage from '../assets/images/emojis.png';  // Importe a imagem

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : 'hidden'}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <div className="sidebar-logo">
          <img src={logoImage} alt="Logo" />  {/* Use a variável importada */}
        </div>
      </div>
      <nav className="sidebar-menu">
        <Link to="/" className="sidebar-link" onClick={toggleSidebar}>
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/sobre-mim" className="sidebar-link" onClick={toggleSidebar}>
          <FaUser className="icon" /> Sobre Mim
        </Link>
      </nav>
      <div className="sidebar-footer">
        <p>© 2024 Meu Portfólio</p>
      </div>
    </aside>
  );
};

export default Sidebar;
