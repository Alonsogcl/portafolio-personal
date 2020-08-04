import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import { Parallax } from 'react-parallax'
import { Link, animateScroll as scroll } from 'react-scroll'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import slide1 from './static/img/carousel1.png'
import slide2 from './static/img/carousel2.png'
import slide3 from './static/img/carousel3.jpg'

import preview1 from './static/img/preview1.png'
import preview2 from './static/img/preview2.png'
import preview3 from './static/img/preview3.png'

import logofedoers from './static/img/logo-fedoers.png'
import logoxpectre from './static/img/logo-xpectre.png'

function App() {
  return (
    <div className="App">
      <Parallax
        bgImage={require('./static/img/fondo1.jpg')}
        bgImageAlt="Front End Doers"
        strength={850} //que tanto se va a desplazar mi imagen desacoplar
      >
        <Container style={{ height: '100vh' }}>
          <Row className="h-100">
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
              <div className="heading-wrapper p-5">
                <h1 className="mb-4 text-center text-md-left">Front End Doers</h1>
                <h3 className="d-flex align-items-center text-center text-md-left">
                  <img src={logofedoers} alt="FrontEndDoers" />
                  <span className="ml-4">Lead Teacher</span>
                </h3>
                <h3 clasName="d-flex align-items-center text-center text-md-left">
                  <img src={logoxpectre}  alt="XpectreLabs" />
                  <span className="ml-4">Full-Stack Developer</span>
                </h3>
                <div className="btn-wrapper d-flex flex-column justify-content-between mt-4 flex-md-row">
                  <Link to="about" smooth={true}>
                    <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Acerca de mí</div>
                  </Link>
                  <Link to="projects" smooth={true}>
                    <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Proyectos</div>
                  </Link>
                    <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Contáctame</div>                 
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Parallax>
      <Container id="about" className="h-100-vh">
        <Row className="h-100">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h3 className="mb-5">Sobre mí</h3>
            <p>Occaecat culpa consectetur irure veniam fugiat reprehenderit consectetur esse
            est Lorem ut incididunt cupidatat ex. Labore veniam in anim aliqua et amet et
            labore magna. Reprehenderit sit pariatur commodo in nulla excepteur culpa aliquip
            adipisicing et ullamco consequat. Nulla consequat ipsum amet irure aliqua voluptate
            voluptate non consectetur dolor enim proident occaecat. Minim duis et deserunt
            veniam sint occaecat magna ad est ullamco enim. Fugiat qui commodo ut irure
            velit consequat excepteur et labore.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container fluid id="projects" className="bg-gray h-100-vh">
        <Row>
          <Col xs="12">
            <Container>
              <Row>
                <Col xs="12">
                  <h1 className="text-center my-5">Proyectos</h1>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="4">
                  <div className="project-wrapper">
                    <a href="" target="_blank">
                      <img className="w-100" src={preview1} target="_blank" alt="" />
                      <div className="project-caption">
                        <h3 className="project-title text-center">Virtual Website</h3>
                        <h4 className="project-technologies text-center">HTML, CSS, JQuery</h4>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col xs="12" md="4">
                  <div className="project-wrapper">
                    <a href="" target="_blank">
                      <img className="w-100" src={preview2} target="_blank" alt="" />
                      <div className="project-caption">
                        <h3 className="project-title text-center">Virtual Website</h3>
                        <h4 className="project-technologies text-center">HTML, CSS, JQuery</h4>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col xs="12" md="4">
                  <div className="project-wrapper">
                    <a href="" target="_blank">
                      <img className="w-100" src={preview3} target="_blank" alt="" />
                      <div className="project-caption">
                        <h3 className="project-title text-center">Virtual Website</h3>
                        <h4 className="project-technologies text-center">HTML, CSS, JQuery</h4>
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
