import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
    <Navbar sticky="top" bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Matthew MacNeil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;