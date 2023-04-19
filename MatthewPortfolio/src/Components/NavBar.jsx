import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
      <Navbar expand="lg" sticky="top" bg="dark" variant='dark'>   
        <Container>
          <div className="navbar-margin">
          <Navbar.Brand href="#home">Matthew MacNeil</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;