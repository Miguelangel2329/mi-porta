// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => (
  <section className="home">
    <div className="intro">
      <p>Hola, Bienvenidos a mi portafolio, ¡Soy un Programador full-stack developer!</p>
    </div>
    <div className="profile-section">
      <div className="profile-details">
        <h1>Miguel Angel J.</h1>
        <h2>Sañez Huaman</h2>
        <p className="description">Digital Craftsman ( Artist / Developer / Designer )</p>
      </div>
      <div className="profile-pic">
        <img src="https://th.bing.com/th/id/OIP.ik0XI5uwntrXjky9eKkBEAAAAA?rs=1&pid=ImgDetMain" alt="Profile Pic-hell" />
      </div>
    </div>
    <div className="work">
      <h3>Informacion</h3>
      <p>
        Soy un Estudiante de Ingeniería de Sistemas y Desarrollador Full- Stack con una profunda pasión por innovar en el ámbito
        tecnológico. Mi formación me ha dotado de una base sólida en el diseño y desarrollo de aplicaciones web, abarcando tanto
        el frontend como el backend. Tengo un dominio avanzado de tecnologías clave como HTML, CSS, JavaScript, React y Node.js,
        lo que me permite crear interfaces de usuario atractivas y funcionales, así como implementar servidores y APIs robustos
        para soluciones completas y escalables.your experience, and any other relevant information.
      </p>
    </div>
    <Link to="/projects" className="portfolio-button">
      Mis Proyectos
    </Link>
    <br />
    <section className="work">
          <h2>EDUCACION</h2>
          <div className="education-details">
            <p><strong>UNIVERSIDAD NACIONAL DE CAÑETE</strong></p>
            <p>Estudiante del VIII Ciclo (2024 - PRESENT)</p>
            <ul>
              <li>Dominio de algoritmos y estructuras de datos para la resolución eficaz de problemas y el desarrollo de código optimizado y mantenible.</li><br />
              <li>Conocimientos avanzados en arquitectura de redes, protocolos de comunicación, ciberseguridad y gestión de redes.</li><br />
              <li>Experiencia en diseño e implementación de bases de datos, dominio de SQL y comprensión profunda de transacciones y normalización de datos.</li><br />
              <li>Habilidad en diseño y desarrollo de aplicaciones web con uso de HTML, CSS, JavaScript y frameworks modernos como React.</li><br />
              <li>Capacitado para convertir requisitos del cliente en especificaciones técnicas precisas, esenciales para el éxito de proyectos en ingeniería de sistemas.</li>
            </ul>
          </div>
    </section> 
    <Link to="/certificates" className="portfolio-button">
      Mis Certificados
    </Link>
    <br /> 
    <section className="work">
      <div className="education-details">
        <p><strong>Academlo </strong></p>
        <p>Programador web Full-Stack (2023 - PRESENT)</p>
        <ul>
          <li>Especialista en desarrollo de interfaces de usuario interactivas y responsivas con React, optimizando la eficiencia mediante componentes reutilizables.</li><br />
          <li>Experto en la implementación de enrutadores como React Router para una navegación fluida en aplicaciones web.</li><br />
          <li>Habilidad para integrar eficazmente el manejo del estado en aplicaciones con herramientas avanzadas como Redux y Context API.</li><br />
          <li>Experiencia en la integración de APIs utilizando React, empleando librerías como Axios y Fetch para la gestión óptima de solicitudes HTTP.</li><br />
          <li>Diseñador de interfaces dinámicas que reflejan datos en tiempo real, mejorando la interactividad y experiencia del usuario.</li>
        </ul>
      </div>
    </section>  
    <Link to="/certificates" className="portfolio-button">
      Mis Certificados
    </Link>
<br />        
  </section>
);

export default Home;
