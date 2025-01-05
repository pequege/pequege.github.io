import { Col, Image, Row } from "react-bootstrap"

export const About = () => {
  return (
    <Row>
      <Col>
        <Image src="https://picsum.photos/200" alt="profile image" roundedCircle />
        <h5>Gerardo Mansilla</h5>
        <p>Me encuentro en búsqueda de un puesto que me ofrezca la oportunidad de aplicar mis habilidades y experiencias, a la vez de actualizar mis conocimientos sobre las nuevas tendencias y tecnologias emergentes en el ámbito de IT.
        Me considero una persona con facilidad de aprendizaje, mucha predisposición y grandes cualidades para trabajar en equipo.</p>
      </Col>
      <Col>
        <h5>Skills</h5>
        <ul>
          <li>Stack Mern</li>
          <li>CSS Framework</li>
          <li>VCS</li>
          <li>Design</li>
        </ul>
        <h5>Languages</h5>
        <p>Inglés B1 <br />
        Instituto Aticana</p>
        <p>I’ve finished the English course and I’m currently learning German just for fun
        Check my duolingo profile</p>
      </Col>
    </Row>
  )
}
