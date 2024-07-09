import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./layout/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container className="mt-3 my-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
