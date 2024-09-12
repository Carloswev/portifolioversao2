import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/style.css'; // Certifique-se de que o caminho está correto

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="header-title"></div>
      <nav className="header-nav">
      </nav>
    </header>
  );
};

export default Header;
