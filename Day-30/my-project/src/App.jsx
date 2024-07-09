import Taha from "./components/Taha";
import Test from "./components/User";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <div>
        <h1>Hello</h1>
        <Taha price="1 Lac" />
        <Taha price="2 Lac" />
        <Taha price="3 Lac" />
        {/* <Button variant="primary">Primary</Button> */}
      </div>
      <Container style={{ backgroundColor: "yellow" }}>
        <Row>
          {/* <Col lg={6} style={{backgroundColor:"green"}}>
        <h1>col 1</h1>
        </Col>
        <Col  lg={6} style={{backgroundColor:"yellow"}}>
        <h1>col 2</h1>
        </Col> */}
          <Col lg={12}>
            <Test />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
