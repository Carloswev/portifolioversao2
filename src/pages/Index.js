import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';

const Index = () => {
  return (
    <div>
      <main className="main-content">
        <h2 className="section-title">Meus Projetos</h2>
        <Carousel className="project-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={project1}
              alt="Projeto 1"
            />
            <Carousel.Caption>
              <h3>Projeto 1</h3>
              <p>Descrição breve do Projeto 1.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={project2}
              alt="Projeto 2"
            />
            <Carousel.Caption>
              <h3>Projeto 2</h3>
              <p>Descrição breve do Projeto 2.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={project3}
              alt="Projeto 3"
            />
            <Carousel.Caption>
              <h3>Projeto 3</h3>
              <p>Descrição breve do Projeto 3.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="projects">
          <ProjectCard
            image={project2}
            title="Projeto1"
            description="Esse projeto é para um aplicativo que visa ajudar microemprededores no controle de estoque."
          />
          <ProjectCard
            image={project4}
            title="Projeto2"
            description="Projeto para um site de vendas de produtos eletrônicos."
          />
          <ProjectCard
            image={project5}
            title="Projeto3"
            description="Um site sorteador de números, para usos em jogos..."
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
