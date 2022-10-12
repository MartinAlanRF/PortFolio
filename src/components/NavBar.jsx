import React from "react";
/* Importando NavLink para poder navegar entre rutas dando un click */
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className=" mx-auto navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
    <div className="container">
      <NavLink to='/' className='navbar-brand'>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-briefcase me-2 mb-1" viewBox="0 0 16 16">
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
        </svg>
          Porfolio        
      </NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#menuResponsive"  aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="menuResponsive">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
{/*             <NavLink
              end
                to="/"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
              INICIO
            </NavLink> */}
            <a className="nav-link active" href="#profile">
              INICIO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link "  href="#projects">
              PROYECTOS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#technologies">
                TECNOLOGÍAS
              </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  );
};

export default NavBar;
