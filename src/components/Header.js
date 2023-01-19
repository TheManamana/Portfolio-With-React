import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import "./style.css";

export default function Navigate() {
  return (
    <Navbar id="navy" bg="" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Allen Robson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="text-light" to="/">
                <h6>About Me</h6>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-light" to="/portfolio">
                <h6>Portfolio</h6>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-light" to="/contact">
                <h6>Contact Me</h6>
              </Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}