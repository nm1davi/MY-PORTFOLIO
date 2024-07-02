import React from "react";
import "../css/navbar.css";
import perfil from "../img/PERFIL.png";
import { useNavigate } from "react-router-dom";

function Navbar() { // Cambiado a mayúscula
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate("/"); // Navega a la página principal
    setTimeout(() => {
      // Espera un momento antes de desplazarse
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with id '${id}' not found.`);
      }
    }, 100); // Ajusta el tiempo si es necesario
  };
  
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo">
          <img src={perfil} alt="Imagen de Perfil" />
        </div>
        <div className="nombre">
          <span>NICOLAS DAVI</span>
        </div>
      </div>
      <div className="info-container">
        <ul>
          <li onClick={() => scrollToSection("me")}>HOME</li>
          <li onClick={() => scrollToSection("about")}>ABOUT</li>
          <li onClick={() => scrollToSection("projects")}>PROJECTS</li>
          <li onClick={() => scrollToSection("contact")}>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
