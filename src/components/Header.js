import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link, Routes, Route } from 'react-router-dom';

const Header = ({name, role}) => {
    return (
      <div className="mx-auto">
        <Navbar bg="none" variant="light">
          <Nav className="d-flex justify-content-between w-100">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link
              href="/assets/files/SiaMajid-resume.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
           
          </Nav>
        </Navbar>
        <div className="mx-auto">
          <h1 className="display-1">
            <Nav.Link as={Link} to="/">
              {name}
            </Nav.Link>
          </h1>
          <h2>{role}</h2>
        </div>
      </div>
    );
}

export default Header;

