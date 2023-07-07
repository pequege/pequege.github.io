import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Container>
        <img src="https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg" className='img-fluid rounded-circle'/>
        <h1>Gerardo E. Mansilla</h1>
        <h2>31 años <span className='text-secondary'> 05/03/92</span></h2>
        <figure className='text-end'>
          <blockquote className='blockquote'>
            Me encuentro en búsqueda de un puesto que me ofrezca la oportunidad de aplicar mis
            habilidades y experiencias, a la vez de actualizar mis conocimientos sobre las nuevas
            tendencias y tecnologias emergentes en el ámbito de IT. Me considero una persona
            con facilidad de aprendizaje, mucha predisposición y grandes cualidades para trabajar
            en equipo. Cuento con conocimientos sobre análisis de requerimientos de precesos y
            representación de modelos mediante diagramas.
          </blockquote>
          <figcaption class="blockquote-footer">
            <strong>No</strong> Generado por <cite title="Source Title">ChatGPT</cite>
          </figcaption>
        </figure>
        <section>
          <h2>About Me</h2>
          <ul>
            <li>Argentino (San Miguel de Tucumán)</li>
            <li>Estudiante de Ingeniería en Sistemas De Información (3er año)</li>
            <li></li>
          </ul>
        </section>
        <section>
          <h2>Formación Académica</h2>
          <ul>
            <li className='text-decoration-none'><span className='text-active'>Universidad</span> UTN - Facultar Regional Tucumán</li>
            <li><span className='text-active'>Secundario</span> Inst. Carlos Pellegrini</li>
            <li></li>
          </ul>
        </section>
        <section>
          <h2>Cursos Realizados</h2>
          <ul>
            <li>Inglés Instituto Anglo</li>
            <li>Inglés 4th Adults Instituto Aticana</li>
            <li>Web Studio 2014 Insignia</li>
            <li>HTML5, CSS3 y Frameworks UTN - FRT</li>
            <li>Git & GitHub Insignia</li>
          </ul>
        </section>
        <section>
          <h2>conocimientos informales</h2>
          <ul>
            <li>Cursos realizados</li>
            <li>Inglés Instituto Anglo</li>
            <li>Edición de video (vegas Pro)</li>
            <li>Diseño gráfico (Photoshop & Illustrator)</li>
            <li>Programación Orientada a Objetos (Java)</li>
          </ul>
        </section>
      </Container>
      <footer className='bg-dark text-light container-fluid p-3'>
        <div className='d-flex justify-content-center'>
          <i class="bi bi-github m-2 fs-2"></i>
          <i class="bi bi-linkedin m-2 fs-2"></i>
        </div>
      </footer>
    </>
  )
}

export default App
