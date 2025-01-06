import "./App.css";
import { Container, Tab, Tabs } from "react-bootstrap";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Container fluid>
        <Tabs
          defaultActiveKey="home"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <Home></Home>
          </Tab>
          <Tab eventKey="about" title="About">
            <About></About>
          </Tab>
          <Tab eventKey="work" title="Work">
            <Work></Work>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default App;
