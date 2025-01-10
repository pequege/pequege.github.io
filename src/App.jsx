import { Container, Tab, Tabs } from "react-bootstrap";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { useTranslation } from "react-i18next";

import { FormContacto } from "./components/FormContacto";
import "./App.css";
import { FabChangeLanguage } from "./components/FabChangeLanguage";

function App() {
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
        <FabChangeLanguage></FabChangeLanguage>
      </Container>
      <FormContacto></FormContacto>
    </>
  );
}

export default App;
