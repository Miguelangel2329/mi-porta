import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Project 1: Rick y Morthy',
    description: 'TECNOLOGIAS UTILIZADAS Utilizado para la construcción de la interfaz de usuario dinámica y modular. Redux: Implementado para la gestión eficiente del estado global de la aplicación. React Router: Usado para la navegación en la aplicación, permitiendo una experiencia de navegación fluida sin recargas de página. Axios: Empleado para realizar las solicitudes HTTP a la API de "Rick y Morty", obteniendo y mostrando los datos en tiempo real. CSS: Utilizado para el diseño y la estilización de la interfaz, asegurando que la aplicación sea atractiva y fácil de usar.',
    url: 'https://github.com/Miguelangel2329/entregable-03.git',
    imageUrl: process.env.PUBLIC_URL + '/img/rick.png',
    visulurl:'https://rick-and-morty-3-entregable.netlify.app/'
  },
  {
    title: 'Project 2: POKEDEX',
    description: 'Funcionalidades Clave Exploración de Pokémon: Los usuarios pueden navegar por una lista de Pokémon y ver información detallada de cada uno. Búsqueda por Nombre y Tipo: Los usuarios pueden buscar Pokémon específicos por su nombre o tipo, facilitando la búsqueda de información. Detalles de Pokémon: Cada Pokémon tiene una página de detalles que muestra información adicional como estadísticas y habilidades.',
    url: 'https://github.com/Miguelangel2329/entregable-05-pokedex.git',
    imageUrl: process.env.PUBLIC_URL + '/img/poke.png',
    visulurl:'https://tranquil-faloodeh-5fe905.netlify.app/'
  },
  {
    title: 'Project 3: Como esta el clima?',
    description: 'Funcionalidades Clave: Búsqueda de Clima: Los usuarios pueden ingresar el nombre de una ciudad para obtener información meteorológica actualizada de esa ubicación. Información Detallada del Clima: La aplicación muestra detalles como la temperatura actual, las condiciones climáticas, la velocidad del viento, la humedad y la presión atmosférica. Actualización en Tiempo Real: Los datos meteorológicos se obtienen y se muestran en tiempo real, asegurando que la información presentada sea precisa y actualizada.',
    url: 'https://github.com/Miguelangel2329/entregable-02-react.git',
    imageUrl: process.env.PUBLIC_URL + '/img/clima.png',
    visulurl:'https://entregable-02-react-miguelangel.netlify.app/'
  },
  {
    title: 'Project 1: Carrito de Compras',
    description: 'Funcionalidades Clave: Exploración de Productos: Los usuarios pueden navegar por una variedad de productos disponibles y ver detalles específicos de cada uno. Gestión de Carrito: Permite a los usuarios agregar y remover productos de su carrito de compras, así como ver un resumen del total de su compra. Navegación Intuitiva: La aplicación ofrece una navegación fácil y fluida, permitiendo a los usuarios moverse entre diferentes secciones sin recargar la página. Diseño Responsivo: El diseño adaptativo asegura que la aplicación funcione perfectamente en dispositivos móviles y de escritorio, proporcionando una experiencia de usuario consistente.',
    url: 'https://github.com/Miguelangel2329/carrito-compra-2.git',
    imageUrl: process.env.PUBLIC_URL + '/img/card.png',
    visulurl:'https://miguel-carrito-comprass.netlify.app/'
  },
  {
    title: 'Project 2: Frases diarias',
    description: 'Funcionalidades Clave: Generación de Frases: La aplicación muestra una nueva frase motivacional cada vez que se recarga la página, ofreciendo contenido fresco y inspirador diariamente. Compartir Frases: Los usuarios pueden compartir las frases motivacionales a través de redes sociales o copiando el texto. Interfaz Atractiva: El diseño visual es agradable y está orientado a mejorar la experiencia del usuario, haciéndola más atractiva y fácil de usar.',
    url: 'https://github.com/Miguelangel2329/entregable-01-react.git',
    imageUrl: process.env.PUBLIC_URL + '/img/flase.png',
    visulurl:'https://luminous-taiyaki-9d9305.netlify.app/'
  },
  {
    title: 'Project 3: Galaxy phrase',
    description: 'Funcionalidades Clave: API de Frases: Utilizada para obtener frases motivacionales de manera dinámica, garantizando contenido actualizado y variado. Efectos Visuales: Implementados para realzar la experiencia del usuario con temas y efectos galácticos, haciendo la aplicación más inmersiva y atractiva. Generación de Frases: La aplicación muestra una nueva frase motivacional cada vez que se recarga la página, ofreciendo contenido fresco y motivador diariamente. Tema Galáctico: Los efectos y diseños galácticos crean un entorno visualmente atractivo que mejora la experiencia del usuario. Interfaz Amigable: El diseño intuitivo y responsivo asegura que los usuarios puedan navegar y disfrutar de la aplicación tanto en dispositivos móviles como en computadoras de escritorio.',
    url: 'https://github.com/Miguelangel2329/entregable-01.git',
    imageUrl: process.env.PUBLIC_URL + '/img/galaxi.png',
    visulurl:'https://cozy-sherbet-462bf6.netlify.app/'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
