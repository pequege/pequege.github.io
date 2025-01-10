import CommentIcon from "@mui/icons-material/Comment";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import { Button, Container, Form, Modal, Tab, Tabs } from "react-bootstrap";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { SpeedDial, SpeedDialAction, Typography } from "@mui/material";
import TranslateIcon from '@mui/icons-material/Translate';

import { grey } from "@mui/material/colors";

function App() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  /* boton lenguaje */
  const colorFabLenguaje = grey[900];
  const actions = [
    { icon: <Typography>🇦🇷</Typography>, name: 'Español' },
    { icon: <Typography>🇺🇸</Typography>, name: 'English' },
  ];

  return (
    <>
      <Container>
        <Tabs defaultActiveKey="home" className="mb-3">
          <Tab eventKey="home" title="Home">
            <Home></Home>
          </Tab>
          <Tab eventKey="about" title="About">
            <About useTranslation={useTranslation}></About>
          </Tab>
          <Tab eventKey="work" title="Work">
            <Work></Work>
          </Tab>
        </Tabs>
        <div className="d-none">
          <h3>Current Language: {currentLanguage}</h3>
          <button type="button" onClick={handleChangeLanguage}>
            Change Language
          </button>
        </div>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "fixed", bottom: 16, left: 16 }}
          icon={<TranslateIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              sx={{background: `${colorFabLenguaje}`}}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
        <Tooltip title="Say Hello!" placement="top-end">
          <Fab
            color="secondary"
            aria-label="contact"
            className="fab-right"
            onClick={() => {
              handleShow();
            }}
          >
            <CommentIcon />
          </Fab>
        </Tooltip>
      </Container>
      <Modal show={show} onHide={handleClose} data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title className="changa-one-regular">
            Thanks for taking the time to reach out. How can I help you today?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Your email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label >Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Button
                className="float-right mt-3"
                variant="primary"
                onClick={handleClose}
              >
                <i className="bi bi-send-fill m-1"></i> Send
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
