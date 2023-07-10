import { Container, ProgressBar } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';
import imagen_perfil from './assets/user-profile-icon.webp'

function App() {
  return (
    <>
      <Container className='text-light text-center'>
        <img src={imagen_perfil} className='img-fluid rounded-circle w-25'/>
        <h1>Gerardo E. Mansilla</h1>
        <h2 className='opacity-75'>Web Developer</h2>
        <figure className='mx-2 text-justify'>
          <blockquote className='blockquote lead'>
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
        <section>
          <h2>About Me</h2>
          <ul className='list-unstyled text-start mx-4'>
            <li className='ms-2'>31 años <span className='opacity-50'> 05/03/92</span></li>
            <li className='ms-2'>Argentino <span className='opacity-50'>(San Miguel de Tucumán)</span></li>
            <li className='ms-2'>Estudiante <span className='opacity-75'> de Ingeniería en Sistemas De Información</span> <span className='opacity-50'>(3er año)</span></li>
          </ul>
        </section>
        <section>
          <h2>Formación Académica</h2>
          <ul className='list-unstyled mx-4'>
            <li className='text-decoration-none'>Universidad Tecnológica Nacional<span className='opacity-50'> - Facultar Regional Tucumán</span></li>
            <li>Inst. Carlos Pellegrini<span className='opacity-50'> - Secundario</span></li>
            <li></li>
          </ul>
        </section>
        <section>
          <h2>Cursos Realizados</h2>
          <ul>
            <li className='opacity-75'>Full Stack Dev MERN - Rolling Code <ProgressBar variant='success' now={80}></ProgressBar></li>
            <li>Inglés 4th Adults Instituto Aticana</li>
            <li>Git & GitHub Insignia</li>
            <li>Web Studio 2014 Insignia</li>
            <li>HTML5, CSS3 y Frameworks UTN - FRT</li>
            <li>Inglés Instituto Anglo</li>
          </ul>
        </section>
        <section>
          <h2>Conocimientos informales</h2>
          <ul>
            <li>Inglés Instituto Anglo</li>
            <li>Edición de video (vegas Pro)</li>
            <li>Diseño gráfico (Photoshop & Illustrator)</li>
            <li>Programación Orientada a Objetos (Java)</li>
          </ul>
        </section>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
