import { Button, Col, Image, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <Image
        className="profile-pic"
        src="./src/assets/profile-pic.jpg"
        alt="profile image"
        roundedCircle
      />
      <h1 className="changa-one-regular">Gerardo Mansilla</h1>
      <h4>Dev Web Full Stack Jr</h4>

      <Button
        href="https://github.com/pequege"
        target="_blank"
        className="mx-1 button-github"
        size="lg"
      >
        <i className="bi bi-github"></i>
        Github
      </Button>
      <Button
        href="https://www.linkedin.com/in/gerardo-mansilla/"
        target="_blank"
        className="mx-1"
        variant="primary"
        size="lg"
      >
        <i className="bi bi-linkedin"></i>
        LinkedIn
      </Button>
      <Row className="mt-3">
        <Col></Col>
        <Col xs={4}>
          <Button
            onClick={() => {
              const link = document.createElement('a');
              link.href = './public/pdf/cv2.pdf'; // Cambia el path según tu estructura
              link.download = 'cv2.pdf'; // Nombre del archivo al descargar
              link.click();
            }}
            className="mx-1"
            variant="danger"
            size="lg"
          >
            <i class="bi bi-cloud-download-fill"></i>
            My CV
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
