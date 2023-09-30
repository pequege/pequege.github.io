import { Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import imagen_perfil from './assets/user-profile-icon.webp'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

function App() {
  return (
    <>
      <Container className='text-light text-center p-3 mt-5'>
        <h1>Gerardo E. Mansilla</h1>
        <h2 className='opacity-75'>Desarrollador Web <span className='opacity-90'>Full Stack </span></h2>
        <Row className='my-4 pe-0'>
          <Col md={6} >
            <img src={imagen_perfil} className='img-fluid rounded-top w-50'/>
          </Col>
          <Col md={6}>
            <figure className='mx-2 text-justify'>
              <blockquote className='blockquote lead text-start'>
                <p>
                Me encuentro en búsqueda de un puesto que me ofrezca la oportunidad de aplicar mis
                habilidades y experiencias, a la vez de actualizar mis conocimientos sobre las nuevas
                tendencias y tecnologias emergentes en el ámbito de IT.
                </p>
                <p>
                Me considero una persona
                con facilidad de aprendizaje, mucha predisposición y grandes cualidades para trabajar
                en equipo. 
                {/* Cuento con conocimientos sobre análisis de requerimientos de precesos y
                  representación de modelos mediante diagramas. */}
                </p>
              </blockquote>
              <figcaption class="blockquote-footer text-end">
                <strong>No</strong> Generado por <cite title="Source Title">ChatGPT</cite>
              </figcaption>
            </figure>
          </Col>
        </Row>
        <Container className='line'>
          <section className='animate__flipInY animate__delay-1s animate__animated'>
            <Row>
              <Col md={6}>
                <Card bg='dark' text='light' className='p-2'>
                  <Card.Title>
                    <h2>About Me</h2>
                  </Card.Title>
                  <Card.Body>
                    <ul className='list-unstyled text-end mx-4'>
                      <li className='ms-2'>31 años <span className='opacity-50'> 05/03/92</span></li>
                      <li className='ms-2'>Argentino <span className='opacity-50'>(San Miguel de Tucumán)</span></li>
                      <li className='ms-2'>Estudiante <span className='opacity-75'> de Ingeniería en Sistemas De Información</span> <span className='opacity-50'>(3er año)</span></li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          <section className='animate__flipInY animate__delay-2s animate__animated'>
            <Row>
              <Col md={6} className='ms-auto me-0'>
                <Card bg='dark' text='light' className='p-2'>
                  <Card.Title>
                    <h2>Formación Académica</h2>
                  </Card.Title>
                  <Card.Body>
                  <ul className='list-unstyled mx-4 text-start'>
                    <li className='text-decoration-none'>Universidad Tecnológica Nacional<span className='opacity-50'> - Facultar Regional Tucumán</span></li>
                    <li>Inst. Carlos Pellegrini<span className='opacity-50'> - Secundario</span></li>
                    <li></li>
                  </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          <section className='animate__flipInY animate__delay-3s animate__animated'>
            <Row>
              <Col md={6}>
                <Card bg='dark' text='light' className='p-2'>
                  <Card.Title>
                    <h2>Cursos Realizados</h2>
                  </Card.Title>
                  <Card.Body>
                  <ul className='list-unstyled mx-4 text-end'>
                    <li>Full Stack Dev MERN - Rolling Code</li>
                    <li>Inglés 4th Adults Instituto Aticana</li>
                    <li>Git & GitHub Insignia</li>
                    <li>Web Studio 2014 Insignia</li>
                    <li>HTML5, CSS3 y Frameworks UTN - FRT</li>
                    <li>Inglés Instituto Anglo</li>
                  </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          <section className='animate__flipInY animate__delay-4s animate__animated'>
            <Row>
              <Col md={6} className='ms-auto me-0'>
                <Card bg='dark' text='light' className='p-2'>
                  <Card.Title>
                    <h2>Conocimientos informales</h2>
                  </Card.Title>
                  <Card.Body>
                  <ul className='list-unstyled mx-4 text-start'>
                    <li>Diseño gráfico (Photoshop & Illustrator)</li>
                    <li>Programación Orientada a Objetos (Java)</li>
                    <li>Edición de video (vegas Pro)</li>
                  </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
