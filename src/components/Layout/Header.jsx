import React from "react";
import { useRef } from "react";
import "../../App.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo-white2.png";

export default function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="nav-header">
      <a href="#" class="footer-logo">
        <img src={logo} alt="Logo Dr. Thiago" className="nav-logo" />
      </a>
      <nav className="navbar" ref={navRef}>
        <a
          onClick={() => {
            showNavbar();
            const heroRef = document.querySelector("#hero");
            heroRef.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            showNavbar();
            const aboutRef = document.querySelector("#about");
            aboutRef.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Sobre mim
        </a>
        <a
          onClick={() => {
            showNavbar();
            const clinicRef = document.querySelector("#clinic");
            clinicRef.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Nosso espaço
        </a>
        <a
          onClick={() => {
            showNavbar();
            const treatmentRef = document.querySelector("#treatment");
            treatmentRef.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Tratamentos
        </a>
        <a
          onClick={() => {
            showNavbar();
            const mapRef = document.querySelector("#map");
            mapRef.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contato
        </a>
        <a
          href="https://www.doctoralia.com.br/thiago-queiroz-brandao/psiquiatra/sao-jose-do-rio-preto"
          target="_blank"
        >
          Agendar consulta (Online)
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
