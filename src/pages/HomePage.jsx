import React from 'react'
/* Importando imagenes  */
import imgProfile from "../assets/fotoPerfil.jpg"
import imgHTML5 from "../assets/tecnologias/html5logo.png"
import imgCSS from "../assets/tecnologias/css3logo.png"
import imgJava from "../assets/tecnologias/javascriptlogo.png"
import impReact from "../assets/tecnologias/reactjslogo.png"
import imgBoostrap from "../assets/tecnologias/boostraplogo.png"
import imgMongo from "../assets/tecnologias/mongodblogo.png"
import imgNode from "../assets/tecnologias/nodejslogo.png"
import imgGithub from "../assets/tecnologias/githublogo.png"


const HomePage = () => {
  return (
    <>
    <div className="home mb-4">

      <div className="container d-flex justify-content-center mt-3">
        <div className="card mb-3" style={{maxWidth:800}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={imgProfile} className="img-fluid rounded-start img-rounded" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Alan Fisher</h5>
                    <p className="card-text">
                      Bienvenidos a mi portfoliom mi nombre es Martin Alan Rodríguez Fisher.
                    </p>
                    <p>
                      Soy Ingeniero en Sistemas Computacionales. Trabajo como desarrollador de sisteamas
                      de información en la Universidad Veracruzana desde mediados de 2022.
                      En donde manejo las ssiquietnes tecnologías: SqlServer, Visual Basic, ASP.net, C#,
                      javascript (jquery).
                    </p>
                    <p>
                      Estoy en preparación como Fullstack Developer, las tecnologías aprendias a destacar son:
                        HTML5, CSS, JAVASCRIPT, BOOSTRAP, MONGODB, REACTJS, NODEJS
                    </p>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <div id="proyectos">
        <div className="container-fluid">
          <div id='proyecto' className="row d-flex justify-content-center align-items-center mt-2">
              <div id='proyecto1' className="col-lg-6 order-lg-2 text-white"></div>
              <div className="col-lg-6 order-lg-1 my-auto p-5 text-justify seccionText">
                <h2 className='text-center'>LANDING DE NEGOCIO</h2>
                <p className="lead mb-0 text-justify">
                Proyecto enfocado en la construcción de una página (landing) para un 
                negocio implementado las herramientas de desarrollo web, html, css 
                y boostrap 5 para la creación de este mismo.
                </p>
                <div className="containerButtons col-sm-12 mt-3">
                  <a type="button" className="btn btn-dark" href="https://github.com/MartinAlanRF/Proyecyo1-Landing-de-negocio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>  VER REPOSITORIO
                  </a>
              </div>
              </div>

          </div>
          <div id='proyecto'  className="row d-flex justify-content-center align-items-center mt-2">
              <div id='proyecto2' className="col-lg-6 order-lg-1 text-white seccionProducto2"></div>
              <div className="col-lg-6 order-lg-2 my-auto p-5 text-justify seccionText">
                <h2 className='text-center'>CRUD JAVASCRIPT</h2>
                <p className="lead mb-0">
                  Proyecto web enfocado en el desarrollo de una webApp-CRUD  mediante javascript 
                  con localStorage, HTML5, CSS3 y BOOSTRAP 5.
                </p>
                <a href="https://github.com/MartinAlanRF/MartinAlanRF.github.io">
                  VER REPOSITORIO
                </a>
              </div>
          </div>
          <div id='proyecto'  className="row d-flex justify-content-center align-items-center mt-2">
              <div id='proyecto3' className="col-lg-6 order-lg-2"></div>
              <div  className="col-lg-6 order-lg-1 my-auto p-5 text-justify seccionText">
                <h2 className='text-center'>DASHBOARD </h2>
                <p className="lead mb-0 text-justify">
                  Proyecto web enfocando en la construicción de una webApp para consumir una API con javascript utilizando las siguients API's: 
                  Digimon API  y Chart.js.Este proyecto fue desarrollo enconjunto con compañeros del bootcamp.
                </p>
                <a href="https://github.com/GinTip/dashboard.github.io">
                  VER REPOSITORIO
                </a>
              </div>
          </div>

          <div id='proyecto'  className="row d-flex justify-content-center align-items-center mt-2">
              <div id='proyecto4' className="col-lg-6 order-lg-1 "></div>
              <div className="col-lg-6 order-lg-2 my-auto p-5 text-justify">
                <h2 className='text-center'>Restaurant App </h2>
                <p className="lead mb-0">
                Proyecto enfocado en construir una aplicación web para un restaurante, 
                mediante el uso de CSS, JS, ReactJS, Bootstrap5 y FireBase
                </p>
                <a href="https://github.com/MartinAlanRF/Restaurant-App">
                  VER REPOSITORIO
                </a>
              </div>
          </div>

        </div>
      </div>
    </div>

    {/* INICIO APARTADO TECNOLOGÍAS */}
    <div className="container">
      <div className="row mb-3">
        <div  className=" containerTecImgs col-xl-3 col-sm-6 col-12">
          <div id="containerTituloh3" className="container text-center mt-1">
              <h3>
                HTML5
              </h3>
          </div>
          <img id="html5" src={imgHTML5} alt="logo html" className='mt-3' />
        </div>
        <div className="containerTecImgs col-xl-3 col-sm-6 col-12">
        <div id="containerTituloh3" className="container text-center mt-1">
              <h3>
                CSS
              </h3>
          </div>
          <img id='css' src={imgCSS} alt="logo css" srcset="" className='mt-3' />
        </div>
        <div className=" containerTecImgs col-xl-3 col-sm-6 col-12">
          <div id="containerTituloh3" className="container text-center mt-1">
              <h3>
                JAVASCRIPT
              </h3>
          </div>
          <img id='javascript' src={imgJava} alt="logo javascript" srcset="" className='mt-3' />
        </div>
        <div className="containerTecImgs col-xl-3 col-sm-6 col-12">
        <div id="containerTituloh3" className="container text-center mt-1">
              <h3>
                REACT JS
              </h3>
          </div>
          <img id='reactjs' src={impReact} alt="logo react js" srcset="" className='mt-3'/>
        </div>
      </div>
      <div className="row mb-5">
        <div  className=" containerTecImgs col-xl-3 col-sm-6 col-12">
          <div id="containerTituloh3" className="container text-center mt-1">
              <h3>
                BOOSTRAP
              </h3>
          </div>
          <img id="boostrap" src={imgBoostrap} alt="logo html" className='mt-3' />
        </div>
        <div className="containerTecImgs col-xl-3 col-sm-6 col-12">
        <div id="containerTituloh3" className="container text-center mt-1">
              <h3>
                GITHUB
              </h3>
          </div>
          <img id='github' src={imgGithub} alt="logo css" srcset="" className='mt-3' />
        </div>
        <div className=" containerTecImgs col-xl-3 col-sm-6 col-12">
          <div id="containerTituloh3" className="container text-center mt-1">
              <h3>
                MONGODB
              </h3>
          </div>
          <img id='mongo' src={imgMongo} alt="logo javascript" srcset="" className='mt-3' />
        </div>
        <div className=" containerTecImgs col-xl-3 col-sm-6 col-12">
          <div id="containerTituloh3" className="container text-center mt-1">
              <h3>
                NODEJS
              </h3>
          </div>
          <img id='node' src={imgNode} alt="logo javascript" srcset="" className='mt-3' />
        </div>
      </div>
    </div>
      {/* TERMINA APARTADO DE TECNOLOGÍASS */}  
    </>
  )
}

export default HomePage