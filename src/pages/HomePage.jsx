import React from "react";
/* Importando imagenes  */
import imgProfile from "../assets/fotoPerfil.jpg";
import imgHTML5 from "../assets/tecnologias/html5logo.png";
import imgCSS from "../assets/tecnologias/css3logo.png";
import imgJava from "../assets/tecnologias/javascriptlogo.png";
import impReact from "../assets/tecnologias/reactjslogo.png";
import imgBoostrap from "../assets/tecnologias/boostraplogo.png";
import imgMongo from "../assets/tecnologias/mongodblogo.png";
import imgNode from "../assets/tecnologias/nodejslogo.png";
import imgGithub from "../assets/tecnologias/githublogo.png";

const HomePage = () => {
  return (
    <>
      <div className="home mb-4">
        {/* Card Profile */}
        <div className="containerCard">
          <div className="card">
            <div className="profile-image">
              <img id='imgProfile' src={imgProfile} alt="" srcset="" />
            </div>
            <div className="card-content">
              <h2 className="text-center">Martin Alan Rodríguez Fisher</h2>
              <p className="mb-4 text-center">
                <strong>Ing. En Sistemas Computacionales</strong>
                <br />
                Desarrollador web fullstack
                <br />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg> : alanfisher9703@gmail.com
                <br />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg> Banderilla, Veracruz.
              </p>
              <div className="icons">
              <a href="https://www.linkedin.com/in/martin-alan-rodriguez-fisher">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/martin-alan-rodriguez-fisher">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              </a>
            </div>
            </div>
            
          </div>
          
        </div>
        {/* END */}
        {/* Projects */}
        <div id="proyectos">
          <div className="container-fluid">
            <div id="proyecto" className="row d-flex justify-content-center align-items-center mt-2">
              <div id="proyecto1" className="col-lg-6 order-lg-2 text-white"></div>
              <div className="col-lg-6 order-lg-1 my-auto p-5 text-justify seccionText">
                <h2 className="text-center">LANDING DE NEGOCIO</h2>
                <p className="lead mb-0 text-justify">
                  Proyecto enfocado en la construcción de una página (landing)
                  para un negocio implementado las herramientas de desarrollo
                  web, html, css y boostrap 5 para la creación de este mismo.
                </p>
                <a
                  type="button"
                  className="btn btn-dark col-md-12 mt-2"
                  href="https://github.com/MartinAlanRF/Proyecyo1-Landing-de-negocio"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>{" "}
                  VER REPOSITORIO
                </a>
              </div>
            </div>
            <div
              id="proyecto"
              className="row d-flex justify-content-center align-items-center mt-2"
            >
              <div
                id="proyecto2"
                className="col-lg-6 order-lg-1 text-white seccionProducto2"
              ></div>
              <div className="col-lg-6 order-lg-2 my-auto p-5 text-justify seccionText">
                <h2 className="text-center">CRUD JAVASCRIPT</h2>
                <p className="lead mb-0">
                  Proyecto web enfocado en el desarrollo de una webApp-CRUD
                  mediante javascript con localStorage, HTML5, CSS3 y BOOSTRAP
                  5.
                </p>
                <a type="button" className="btn btn-dark col-md-12 mt-2" href="https://github.com/MartinAlanRF/MartinAlanRF.github.io">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>{" "}
                  VER REPOSITORIO
                </a>
              </div>
            </div>
            <div
              id="proyecto"
              className="row d-flex justify-content-center align-items-center mt-2"
            >
              <div id="proyecto3" className="col-lg-6 order-lg-2"></div>
              <div className="col-lg-6 order-lg-1 my-auto p-5 text-justify seccionText">
                <h2 className="text-center">DASHBOARD </h2>
                <p className="lead mb-0 text-p">
                  Proyecto web enfocando en la construicción de una webApp para
                  consumir una API con javascript utilizando las siguients
                  API's: Digimon API y Chart.js.Este proyecto fue desarrollo
                  enconjunto con compañeros del bootcamp.
                </p>
                <a type="button" className="btn btn-dark col-md-12 mt-2" href="https://github.com/GinTip/dashboard.github.io">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>{" "}
                  VER REPOSITORIO
                </a>
              </div>
            </div>

            <div
              id="proyecto"
              className="row d-flex justify-content-center align-items-center mt-2"
            >
              <div id="proyecto4" className="col-lg-6 order-lg-1 "></div>
              <div className="col-lg-6 order-lg-2 my-auto p-5 text-justify">
                <h2 className="text-center">Restaurant App </h2>
                <p className="lead mb-0">
                  Proyecto enfocado en construir una aplicación web para un
                  restaurante, mediante el uso de CSS, JS, ReactJS, Bootstrap5 y
                  FireBase
                </p>
                <a type="button" className="btn btn-dark col-md-12 mt-2" href="https://github.com/MartinAlanRF/Restaurant-App">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>{" "}
                  VER REPOSITORIO
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* END PROJECTS */}
        {/* TECHNOLOGIES */}
        <div className="container">
          <h1>TECNOLOGÍAS </h1>
          <div className="row mb-3">
            <div className=" containerTecImgs col-xl-3 col-sm-6 col-12">
              <div id="containerTituloh3" className="container text-center mt-1">
                <h3>HTML5</h3>
              </div>
              <img id="html5" src={imgHTML5} alt="logo html" className="mt-3" />
            </div>
            <div className="containerTecImgs col-xl-3 col-sm-6 col-12">
              <div id="containerTituloh3" className="container text-center mt-1">
                <h3>CSS</h3>
              </div>
              <img
                id="css"
                src={imgCSS}
                alt="logo css"
                srcset=""
                className="mt-3"
              />
            </div>
            <div className=" containerTecImgs col-xl-3 col-sm-6 col-12">
              <div id="containerTituloh3" className="container text-center mt-1">
                <h3>JAVASCRIPT</h3>
              </div>
              <img
                id="javascript"
                src={imgJava}
                alt="logo javascript"
                srcset=""
                className="mt-3"
              />
            </div>
            <div className="containerTecImgs col-xl-3 col-sm-6 col-12">
              <div id="containerTituloh3" className="container text-center mt-1">
                <h3>REACT JS</h3>
              </div>
              <img
                id="reactjs"
                src={impReact}
                alt="logo react js"
                srcset=""
                className="mt-3"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className=" containerTecImgs col-xl-3 col-sm-6 col-12">
              <div id="containerTituloh3" className="container text-center mt-1">
                <h3>BOOSTRAP</h3>
              </div>
              <img
                id="boostrap"
                src={imgBoostrap}
                alt="logo html"
                className="mt-3"
              />
            </div>
            <div className="containerTecImgs col-xl-3 col-sm-6 col-12">
              <div id="containerTituloh3" className="container text-center mt-1">
                <h3>GITHUB</h3>
              </div>
              <img
                id="github"
                src={imgGithub}
                alt="logo css"
                srcset=""
                className="mt-3"
              />
            </div>
            <div className=" containerTecImgs col-xl-3 col-sm-6 col-12">
              <div id="containerTituloh3" className="container text-center mt-1">
                <h3>MONGODB</h3>
              </div>
              <img
                id="mongo"
                src={imgMongo}
                alt="logo javascript"
                srcset=""
                className="mt-3"
              />
            </div>
            <div className=" containerTecImgs col-xl-3 col-sm-6 col-12">
              <div id="containerTituloh3" className="container text-center mt-1">
                <h3>NODEJS</h3>
              </div>
              <img
                id="node"
                src={imgNode}
                alt="logo javascript"
                srcset=""
                className="mt-3"
              />
            </div>
          </div>
        </div>
        {/* END TECHNOLOGIES */}
      </div>


    </>
  );
};

export default HomePage;
