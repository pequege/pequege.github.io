import "./App.css";
import { Button, Container, Modal, OverlayTrigger, Tab, Tabs, Tooltip } from "react-bootstrap";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Say Hello!
    </Tooltip>
  );

  return (
    <>
      <Container>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button
            className="btn-danger rounded-circle btn-message"
            onClick={handleShow}
          >
            <i class="bi bi-chat-right-text-fill"></i>
          </Button>
        </OverlayTrigger>
        <Tabs defaultActiveKey="home" className="mb-3">
          <Tab eventKey="home" title="Home">
            <Home></Home>
          </Tab>
          <Tab eventKey="about" title="About">
            <About></About>
          </Tab>
          <Tab
            eventKey="work"
            title="Work"
            className="d-flex justify-content-center"
          >
            <Work></Work>
          </Tab>
        </Tabs>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
